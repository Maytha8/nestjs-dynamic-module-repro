import { DynamicModule, Module } from '@nestjs/common';
import { AModuleAsyncConfig, AModuleConfig } from './a-config.interface';
import { ACoreModule } from './a-core.module';
import { A_MODULE_OPTIONS_TOKEN, A_SERVICE_TOKEN } from './a.constants';
import { AService } from './a.service';

@Module({})
export class AModule {
  static forRoot(options: AModuleConfig): DynamicModule {
    return {
      module: AModule,
      imports: [ACoreModule.forRoot(options)],
    };
  }

  static forRootAsync(options: AModuleAsyncConfig): DynamicModule {
    return {
      module: AModule,
      imports: [ACoreModule.forRootAsync(options)],
    };
  }
}
