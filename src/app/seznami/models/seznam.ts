import { Film } from './film';

export class SeznamFilmov {
    id: number;
    naziv: string;
    opis: string;
    ustvarjen: string;
    filmi: Film[];
}
