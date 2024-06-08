import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BinaryTree } from './BinaryTree/BinaryTree';
import { NodeTree } from './BinaryTree/NodeTree';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  tree: BinaryTree;
  storageKey: string = 'BinaryTreeData';

  constructor(private http: HttpClient) {
    this.tree = new BinaryTree();
    this.loadTree();
  }

  getAutocompleteSuggestions(term: string): string[] {
    let suggestions: string[] = [];
    this.tree.getSuggestionsRec(this.tree.root, term, suggestions);
    return suggestions;
  }
  insert(terms: string) {
    terms.split(' ').forEach((term) => {
      this.tree.insert(term);
    });
    this.saveTree();
  }

  saveTree() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tree.root));
  }

  loadTree() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.tree.root = new NodeTree('');
      this.buildTree(this.tree.root, JSON.parse(data));
    }
  }

  buildTree(node: NodeTree, data: any) {
    if (data) {
      node.key = data.key;
      if (data.left) {
        node.left = new NodeTree('');
        this.buildTree(node.left, data.left);
      }
      if (data.right) {
        node.right = new NodeTree('');
        this.buildTree(node.right, data.right);
      }
    }
  }
}
