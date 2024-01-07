import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';

import {Film} from "./models/film";
import {FilmService} from "./services/film.service";

@Component({
    moduleId: module.id,
    selector: 'film-podrobnosti',
    templateUrl: 'film-podrobnosti.component.html'
})
export class FilmPodrobnostiComponent implements OnInit {
    film: Film;

    constructor(private filmService: FilmService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.filmService.getFilm(+params['id'])))
            .subscribe(film => this.film = film);
    }

    dodajArtikel(): void {
        //this.router.navigate(['seznami/' + this.seznam.id + '/dodaj']);
    }

    nazaj(): void {
        this.router.navigate(['seznam']);
    }
}
