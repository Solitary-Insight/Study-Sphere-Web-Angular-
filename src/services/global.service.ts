import { Injectable } from '@angular/core';
import { Student } from '../Models/Student.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  student:Student ={} as Student;
   Source = new BehaviorSubject<boolean>(false);
  SIGNED_IN = this.Source.asObservable();
  constructor(




  ) { 
   this.getUser()
  }

  getUser(){
    const user=localStorage.getItem("USER");
    const student=JSON.parse(user!)

    if(user=='null'){
      this.updateStatus(false)
    }else{
    
      this.updateStatus(true)

    }
    this.student=student
  }
  alter(){
    console.log("OLD VALUE : ",this.SIGNED_IN)

    console.log("NEW VALUE : ",this.SIGNED_IN)
  }
  updateStatus(newValue: boolean) {
    this.Source.next(newValue);
  }










  getStudent(){
    this.getUser()
    return this.student
  }
  isSignedIn(){
    return this.SIGNED_IN
  }

  updateStudent(){
    this.getUser()
  }
}
