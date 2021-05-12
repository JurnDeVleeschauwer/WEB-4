import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductDataService } from '../product-data/product-data.service';
import { Product } from '../Product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productFG: FormGroup;
  errorMessage: any;
  confirmationMessage: string;
  @Output() add = new EventEmitter();

  constructor(private _productDataService: ProductDataService) {}

  ngOnInit() {
    this.productFG = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this._productDataService.addNewProduct(
      new Product(this.productFG.value.name, this.productFG.value.price)
    );
  }

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} charaters (got ${errors.minlength.actualLength})`;
    }
  }
}
