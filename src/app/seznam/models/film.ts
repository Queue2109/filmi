import {Zanr} from "./zanr";
import {Ocena} from "./ocena";
import {Igralec} from "./igralec";

export class Film {
    film_id: number;
    naslov: string;
    opis: string;
    leto_izzida: number;
    zanr: Zanr;
    ocena: number;
    zasedba: Igralec[];
    ocene: Ocena[];
}