interface ProductJson {
  name: string;
  price: number;
}

export class Product {
  constructor(private _name: string, private _price) {}
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }

  toJSON(): ProductJson {
    return <ProductJson>{
      name: this.name,
      price: this.price,
    };
  }
  //{name= "", price= ""}
  static fromJSON(jsonProduct: any): Product {
    return new Product(jsonProduct.name, jsonProduct.price);
  }
}
