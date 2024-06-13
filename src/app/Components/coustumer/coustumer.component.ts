import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coustumer',
  templateUrl: './coustumer.component.html',
  styleUrl: './coustumer.component.css'
})
export class CoustumerComponent implements OnInit{

  customer: Customer = new Customer();
  customers: Customer[] = [];

  constructor(private customerService: CustomerService,
    private router:Router, 
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      res => {
        console.log(res);
        //this.router.navigate(['/menu']);
      },
      err => console.log(err)
    );
  }

  getCustomers(): void {
    this.customerService.getCustomer().subscribe(
      (data: Customer[]) => {
        this.customers = data;
      },
      (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }
}
