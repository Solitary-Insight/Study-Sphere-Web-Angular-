export interface Disputed_Question{
    dispute_id:number,
    question_id:number,
    highlighted_by:string,
    claimed_answer:string,
    statement:string,
}




export interface Disputed_Question_list_item{
    dispute_id:number,
    question_id:number,
    highlighted_by:string,
    claimed_answer:string,
    sharing_time:string,
    statement:string,
    question:string,
    alpha:string,
    beta:string,
    charlie:string,
    delta:string,
    correct_answer:string,
}
export interface Message{
 
        sender:string;
        time:string;
        dispute_id:number;
        question_id:number;
        message:'string'
    
}