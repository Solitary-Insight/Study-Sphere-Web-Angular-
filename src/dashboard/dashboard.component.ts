import { Component, IterableDiffers, OnInit, Query } from '@angular/core';
import { GetRequestsService } from '../services/get-requests.service';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Local_Ip } from '../environments';
import { Student } from '../Models/Student.model';
import { Course } from '../Models/Courses.model';
import { AppModule } from '../app/app.module';
import { DashboardCourseItem } from '../Models/DashboardCourseDisplay.model';
import { Quiz } from '../Models/Quiz.model';
import { DisplayableResult } from '../Models/DisplayableResult.model';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);;
import { generateNColors } from '../app/chartjs.ts/random_colors_Generate';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { Disputed_Question } from '../Models/Disputed_Question.model';
import { Question } from '../Models/Question.model';
import { FormsModule } from '@angular/forms';
import { PostRequestsService } from '../services/post-requests.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AppModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers:[GetRequestsService,GlobalService,PostRequestsService]
})
export class DashboardComponent implements OnInit{
disputeUploadMessage=''
disputeAlertType=''
disputeAlertVisiblity=false
disputeAlertLink=''
newUser:boolean=false;
upload_dispute=false;


popup=false;

  quizchart:Chart<"bar", number[], string>|null=null

  current_course:DashboardCourseItem|null=null
  
  student: Student = {} as Student;

logout=false;

selected_quiz:DisplayableResult |null=null

courses:Course []| null=null
result_loading=false;

 dashboard_course_item:DashboardCourseItem[] =[]
 disputed_question:Disputed_Question|null=null


  constructor(
    private getApiService:GetRequestsService,
    public gbService:GlobalService,
    private postRequest:PostRequestsService,
    private router:Router,
    ){
  }

  ngOnInit(): void {
    this.student=this.gbService.getStudent()
    if(this.student==null){
      this.router.navigate(['/authentication'])
    }else{
      this.getCourses()

    }
  
  }
 
  share(question:Question,satement:any){
  const    quest:Disputed_Question={
    'question_id':question.question_id,
    'claimed_answer':satement.claimed_answer,
    'highlighted_by':this.student.username,
    'dispute_id':-1,
    'statement':satement.statement
  
  }
 if(quest.statement==''){
  this.showDisputeShareMessage("Add a problem statement before sharing",'danger',null)
 }else{

 this.shareQuestion(quest)









 }

  }

  shareQuestion(qustion:Disputed_Question){
    this.disputeUploadMessage='Sharing please wait...'
    this.disputeAlertVisiblity=true;
    this.disputeAlertType="primary"
   this.postRequest.uploadDispute(qustion).subscribe(data=>{
      console.log(data)
    
      if(data.status=="success"){
        this.showDisputeShareMessage("Message shared !",'success',`/community/discussion/${qustion.question_id}`)
        setTimeout(()=>{
        },3000)
      }else{
        if(data.error=="DUPLICATE_USER"){
          this.showDisputeShareMessage("Message already shared !",'warning',`/community/discussion/${qustion.question_id}`)

        }else{
          this.showDisputeShareMessage("Something went wrong while sharing!",'danger',null)

        }
      }
    })
  }


  closePopup(){
    this.popup=false;

  }


  loadQuiz(quiz :Quiz,student_id:number) {
    this.result_loading=true
    this.getApiService.getQuizResult(student_id,quiz.quiz_id).subscribe((questions)=>{
      this.selected_quiz={
        'quiz_title':quiz.quiz_title,'questions':questions,
      'quiz_id':quiz.quiz_id,
      'correct_question':questions.filter((question)=>{return question.selected_option==question.correct_answer}).length,
      'leftQuestion':questions.filter((question)=>{return question.selected_option==null}).length,
      'incorrect_question':questions.filter((question)=>{return question.selected_option!=question.correct_answer && question.selected_option!=null}).length,
      'total_questions':questions.length,
      'current_question':questions[0],
      'current_index':0
    }
      console.log("Result : ",this.selected_quiz)
      const counts:number[]=[
        this.selected_quiz.incorrect_question,
        this.selected_quiz.correct_question,
        
        this.selected_quiz.leftQuestion,
      ]
      if(this.quizchart){
        this.quizchart.destroy()
        this.quizchart=this.drawbarchart(this.selected_quiz.questions.length,counts,['red','green','gray'],["Incorrect Answers","Correct Answers","Left over"],"Count ",'quiz_chart')

      }else{
        this.quizchart=this.drawbarchart(this.selected_quiz.questions.length,counts,['red','green','gray'],["Incorrect Answers","Correct Answers","Left over"],"Count ",'quiz_chart')
        this.quizchart.destroy()
        this.quizchart=this.drawbarchart(this.selected_quiz.questions.length,counts,['red','green','gray'],["Incorrect Answers","Correct Answers","Left over"],"Count ",'quiz_chart')

      }
      
    this.result_loading=false

    })
  }





logoutNow(){
  localStorage.setItem("USER",'null');
  this.logout=true;
  this.gbService.updateStatus(false)
  this.router.navigate(['/authentication'])
}


showDisputeShareMessage(message:string,alert_type:string,link?:string|null){
  this.disputeAlertVisiblity=true;
  this.disputeUploadMessage=message;
  this.disputeAlertType=alert_type
  if(link!=null){
    this.disputeAlertLink=link

  }
  setTimeout(()=>{
    this.disputeAlertVisiblity=false;
  },5000)
}





  getAttemptedQuizes(){
    this.getApiService.getAttemptedQuiz(this.student.student_id).subscribe(data=>{
      console.log("Dashboard : ",data)
    })
  }


  getCourses(){
    this.getApiService.getCourses("http://"+Local_Ip+":5000/quiz_data/courses").subscribe(data=>{
      this.courses=data;
      
      data.forEach((course)=>{
        
        const course_item:DashboardCourseItem={
          'course_id':course.course_id,
          'course_name':course.course_name,
          'total_quizes':0,
          'attempted_quizes':[]
        }
        this.dashboard_course_item.push(course_item)
          this.getApiService.getTotalCourseQuizesCount(course_item.course_id).subscribe((data)=>{
           this.dashboard_course_item.filter((course_item)=>{ course_item.course_id==data[0].course_id? course_item.total_quizes=data[0].quiz_count:null})
          })

    
       

      })
      this.getApiService.getAttemptedQuiz(this.student.student_id).subscribe(data=>{
        console.log("ATTEMPTED : ",data)

        data.forEach((quiz)=>{
          this.dashboard_course_item.filter((course)=>{
            course.course_id==quiz.course_id?course.attempted_quizes?.push(quiz):null
          })
        })
        console.log("DASHBOARD LIST :",this.dashboard_course_item)

          this.generateChart()
        })
    })
  }


  generateChart(){
    if(this.courses?.length==0){
      this.newUser=true;
    }else{
      var count:number[]=this.dashboard_course_item.map(item=>item.attempted_quizes==null?0:item.attempted_quizes.length)
      const courses=this.dashboard_course_item.map(item=>item.course_name);
     
     this.drawChart(count,generateNColors(this.dashboard_course_item.length),courses,"Attempted Quiz",'course_chart')
   
    }
    }

  drawChart(data:number[],colors:string[],labels:string[],chart_label:string,div_id:string):Chart<"doughnut", number[], string>{
    
   let chart= new Chart(div_id, {
        type: 'doughnut',
          data: {
          labels:labels,
          
            datasets: [{
              label:chart_label,
                data: data,
                backgroundColor: colors,
                rotation:-90,
              
            }]
        },
        options: {
         
        }
    });
    return chart;
}
drawbarchart(yaxis_size:number,data:number[],colors:string[],labels:string[],chart_label:string,div_id:string):Chart<"bar", number[], string>{
    
  let chart= new Chart(div_id, {
    
       type: 'bar',
       
         data: {
         labels:labels,
         
           datasets: [{
             label:chart_label,
             

               data: data,
               backgroundColor: colors,
              //  rotation:-90,
              barThickness:20
             
           }]
       },
       options: {
        responsive:true,
        scales: {
          y: {
              max: yaxis_size,
              min: 0,
              ticks: {
                  stepSize: 1
              }
          }
      }
       }
   });
   return chart;
}

}
