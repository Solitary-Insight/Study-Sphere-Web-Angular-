import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from '../../courses/courses.component';
import { TopicsComponent } from '../../topics/topics.component';
import { QuizesComponent } from '../../quizes/quizes.component';

const routes: Routes = [
    // {path:"",component:CoursesComponent},
    // {path:"topics/:id",component:TopicsComponent},
    // {path:"topics/:id/quizes/:t_id",component:QuizesComponent},
    // {path:"topics/:id/quizes/:t_id/quiz",component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
