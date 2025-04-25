import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QtyType } from './entities/qty-type.entity';
import { CreateQtyTypeDto } from './dto/create-qty-type.dto';
import { UpdateQtyTypeDto } from './dto/update-qty-type.dto';

@Injectable()
export class QtyTypeService {
    constructor(
        @InjectRepository(QtyType)
        private readonly qtyTypeRepository: Repository<QtyType>,
    ) {}

    async create(createQtyTypeDto: CreateQtyTypeDto): Promise<QtyType> {
        const qtyType = this.qtyTypeRepository.create(createQtyTypeDto);
        return await this.qtyTypeRepository.save(qtyType);
    }

    async findAll(): Promise<QtyType[]> {
        return await this.qtyTypeRepository.find({ relations: ['mainQty'] });
    }

    async findOne(id: number): Promise<QtyType> {
        return await this.qtyTypeRepository.findOneOrFail({ where: { id }, relations: ['mainQty'] });
    }

    async update(id: number, updateQtyTypeDto: UpdateQtyTypeDto): Promise<QtyType> {
        await this.qtyTypeRepository.update(id, updateQtyTypeDto);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.qtyTypeRepository.delete(id);
    }
}