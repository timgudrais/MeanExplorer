import { RootPage } from './app.po';

describe('root App', function() {
  let page: RootPage;

  beforeEach(() => {
    page = new RootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
