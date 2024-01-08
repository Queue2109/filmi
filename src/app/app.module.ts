import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SeznamComponent} from './seznam/seznam.component';
import {FilmPodrobnostiComponent} from './seznam/film-podrobnosti.component';
import {FilmService} from "./seznam/services/film.service";
import { OcenaPodrobnosti } from './seznam/ocena-podrobnosti.component';
import { FilmDodajComponent } from './seznam/film-dodaj.component';
import {OcenaService} from "./seznam/services/ocena.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SeznamComponent,
        FilmPodrobnostiComponent,
        OcenaPodrobnosti,
        FilmDodajComponent
    ],
    providers: [FilmService, OcenaService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

