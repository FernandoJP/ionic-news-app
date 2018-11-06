import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Article } from '../../app/domain/news';
import { NewsProvider } from '../../providers/news/news';

@IonicPage()
@Component({
  selector: 'page-news-single',
  templateUrl: 'news-single.html',
})
export class NewsSinglePage {
  article:Article;

  constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvider: NewsProvider) {}

  ionViewDidLoad() {
    this.article = this.newsProvider.currentArticle;
    console.log('ionViewDidLoad NewsSinglePage');
  }

}
