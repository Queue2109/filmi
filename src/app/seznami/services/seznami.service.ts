import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { SeznamFilmov } from '../models/seznam';
import { Observable } from 'rxjs';

import { map,catchError } from 'rxjs/operators';
import { Film } from '../models/film';

@Injectable()
export class SeznamiService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/filmi';

    constructor(private http: HttpClient) {
    }

    getSeznami(): Observable<SeznamFilmov[]> {
        return this.http.get<SeznamFilmov[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getSeznam(id: number): Observable<SeznamFilmov> {
        const url = `${this.url}/${id}`;
        return this.http.get<SeznamFilmov>(url)
                        .pipe(catchError(this.handleError));
    }

    getFilm(id: number): Observable<Film> {
        const url = `${this.url}/${id}`;
        return this.http.get<Film>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(film: Film): Observable<number> {
        const url = `${this.url}/dodaj`;
        return this.http.post<Film>(url, film, { headers: this.headers })
            .pipe(
                map((response: any) => response.id), // Extract the ID from the response
                catchError(this.handleError)
            );
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

