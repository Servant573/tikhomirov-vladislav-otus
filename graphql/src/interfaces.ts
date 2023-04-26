export interface ProductInterface {
    id: number;
    title: string;
    weight: number;
    price: number;
    manufacturerId: number;
    discountId?: number | null;
}

export interface ManufacturerInterface {
    id: number;
    name: string;
}

export interface DiscountInterface {
    id: number;
    value: number;
}