import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';
import { Film } from './models/film';

import {SeznamFilmov} from './models/seznam';
import {SeznamiService} from './services/seznami.service';

@Component({
    moduleId: module.id,
    selector: 'film-podrobnosti',
    templateUrl: 'film-podrobnosti.component.html'
})
export class FilmPodrobnostiComponent implements OnInit {
    seznam: SeznamFilmov;
    film:Film;

    constructor(private seznamService: SeznamiService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.seznamService.getFilm(+params['id'])))
            .subscribe(seznam => this.film = seznam);
    }


    nazaj(): void {
        this.router.navigate(['filmi']);
    }
}
