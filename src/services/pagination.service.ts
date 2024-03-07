// pagination.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  getPaginatedItems(items: any[], pageSize: number): any[] {
    let paginatedItems = [...items];
    if (paginatedItems.length % pageSize !== 0) {
      while (paginatedItems.length % pageSize !== 0) {
        paginatedItems.push('');
      }
    }
    return paginatedItems;
  }
}
