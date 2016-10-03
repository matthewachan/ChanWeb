import { ChanwebPage } from './app.po';

describe('chanweb App', function() {
  let page: ChanwebPage;

  beforeEach(() => {
    page = new ChanwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
