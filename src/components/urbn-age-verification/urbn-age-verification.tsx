import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'urbn-age-verification',
  styleUrl: 'urbn-age-verification.scss',
  shadow: true
})

export class UrbnAgeVerification {

  /**
   * If `true`, the checkbox form will present, hiding the age dropdowns.
   */
  @Prop() checkboxOnly?: boolean = false;

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
  @Prop() minimumAge?: number = 0;

  private generateDays():Array<number> {
    let i:number = 1;
    let days:Array<number> = [];
    while (i <= 31) {
      days.push(i);
      i++
    }
    return days;
  }

  private generateYears(minAge:number):Array<number> {
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

  private createSelectOptions(data:Array<number|string>, defaultValue:String) {
    let options = [];

    if (defaultValue) {
      options.push(<option key="0">{defaultValue}</option>);
    }

    return options.concat(data.map((value:number|string, index:number) => {
      return <option key={index+1} value={value}>{value}</option>
    }));
  }

  private renderComponentType() {
    if (this.checkboxOnly) {
      return (
        <fieldset>
          <legend class="c-form__legend">Confirm Age:</legend>
          <label class="c-form__input">
            <input type="checkbox" name="ageConfirmed" id="urbn-confirm-age" />
            I verify I am at least {this.minimumAge} years old.
          </label>
        </fieldset>
      )
    } else {
      return (
        <fieldset>
          <legend class="c-form__legend">Birth Date:</legend>
          <div class="o-column column-50">
            <select name="month" id="urbn-birth-month" class="c-form__select" aria-label="Birth month">
              { this.createSelectOptions(this.months, 'Month') }
            </select>
          </div>
          <div class="o-column column-25">
            <select name="day" id="urbn-birth-day" class="c-form__select" aria-label="Birth day">
              { this.createSelectOptions(this.generateDays(), 'Day') }
            </select>
          </div>
          <div class="o-column column-25 no-gutter">
            <select name="year" id="urbn-birth-year" class="c-form__select" aria-label="Birth year">
              { this.createSelectOptions(this.generateYears(this.minimumAge), 'Year') }
            </select>
          </div>
        </fieldset>
      )
    }
  }

  render() {
    return (
        <div class={`c-urbn-age-verification ${this.checkboxOnly ? 'checkbox-view' : ''}`}>
          { this.renderComponentType() }
        </div>
    );
  }
}
