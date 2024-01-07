import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Film} from "../models/film";

@Injectable()
export class FilmService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/filmi';

    constructor(private http: HttpClient) {
    }

    getFilmi(): Observable<Film[]> {
        return this.http.get<Film[]>(this.url)
            .pipe(catchError(this.handleError));
    }

    getFilm(id: number): Observable<Film> {
        const url = `${this.url}/${id}`;
        return this.http.get<Film>(url)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

