import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    description: string;
}

@Injectable()
export class ProductService {
  findAll(): { success: boolean; data: Product[]; message: string } {
    const DATA = fs.readFileSync('data/products.json', 'utf-8');
    const data = JSON.parse(DATA) as Product[];
    return {
      success: true,
      data: data,
      message: 'Fetched products successfully',
    };
  }
}
