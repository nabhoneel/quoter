import { Component, OnInit } from '@angular/core';
import { Quote } from '../../interfaces/quote.interface';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { QuotationService } from '../../services/quotation.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    public myForm: FormGroup; // our form model

    public quotationForm: FormGroup;

    constructor(
        private _fb: FormBuilder,
        private save: QuotationService
    ) { }

    ngOnInit() {

        this.quotationForm = this._fb.group({
            client: [''],
            crew: this._fb.array([
                this.initCrew()
            ]),
            equipments: this._fb.array([
                this.initEquipments()
            ]),
            productionTotal: [''],

            numberOfVideos: [''],
            averageLength: [''],
            editStyle: [''],
            complexity: [''],
            unitCost: [''],
            postProductionTotal: [''],

            total: [''],
            quote: ['']
        });
    }

    initCrew() {
        //the general item schema (crew/equipments):
        return this._fb.group({
            type: [''],
            category: [''],
            unitCost: [''],
            units: [''],
            cost: ['']
        });
    }

    initEquipments() {
        //the general item schema (crew/equipments):
        return this._fb.group({
            type: [''],
            category: [''],
            unitCost: [''],
            units: [''],
            cost: ['']
        });
    }

    saveQuote() {
        this.save.saveQuote(this.quotationForm.value).subscribe(data => {
            if(data.status == "success") {
                console.log("added to database");
            } else {
                console.log("there was some error [" + data.msg + "]");
            }
        });
    }

    addCrew() {
        // add address to the list
        const control = <FormArray>this.quotationForm.controls['crew'];
        control.push(this.initCrew());
    }

    removeCrew(i: number) {
        // remove address from the list
        const control = <FormArray>this.quotationForm.controls['crew'];
        control.removeAt(i);
    }

    addEquipment() {
        const control = <FormArray>this.quotationForm.controls['equipments'];
        control.push(this.initCrew());
    }

    removeEquipment(i: number) {
        const control = <FormArray>this.quotationForm.controls['equipments'];
        control.removeAt(i);
    }


}
