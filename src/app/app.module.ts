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
        OcenaPodrobnosti
    ],
    providers: [FilmService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

