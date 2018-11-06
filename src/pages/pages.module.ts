import { NgModule } from '@angular/core';
import { HomePage } from './home/home';
import { TabsPage } from './tabs/tabs';
import { NewsSinglePageModule } from './news-single/news-single.module';
import { NewsPageModule } from './news/news.module';
import { ContactPageModule } from './contact/contact.module';
import { AboutPageModule } from './about/about.module';
import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage,
    TabsPage
  ],
  entryComponents: [
    HomePage,
    TabsPage
  ],
  imports: [
    NewsPageModule,
    NewsSinglePageModule,
    ContactPageModule,
    AboutPageModule,
    IonicPageModule.forChild(HomePage)
  ],
})
export class PagesModule {}
