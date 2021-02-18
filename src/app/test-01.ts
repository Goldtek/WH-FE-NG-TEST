/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule, CurrencyPipe } from '@angular/common';  

@Component({
  selector: "ng-app",
  template: `<div>
                <h2>Loan Details</h2>
                <b> Monthly Payment:</b> {{ monthly_payment | currency }} <br />
                <b>Late Payment Fee : {{ late_payment | currency}}</b> <br />
              </div> 
              
    `,
})
export class Test01Component {
  loan_amount: number = 1000;
  monthly_payment = 2 / 100 * this.loan_amount;
  late_payment = 5 / 100 * this.monthly_payment;   
}

@NgModule({
    imports : [ 
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}