import { SphereslidePage } from './app.po';

describe('sphereslide App', () => {
  let page: SphereslidePage;

  beforeEach(() => {
    page = new SphereslidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
