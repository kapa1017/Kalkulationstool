import { KalkultationstoolPage } from './app.po';

describe('kalkultationstool App', () => {
  let page: KalkultationstoolPage;

  beforeEach(() => {
    page = new KalkultationstoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
