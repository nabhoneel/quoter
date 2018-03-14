import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { QuotationService } from '../../services/quotation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quotes: Array<Object>;
  dates: Array<String>;
  fullDates: Array<String>;
  deleteWarning: Boolean;

  constructor(
      private router: Router,
      private authService: AuthenticationService,
      private quoteService: QuotationService
  ) { }

  ngOnInit() {
      this.authService.getDashboard().subscribe(data => {
          this.quotes = data;
          this.dates = new Array(data.length);
          for(let i=0; i<data.length; i++) {
              let d = new Date(this.quotes[i.toString()].date);
              this.dates[i] = (d.getDate()).toString() + "-" + (d.getMonth() + 1).toString() + "-" + (d.getFullYear()).toString();
          }
          this.fullDates = new Array(data.length);
          for(let i=0; i<data.length; i++) {
              let d = new Date(this.quotes[i.toString()].date);
              this.fullDates[i] = d.toString();
          }
      });
  }

  showDeleteWarning() {
      this.deleteWarning = true;
  }

  isShowWarning() {
      return this.deleteWarning;
  }

  removeWarning() {
      this.deleteWarning = false;
  }

  deleteQuote(id, i) {
      this.quotes.splice(i, 1);
      console.log(i);
      this.deleteWarning = false;
      this.quoteService.deleteQuote(id).subscribe(data => {
          console.log(data);
      });
  }

  isEmpty() {
      if(this.quotes == null) return true;
      if(this.quotes.length == 0) return true;
      return false;
  }

}
