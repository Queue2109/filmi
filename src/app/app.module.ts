import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SeznamComponent} from './seznam/seznam.component';
import {ArtikelDodajComponent} from './seznam/artikel-dodaj.component';
import {FilmPodrobnostiComponent} from './seznam/film-podrobnosti.component';
import {FilmService} from "./seznam/services/film.service";


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
        ArtikelDodajComponent,
    ],
    providers: [FilmService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

