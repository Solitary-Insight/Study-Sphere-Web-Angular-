import { Component } from '@angular/core';
import { quizes } from '../local_dummy_data/Quizes';
import { Question } from '../Models/Question.model';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app/app.module';
import { CourseRoutingModule } from '../Modules/course/course-routing.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GetRequestsService } from '../services/get-requests.service';
import { Local_Ip } from '../environments';
import { PostRequestsService } from '../services/post-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { Student } from '../Models/Student.model';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, AppModule, HttpClientModule, CourseRoutingModule, RouterModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css',
  providers: [GetRequestsService, PostRequestsService,GlobalService]
})
export class ExamComponent {
  student:Student={} as Student



  // navigating urls
  urls: any = {
    courses: '',
    topics: '',
    quizes: '',
  }


  // result data 
  correct_questions = 0;
  total_questions = 0
  left_over_questions = 0;
  incorrect_questions = 0;
  // -----------------------------------------

  see_result = false;
  isQuizStarted = false;
  course_id: number = -1;
  topic_id: number = -1;
  quiz_id: number = -1;
  quiz_title: string = '';
  saving=''

  Left_seconds: number = 0;

  current_question_index = 0;
  lastQuestion = false;
  current_question: Question | null = null;
  is_submitted = false;
  questions: Question[] = []
  Left_minutes: number = 0


  constructor(
    private activeRoute: ActivatedRoute,
    private getApiService: GetRequestsService,
    private postApiService: PostRequestsService,
    private gbService: GlobalService,
  ) {
    activeRoute.params.subscribe(param => {
      this.quiz_id = param['q_id']
      this.course_id = param['id']
      this.topic_id = param['t_id']
      this.quiz_title = param['topic']
      console.log("quiz Id : ", this.quiz_id)
      this.urls.courses = '/courses/'
      this.urls.topics = '/courses/topics/' + this.course_id;
      this.urls.quizes = '/courses/topics/' + this.course_id + '/quizes/' + this.topic_id;
    })



  }
  ngOnInit(): void {
    this.is_submitted = false;
    this.saving=""
    this.student=this.gbService.getStudent()
    this.getQuestions()




  }

 
  
  

  moveBackQuestion(index: number) {
    if (this.is_submitted && index >= 0 && index < this.questions.length) {
      this.current_question_index = index;
      this.current_question = this.questions[this.current_question_index]
      return
    }
    if (index > this.questions.length - 1) {
      this.lastQuestion = true;
    }
    if (index >= 0) {
      if (this.questions[index].selected_option == null) {
        this.current_question_index = index;
        this.current_question = this.questions[this.current_question_index]
      }
      else {
        while (this.questions[index].selected_option != null && index != 0) {
          index--;
        }
        if (this.questions[index].selected_option == null) {
          this.current_question_index = index;
          this.current_question = this.questions[this.current_question_index]

        }

      }
    }
  }




  moveToQuestion(index: number) {
    if (this.is_submitted && index >= 0 && index < this.questions.length) {
      this.current_question_index = index;
      this.current_question = this.questions[this.current_question_index]
      return
    }
    if (index >= this.questions.length - 1) {
      this.lastQuestion = true;
    }
    if (index >= 0 && index < this.questions.length) {
      if (this.questions[index].selected_option == null) {
        this.current_question_index = index;
        this.current_question = this.questions[this.current_question_index]
      }
      else {
        while (this.questions[index].selected_option != null && index < this.questions.length - 1) {
          index++;
        }
        if (this.questions[index].selected_option == null) {
          this.current_question_index = index;
          this.current_question = this.questions[this.current_question_index]

        }

      }

    }

  }



  submitQuiz() {
    this.saving="pending"
    this.postApiService.postQuizResult(this.questions,this.student.student_id).subscribe(result => {
      console.log(result)
      this.is_submitted = true;
      this.saving="done"

    })
    this.pauseTimer()
    this.total_questions = this.questions.length;
    this.left_over_questions = this.questions.filter((question) => { return question.selected_option == null }).length
    this.correct_questions = this.questions.filter((question) => { return question.selected_option == question.correct_answer }).length
    this.incorrect_questions = this.total_questions - (this.left_over_questions + this.correct_questions)
  }


  interval: any
  startTimer() {
    this.current_question = this.questions.length == 0 ? null : this.questions[0]
    if (this.current_question) {
      this.isQuizStarted = true
      this.Left_seconds = 60;
      this.Left_minutes--;
      this.interval = setInterval(() => {
        if (this.Left_seconds > 0) {
          this.Left_seconds--;
        } else {
          if (this.Left_minutes == 0) {
            this.pauseTimer()
            this.submitQuiz()
          } else {
            this.Left_seconds = 60;
            this.Left_minutes--;
          }
        }
      }, 1000)
    }

  }


  pauseTimer() {
    clearInterval(this.interval);

  }



  ngOnDestroy() {
    this.questions = []

    console.log("Test Component is destroyed")

    this.questions.forEach((q) => {
      q.selected_option = null;
    })
  }


  getQuestions() {
    this.getApiService.getQuestions('http://' + Local_Ip + ':5000/quiz_data/questions/' + this.quiz_id).subscribe(data => {
      this.questions = data;


      console.log("questions  ", this.questions)
      this.Left_minutes = this.questions.length * 2
    })
  }

}
