import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-card-detail',
  templateUrl: './episode-card-detail.component.html',
  styleUrls: ['./episode-card-detail.component.scss']
})
export class EpisodeCardDetailComponent implements OnInit {
  episode : any;
  @Input() dataEpisode: any;


  ngOnInit(): void {
    this.episode = this.dataEpisode;
  }
}
