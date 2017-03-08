import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
      path: 'index', 
      loadChildren: './home/home.module#HomeModule'
    },
    { 
      path: 'news', 
      loadChildren: './news/news.module#NewsModule'
    },
    { 
      path: 'life', 
      loadChildren: './life/life.module#LifeModule'
    },
    { 
      path: 'info', 
      loadChildren: './info/info.module#InfoModule'
    },
    { 
      path: 'bbs', 
      loadChildren: './bbs/bbs.module#BbsModule'
    },
    { 
      path: 'charity', 
      loadChildren: './charity/charity.module#CharityModule'
    },
    { 
      path: 'land', 
      loadChildren: './land/land.module#LandModule'
    },
    { 
      path: 'about', 
      loadChildren: './about/about.module#AboutModule'
    },
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }