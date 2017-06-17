import { TaskListAppPage } from './app.po';

describe('task-list-app App', () => {
  let page: TaskListAppPage;

  beforeEach(() => {
    page = new TaskListAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
