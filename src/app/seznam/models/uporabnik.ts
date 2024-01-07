import {Zanr} from "./zanr";
import {Ocena} from "./ocena";

export class Uporabnik {
    uporabnik_id: number;
    uporabnisko_ime: string;
    geslo: string;
    email: string;
    spol: string;
    startost: number;
    zanr_preference: Zanr[]
    ocene: Ocena[]
}