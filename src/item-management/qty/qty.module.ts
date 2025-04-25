import { Module } from '@nestjs/common';
import { QtyService } from './qty.service';
import { QtyController } from './qty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Qty } from './entities/qty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Qty])],
  controllers: [QtyController],
  providers: [QtyService],
})
export class QtyModule {}
