import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uc-text',
  styleUrl: 'uc-text.scss',
  shadow: true
})
export class UcText {

  render() {
    return (
      <Host>
        <h2>Welcome to StencilJS <slot></slot>!</h2>
      </Host>
    );
  }

}
