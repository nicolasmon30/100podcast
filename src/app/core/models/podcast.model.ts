export class Podcast {
    id: number;
    title: string;
    author: string;
    description: string;
    imageUrl: string;

    constructor(id: number, title: string, author: string, description: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.imageUrl = imageUrl;

    }
}