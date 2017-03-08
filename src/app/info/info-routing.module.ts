import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { InfoComponent } from './info.component'

const routers: Routes=[
    {
        path: '',
        component: InfoComponent
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

export class InfoRoutingModule{}