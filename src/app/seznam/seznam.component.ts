import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Film} from "./models/film";
import {SeznamiService} from "./services/seznami.service";
import {NakupovalniSeznam} from "./models/seznam";
import {FilmService} from "./services/film.service";


@Component({
    moduleId: module.id,
    selector: 'vsi-filmi',
    templateUrl: 'seznam.component.html'
})
export class SeznamComponent implements OnInit {
    seznam: Film[];
    film: Film;

    constructor(private router: Router,
                private filmService: FilmService) {
    }

    ngOnInit(): void {
        this.getVsiFilmi();
    }

    getVsiFilmi(): void {
        this.filmService
            .getFilmi()
            .subscribe(seznam => this.seznam = seznam);
    }

    naPodrobnosti(film: Film): void {
        this.film = film;
        this.router.navigate(['/film', this.film.film_id]);
    }

}