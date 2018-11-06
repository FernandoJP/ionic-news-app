import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { API_URL, API_KEY } from '../../app/config/const/api.properties';
import { Article } from '../../app/domain/news';

@Injectable()
export class NewsProvider {
  currentArticle: Article;

  constructor(public http: HttpClient) { }

  getNews(url):Observable<Article[]> {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
    .pipe(map((response:any) => response.articles)).pipe(map(articles => articles.map(news => new Article(news))));
  }
}
