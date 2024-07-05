import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { ScrapingDTO } from './dto/scraping.dto';
import { ScrapingService } from './scraping.service';
import { Response } from 'express';
//import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly scrapingService: ScrapingService) {}

  @Post()
  //@UseFilters(new HttpExceptionFilter())
  async createScraping(@Body() scraping: ScrapingDTO, @Res() res: Response) {
    try {
      let data = await this.scrapingService.createScraping(scraping);
      res.status(HttpStatus.OK).json({ result: data });
    } catch (err) {
      res.status(500).json({ message: err.message, statusCode: 500 });
    }
  }
}
