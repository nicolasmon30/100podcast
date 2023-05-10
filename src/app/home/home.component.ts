import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../core/services/podcastService'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  podcast: any[] = [];

  constructor(private podcastService: PodcastService){}

  ngOnInit(): void {
    this.podcastService.getPodcasts().subscribe((response: any) => {
      const temp = JSON.parse(response.contents)
      const { feed :{ entry }  } = temp
      this.podcast = entry
      console.log(this.podcast)
    }, (error : any) => {
      console.log('Error al acceder al api', error)
    })
  }
}
