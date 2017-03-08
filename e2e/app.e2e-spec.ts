import { WsdV2Page } from './app.po';

describe('wsd-v2 App', () => {
  let page: WsdV2Page;

  beforeEach(() => {
    page = new WsdV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
