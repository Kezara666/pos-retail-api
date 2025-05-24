
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QtyType } from '../../inventory-management/qty-type/entities/qty-type.entity';
import { Supplier } from '../supplier/entities/supplier.entity';
import { ProductPrice } from '../product-prices/entities/product-price.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Product)
    private readonly productPriceRepository: Repository<ProductPrice>,
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    @InjectRepository(QtyType)
    private readonly qtyTypeRepository: Repository<QtyType>,

  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { supplierId, qtyTypeId, productPriceId, ...rest } = createProductDto;

    const supplier = await this.supplierRepository.findOne({ where: { id: supplierId } });
    if (!supplier) throw new NotFoundException(`Supplier with id ${supplierId} not found`);

    const qtyType = await this.qtyTypeRepository.findOne({ where: { id: qtyTypeId } });
    if (!qtyType) throw new NotFoundException(`QtyType with id ${qtyTypeId} not found`);

    let productPrice = null;
    if (productPriceId !== undefined) {
      productPrice = await this.productPriceRepository.findOne({ where: { id: productPriceId } });
      if (!productPrice) throw new NotFoundException(`ProductPrice with id ${productPriceId} not found`);
    }

    const product = this.productRepository.create({
      ...rest,
      supplier,
      qtyType,
      productPrice,
    });

    return await this.productRepository.save(product);
  }


  async findAll(): Promise<Product[]> {
    // Add relations if Product has any (e.g., supplier, qtyType)
    return await this.productRepository.find({ relations: ['supplier', 'qtyType'] });
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOneOrFail({ where: { id }, relations: ['supplier', 'qtyType'] });
  }


  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['supplier', 'qtyType', 'productPrice'],
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    Object.assign(product, updateProductDto);

    // Handle supplier
    if (updateProductDto.supplierId !== undefined) {
      const supplier = await this.supplierRepository.findOne({ where: { id: updateProductDto.supplierId } });
      if (!supplier) throw new NotFoundException(`Supplier with id ${updateProductDto.supplierId} not found`);
      product.supplier = supplier;
    }

    // Handle qtyType
    if (updateProductDto.qtyTypeId !== undefined) {
      const qtyType = await this.qtyTypeRepository.findOne({ where: { id: updateProductDto.qtyTypeId } });
      if (!qtyType) throw new NotFoundException(`QtyType with id ${updateProductDto.qtyTypeId} not found`);
      product.qtyType = qtyType;
    }

    // Handle productPrice
    if (updateProductDto.productPriceId !== undefined) {
      const productPrice = await this.productPriceRepository.findOne({ where: { id: updateProductDto.productPriceId } });
      if (!productPrice) throw new NotFoundException(`ProductPrice with id ${updateProductDto.productPriceId} not found`);
      product.productPrice = productPrice;
    }

    await this.productRepository.save(product);
    return await this.findOne(id);
  }



  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
