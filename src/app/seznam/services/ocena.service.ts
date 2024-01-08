import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Ocena} from "../models/ocena";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class OcenaService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/ocene';

    constructor(private http: HttpClient) {
    }

    dodajOceno(ocena: Ocena): Observable<Ocena> {
        return this.http.post<Ocena>(this.url + '/dodaj', JSON.stringify(ocena), {headers: this.headers})
            .pipe(catchError(this.handleError));

    }

    odstraniOceno(ocena: Ocena): Observable<Ocena> {
        return this.http.delete<Ocena>(this.url + `/brisi/${ocena.ocena_id}`, {headers: this.headers})
            .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}
