import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MOCK_MOVIE_LIST} from './mockMovieList';
import {MOCK_MOVIE_DETAILS} from './mockMovieDetails'

export interface FetchListResponseBody {
  id: string;
  title: string;
  rating: number;
  votes: number;
  posterSrc: string;
  genres: Array<string>;
  releaseDate: string;
}

export interface FetchMovieResponseBody {
  id: string;
  title: string;
  budget: number;
  description: string;
  rating: number;
  votes: number;
  posterSrc: string;
  homepage?: string;
  genres: Array<string>;
  duration: number;
  videos: Array<{
      name: string;
      size: number;
      type: string;
      url: string;
  }>;
}

const API_URL = 'http://vps135320.ovh.net:1234';
const API_METHODS = {
  fetchList: `${API_URL}/list/:page`,
  fetchMovie: `${API_URL}/movie/:id`
};


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  public fetchList(page = '1'): Observable<Array<FetchListResponseBody>> {
    try {
      return this.makeRequest(API_METHODS.fetchList, {
          page
      });

    } catch(error) {
      return MOCK_MOVIE_LIST
    }
  }

  public fetchMovie(id: string): Observable<FetchMovieResponseBody> {
    try {
      return this.makeRequest(API_METHODS.fetchMovie, {
          id
      });

    } catch(error) {
      return MOCK_MOVIE_DETAILS
    }
  }

  private makeRequest<T>(url, params = {}): Observable<T> {
      Object.entries(params)
          .forEach(([key, value]) => {
              url = url.replace(`:${key}`, value);
          });

      return this.http.get<T>(url);
  }
}