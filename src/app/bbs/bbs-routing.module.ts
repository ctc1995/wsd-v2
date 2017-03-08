import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BbsComponent } from './bbs.component'

const routers: Routes=[
    {
        path: '',
        component: BbsComponent
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

export class BbsRoutingModule{}