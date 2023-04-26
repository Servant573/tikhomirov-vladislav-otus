import { DiscountInterface, ManufacturerInterface, ProductInterface } from './interfaces.js'

export const products: ProductInterface[] = [
    { id: 1, title: 'Milk', weight: 900, price: 80, manufacturerId: 1, discountId: 1 },
    { id: 2, title: 'Porigge', weight: 200, price: 180, manufacturerId: 1, discountId: null },
    { id: 3, title: 'Apples', weight: 500, price: 200, manufacturerId: 2, discountId: 1 },
    { id: 4, title: 'Bread', weight: 300, price: 160, manufacturerId: 3, discountId: 4 },
    { id: 5, title: 'Potatos', weight: 1000, price: 60, manufacturerId: 1, discountId: 5 },
    ];

export const manufacturers: ManufacturerInterface[] = [
    { id: 1, name: 'Sample food producer' },
    { id: 2, name: 'Very fast food' },
    { id: 3, name: 'Healthy food' },
    ];

export const discounts: DiscountInterface[] = [
    { id: 1, value: .05 },
    { id: 2, value: .10 },
    { id: 3, value: .15 },
    { id: 4, value: .20 },
    { id: 5, value: .25 },
    { id: 6, value: .30 },
    ]