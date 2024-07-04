import { Module } from '@nestjs/common';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';

@Module({
  imports: [],
  providers: [ScrapingService],
  controllers: [ScrapingController],
})
export class ScrapingModule {}
