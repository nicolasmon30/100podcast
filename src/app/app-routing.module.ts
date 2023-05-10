import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailPodcastComponent } from './detail-podcast/detail-podcast.component';
import { DetailEpisodeComponent } from './detail-episode/detail-episode.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'podcast/:id', component: DetailPodcastComponent },
  { path: 'podcast/:idPodcast/episode/:idEpisode', component: DetailEpisodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
