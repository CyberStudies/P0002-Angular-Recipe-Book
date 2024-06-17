import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, User } from 'firebase/auth';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';
import { FirebaseService } from '../firebase/firebase.service';
import { Subject } from 'rxjs';
import { doc, getDoc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth;
  userChanged = new Subject<User | null>();
  currentUser: User | null = null;
  app: any;
  db: any;

  constructor(private firebaseService: FirebaseService) {
    const { app, db } = this.firebaseService.getFirebaseApp();
    this.app = app;
    this.db = db;
    this.auth = getAuth();
    this.initializeUser();
  }

  async initializeUser() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.currentUser = user;
        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.currentUser = null;
        // Clear user data from localStorage
        localStorage.removeItem('user');
      }
      this.userChanged.next(this.currentUser);
    });
  }

  async saveUserDataToDatabase(userId: string, userData: any) {
    try {
      await setDoc(doc(this.db, 'Users', userId), userData);
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  }
  async getUserDataFromDatabase(userId: string) {
    try {
      const docSnap = await getDoc(doc(this.db, 'Users', userId));

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      return console.error('Error getting document:', error);
    }
  }
  getUser() {
    if (!this.currentUser) {
      const user = localStorage.getItem('user');
      if (user !== null) {
        this.currentUser = JSON.parse(user);
      }
    }
    return this.currentUser;
  }

  async signUp(email: string, password: string, name: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.currentUser = userCredential.user;

      // Send verification email
      if (this.currentUser) {
        await sendEmailVerification(this.currentUser);
      }
      const userData = {
        name: name,
        email: this.currentUser.email,
        photoURL: this.currentUser.photoURL,
        userRecipes: [],
        favourites: [],
      };
      await this.saveUserDataToDatabase(this.currentUser.uid, userData);
      return this.currentUser;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return;
    }
  }

  async signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.currentUser = userCredential.user;
      const firestoreUser = await this.getUserDataFromDatabase(
        this.currentUser.uid
      );
      return firestoreUser;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return;
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
      this.currentUser = null;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }

  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      this.currentUser = userCredential.user;

      // Check if user exists in Firestore
      const firestoreUser = await this.getUserDataFromDatabase(
        this.currentUser.uid
      );

      // If user does not exist in Firestore, create it
      if (!firestoreUser) {
        const userData = {
          name: this.currentUser.displayName,
          email: this.currentUser.email,
          photoURL: this.currentUser.photoURL,
          userRecipes: [],
          favourites: [],
        };
        await this.saveUserDataToDatabase(this.currentUser.uid, userData);
      }

      return this.currentUser;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return;
    }
  }
  getAuth() {
    return this.auth;
  }
}
