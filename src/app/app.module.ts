import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    AppRoutingModule,    
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [], // Provide request service here, supposedly, works fine without
  bootstrap: [AppComponent]
})
export class AppModule { }
