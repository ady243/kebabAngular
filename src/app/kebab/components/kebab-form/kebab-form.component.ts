import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sauce } from '../../models/sauce.enum';
import { Viande } from '../../models/viande.enum';


@Component({
    selector: 'app-kebab-form',
    templateUrl: './kebab-form.component.html',
    styleUrls: ['./kebab-form.component.css']
})
export class KebabFormComponent implements OnInit {
    kebabForm: FormGroup = new FormGroup({});
    viandes = Object.values(Viande);
    sauces = Object.values(Sauce);
    resume: string = '';

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.kebabForm = this.formBuilder.group({
            viande: ['', Validators.required],
            sauce: ['', Validators.required],
            frites: false,
            prix: [0, [Validators.required, Validators.min(0.01)]]
        });
    }

    onSubmit(): void {
        this.resume = `Vous avez commandé un kebab
        ${this.kebabForm.get('viande')!.value} avec la sauce ${this.kebabForm.get('sauce')!.value}`;
        if (this.kebabForm.get('frites')!.value) {
            this.resume += ' et des frites';
        }
        this.resume += ` pour un montant de ${this.kebabForm.get('prix')!.value} euros.`;
    }

}
