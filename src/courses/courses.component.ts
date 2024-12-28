import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/Courses.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { GetRequestsService } from '../services/get-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { Local_Ip } from '../environments';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers:[GetRequestsService]
})
export class CoursesComponent implements OnInit {
  course_list:Course[] | null=null
    constructor(private ApiService :GetRequestsService){
   
    }
    ngOnInit(): void {

        this.getCourseList()

    }

    getCourseList(){
      this.ApiService.getCourses('http://'+Local_Ip+':5000/quiz_data/courses').subscribe(courses=>{
        this.course_list=courses  
         })
    }



}
