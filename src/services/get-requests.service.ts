import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Course } from '../Models/Courses.model';
import { Observable } from 'rxjs';
import { Topic } from '../Models/Topics.model';
import { Quiz } from '../Models/Quiz.model';
import { Question } from '../Models/Question.model';
import { Local_Ip } from '../environments';
import { LeaderBoardItem } from '../Models/LeaderBoardItem.model';
import { Disputed_Question_list_item, Message } from '../Models/Disputed_Question.model';

@Injectable({
  providedIn: 'root'
})
export class GetRequestsService {

  constructor(private http:HttpClient) {

   }


   getCourses(url:string):Observable<Course[]> {

    return this.http.get<Course[]>(url)
   }
   getTopics(url:string):Observable<Topic[]> {

    return this.http.get<Topic[]>(url)
   }
   getQuizes(url:string):Observable<Quiz[]> {

    return this.http.get<Quiz[]>(url);
   }
   getQuestions(url:string):Observable<Question[]> {

    return this.http.get<Question[]>(url);
   }
   getAttemptedQuiz(student_id:number):Observable<Quiz[]> {

    return this.http.get<Quiz[]>(`http://${Local_Ip}:5000/quiz_data/attempted_quiz_count/${student_id}`);
   }

   getTotalCourseQuizesCount(course_id:number):Observable<any[]>{
    return this.http.get<any[]>(`http://${Local_Ip}:5000/quiz_data/quiz_count/`+course_id);
   }

   getQuizResult(student_id:number,quiz_id:number):Observable <Question[]>{
    return this.http.get<Question[]>(`http://${Local_Ip}:5000/quiz_data/get_result/${quiz_id}/student/${student_id}`)
  }
  getPositions():Observable<LeaderBoardItem []>{
    return this.http.get<LeaderBoardItem[]>(`http://${Local_Ip}:5000/quiz_data/positions`)
  }
  getDisputedQuestions():Observable<Disputed_Question_list_item []>{
    return this.http.get<Disputed_Question_list_item []>(`http://${Local_Ip}:5000/quiz_data/get_disputed_question_list`)
   }
   
   getDisputeMessages(question_id:number):Observable<Message []>{
    return this.http.get<Message []>(`http://${Local_Ip}:5000/quiz_data/messages/${question_id}`)
   }
  


}
