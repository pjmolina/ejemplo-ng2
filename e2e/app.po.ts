import { browser, element, by } from 'protractor';

export class Master00Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getFirstH1() {
    return element.all(by.css('h1')).first().getText();
  }
}
