import { Module } from '@nestjs/common';
import { PurchaseService } from './purechses.service';
import { PurchaseController } from './purechases.controller';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class ProductModule {}
