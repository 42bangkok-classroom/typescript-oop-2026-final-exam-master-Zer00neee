import { Module } from '@nestjs/common';
import { PurchaseService } from './purchse.service';
import { PurchaseController } from './purchase.controller';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
