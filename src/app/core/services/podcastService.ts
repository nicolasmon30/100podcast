import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from '../models/episode.model';

export interface ApiResponse<T> {
    results: T[];
}

@Injectable({
    providedIn: 'root'
})

export class PodcastService {
    private baseUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`;
    private urlDetail = `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id=')}`;
    private episodes = ''

    constructor(private http: HttpClient) { }

    getPodcasts() {
        return this.http.get(`${this.baseUrl}`);
    }
    getDetailPodcast(idPodcast: any) {
        return this.http.get(`${this.urlDetail}${idPodcast}`);
    }
    getEpisodes(idPodcast: any): Observable<Episode[]> {
        return this.http.get<ApiResponse<any>>(`https://itunes.apple.com/lookup?id=${idPodcast}&country=US&media=podcast&entity=podcastEpisode&limit=30`)
            .pipe(
                map(response => {
                    return response.results.map(item => {
                        const episode: Episode = {
                            id: item.trackId,
                            title: item.trackName,
                            author: item.artistName ?? 'Not Artist',
                            description: item.description ?? 'Not Description',
                            imageUrl: item.artworkUrl600,
                            audioUrl: item.episodeUrl,
                            releaseDate: item.releaseDate,
                            duration: item.trackTimeMillis,
                        }

                        return episode;
                    })
                })
            )
    }
}