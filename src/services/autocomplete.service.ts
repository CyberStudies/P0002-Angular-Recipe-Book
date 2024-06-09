//autocomplete.service.ts
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
  frequencies: Map<string, number>;

  constructor(private http: HttpClient) {
    this.tree = new BinaryTree();
    this.frequencies = new Map();
    this.loadTree();
  }

  insert(terms: string) {
    if (!this.tree.search(terms)) {
      this.tree.insert(terms);
    }
    this.frequencies.set(terms, (this.frequencies.get(terms) || 0) + 1); // Increment the frequency count
    this.saveTree();
  }
  getAutocompleteSuggestions(term: string): string[] {
    let suggestions: string[] = [];
    this.tree.getSuggestionsRec(this.tree.root, term, suggestions);
    suggestions.sort(
      (a, b) => (this.frequencies.get(b) || 0) - (this.frequencies.get(a) || 0)
    ); // Sort by frequency count
    return suggestions;
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
