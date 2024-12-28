import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { CoursesComponent } from '../courses/courses.component';
import { CommunityComponent } from '../community/community.component';
import { TopicsComponent } from '../topics/topics.component';
import { QuizesComponent } from '../quizes/quizes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ExamComponent } from '../exam/exam.component';


export const routes: Routes = [
  {path:"authentication",component:AuthenticationComponent},  
  {path:"dashboard",component:DashboardComponent},  
  {path:"leaderboard",component:LeaderboardComponent},
  {path:"courses",children:[
    {path:"",component:CoursesComponent ,pathMatch:'full',},
    {path:"topics/:id" ,component:TopicsComponent ,pathMatch:'full',},
    {path:"topics/:id/quizes/:t_id",component:QuizesComponent ,pathMatch:'full',},
    {path:"topics/:id/quizes/:t_id/test/:q_id/:topic",component:ExamComponent ,pathMatch:'full',},
  ]},
  {path:"community",component:CommunityComponent},
  {path:"community/discussion/:dispute_id",component:CommunityComponent},
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export  class AppRoutingModule { }

