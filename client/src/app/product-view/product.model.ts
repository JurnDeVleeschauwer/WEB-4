export class Product {
  constructor(private _name: string, private _price) {}
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }

  //{name= "", price= ""}
  static fromJSON(jsonProduct: any): Product {
    return new Product(jsonProduct.name, jsonProduct.price);
  }
}
