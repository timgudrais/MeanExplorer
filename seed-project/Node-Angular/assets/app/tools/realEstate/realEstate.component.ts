import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'realEstate',
  templateUrl: './realEstate.component.html',
  styleUrls: ['./realEstate.component.css']
})
export class RealEstateComponent implements OnInit {
  title = 'Fastighetskinvestering - kalkylator';

  public propertyCost = 0;
  public loanAmount = 0;
  public loanInterest = 0;
  public loanAmortization = 0;
  public propertyFees = 0;
  public incomePerMonth = 0;
  public amountOfTenants = 0;
  
  constructor() { }

  ngOnInit() {
  }

}
