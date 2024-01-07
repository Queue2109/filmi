import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { SeznamFilmov } from './models/seznam';
import { SeznamiService } from './services/seznami.service';
import { Film } from './models/film';

@Component({
    moduleId: module.id,
    selector: 'vsi-seznami',
    templateUrl: 'seznami.component.html'
})
export class SeznamiComponent implements OnInit {
    seznami: SeznamFilmov[];
    film: Film;

    constructor(private seznamiService: SeznamiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getSeznami();
    }

    getSeznami(): void {
        this.seznamiService
            .getSeznami()
            .subscribe(seznami => this.seznami = seznami);
    }

    naPodrobnosti(film: Film): void {
        this.film = film;
        this.router.navigate(['filmi/', film.film_id]);
    }
    
    dodajFilm(): void {
        this.router.navigate(['filmi/dodaj']);
    }

    delete(seznam: SeznamFilmov): void {
        this.seznamiService
            .delete(seznam.id)
            .subscribe(seznamId => this.seznami = this.seznami.filter(s => s.id !== seznamId));
    }

}
