export interface Question {
    question_id: number;
    quiz_id: number;
    question: string;
    alpha: string;
    beta: string;
    charlie: string;
    delta: string;
    correct_answer: string;
    selected_option: string | null; // Default to null
  }