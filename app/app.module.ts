import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellouscompComponent } from './marvellouscomp/marvellouscomp.component';
import { SecondcmpComponent } from './secondcmp/secondcmp.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellouscompComponent,
    SecondcmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
