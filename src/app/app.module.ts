import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailPodcastComponent } from './detail-podcast/detail-podcast.component';
import { DetailEpisodeComponent } from './detail-episode/detail-episode.component';
import { EpisodesListComponent } from './episodes/episodes-list/episodes-list.component';
import { EpisodeCardDetailComponent } from './episodes/episode-card-detail/episode-card-detail.component';
import { PodcastCardComponent } from './podcast/podcast-card/podcast-card.component';
import { PodcastCardDetailComponent } from './podcast/podcast-card-detail/podcast-card-detail.component';
import { HeaderComponent } from './generals/header/header.component';
import { FooterComponent } from './generals/footer/footer.component';
import { SidebarComponent } from './generals/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailPodcastComponent,
    DetailEpisodeComponent,
    EpisodesListComponent,
    EpisodeCardDetailComponent,
    PodcastCardComponent,
    PodcastCardDetailComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
