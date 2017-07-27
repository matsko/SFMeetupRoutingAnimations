import { NgSwapPage } from './app.po';

describe('ng-swap App', () => {
  let page: NgSwapPage;

  beforeEach(() => {
    page = new NgSwapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
