import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/dataService';
import { Podcast } from '../core/models/podcast.model'; 
import { PodcastService } from '../core/services/podcastService';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss']
})
export class DetailEpisodeComponent implements OnInit{

  data: any;
  id: string = '';
  podcast: Podcast[] = [];
  podcastData: Podcast[] = [];
  isShow = false;

  constructor(private route: ActivatedRoute, private dataService : DataService,
    private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('idPodcast') ?? '';
    this.data = this.dataService.getData();
    this.podcastService.getPodcasts().subscribe((response: any) => {
      const result = response.filter((res : any) => res.id === this.id)
      this.podcastData = result
      this.isShow = true;
    }, (error : any) => {
      console.log('Error al acceder al api', error)
    })
  }
}
