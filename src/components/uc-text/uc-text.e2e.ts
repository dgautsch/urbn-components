import { newE2EPage } from '@stencil/core/testing';

describe('uc-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uc-text></uc-text>');

    const element = await page.find('uc-text');
    expect(element).toHaveClass('hydrated');
  });
});
