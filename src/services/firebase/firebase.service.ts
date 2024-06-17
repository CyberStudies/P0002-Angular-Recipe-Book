import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  query,
  where,
  addDoc,
} from 'firebase/firestore';
import { Recipe, Section } from '@/models/recipe.model';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firebaseConfig = {
    apiKey: 'AIzaSyBEF0GKLWYueeDFRiytKh8ByrO6Lo9mxG8',
    authDomain: 'devdinner-ba753.firebaseapp.com',
    projectId: 'devdinner-ba753',
    storageBucket: 'devdinner-ba753.appspot.com',
    messagingSenderId: '861359263381',
    appId: '1:861359263381:web:c535d0f66b07d8c6cbd59c',
    measurementId: 'G-E9SYZ3FFYG',
  };
  private app = initializeApp(this.firebaseConfig);
  private db = getFirestore(this.app);

  async getRecipe(recipeId: string) {
    try {
      console.log('Fetching recipe with ID:', recipeId);
      const recipeRef = doc(this.db, 'Recipes', recipeId);
      const recipeSnapshot = await getDoc(recipeRef);
      if (recipeSnapshot.exists()) {
        const recipeData = recipeSnapshot.data() as Recipe;
        console.log('Recipe data:', recipeData);
        const sections = await this.getSections(recipeId);
        console.log('Fetched sections:', sections);
        return { ...recipeData, id: recipeSnapshot.id, sections };
      } else {
        console.log('No such recipe!');
        return undefined;
      }
    } catch (error) {
      console.error('Error fetching recipe:', error);
      return undefined;
    }
  }

  async getSections(recipeId: string) {
    try {
      console.log('Fetching sections for recipe with ID:', recipeId);
      const sectionsRef = collection(this.db, `Recipes/${recipeId}/Sections`);
      const sectionsSnapshot = await getDocs(sectionsRef);
      if (sectionsSnapshot.empty) {
        console.log('No sections found for recipe:', recipeId);
      }
      const sections = sectionsSnapshot.docs.map((doc) => {
        const data = doc.data();
        console.log('Section data:', data);
        const ingredients = data['ingredients'].map((ingredient: any) => ({
          kind: ingredient.kind,
          quantity: ingredient.quantity,
          name: ingredient.name,
        }));
        const preparationSteps = data['preparationSteps'];
        return {
          id: doc.id,
          name: data['name'],
          ingredients,
          preparationSteps,
        } as Section;
      });
      return sections;
    } catch (error) {
      console.error('Error fetching sections:', error);
      return [];
    }
  }

  private recipesSubject = new BehaviorSubject<Recipe[]>([]);
  recipes$ = this.recipesSubject.asObservable();

  async getAllRecipes() {
    try {
      const recipesRef = collection(this.db, 'Recipes');
      const recipesSnapshot = await getDocs(recipesRef);
      const recipes = await Promise.all(
        recipesSnapshot.docs.map(async (doc) => {
          const recipeId = doc.id;
          const recipeData = doc.data() as Recipe;
          const sections = await this.getSections(recipeId);
          return { ...recipeData, id: recipeId, sections };
        })
      );
      this.recipesSubject.next(recipes); // Update the BehaviorSubject with new data
    } catch (error) {
      console.error('Error fetching all recipes:', error);
      this.recipesSubject.next([]); // Emit an empty array on error
    }
  }
  async addRecipe(recipe: Recipe): Promise<string> {
    try {
      const recipesRef = collection(this.db, 'Recipes');
      const docRef = await addDoc(recipesRef, recipe);
      console.log('Document written with ID: ', docRef.id);

      // Add each section to the Sections subcollection
      for (let section of recipe.sections) {
        const sectionsRef = collection(docRef, 'Sections');
        await addDoc(sectionsRef, section);
      }

      return docRef.id; // return the auto-generated ID
    } catch (error) {
      console.error('Error adding document: ', error);
      throw error; // re-throw the error so it can be caught and handled by the caller
    }
  }

  //storage related

  async uploadFile(file: File): Promise<string> {
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress updates
        },
        (error) => {
          // Handle unsuccessful uploads
          reject(error);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  }
  getFirebaseApp() {
    return { app: this.app, db: this.db };
  }

  constructor() {
    this.getAllRecipes(); // Fetch data as soon as the service is instantiated
  }
}
