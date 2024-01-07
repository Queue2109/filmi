import {Film} from "./film";
import {Uporabnik} from "./uporabnik";

export class Ocena {
    ocena_id: number;
    ocena: number;
    komentar: string;
    film: Film;
    uporabnik: Uporabnik;
    cas_objave: Date;
}