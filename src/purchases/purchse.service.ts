import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Purchase } from './purchase.interface';

@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const DATA = fs.readFileSync('data/products.json', 'utf-8');
    const data = JSON.parse(DATA) as Purchase[];
    return data;
  }
  findOne(id: number) {
    const DATA = fs.readFileSync('data/purchases.json', 'utf-8');
    const data = JSON.parse(DATA) as Purchase[];
   
}
}
