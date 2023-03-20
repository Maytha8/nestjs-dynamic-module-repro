import { Module } from '@nestjs/common';
import { BService } from './b.service';
import { BController } from './b.controller';
import { AModule } from 'src/a/a.module';

@Module({
  imports: [AModule],
  providers: [BService],
  controllers: [BController],
})
export class BModule {}
