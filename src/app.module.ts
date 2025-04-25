import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QtyTypeModule } from './item-management/qty-type/qty-type.module';
import { SupplierModule } from './item-management/supplier/supplier.module';
import { ProductsModule } from './item-management/products/products.module';
import { QtyModule } from './item-management/qty/qty.module';
import { ItemSellModule } from './sale-management/item-sell/item-sell.module';
import { InvoiceModule } from './sale-management/invoice/invoice.module';
import { CustomerModule } from './sale-management/customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type
      host: 'localhost', // MySQL server host
      port: 3306, // MySQL server port
      username: 'root', // MySQL username
      password: '', // MySQL password
      database: 'pos', // Database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entity files
      synchronize: true, // Automatically sync database schema (not recommended for production)
    }),
    
    QtyTypeModule,
    SupplierModule,
    ProductsModule,
    ProductsModule,
    QtyModule,
    ItemSellModule,
    InvoiceModule,
    CustomerModule
  ],
  
  controllers: [AppController],
  providers: [AppService,],
  
})
export class AppModule {}
