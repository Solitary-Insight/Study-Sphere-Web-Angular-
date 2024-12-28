import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatIconModule,RouterLink,RouterOutlet,RouterModule,AppRoutingModule,HttpClientModule
  ]
  ,exports:[CommonModule,MatIconModule,RouterLink,RouterOutlet,RouterModule,AppRoutingModule,HttpClientModule]

})
export class AppModule { }
