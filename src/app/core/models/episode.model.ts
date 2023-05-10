export class Episode {
    id: number;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    audioUrl: string;
    releaseDate: string;
    duration: string;

    constructor(id: number, title: string, author: string, description: string, imageUrl: string,
        audioUrl: string, releaseDate: string, duration: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.imageUrl = imageUrl;
        this.audioUrl = audioUrl;
        this.releaseDate = releaseDate;
        this.duration = duration;

    }
}