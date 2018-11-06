export class Article {
    source: { id: string, name: string }
    id: string;
    name: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    contend: string;

    constructor(values?: Object) {
        Object.assign(this, values);
    }
}