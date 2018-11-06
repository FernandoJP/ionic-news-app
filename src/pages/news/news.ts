import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { Article } from '../../app/domain/news';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  articles: Array<Article>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvider: NewsProvider) {
  }

  ionViewDidLoad() {
    this.getNews();
  }

  getNews(search = '*'){
    if(!search) search = '*';
    this.newsProvider.getNews(`everything?q=${search}&from=2018-10-06&sortBy=publishedAt?language=en`).subscribe(articles => {
      this.articles = articles;
    });
  }

  goToNewsSinglePage(article: Article) {
    this.newsProvider.currentArticle = article;
    this.navCtrl.push('NewsSinglePage');
  }
}
