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
    public quotationForm: FormGroup;

    public crewType: Array<String>;
    public crewSub: Array<Array<Object>>;
    public chosenCrewList: Array<Number>;

    public equipmentType: Array<String>;
    public equipmentSub: Array<Array<Object>>;
    public chosenEquipmentList: Array<Number>;

    constructor(
        private _fb: FormBuilder,
        private save: QuotationService
    ) { }

    ngOnInit() {
        this.crewType = [];
        this.crewSub = [];
        this.save.getCrew().subscribe(data => {
            let x = data.data;
            for (let i = 0; i < x.length; i++) {
                this.crewType.push(x[i.toString()].item);
                let type: Array<Object> = [];
                for (let j = 0; j < x[i.toString()].options.length; j++)
                type.push({
                    name: x[i.toString()].options[j.toString()].name,
                    cost: x[i.toString()].options[j.toString()].cost
                });
                this.crewSub.push(type);
            }
        });
        this.chosenCrewList = [];


        this.equipmentType = [];
        this.equipmentSub = [];
        this.save.getEquipment().subscribe(data => {
            let x = data.data;
            for (let i = 0; i < x.length; i++) {
                this.equipmentType.push(x[i.toString()].item);
                let type: Array<Object> = [];
                for (let j = 0; j < x[i.toString()].options.length; j++)
                type.push({
                    name: x[i.toString()].options[j.toString()].name,
                    cost: x[i.toString()].options[j.toString()].cost
                });
                this.equipmentSub.push(type);
            }
        });
        this.chosenEquipmentList = [];

        this.quotationForm = this._fb.group({
            client: [''],
            crew: this._fb.array([
                this.initItem()
            ]),
            equipments: this._fb.array([
                this.initItem()
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

    initItem() {
        //the general item schema (crew/equipments):
        return this._fb.group({
            type: [''],
            category: [''],
            unitCost: [''],
            units: [''],
            cost: ['']
        });
    }

    chooseItemType(index: number, type: string) {
        if (type == "crew") {
            let x = this.quotationForm.value.crew[index.toString()].type;
            this.chosenCrewList[index] = this.crewType.indexOf(x);
        } else {
            let x = this.quotationForm.value.equipments[index.toString()].type;
            this.chosenEquipmentList[index] = this.equipmentType.indexOf(x);
        }
    }

    showUnitCost(index: number, t: string) {
        //getting the type of crew/equipments:
        let type = (t == "crew") ? this.quotationForm.value.crew[index.toString()].type : this.quotationForm.value.equipments[index.toString()].type;
        //gettingt the sub-type of crew/equipments:
        let category = (t == "crew") ? this.quotationForm.value.crew[index.toString()].category : this.quotationForm.value.equipments[index.toString()].category;

        //number of options available within each crew/equipment type:
        let l = (t == "crew") ? this.crewSub[this.crewType.indexOf(type)].length : this.equipmentSub[this.equipmentType.indexOf(type)].length;

        for (let i = 0; i < l; i++) {
            if(t == "crew") {
                if (category == this.crewSub[this.crewType.indexOf(type)][i]["name"]) {
                    this.quotationForm.value.crew[index.toString()].unitCost = this.crewSub[this.crewType.indexOf(type)][i]["cost"];
                    break;
                }
            }
            else {
                if (category == this.equipmentSub[this.equipmentType.indexOf(type)][i]["name"]) {
                    this.quotationForm.value.equipments[index.toString()].unitCost = this.equipmentSub[this.equipmentType.indexOf(type)][i]["cost"];
                    break;
                }
            }
        }
    }

    getTotalProductionCost() {
        let sum: number = 0;
        for(let i=0; i<this.quotationForm.value.crew.length; i++)
            sum += parseInt(this.quotationForm.value.crew[i.toString()].cost);
        console.log(sum);
        for(let i=0; i<this.quotationForm.value.equipments.length; i++)
            sum += parseInt(this.quotationForm.value.equipments[i.toString()].cost);
        return sum;
    }

    addCrew() {
        const control = <FormArray>this.quotationForm.controls['crew'];
        control.push(this.initItem());
        this.chosenCrewList.push(-1);
    }

    removeCrew(i: number) {
        const control = <FormArray>this.quotationForm.controls['crew'];
        control.removeAt(i);
        this.chosenCrewList.splice(i, 1);
    }

    addEquipment() {
        const control = <FormArray>this.quotationForm.controls['equipments'];
        control.push(this.initItem());
        this.chosenEquipmentList.push(-1);
    }

    removeEquipment(i: number) {
        const control = <FormArray>this.quotationForm.controls['equipments'];
        control.removeAt(i);
        this.chosenEquipmentList.splice(i, 1);
    }

    saveQuote() {
        this.save.saveQuote(this.quotationForm.value).subscribe(data => {
            if (data.status == "success") {
                console.log("added to database");
            } else {
                console.log("there was some error [" + data.msg + "]");
            }
        });
    }
}
