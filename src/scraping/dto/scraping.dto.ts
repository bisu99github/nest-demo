import { IsString, IsNotEmpty, IsIn } from 'class-validator';
const tags = ['p', 'href', 'img'];
export class ScrapingDTO {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(tags)
  tag: string;
}
