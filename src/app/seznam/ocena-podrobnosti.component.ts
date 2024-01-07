import {Component, Input, OnInit} from '@angular/core';
import { Ocena } from './models/ocena';
import { Film } from './models/film';
import { FilmService } from './services/film.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ocena-podrobnosti',
    templateUrl: 'ocena-podrobnosti.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class OcenaPodrobnosti implements OnInit{

    constructor(private filmService: FilmService) {}

    ocene: Ocena[] = [];
    @Input() film:Film;

    ngOnInit(): void {
        this.filmService.getOcene(this.film.film_id)
            .subscribe(ocene => {this.ocene = ocene;});
        
    }
}
