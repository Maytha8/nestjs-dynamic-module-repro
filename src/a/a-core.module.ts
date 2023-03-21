import { DynamicModule, Global, Module } from '@nestjs/common';
import { AModuleAsyncConfig, AModuleConfig } from './a-config.interface';
import { A_MODULE_OPTIONS_TOKEN, A_SERVICE_TOKEN } from './a.constants';
import { AService } from './a.service';

@Global()
@Module({})
export class ACoreModule {
  public static forRoot(options: AModuleConfig): DynamicModule {
    return {
      module: ACoreModule,
      providers: [
        {
          provide: A_MODULE_OPTIONS_TOKEN,
          useValue: options,
        },
        AService,
      ],
      exports: [AService],
    };
  }

  static forRootAsync(options: AModuleAsyncConfig): DynamicModule {
    return {
      module: ACoreModule,
      imports: options.imports,
      providers: [
        {
          name: A_MODULE_OPTIONS_TOKEN,
          provide: A_MODULE_OPTIONS_TOKEN,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        AService,
      ],
      exports: [AService],
    };
  }
}
