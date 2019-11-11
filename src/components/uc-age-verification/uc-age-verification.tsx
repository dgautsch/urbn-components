import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  Watch
} from '@stencil/core';

@Component({
  tag: 'uc-age-verification',
  styleUrl: 'uc-age-verification.scss',
  shadow: false
})

export class UcAgeVerification {
  /**
   * Refs
   */
  private ageConfirmedInput?: HTMLInputElement;
  private daySelect?: HTMLSelectElement;
  private monthSelect?: HTMLSelectElement;
  private yearSelect?: HTMLSelectElement;

  constructor() {
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * The value of the form. Date or Boolean
   */
  @Prop() value?: string | boolean = '';

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


  /**
   * Emits the selected value of the component
   */
  @Event() valueSelected: EventEmitter;

  valueSelectedHandler(value) {
    this.valueSelected.emit(value);
  }

  handleChange(_event: Event) {
    if (this.checkboxOnly) {
      this.value = this.ageConfirmedInput.checked
    } else {
      this.value = `${this.daySelect.value}/${this.monthSelect.value}/${this.yearSelect.value}`
      this.valueSelectedHandler(this.value);
    }
  }

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
      options.push(<option key="0" value="" disabled selected>{defaultValue}</option>);
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
            <input
              id="urbn-confirm-age"
              type="checkbox"
              name="ageConfirmed"
              onChange={this.handleChange}
              ref={el => this.ageConfirmedInput = el as HTMLInputElement} />
            I verify I am at least {this.minimumAge} years old.
          </label>
        </fieldset>
      )
    } else {
      return (
        <fieldset>
          <legend class="c-form__legend">Birth Date:</legend>
          <div class="uc-column uc-column-50">
            <select
              name="month"
              id="urbn-birth-month"
              class="c-form__select"
              aria-label="Birth month"
              onChange={this.handleChange}
              ref={el => this.monthSelect = el as HTMLSelectElement}
              required>
              { this.createSelectOptions(this.months, 'Month') }
            </select>
          </div>
          <div class="uc-column uc-column-25">
            <select
              name="day"
              id="urbn-birth-day"
              class="c-form__select"
              aria-label="Birth day"
              onChange={this.handleChange}
              ref={el => this.daySelect = el as HTMLSelectElement}
              required>
              { this.createSelectOptions(this.generateDays(), 'Day') }
            </select>
          </div>
          <div class="uc-column uc-column-25 no-gutter">
            <select
              name="year"
              id="urbn-birth-year"
              class="c-form__select"
              aria-label="Birth year"
              onChange={this.handleChange}
              ref={el => this.yearSelect = el as HTMLSelectElement}
              required>
              { this.createSelectOptions(this.generateYears(this.minimumAge), 'Year') }
            </select>
          </div>
          Value: { this.value }
        </fieldset>
      )
    }
  }

  @Watch('value')
  componentWillUpdate(newValue, oldValue, watchedValue) {
    console.log('Component Updating')
    console.log(newValue, oldValue, watchedValue);
  }

  render() {
    return (
        <div class={`c-urbn-age-verification ${this.checkboxOnly ? 'checkbox-view' : ''}`}>
          { this.renderComponentType() }
        </div>
    );
  }
}
