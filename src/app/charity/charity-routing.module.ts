import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CharityComponent } from './charity.component'

const routers: Routes=[
    {
        path: '',
        component: CharityComponent
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

export class CharityRoutingModule{}