import {
  ConfigurableModuleAsyncOptions,
  DynamicModule,
  Module,
} from '@nestjs/common';
import { AModuleConfig } from './a-config.interface';
import { ACoreModule } from './a-core.module';

@Module({})
export class AModule {
  static forRoot(options?: AModuleConfig): DynamicModule {
    return {
      module: AModule,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      imports: [ACoreModule.forRoot(options!)],
    };
  }

  static forRootAsync(
    options: ConfigurableModuleAsyncOptions<AModuleConfig>,
  ): DynamicModule {
    return {
      module: AModule,
      imports: [ACoreModule.forRootAsync(options)],
    };
  }
}
