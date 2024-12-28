import { Component, OnInit } from '@angular/core';
import { GetRequestsService } from '../services/get-requests.service';
import {LeaderBoardItem}  from '../Models/LeaderBoardItem.model'
import { AppModule } from '../app/app.module';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [AppModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
  providers:[GetRequestsService]
})
export class LeaderboardComponent implements OnInit {
  Positions:LeaderBoardItem[]|null=null
  constructor(private getApis:GetRequestsService){

  }
  ngOnInit(): void {
    this.getApis.getPositions().subscribe((positons)=>{
      this.Positions=positons
    })
  }
}
