import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { NewsComponent } from './news.component'

const routers: Routes=[
    {
        path: '',
        component: NewsComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routers)
    ],
    exports:[
        RouterModule
    ]
})

export class NewsRoutingModule{}