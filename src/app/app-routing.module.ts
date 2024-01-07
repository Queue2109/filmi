import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamComponent} from './seznam/seznam.component';
import {FilmPodrobnostiComponent} from './seznam/film-podrobnosti.component';

const routes: Routes = [
    {path: '', redirectTo: '/seznam', pathMatch: 'full'},
    {path: 'seznam', component: SeznamComponent},
    {path: 'film/:id', component: FilmPodrobnostiComponent},
    // {path: 'seznami/:id/dodaj', component: ArtikelDodajComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
