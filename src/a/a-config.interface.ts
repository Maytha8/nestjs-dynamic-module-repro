import {
  DynamicModule,
  ForwardReference,
  InjectionToken,
  OptionalFactoryDependency,
  Type,
} from '@nestjs/common';

export interface AModuleConfig {
  greeting: string | ((name: string) => string);
}

export interface AModuleAsyncConfig {
  imports?: Array<
    Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
  >;
  useFactory: (...args: any[]) => Promise<AModuleConfig> | AModuleConfig;
  inject?: Array<InjectionToken | OptionalFactoryDependency>;
}
