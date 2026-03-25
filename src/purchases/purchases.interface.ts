export interface Purchase {
    id: number;
    customerName: string;
    purchaseDate: number;
    items: [
        { productId: number, quantity: number, price: number},
        { productId: number, quantity: number, price: number}
      ]
    totalPrice: number
}
