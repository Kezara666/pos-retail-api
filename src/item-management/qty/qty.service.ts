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
    ) {}

    async create(createQtyDto: CreateQtyDto): Promise<Qty> {
        const qty = this.qtyRepository.create(createQtyDto);
        return await this.qtyRepository.save(qty);
    }

    async findAll(): Promise<Qty[]> {
        return await this.qtyRepository.find({ relations: ['product', 'qtyType'] });
    }

    async findOne(id: number): Promise<Qty> {
        return await this.qtyRepository.findOneOrFail({ where: { id }, relations: ['product', 'qtyType'] });
    }

    async update(id: number, updateQtyDto: UpdateQtyDto): Promise<Qty> {
        await this.qtyRepository.update(id, updateQtyDto);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.qtyRepository.delete(id);
    }
}