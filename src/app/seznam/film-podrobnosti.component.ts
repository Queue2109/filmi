import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { switchMap } from 'rxjs/operators';

import {Film} from "./models/film";
import {FilmService} from "./services/film.service";
import { Ocena } from './models/ocena';

@Component({
    moduleId: module.id,
    selector: 'film-podrobnosti',
    templateUrl: 'film-podrobnosti.component.html'
})
export class FilmPodrobnostiComponent implements OnInit {
    film: Film;
    ocene: Ocena[] = [];

    constructor(private filmService: FilmService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.filmService.getFilm(+params['id'])))
            .subscribe(film => this.film = film);
    }

    oceneView: boolean = false;
    toggleOceneView(): void {
        this.oceneView = !this.oceneView;
    }

    nazaj(): void {
        this.router.navigate(['seznam']);
    }
}
