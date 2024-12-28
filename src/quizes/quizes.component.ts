import { Component, OnInit } from '@angular/core';
import {Quiz} from '../Models/Quiz.model'
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app/app.module';
import { GetRequestsService } from '../services/get-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { Local_Ip } from '../environments';
import { PostRequestsService } from '../services/post-requests.service';
@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.css',
  providers:[GetRequestsService]
})
export class QuizesComponent implements OnInit {
    quizes:Quiz[]|null=null;
    course_id=-1;
    topic_id=-1;
    topic_url=''
    constructor(private activatedRoute:ActivatedRoute,private ApiService:GetRequestsService){
      
      activatedRoute.params.subscribe(param=>{
        this.topic_id=param['t_id'];
        this.course_id=param['id'];
        console.log("Topic ID Quiz ",this.topic_id)
        console.log("Course ID Quiz ",this.course_id)
        this.topic_url=`/courses/topics/${this.course_id}`
       
      }
        
        )
    }

  ngOnInit(): void {
    this.getQuizes()
  }
  getQuizes(){
    this.ApiService.getQuizes(`http://${Local_Ip}:5000/quiz_data/quizes/${this.course_id}/${this.topic_id}`).subscribe(data=>{
      this.quizes=data
    })
  }
}
