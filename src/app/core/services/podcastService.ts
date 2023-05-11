import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from '../models/episode.model';
import { Podcast } from '../models/podcast.model';

export interface ApiResponse<T> {
    results: T[],
    contents: {
        feed: T[],
    },
}

@Injectable({
    providedIn: 'root'
})

export class PodcastService {
    private baseUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`;
    private urlDetail = `https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id=')}`;

    constructor(private http: HttpClient) { }

    getPodcasts(): Observable<Podcast[]> {
        return this.http.get<any>(this.baseUrl, { responseType: 'json' })
            .pipe(
                map(response => {
                    const data = JSON.parse(response.contents)
                    return data.feed.entry.map((item: any) => {
                        const podcast: Podcast = {
                            id: item.id.attributes['im:id'],
                            title: item.title.label,
                            author: item['im:artist'].label,
                            description: item.summary.label,
                            imageUrl: item["im:image"][2].label
                        }
                        return podcast;
                    })
                })
            )
    }
    getDetailPodcast(idPodcast: any): Observable<Podcast[]> {
        return this.http.get<any>(this.urlDetail + idPodcast, { responseType: 'json' })
            .pipe(
                map(response => {
                    const data = JSON.parse(response.contents)
                    const parseData = data.results[0]
                    const podcast: Podcast = {
                        id: parseData.trackId,
                        title: parseData.trackName,
                        author: parseData.artistName ?? 'Not Artist',
                        description: parseData.description ?? 'Not Description',
                        imageUrl: parseData.artworkUrl600,
                    }
                    return [podcast];
                })
            )
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