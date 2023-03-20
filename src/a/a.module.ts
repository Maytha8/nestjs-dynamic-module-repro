import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './a.module-definition';
import { AService } from './a.service';

@Module({
  providers: [AService],
  exports: [AService],
})
export class AModule extends ConfigurableModuleClass {}
