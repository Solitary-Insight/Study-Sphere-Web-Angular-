import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { TestComponent } from '../../test/test.component';
import { AppModule } from '../../app/app.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  exports:[AppModule]
})
export class CourseModule { }
