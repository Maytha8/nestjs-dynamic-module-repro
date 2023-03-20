import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface AModuleConfig {
  greeting: string | ((name: string) => string);
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<AModuleConfig>()
    .setClassMethodName('forRoot')
    .build();
