export interface Result{
    quiz_id:number,
    student_id:number,
    question_id:number;
    correct_answer:string;
    selected_option:string |null;
}