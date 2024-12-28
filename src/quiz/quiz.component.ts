import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { Question } from '../Models/Question.model';
import {questions}  from '../local_dummy_data/Questions'
import {quizes}  from '../local_dummy_data/Quizes'
import { CourseRoutingModule } from '../Modules/course/course-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule,CourseRoutingModule,RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  isQuizStarted = false;
   
  Left_seconds: number = 0;
  current_quiz = quizes[0];
  current_question_index = 0;
  lastQuestion = false;
  current_question = questions[0];
  is_submitted = false;
  questions :Question[]= questions.filter((q)=>{
    return q.quiz_id==3
  });
  Left_minutes: number = 0

  constructor() {
    this.Left_minutes =this.questions.length * 2
  }
  ngOnInit(): void {
    this.is_submitted = false;
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



  submitQuiz(){
    this.is_submitted = true;
    this.pauseTimer()
  }
  

interval: any
startTimer() {
  this.isQuizStarted = true
  this.Left_seconds = 60;
  this.Left_minutes--;
  this.interval = setInterval(() => {
    if (this.Left_seconds > 0) {
      this.Left_seconds--;
    } else {
      if (this.Left_minutes == 0) {
        this.pauseTimer()
      } else {
        this.Left_seconds = 60;
        this.Left_minutes--;
      }
    }
  }, 1000)
}


pauseTimer() {
  clearInterval(this.interval);
}

}
