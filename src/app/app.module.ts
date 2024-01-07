import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SeznamiComponent} from './seznami/seznami.component';
import {FilmPodrobnostiComponent} from './seznami/film-podrobnosti.component';
import {SeznamiService} from './seznami/services/seznami.service';
import { FilmDodajComponent } from './seznami/film-dodaj.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SeznamiComponent,
        FilmPodrobnostiComponent,
        FilmDodajComponent
    ],
    providers: [SeznamiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

