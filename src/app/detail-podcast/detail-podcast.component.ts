import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Episode } from '../core/models/episode.model';
import { Podcast } from '../core/models/podcast.model'; 
import { PodcastService } from '../core/services/podcastService';
import { DataService } from '../core/services/dataService';

@Component({
  selector: 'app-detail-podcast',
  templateUrl: './detail-podcast.component.html',
  styleUrls: ['./detail-podcast.component.scss']
})
export class DetailPodcastComponent implements OnInit {

  id: string = '';
  episodes: Episode[] = [];
  podcast: Podcast[] = [];
  isShow = false;
  countEpisodes : number = 0;


  constructor(private route: ActivatedRoute, private podcastService: PodcastService, 
    private router : Router, private dataService : DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';

    this.podcastService.getDetailPodcast(this.id).subscribe((response: any) => {
      this.podcast = response[0]
      this.isShow = true
    },(error : any) => {
      console.log('Error al acceder al api', error)
    })

    this.podcastService.getEpisodes(this.id).subscribe(episodes => {
      this.episodes = episodes
      this.countEpisodes = episodes.length
    })
  }


}
