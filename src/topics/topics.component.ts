import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Topic } from '../Models/Topics.model';
import { CommonModule } from '@angular/common';
import { GetRequestsService } from '../services/get-requests.service';
import { AppModule } from '../app/app.module';
import { HttpClientModule } from '@angular/common/http';
import { Local_Ip } from '../environments';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule,RouterModule,AppModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css',
  providers:[GetRequestsService]
})
export class TopicsComponent implements OnInit {
  course_id:number=-1;
  Topics: Topic[] | null= null; 
  constructor(public activeRoute: ActivatedRoute,private apiRequest:GetRequestsService) {

  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
       this.course_id = params['id'];
      console.log("ID : ",this.course_id);
      console.log("ID type : ",typeof this. course_id);
    this.getTopics()
    })
  }

  getTopics(){
    this.apiRequest.getTopics('http://'+Local_Ip+':5000/quiz_data/topics/'+this.course_id).subscribe(data=>{
      this.Topics=data;

    })
  }




}
