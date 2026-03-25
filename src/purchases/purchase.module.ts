import { Module } from '@nestjs/common';
import { PurchaseService } from './purechse.service';
import { PurchaseController } from './purechase.controller';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
