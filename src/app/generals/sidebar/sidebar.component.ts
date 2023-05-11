import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  podcast : any;
  @Input() detailPodcast: any;


  ngOnInit(): void {
    this.podcast = this.detailPodcast[0];
  }
}
