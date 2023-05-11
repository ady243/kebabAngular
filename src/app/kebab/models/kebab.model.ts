import { Viande } from './viande.enum';
import { Sauce } from './sauce.enum';

export class Kebab {
    constructor(
        public viande: Viande,
        public sauce: Sauce,
        public avecFrites: boolean = false,
        public prix: number, 

    ) { }
}
