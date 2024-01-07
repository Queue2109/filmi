import {Component} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import { Film } from './models/film';
// import { switchMap } from 'rxjs/operators';

@Component({
    moduleId: module.id,
    selector: 'dodaj-film',
    templateUrl: 'film-dodaj.component.html'
})
export class FilmDodajComponent {

    film:Film = new Film;
    // seznamId: number;
    // private sub: any;

    constructor(/*private seznamiService: SeznamiService,*/
                private router: Router,
                private route: ActivatedRoute) {
    }
    submitForm(): void {
       /* this.seznamiService.create(this.film)
        .subscribe((newMovieId: number) => {
            console.log('Newly created movie ID:', newMovieId);
            // Perform any additional actions with the new ID if needed
            this.router.navigate(['/filmi/' + newMovieId]);
        });*/}

    nazaj(): void {
        this.router.navigate(['/filmi']);
    }

}
