import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @Output() public newProduct = new EventEmitter<Product>();
  productFG: FormGroup;

  constructor() {}

  ngOnInit() {
    this.productFG = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required]),
    });
  }

  submitProduct(): boolean {
    const product = new Product(
      this.productFG.value.name,
      this.productFG.value.price
    );
    this.newProduct.emit(product);
    return false;
  }

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} charaters (got ${errors.minlength.actualLength})`;
    }
  }
}
