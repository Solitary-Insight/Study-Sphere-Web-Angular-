import { Component, EventEmitter, HostListener,Input,OnInit, Output } from '@angular/core';
import { AppModule } from '../app/app.module';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Student } from '../Models/Student.model';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AppModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers:[GlobalService],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class SidebarComponent  implements OnInit {
  sidebar_hidden = false;
  student:Student={} as Student;
  constructor(public gbService:GlobalService ,private router:Router){
    

  }

ngOnInit(): void {
  this.student=this.gbService.getStudent()
}




  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // this.current_width=event.target.innerWidth;
   
  }

}
