import { NodeTree } from './NodeTree';

export class BinaryTree {
  root: any;

  constructor() {
    this.root = null;
  }

  insert(key: any) {
    this.root = this.insertRec(this.root, key);
  }

  insertRec(root: any, key: any) {
    if (root === null) {
      return new NodeTree(key);
    }
    if (key < root.key) {
      root.left = this.insertRec(root.left, key);
    } else if (key > root.key) {
      root.right = this.insertRec(root.right, key);
    }
    return root;
  }

  search(key: any) {
    return this.searchRec(this.root, key);
  }

  searchRec(root: any, key: any): any {
    if (root === null) {
      return false;
    }
    if (key === root.key) {
      return true;
    }
    return key < root.key
      ? this.searchRec(root.left, key)
      : this.searchRec(root.right, key);
  }

  inorder() {
    this.inorderRec(this.root);
  }

  inorderRec(root: any) {
    if (root !== null) {
      this.inorderRec(root.left);
      console.log(root.key);
      this.inorderRec(root.right);
    }
  }

  getSuggestionsRec(root: any, term: string, suggestions: string[]) {
    if (root !== null) {
      this.getSuggestionsRec(root.left, term, suggestions);
      if (root.key.startsWith(term)) {
        suggestions.push(root.key);
      }
      this.getSuggestionsRec(root.right, term, suggestions);
    }
  }
}
