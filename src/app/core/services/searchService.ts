import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Podcast } from '../models/podcast.model';
import { PodcastService } from './podcastService';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private podcastService: PodcastService) { }

  search(term: string): Observable<Podcast[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.podcastService.getPodcasts().pipe(
      map(data => {
        return data.map(item => {
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            author: item.author,
            imageUrl: item.imageUrl 
          } as Podcast;
        });
      }),
      map(results => {
        return results.filter(result => {
          return result.title.toLowerCase().includes(term.toLowerCase()) || result.author.toLowerCase().includes(term.toLowerCase());
        });
      }),
      catchError(error => {
        console.log('Error:', error);
        return of([]);
      })
    );
  }
}
