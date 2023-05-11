import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Kebab } from '../models/kebab.model';
import { Viande } from '../models/viande.enum';
import { Sauce } from '../models/sauce.enum';

@Injectable({
    providedIn: 'root'
})
export class KebabService {

    constructor(private kebabService: KebabService) { }

  

    getKebabs(): Observable<Kebab[]> {
        return of([
            new Kebab(Viande.AGNEAU, Sauce.ANDALOUSE, true, 5),
            new Kebab(Viande.POULET, Sauce.BARBECUE, false, 4.5),
            new Kebab(Viande.MERGUEZ, Sauce.SAMOURAI, true, 4),
            new Kebab(Viande.STEAK, Sauce.BLANCHE, false, 3.5),
            new Kebab(Viande.AGNEAU, Sauce.BARBECUE, true, 5),
            new Kebab(Viande.POULET, Sauce.ANDALOUSE, false, 4.5),
            new Kebab(Viande.MERGUEZ, Sauce.BLANCHE, true, 4),
            new Kebab(Viande.STEAK, Sauce.SAMOURAI, false, 3.5),
        ]);
    }

    getKebab(id: number): Observable<Kebab> {
        return of(new Kebab(Viande.AGNEAU, Sauce.ANDALOUSE, true, 5));
    }

    addKebab(kebab: Kebab): Observable<Kebab> {
       
        return of(new Kebab(kebab.viande, kebab.sauce, kebab.avecFrites, kebab.prix));
    }

    updateKebab(kebab: Kebab): Observable<Kebab> {
       
        return of(kebab);
    }

    deleteKebab(kebab: Kebab): Observable<Kebab> {
       
        return of(kebab);
    }

    createKebab(viande: Viande, sauce: Sauce, avecFrites: boolean, prix: number): Observable<Kebab> {
     
        const kebab = new Kebab(viande, sauce, avecFrites, prix);
        return this.addKebab(kebab);
    }
}
