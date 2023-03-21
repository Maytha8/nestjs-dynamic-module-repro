import { Module } from '@nestjs/common';
import { BService } from './b.service';
import { BController } from './b.controller';
import { AModule } from '../a/a.module';

@Module({
  providers: [BService],
  controllers: [BController],
})
export class BModule {}
