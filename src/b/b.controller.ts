import { Controller, Get, Query } from '@nestjs/common';
import { BService } from './b.service';

@Controller('b')
export class BController {
  constructor(private bService: BService) {}

  @Get()
  getSentence(@Query('name') name: string) {
    return this.bService.genSentence(name);
  }
}
