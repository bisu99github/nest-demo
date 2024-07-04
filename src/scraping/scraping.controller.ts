import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { ScrapingDTO } from './dto/scraping.dto';
import { ScrapingService } from './scraping.service';
import { Response } from 'express';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly scrapingService: ScrapingService) {}

  @Post()
  async createScraping(@Body() scraping: ScrapingDTO, @Res() res: Response) {
    let data = await this.scrapingService.createScraping(scraping);
    res.status(HttpStatus.OK).json({ result: data });
  }
}
