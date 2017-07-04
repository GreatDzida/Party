import { PartyTimePage } from './app.po';

describe('party-time App', () => {
  let page: PartyTimePage;

  beforeEach(() => {
    page = new PartyTimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
