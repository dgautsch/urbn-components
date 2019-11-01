import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'urbn-age-verification',
  styleUrl: 'urbn-age-verification.css',
  shadow: true
})

export class UrbnAgeVerification {

  /**
   * If `true`, the checkbox form will present, hiding the age dropdowns.
   */
  @Prop() checkboxOnly: boolean;

  /**
   * Allows a translated list of dates to be passed into the component.
   */
  @Prop() months?: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  /**
   * Minimum age that determines which years are available in the form.
   */
  @Prop() minimumAge: number;

  generateDays():Array<number> {
    let i:number = 1;
    let days:Array<number> = [];
    while (i <= 31) {
      days.push(i);
      i++
    }
    return days;
  }

  generateYears(minAge:number):Array<number> {
    const today = new Date();
    const year = today.getFullYear();
    const maxYear = Math.floor(year - minAge);

    let years = [];
    let minYear = year - 110; // 110 is arbitrary

    while (minYear <= maxYear) {
        years.push(minYear);
        minYear++;
    }
    return years;
  }

  createSelectOptions(data:Array<number|string>) {
    return data.map((value:number|string, index:number) => {
      return <option key={index} value={value}>{value}</option>
    })
  }

  renderComponentType() {
    if (this.checkboxOnly) {
      return (
        <fieldset>
          <legend>Confirm Age:</legend>
          <label htmlFor="urbn-confirm-age">
            <input type="checkbox" name="ageConfirmed" id="urbn-confirm-age"/>
            I verify I am at least {this.minimumAge} years old.
          </label>
        </fieldset>
      )
    } else {
      return (
        <fieldset>
          <legend>Birth Date:</legend>
          <label htmlFor="urbn-birth-month">Month</label>
          <select name="month" id="urbn-birth-month">
            { this.createSelectOptions(this.months) }
          </select>
          <label htmlFor="urbn-birth-day">Day</label>
          <select name="day" id="urbn-birth-day">
            { this.createSelectOptions(this.generateDays()) }
          </select>
          <label htmlFor="urbn-birth-year">Year</label>
          <select name="year" id="urbn-birth-year">
            { this.createSelectOptions(this.generateYears(this.minimumAge)) }
          </select>
        </fieldset>
      )
    }
  }

  render() {
    return (
        <div class="c-urbn-age-verification">
          { this.renderComponentType() }
        </div>
    );
  }
}
