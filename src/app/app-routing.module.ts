import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/seznami.component';
import {FilmPodrobnostiComponent} from './seznami/film-podrobnosti.component';
import { FilmDodajComponent } from './seznami/film-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/filmi', pathMatch: 'full'},
    {path: 'filmi', component: SeznamiComponent},
    {path: 'filmi/:id', component: FilmPodrobnostiComponent},
    {path: 'filmi/dodaj', component: FilmDodajComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
