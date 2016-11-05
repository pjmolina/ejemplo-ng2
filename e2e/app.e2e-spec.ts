import { Master00Page } from './app.po';

describe('master00 App', function() {
  let page: Master00Page;

  beforeEach(() => {
    page = new Master00Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
