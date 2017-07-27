import { FmanagerPage } from './app.po';

describe('fmanager App', function() {
  let page: FmanagerPage;

  beforeEach(() => {
    page = new FmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
