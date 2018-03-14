import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotationService {

    constructor(private http: Http) { }

    saveQuote(quote) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let creator = JSON.parse(localStorage.getItem('currentUser')).username.toString();
        console.log(creator);
        let newQuote = {
            creator: creator,
            client: quote.client,
            production: {
                crew: quote.crew,
                equipments: quote.equipments,
                total: quote.productionTotal
            },
            postProduction: {
                numberOfVideos: quote.numberOfVideos,
                averageLength: quote.averageLength,
                editStyle: quote.editStyle,
                complexity: quote.complexity,
                unitCost: quote.unitCost,
                total: quote.postProductionTotal
            },
            total: quote.total,
            quote: quote.quote
        }

        console.log(newQuote);

        return this.http.post(
            'api/quote',
            newQuote,
            {headers: headers}
        ).map(res => res.json());
    }

    deleteQuote(id) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.delete(
            "api/quote" + "/" + id,
            {headers: headers})
        .map(res => res.json());
    }
}
