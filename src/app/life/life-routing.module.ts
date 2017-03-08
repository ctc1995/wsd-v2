import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LifeComponent } from './life.component'

const routers: Routes=[
    {
        path: '',
        component: LifeComponent
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

export class LifeRoutingModule{}