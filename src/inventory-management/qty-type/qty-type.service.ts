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
    ) { }

    async create(createQtyTypeDto: CreateQtyTypeDto): Promise<QtyType> {
        const { mainQtyId, ...rest } = createQtyTypeDto;
        const qtyType = this.qtyTypeRepository.create(rest);

        // If mainQtyId is provided, fetch the related entity and assign
        if (mainQtyId) {
            qtyType.mainQty = await this.qtyTypeRepository.findOne({ where: { id: mainQtyId } });
        }

        return await this.qtyTypeRepository.save(qtyType);
    }

    async findAll(): Promise<QtyType[]> {
        return await this.qtyTypeRepository.find({ relations: ['mainQty'] });
    }

    async findOne(id: number): Promise<QtyType> {
        return await this.qtyTypeRepository.findOneOrFail({ where: { id }, relations: ['mainQty'] });
    }


    async update(id: number, updateQtyTypeDto: UpdateQtyTypeDto): Promise<QtyType> {
        const { mainQtyId, ...rest } = updateQtyTypeDto;
        const qtyType = await this.qtyTypeRepository.findOneOrFail({ where: { id } });

        // Update simple fields
        Object.assign(qtyType, rest);

        // Update relation if mainQtyId is provided (including null to remove relation)
        if (typeof mainQtyId !== 'undefined') {
            if (mainQtyId === null) {
                qtyType.mainQty = null;
            } else {
                qtyType.mainQty = await this.qtyTypeRepository.findOne({ where: { id: mainQtyId } });
            }
        }

        return await this.qtyTypeRepository.save(qtyType);
    }


    async remove(id: number): Promise<void> {
        await this.qtyTypeRepository.delete(id);
    }
}