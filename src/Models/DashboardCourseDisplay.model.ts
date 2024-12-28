import { Quiz } from "./Quiz.model";

export interface DashboardCourseItem {
            course_name:string;
            course_id:number;
            total_quizes:number;
            attempted_quizes:Quiz[]|null;
}