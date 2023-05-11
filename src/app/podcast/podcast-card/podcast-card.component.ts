import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.scss']
})
export class PodcastCardComponent implements OnInit {
  podcast : any;
  @Input() dataPodcast: any;


  ngOnInit(): void {
    this.podcast = this.dataPodcast;
  }

}
