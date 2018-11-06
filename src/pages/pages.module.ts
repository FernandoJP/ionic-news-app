import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { TabsPage } from './tabs/tabs';
import { NewsPage } from './news/news';
import { NewsSinglePage } from './news-single/news-single';

@NgModule({
  declarations: [
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage,
    NewsSinglePage
  ],
  entryComponents: [
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage,
    NewsSinglePage
  ],
  imports: [
    IonicPageModule.forChild(NewsSinglePage),
  ],
})
export class PagesModule {}
