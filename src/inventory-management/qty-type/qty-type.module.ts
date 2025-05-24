import { Module } from '@nestjs/common';
import { QtyTypeService } from './qty-type.service';
import { QtyTypeController } from './qty-type.controller';
import { QtyType } from './entities/qty-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QtyType])],
  controllers: [QtyTypeController],
  providers: [QtyTypeService],
})
export class QtyTypeModule {}


