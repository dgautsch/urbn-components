# urbn-age-verification



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                          | Type                | Default                                                                                                                                                                          |
| -------------- | --------------- | -------------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkboxOnly` | `checkbox-only` | If `true`, the checkbox form will present, hiding the age dropdowns. | `boolean`           | `false`                                                                                                                                                                          |
| `minimumAge`   | `minimum-age`   | Minimum age that determines which years are available in the form.   | `number`            | `0`                                                                                                                                                                              |
| `months`       | --              | Allows a translated list of dates to be passed into the component.   | `string[]`          | `[     'January',     'February',     'March',     'April',     'May',     'June',     'July',     'August',     'September',     'October',     'November',     'December'   ]` |
| `value`        | `value`         | The value of the form. Date or Boolean                               | `boolean \| string` | `''`                                                                                                                                                                             |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `valueSelected` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
