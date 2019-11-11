/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface UcAgeVerification {
    /**
    * If `true`, the checkbox form will present, hiding the age dropdowns.
    */
    'checkboxOnly'?: boolean;
    /**
    * Minimum age that determines which years are available in the form.
    */
    'minimumAge'?: number;
    /**
    * Allows a translated list of dates to be passed into the component.
    */
    'months'?: Array<string>;
    /**
    * The value of the form. Date or Boolean
    */
    'value'?: string | boolean;
  }
}

declare global {


  interface HTMLUcAgeVerificationElement extends Components.UcAgeVerification, HTMLStencilElement {}
  var HTMLUcAgeVerificationElement: {
    prototype: HTMLUcAgeVerificationElement;
    new (): HTMLUcAgeVerificationElement;
  };
  interface HTMLElementTagNameMap {
    'uc-age-verification': HTMLUcAgeVerificationElement;
  }
}

declare namespace LocalJSX {
  interface UcAgeVerification {
    /**
    * If `true`, the checkbox form will present, hiding the age dropdowns.
    */
    'checkboxOnly'?: boolean;
    /**
    * Minimum age that determines which years are available in the form.
    */
    'minimumAge'?: number;
    /**
    * Allows a translated list of dates to be passed into the component.
    */
    'months'?: Array<string>;
    /**
    * Emits the selected value of the component
    */
    'onValueSelected'?: (event: CustomEvent<any>) => void;
    /**
    * The value of the form. Date or Boolean
    */
    'value'?: string | boolean;
  }

  interface IntrinsicElements {
    'uc-age-verification': UcAgeVerification;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'uc-age-verification': LocalJSX.UcAgeVerification & JSXBase.HTMLAttributes<HTMLUcAgeVerificationElement>;
    }
  }
}


