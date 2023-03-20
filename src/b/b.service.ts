import { Injectable } from '@nestjs/common';
import { AService } from '../a/a.service';

@Injectable()
export class BService {
  constructor(private aService: AService) {}

  genSentence(name: string) {
    return this.aService.greet(name) + ' Have a great day!';
  }
}
