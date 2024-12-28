import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app/app.module';
import { GetRequestsService } from '../services/get-requests.service';
import { ChatsComponent } from '../app/chats/chats.component';
import { Question } from '../Models/Question.model';
import { Disputed_Question_list_item, Message } from '../Models/Disputed_Question.model';
import { FormsModule, NgForm } from '@angular/forms';
import { PostRequestsService } from '../services/post-requests.service';
import { GlobalService } from '../services/global.service';
import { Student } from '../Models/Student.model';
import { io } from "socket.io-client";
import { Local_Ip } from '../environments';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [AppModule,ChatsComponent,FormsModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
  providers:[GetRequestsService,PostRequestsService,GlobalService]

})


export class CommunityComponent implements OnInit{
  disputed_questions:Disputed_Question_list_item [] =[];
  current_item:Disputed_Question_list_item|null=null
  messages:Message[]=[]
  curr_student:Student | null= null;
  class_chat_list=''
  class_chats=''
  chat_id=''
  discussion_id:number | null=null
  socket = io(`http://${Local_Ip}:5000`);

  

  constructor(private getServices:GetRequestsService,private postRequestsService:PostRequestsService,private gbService:GlobalService
    ,private activeRoute:ActivatedRoute,private router:Router
  ){
        this.curr_student=gbService.getStudent()
       this.socket.emit("join",this.chat_id)
       
        
  }
  
  ngOnInit(): void {





     this.getDisputedQuestions()
     if(window.innerWidth<767){
     console.log("View Mode Switched")
    if(this.messages.length==0){
      this.class_chats='hidden'
      this.class_chat_list=''
    }else{
      this.class_chats=''
      this.class_chat_list='hidden'
    }
    }

    this.socket.on('message', (message) =>{
     this.messages.push(message)
    });
    this.activeRoute.params.subscribe(param => {
      this.discussion_id = param['dispute_id']
      if(this.discussion_id==null){
        console.log("No redirected url")
      }else{
        console.log("redirected url")
        console.log("question Id : ",this.discussion_id)
    
        
      }
      
    })




   
  }

  backPressed(){
    this.chat_id
    this.socket.emit('leave', this.chat_id)
    this.current_item=null;
    this.class_chats='hidden'
     this.class_chat_list=''
     this.messages=[]
     this.chat_id=''
  }





  getDisputedQuestions(){
    this.getServices.getDisputedQuestions().subscribe(data=>{
      console.log(data)
      data.forEach((dispute)=>{

        dispute.sharing_time=new Date(dispute.sharing_time).toLocaleString()
      })
      this.disputed_questions=data
     
      this.current_item=this.disputed_questions.find(item=>item.question_id==this.discussion_id) as Disputed_Question_list_item
    if(this.current_item == undefined){
      console.log("Redirect  UNDEFINED:",JSON.stringify(this.current_item))


    }else{
     this.loadChats(this.current_item)
    }
       
  
     
    })
  }
  postMessage(form:NgForm){
    
    console.log("Message : ",form)
    const message:Message={
      'dispute_id':this.current_item!.dispute_id,
      'question_id':this.current_item!.question_id,
      'message':form.value.message,
      'sender':this.curr_student!.username,
      'time':new Date().toLocaleString()
    }
    if(form.value.message==null ||  form.value.message==''){
      return 
    }

    this.postRequestsService.SendMessage(message).subscribe(data=>{
      if(data.status=='success'){
        console.log("Message Sent")
       this.socket.emit("message",{'room':this.chat_id,'message':message})
       form.resetForm()
      
      }else{
        console.log("Somthing Wrong : ",data)
      }

    })



  }
  loadChats(item :Disputed_Question_list_item){
    this.chat_id=item.dispute_id.toString()
    this.socket.emit('join',this.chat_id)
    
   if(window.innerWidth<767){
     
     this.class_chats=''
     this.class_chat_list='hidden'
    }else{
      this.class_chats=''
     this.class_chat_list=''
    }
   
   this.current_item=item;
   this.messages=[]
  this.getServices.getDisputeMessages(this.current_item.question_id).subscribe(data=>{
    data.forEach((message:Message)=>{
      message.time=new Date(message.time).toLocaleString()
    })
    this.messages=data
    console.log("MESSAGES: ",data)
  })


  }





  loadRedirectedChats(item :Disputed_Question_list_item){
    this.chat_id=item.dispute_id.toString()
    this.socket.emit('join',this.chat_id)
   if(window.innerWidth<767){
     
     this.class_chats=''
     this.class_chat_list='hidden'
    }else{
      this.class_chats=''
     this.class_chat_list=''
    }
   
   this.current_item=item;
   this.messages=[]
  this.getServices.getDisputeMessages(this.current_item.question_id).subscribe(data=>{
    data.forEach((message:Message)=>{
      message.time=new Date(message.time).toLocaleString()
    })
    this.messages=data
    console.log("MESSAGES: ",data)
  })


  }










}
