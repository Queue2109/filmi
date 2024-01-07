import {Component} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import { Film } from './models/film';
import { FilmService } from './services/film.service';
// import { switchMap } from 'rxjs/operators';

@Component({
    moduleId: module.id,
    selector: 'dodaj-film',
    templateUrl: 'film-dodaj.component.html'
})
export class FilmDodajComponent {

    film:Film = new Film;

    constructor(private filmService: FilmService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {}
    submitForm(): void {
        this.filmService.dodajFilm(this.film).subscribe(() =>
        this.router.navigate(['/seznam']));
    }

    nazaj(): void {
        this.router.navigate(['/filmi']);
    }

}
