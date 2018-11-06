import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { NewsSinglePage } from '../news-single/news-single';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = NewsSinglePage;

  constructor(public navCtrl: NavController) {

  }
}
