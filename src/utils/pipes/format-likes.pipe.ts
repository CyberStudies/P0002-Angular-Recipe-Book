import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({ name: 'formatLikes' })
export class FormatLikesPipe implements PipeTransform {
  transform(likes: number): string {
    const formattedLikes = new DecimalPipe('en-US').transform(likes, '1.0-0');
    return formattedLikes !== null ? formattedLikes.replace(/,/g, '.') : '';
  }
}
