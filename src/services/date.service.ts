import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  getFormattedDate(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return `${date.getMonth() + 1}·${date.getDate()}·${date.getFullYear()}`;
  }
}
