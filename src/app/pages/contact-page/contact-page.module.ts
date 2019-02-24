import { ContactPageComponent } from './contact-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';


import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ContactPageModule { }
