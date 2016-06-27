import { MagaPage } from './app.po';

describe('maga App', function() {
  let page: MagaPage;

  beforeEach(() => {
    page = new MagaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
