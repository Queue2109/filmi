import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Film} from "../models/film";
import { Ocena } from '../models/ocena';

@Injectable()
export class FilmService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private filmiUrl = 'http://localhost:8080/v1/filmi';
    private oceneUrl = 'http://localhost:8080/v1/ocene';

    constructor(private http: HttpClient) {
    }

    getFilmi(): Observable<Film[]> {
        return this.http.get<Film[]>(this.filmiUrl)
            .pipe(catchError(this.handleError));
    }

    getFilm(id: number): Observable<Film> {
        const url = `${this.filmiUrl}/${id}`;
        return this.http.get<Film>(url)
            .pipe(catchError(this.handleError));
    }

    getOcene(id: number): Observable<Ocena[]> {
        console.log(id + "id");
        const url = `${this.oceneUrl}/${id}`;
        return this.http.get<Ocena[]>(url)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

