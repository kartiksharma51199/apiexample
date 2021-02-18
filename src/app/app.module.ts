import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckComponent } from './check/check.component';
import { SharedModule } from './shared/sharedModule';

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
