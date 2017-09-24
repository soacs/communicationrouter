import { CommunicationrouterPage } from './app.po';

describe('communicationrouter App', () => {
  let page: CommunicationrouterPage;

  beforeEach(() => {
    page = new CommunicationrouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
