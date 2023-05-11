import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../core/services/podcastService';
import { SearchService } from 'src/app/core/services/searchService';
import { Podcast } from 'src/app/core/models/podcast.model';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  podcast: any[] = [];
  isShow = false;
  searchResults$: Observable<Podcast[]> = new Observable<Podcast[]>();

  constructor(private podcastService: PodcastService, private searchService: SearchService){}

  ngOnInit(): void {
    this.podcastService.getPodcasts().subscribe((response: any) => {
      this.podcast = response
      this.isShow = true;
    }, (error : any) => {
      console.log('Error al acceder al api', error)
    })
  }
  onSearch(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchResults$ = this.searchService.search(target.value);
    }
  }
}
