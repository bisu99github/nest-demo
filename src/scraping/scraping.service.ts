import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import puppeteer from 'puppeteer';

@Injectable()
export class ScrapingService {
  async createScraping(postData): Promise<any> {
    try {
      let tag = postData.tag;
      let webUrl = postData.url;
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(webUrl);
      var eleContents;
      switch (tag) {
        case 'p': {
          eleContents = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('p')).map(
              (heading) => heading.innerText,
            );
          });
          break;
        }
        case 'img': {
          eleContents = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('img')).map((image) =>
              image.getAttribute('src'),
            );
          });
          break;
        }
        case 'href': {
          eleContents = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('link')).map((image) =>
              image.getAttribute('href'),
            );
          });
          break;
        }
      }
      await browser.close();
      return eleContents;
    } catch (error) {
      throw error;
    }
  }
}
