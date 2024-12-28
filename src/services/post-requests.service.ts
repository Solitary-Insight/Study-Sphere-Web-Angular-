import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Local_Ip } from '../environments';
import { Quiz } from '../Models/Quiz.model';
import { Question } from '../Models/Question.model';
import { Result } from '../Models/Result.model';
import { Student } from '../Models/Student.model';
import { Observable } from 'rxjs';
import { Disputed_Question, Message } from '../Models/Disputed_Question.model';

@Injectable({
  providedIn: 'root'
})
export class PostRequestsService {

  constructor(private http: HttpClient) {

  }
  postQuizResult(Questions: Question[],student_id:number) {
    var Result: Result[] = []
    Questions.forEach((question) => {
      const result: Result = { 'quiz_id': question.quiz_id, 'question_id': question.question_id, 'student_id': student_id, "selected_option": question.selected_option, "correct_answer": question.correct_answer }
      Result?.push(result)
    })
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const url = `http://${Local_Ip}:5000/quiz_data/save_result`;
    return this.http.post(url, Result, { headers })

  }


  RegisterStudent(student :Student):Observable<any>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const url = `http://${Local_Ip}:5000/user/register`;
    return this.http.post <any>(url, student, { headers })
  }


  LoginStudent(student :Student):Observable<any>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const url = `http://${Local_Ip}:5000/user/login`;
    return this.http.post <any>(url, student, { headers })
  }


  uploadDispute(disputed_question:Disputed_Question):Observable<any>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const url = `http://${Local_Ip}:5000/quiz_data/add_disputed_question`;
    return this.http.post <any>(url, disputed_question, { headers })
  }

  SendMessage(message:Message):Observable<any>{
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const url = `http://${Local_Ip}:5000/quiz_data/addMessage`;
    return this.http.post <any>(url, message, { headers })
  }
}
