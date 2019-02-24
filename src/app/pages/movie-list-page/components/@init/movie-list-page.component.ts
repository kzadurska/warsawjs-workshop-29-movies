import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request-service.service';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {
  public movieList:Array<any> = []
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.fetchList().subscribe(response => {
      console.log(response)
      return this.movieList = response
    })
  }

}
