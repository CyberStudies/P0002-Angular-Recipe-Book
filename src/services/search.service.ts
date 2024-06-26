// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTerm = new BehaviorSubject<string>('');
  currentSearchTerm = this.searchTerm.asObservable();

  constructor() {}

  updateSearchTerm(term: string) {
    console.log('Updating search term to:', term);
    this.searchTerm.next(term);
  }
}
