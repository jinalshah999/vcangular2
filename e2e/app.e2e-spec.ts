import { VittorclouddemoPage } from './app.po';

describe('vittorclouddemo App', function() {
  let page: VittorclouddemoPage;

  beforeEach(() => {
    page = new VittorclouddemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
