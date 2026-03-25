import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purechse.service';

@Controller('products')
export class PurchaseController {
  constructor(private readonly purchaseSerice: PurchaseService) {}

  @Get()
  getPurechse() {
    return {
      success: true,
      data: this.purchaseSerice.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
