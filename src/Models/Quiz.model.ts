import { Question } from "./Question.model";

export interface Quiz {
    quiz_id: number;
    topic_id: number;
    course_id: number;
    quiz_title:string
  }