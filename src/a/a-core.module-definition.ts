import { ConfigurableModuleBuilder } from '@nestjs/common';
import { AModuleConfig } from './a-config.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<AModuleConfig>()
    .setClassMethodName('forRoot')
    .build();
