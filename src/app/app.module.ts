import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataModule } from './common/data.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module'
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module'
import { FooterModule } from './footer/footer.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DataModule,
    HeaderModule,
    HomeModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
