
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,
    ) {}

    async create(createSupplierDto: CreateSupplierDto): Promise<Supplier> {
        const supplier = this.supplierRepository.create(createSupplierDto);
        return await this.supplierRepository.save(supplier);
    }

    async findAll(): Promise<Supplier[]> {
        // Add relations if Supplier has any (e.g., products, addresses)
        return await this.supplierRepository.find();
    }

    async findOne(id: number): Promise<Supplier> {
        return await this.supplierRepository.findOneOrFail({ where: { id } });
    }

    async update(id: number, updateSupplierDto: UpdateSupplierDto): Promise<Supplier> {
        await this.supplierRepository.update(id, updateSupplierDto);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.supplierRepository.delete(id);
    }
}
