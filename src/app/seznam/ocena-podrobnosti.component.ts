import {Component, Input, OnInit} from '@angular/core';
import { Ocena } from './models/ocena';
import { Film } from './models/film';
import { FilmService } from './services/film.service';
import { ChangeDetectionStrategy } from '@angular/core';
import {OcenaService} from "./services/ocena.service";
import {Uporabnik} from "./models/uporabnik";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'ocena-podrobnosti',
    templateUrl: 'ocena-podrobnosti.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class OcenaPodrobnosti implements OnInit{
    novaOcena = new Ocena();

    constructor(private filmService: FilmService,
                private ocenaService: OcenaService,
                private httpClient: HttpClient,
                private router: Router,
                private route: ActivatedRoute) {}

    ocene: Ocena[] = [];
    @Input() film:Film;

    ngOnInit(): void {
        this.filmService.getOcene(this.film.film_id)
            .subscribe(ocene => {this.ocene = ocene;});
        
    }

    dodajOceno(ocena: Ocena): void {
        const uporabnik = new Uporabnik();
        uporabnik.uporabnik_id = 1;
        this.httpClient.get<Ocena[]>(`http://localhost:8080/v1/ocene`).subscribe(x => uporabnik.ocene = x );
        uporabnik.email='petra.kos@hotmail.com';
        uporabnik.geslo = 'petrakos';
        ocena.film = this.film;
        ocena.uporabnik = uporabnik;

        this.ocenaService.dodajOceno(ocena)
            .subscribe(ocena => {this.ocene.push(ocena);});
        location.reload();
    }

    odstraniOceno(ocena: Ocena): void {
        this.ocenaService.odstraniOceno(ocena)
            .subscribe(o => {
                this.filmService.getOcene(this.film.film_id)
                    .subscribe(ocene => {this.ocene = ocene;});
            })
        location.reload();
    }

}
