import { Global, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './a-core.module-definition';
import { AService } from './a.service';

@Global()
@Module({
  providers: [AService],
  exports: [AService],
})
export class ACoreModule extends ConfigurableModuleClass {}
