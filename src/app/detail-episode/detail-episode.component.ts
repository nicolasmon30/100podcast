import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss']
})
export class DetailEpisodeComponent implements OnInit{

  constructor(private router: Router) { }
  ngOnInit(): void {
    const navigation: Navigation | null = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state){
      const state = navigation.extras.state;
      console.log(state)
    }
  }
}
