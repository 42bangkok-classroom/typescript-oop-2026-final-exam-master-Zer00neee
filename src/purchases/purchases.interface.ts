export interface Purchase {
    id: number;
    customerName: string;
    purchasesDate: number;
    items: [
        { productId: number, quantity: number, price: number},
        { productId: number, quantity: number, price: number}
      ]
    totalPrice: number
}
