import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharityRoutingModule } from './charity-routing.module'

import { CharityComponent } from './charity.component';

@NgModule({
  imports: [
    CommonModule,
    CharityRoutingModule
  ],
  declarations: [CharityComponent]
})
export class CharityModule { }
