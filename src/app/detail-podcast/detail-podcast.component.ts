import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../core/models/episode.model'; 
import { PodcastService } from '../core/services/podcastService';
import { DataService } from '../core/services/dataService';

import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-podcast',
  templateUrl: './detail-podcast.component.html',
  styleUrls: ['./detail-podcast.component.scss']
})
export class DetailPodcastComponent implements OnInit {

  id: string = '';
  episodes: Episode[] = [];

  constructor(private route: ActivatedRoute, private podcastService: PodcastService, 
    private router : Router, private dataService : DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    this.podcastService.getDetailPodcast(this.id).subscribe((response: any) => {
      console.log(JSON.parse(response.contents))
    },(error : any) => {
      console.log('Error al acceder al api', error)
    })

    this.podcastService.getEpisodes(this.id).subscribe(episodes => {
      this.episodes = episodes
      console.log(this.episodes)
    })
  }

  /* METHODS */
  goToDetail(id : any , episodioId : any , epid : any ){
    console.log(id, episodioId , epid)
    const data = epid
    this.dataService.setData(data);
    this.router.navigate(['/podcast/', id, 'episode', episodioId]);
  }

}
