import { BucketlistFrontendPage } from './app.po';

describe('bucketlist-frontend App', () => {
  let page: BucketlistFrontendPage;

  beforeEach(() => {
    page = new BucketlistFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
