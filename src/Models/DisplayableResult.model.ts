import { Question } from "./Question.model";

export interface DisplayableResult{
    quiz_title:string;
    quiz_id:number;
    correct_question:number,
    incorrect_question:number,
    leftQuestion:number,
    total_questions:number;
    questions:Question[]
    current_question:Question;
    current_index:number;
    

}