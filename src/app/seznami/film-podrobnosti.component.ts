import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';

import {SeznamFilmov} from './models/seznam';
import {SeznamiService} from './services/seznami.service';

@Component({
    moduleId: module.id,
    selector: 'film-podrobnosti',
    templateUrl: 'film-podrobnosti.component.html'
})
export class FilmPodrobnostiComponent implements OnInit {
    seznam: SeznamFilmov;

    constructor(private seznamService: SeznamiService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.seznamService.getSeznam(+params['id'])))
            .subscribe(seznam => this.seznam = seznam);
    }


    nazaj(): void {
        this.router.navigate(['filmi']);
    }
}
