import { Inject, Injectable } from '@nestjs/common';
import { AModuleConfig, MODULE_OPTIONS_TOKEN } from './a.module-definition';

@Injectable()
export class AService {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: AModuleConfig) {}

  greet(name: string) {
    if (typeof this.options.greeting === 'function') {
      return this.options.greeting(name);
    } else {
      return this.options.greeting + ' ' + name + '.';
    }
  }
}
