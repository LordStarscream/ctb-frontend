export interface Deal{
    id: number;
    openTime: Date;
    type: string;
    size: number;
    item: string;
    price: number;
    orderNumber: number;
    comment: string;
    entry: string;
    commission: number;
    swap: number;
    profit: number;
}
