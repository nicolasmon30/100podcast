import { Component, OnInit } from '@angular/core';
import { Router, Navigation } from '@angular/router';
import { DataService } from '../core/services/dataService';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss']
})
export class DetailEpisodeComponent implements OnInit{

  data: any;

  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log(this.data);
  }
}
