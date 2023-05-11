import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/dataService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {
  episode: any;
  id: string = '';
  @Input() episodeDetail: any;

  constructor( private dataService : DataService, private router : Router, private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.episode = this.episodeDetail;
  }

  /* METHODS */

  goToDetail(id: any, episodioId: any, epid: any) {
    const data = epid
    this.dataService.setData(data);
    this.router.navigate(['/podcast/', id, 'episode', episodioId]);
  }
}
