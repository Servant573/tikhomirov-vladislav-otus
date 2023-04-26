import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import {
  buildSchemaSync,
  Resolver,
  Query,
  FieldResolver,
  Root,
  Arg,
  ObjectType,
  Field,
  ID,
} from 'type-graphql';
import { DiscountInterface, ManufacturerInterface, ProductInterface } from './interfaces';
import { products, manufacturers, discounts } from './data.js';

@ObjectType({ description: 'Product data' })
class Product {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  weight: number;

  @Field()
  price: number;

  @Field((type) => ID)
  manufacturerId: number;

  @Field((type) => Manufacturer)
  manufacturer: ManufacturerInterface;

  @Field((type) => ID, { nullable: true })
  discountId?: number;

  @Field((type) => Discount, { nullable: true })
  discount?: DiscountInterface;
}

@Resolver((of) => Product)
class ProductResolver {
  @Query((returns) => [Product])
  products(): Array<ProductInterface> {
    return products;
  }
}

@ObjectType({ description: 'Manufacturer data with related Product data' })
class Manufacturer {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => [Product], { nullable: true })
  products?: ProductInterface[];
}

@Resolver((of) => Manufacturer)
class ManufacturerResolver {
  @Query((returns) => [Manufacturer])
  manufacturers(
    @Arg('limit', { nullable: true }) limit: number = 3
  ): Array<ManufacturerInterface> {
    return manufacturers.slice(0, limit);
  }

  @FieldResolver((type) => [Product])
  products(@Root() manufacturer: ManufacturerInterface) {
    return products.filter((o) => o.manufacturerId === manufacturer.id);
  }
}

@ObjectType({ description: 'Discount data' })
class Discount {
  @Field((type) => ID)
  id: number;

  @Field()
  code: string;

  @Field()
  percentage: number;
}

@Resolver((of) => Discount)
class DiscountResolver {
  @Query((returns) => [Discount])
  discounts(): Array<DiscountInterface> {
    return discounts;
  }
}

const schema = buildSchemaSync({
  resolvers: [ProductResolver, ManufacturerResolver, DiscountResolver],
});

console.log('Hello world!');

const server = new ApolloServer({ schema });
server.listen(5000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
