import { Inject, Injectable } from '@nestjs/common';
import { AModuleConfig } from './a-config.interface';
import { A_MODULE_OPTIONS_TOKEN } from './a.constants';

@Injectable()
export class AService {
  constructor(@Inject(A_MODULE_OPTIONS_TOKEN) private options: AModuleConfig) {}

  greet(name: string) {
    if (typeof this.options.greeting === 'function') {
      return this.options.greeting(name);
    } else {
      return this.options.greeting + ' ' + name + '.';
    }
  }
}
