import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { formdata } from '../../Models/Authentication.model';
import { FormsModule } from '@angular/forms';
import { PostRequestsService } from '../../services/post-requests.service';
import { Student } from '../../Models/Student.model';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [AppModule, FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
  providers:[PostRequestsService,GlobalService]
})



export class AuthenticationComponent {
  logingin = true;
  error: string = ''
  
  alert_type=''
  data: formdata | null = null
  constructor(
    private postApiService:PostRequestsService,
    public _gbServive:GlobalService,
     private   router:Router
    ){
console.log("HEllo ")
  }

  login(data: formdata) {
    this.data = data
    if(this.validatefields()==true){
      if (this.logingin) {
        this.loginUser()
      } else {
       this.signUp()
      }
  
    }
  

  }
  signUp(){
    const student:Student={
      'email':this.data!!.email,
      'password':this.data!!.password,
      'username':this.data!!.username,
      'role':'',
      'student_id':-1
    }
    this.postApiService.RegisterStudent(student).subscribe(data=>{
      console.log(data)
      if(data.status=="success"){
        this.showmessage(`User ${student.username} registered successfully! \nKindly login to continue. `,'success')
        setTimeout(()=>{
          this.logingin=true
        },3000)
      }else{
        if(data.error=="DUPLICATE_USER"){
          this.showmessage("User with username "+student.username +' already found','danger')
        }
      }
    })
  }


  loginUser(){
    const student:Student={
      'email':this.data!!.email,
      'password':this.data!!.password,
      'username':this.data!!.username,
      'role':'',
      'student_id':-1
    }
    this.postApiService.LoginStudent(student).subscribe(data=>{
      console.log(data)
      if(data.status=="success"){
        if(data.data.length==0){
          this.showmessage("No such user found or Email or password is incorrect.",'danger')

        }else{
        this.showmessage(`login successfull! `,'success')
      this.naviagateToHome(data.data[0])

        }
        console.log(data)
        setTimeout(()=>{
          this.logingin=true
        },3000)
      }else{
        
          this.showmessage("Something went wrong! please try later.",'danger')
        
      }
    })
  }

  

  naviagateToHome(data: Student){
  const json_data=JSON.stringify(data)
  localStorage.setItem("USER",json_data)
    this._gbServive.updateStudent()
  setTimeout(()=>{
    this.router.navigate(['/dashboard']); 
  },1000)


  }

  











  


  validatefields() {
    if (this.data?.email == '') {
      this.showmessage("Email is required",'danger')
      return false;
    }else if(!this.data?.email.includes('@')){
      this.showmessage("Email is not looking valid",'danger')

    }
    else if (this.data?.password == '') {
      this.showmessage("Password is required",'danger')
      return false;
    }


    if (!this.logingin) {

      if (this.data!.username == '') {
        this.showmessage("Username is required",'danger')
        return false;
      }
      else if (this.data!.password != this.data?.password_retry) {
        this.showmessage("Password not matched",'danger')
        return false;
      }

    }

    return true
























  }

  showmessage(message: string,alert_type:string) {
    this.error = message;
    this.alert_type=alert_type
    setTimeout(() => {
      this.error = ''
    }, 3000)

  }
















}





