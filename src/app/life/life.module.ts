import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeRoutingModule } from './life-routing.module'

import { LifeComponent } from './life.component';

@NgModule({
  imports: [
    CommonModule,
    LifeRoutingModule
  ],
  declarations: [LifeComponent]
})
export class LifeModule { }
