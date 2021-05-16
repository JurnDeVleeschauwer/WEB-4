interface OrderJson {
  userName: string;
  producten: string;
}

export class Order {
  constructor(private _userName: string, private _producten: string) {}
  get userName(): string {
    return this._userName;
  }
  get producten(): string {
    return this._producten;
  }

  toJSON(): OrderJson {
    return <OrderJson>{
      userName: this._userName,
      producten: this._producten,
    };
  }
  //{userName= "", producten= ""}
  static fromJSON(jsonOrder: any): Order {
    return new Order(jsonOrder.userName, jsonOrder.producten);
  }
}
