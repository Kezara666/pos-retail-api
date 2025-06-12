import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Qty } from './entities/qty.entity';
import { CreateQtyDto } from './dto/create-qty.dto';
import { UpdateQtyDto } from './dto/update-qty.dto';

@Injectable()
export class QtyService {
    constructor(
        @InjectRepository(Qty)
        private readonly qtyRepository: Repository<Qty>,
    ) { }

    async create(createQtyDto: CreateQtyDto): Promise<Qty> {
        const { productId, qtyTypeId, qty } = createQtyDto;
        const qtyEntity = this.qtyRepository.create({
            qty,
            product: { id: productId },       // assign relation using id
            qtyType: { id: qtyTypeId },       // same for qtyType
        });
        return await this.qtyRepository.save(qtyEntity);
    }

    async findAll(): Promise<Qty[]> {
        return await this.qtyRepository.find({ relations: ['product', 'qtyType'] });
    }

    async findOne(id: number): Promise<Qty> {
        return await this.qtyRepository.findOneOrFail({ where: { id }, relations: ['product', 'qtyType'] });
    }

    async remove(id: number): Promise<void> {
        await this.qtyRepository.delete(id);
    }

    async update(id: number, updateQtyDto: UpdateQtyDto): Promise<Qty> {
        // Transform DTO to match entity structure for relations
        const updateData: any = { ...updateQtyDto };

        if (updateQtyDto.product !== undefined) {
            updateData.product = updateQtyDto.product !== null
                ? { id: updateQtyDto.product }
                : null;
        }

        if (updateQtyDto.qtyType !== undefined) {
            updateData.qtyType = updateQtyDto.qtyType !== null
                ? { id: updateQtyDto.qtyType }
                : null;
        }

        await this.qtyRepository.update(id, updateData);
        return await this.findOne(id);
    }
}