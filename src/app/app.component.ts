import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { fakeAsync } from '@angular/core/testing';
import { GlobalService } from '../services/global.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  , providers: [GlobalService]
})
export class AppComponent implements OnInit {
  islogedIn = false
  title = 'quiz_web';
  currenturl=''
  current_path = 'Hello Handsome'

  constructor(public router: Router,
    private activRoute: ActivatedRoute,
    public gbservice: GlobalService,


  ) {
    if(this.router.url=='/' ){
    this.verifyLogin()
    }
  }
  ngOnInit(): void {
  
  
   this.router.events.subscribe((val:any) => {
   this.currenturl=val.url
   if(val.url=='/authentication' ){
     this.islogedIn=false;
      
    }else{
     this.islogedIn=true;

    }
   
   })
  }





  verifyLogin() {

    const user = localStorage.getItem("USER")
    if (user == 'null' || this.gbservice.getStudent==null) {
      this.islogedIn = false
      this.router.navigate(['/authentication'])
    } else {
      this.islogedIn = true
      this.router.navigate(['/dashboard'])

    }
    console.log(JSON.parse(user!))
  }


  
}