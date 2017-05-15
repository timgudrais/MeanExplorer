import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'financialTerms',
  templateUrl: './financialTerms.component.html',
  styleUrls: ['./financialTerms.component.css']
})
export class FinancialTermsComponent implements OnInit {
  title = 'Finansiella Termer';

  public capital = 0;
  public compoundedCapital = 0;
  public growthPercentage = 0;
  public moneySaved = 0;
  public dividends = 0;

  public capitalOne = 0;
  public capitalTwo = 0;
  public capitalThree = 0;
  public capitalFour = 0;
  public capitalFive = 0;
  public capitalSix = 0;
  public capitalSeven = 0;
  public capitalEight = 0;
  public capitalNine = 0;
  public capitalTen = 0;

  public calculateGrowthDecimal = function (growthPercentage, years) {
    return Math.pow(((growthPercentage / 100) + 1), years);
  }

  public calculateGrowthPercentage = function (growth, capital) {
    return (growth / capital - 1) * 100;
  }

  public calculateDifference = function (oldCapital, newCapital) {
    return newCapital - oldCapital;
  }

  public calculateDividends = function (capital, moneySaved, growthPercentage, year, dividendsPercentage) {
    return (capital + (moneySaved * 12) * year) * this.calculateGrowthDecimal(growthPercentage, year) * (dividendsPercentage / 100);
  }

  public calculateDividendsMonth = function (capital, moneySaved, growthPercentage, years, dividendsPercentage) {
    return this.calculateDividends(capital, moneySaved, growthPercentage, years, dividendsPercentage) / 12;
  }

  public reInvestDividends = function (reInvestDecision) {
    if(reInvestDecision === false) {
      this.reInvest = false;      
    }
    else if (reInvestDecision === true) {
      this.reInvest = true;
    }
  }

  public compoundedReturnPerYear = function (capital, growthPercentage, moneySaved) {
     // Eget kapital = 0
    // Månadsbesparing = 10 000
    // Årlig avkastning = 10%
    // Månatalig avkastning = this.compoundedReturnPerMonth(10) = 0.0079;

    for(var i = 0; i < 10; i++)
    {
      var compoundedReturnPerMonthPercentage = this.compoundedReturnPerMonthPercentage(growthPercentage);
      
      var monthOne = capital * compoundedReturnPerMonthPercentage + moneySaved;
      var monthTwo = monthOne * compoundedReturnPerMonthPercentage + moneySaved;
      var monthThree = monthTwo * compoundedReturnPerMonthPercentage + moneySaved;
      var monthFour = monthThree * compoundedReturnPerMonthPercentage + moneySaved;
      var monthFive = monthFour * compoundedReturnPerMonthPercentage + moneySaved;
      var monthSix = monthFive * compoundedReturnPerMonthPercentage + moneySaved;
      var monthSeven = monthSix * compoundedReturnPerMonthPercentage + moneySaved;
      var monthEight = monthSeven * compoundedReturnPerMonthPercentage + moneySaved;
      var monthNine = monthEight * compoundedReturnPerMonthPercentage + moneySaved;
      var monthTen = monthNine * compoundedReturnPerMonthPercentage + moneySaved;
      var monthEleven = monthTen * compoundedReturnPerMonthPercentage + moneySaved;
      var monthTwelve = monthEleven * compoundedReturnPerMonthPercentage + moneySaved;
      
      if(i === 0) {
        this.compoundedCapitalOne = monthTwelve;
      }
      else if (i === 1)
      {
        this.compoundedCapitalTwo = monthTwelve;
      }
      else if (i === 2)
      {
        this.compoundedCapitalThree = monthTwelve;
      }
      else if (i === 3)
      {
        this.compoundedCapitalFour = monthTwelve;
      }
      else if (i === 4)
      {
        this.compoundedCapitalFive = monthTwelve;
      }
      else if (i === 5)
      {
        this.compoundedCapitalSix = monthTwelve;
      }
      else if (i === 6)
      {
        this.compoundedCapitalSeven = monthTwelve;
      }
      else if (i === 7)
      {
        this.compoundedCapitalEight = monthTwelve;
      }
      else if (i === 8)
      {
        this.compoundedCapitalNine = monthTwelve;
      }
      else if (i === 9)
      {
        this.compoundedCapitalTen = monthTwelve;
      }
      capital = monthTwelve;
    }
    return this.compoundedCapitalOne;
  }

  public compoundedReturnPerMonthPercentage = function (growth) {
    return Math.pow((growth / 100) + 1, (1/12));
  }

  public calculateGrowth = function (capital, moneySaved, growthPercentage, year, dividendsPercentage) {
    this.capitalOne = (capital + this.calculateDividends(capital, moneySaved, growthPercentage, 1, dividendsPercentage) + (moneySaved * 12) * 1) * this.calculateGrowthDecimal(growthPercentage, 1);

    this.capitalTwo = (capital + this.calculateDividends(this.capitalOne, moneySaved, growthPercentage, 2, dividendsPercentage) + (moneySaved * 12) * 2) * this.calculateGrowthDecimal(growthPercentage, 2);
    this.capitalThree = (capital + this.calculateDividends(this.capitalTwo, moneySaved, growthPercentage, 3, dividendsPercentage) + (moneySaved * 12) * 3) * this.calculateGrowthDecimal(growthPercentage, 3);
    this.capitalFour = (capital + this.calculateDividends(this.capitalThree, moneySaved, growthPercentage, 4, dividendsPercentage) + (moneySaved * 12) * 4) * this.calculateGrowthDecimal(growthPercentage, 4);
    this.capitalFive = (capital + this.calculateDividends(this.capitalFour, moneySaved, growthPercentage, 5, dividendsPercentage) + (moneySaved * 12) * 5) * this.calculateGrowthDecimal(growthPercentage, 5);
    this.capitalSix = (capital + this.calculateDividends(this.capitalFive, moneySaved, growthPercentage, 6, dividendsPercentage) + (moneySaved * 12) * 6) * this.calculateGrowthDecimal(growthPercentage, 6);
    this.capitalSeven = (capital + this.calculateDividends(this.capitalSix, moneySaved, growthPercentage, 7, dividendsPercentage) + (moneySaved * 12) * 7) * this.calculateGrowthDecimal(growthPercentage, 7);
    this.capitalEight = (capital + this.calculateDividends(this.capitalSeven, moneySaved, growthPercentage, 8, dividendsPercentage) + (moneySaved * 12) * 8) * this.calculateGrowthDecimal(growthPercentage, 8);
    this.capitalNine = (capital + this.calculateDividends(this.capitalEight, moneySaved, growthPercentage, 9, dividendsPercentage) + (moneySaved * 12) * 9) * this.calculateGrowthDecimal(growthPercentage, 9);
    this.capitalTen = (capital + this.calculateDividends(this.capitalNine, moneySaved, growthPercentage, 10, dividendsPercentage) + (moneySaved * 12) * 10) * this.calculateGrowthDecimal(growthPercentage, 10);

    return (capital + (moneySaved * 12) * year) * this.calculateGrowthDecimal(growthPercentage, year);
  }

  
  constructor() { }

  ngOnInit() {
  }

}
