import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie:Object = null // TODO: add interface

  constructor(private requestService: RequestService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get("id")
    this.requestService.fetchMovie(id).subscribe(response => {
      console.log(response)
      return this.movie = response
    })
  }


}
