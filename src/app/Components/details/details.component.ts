import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  customers: Customer[] = [];
  searchName: string = '';
  searchLastName: string = '';

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService, 
  ) {}

  ngOnInit(): void {
    this.loadCustomersWithFees();
  }
  
  getCustomers(): void {
    this.customerService.getCustomer().subscribe(
      (data: Customer[]) => {
        console.log('Clientes obtenidos:', data);
        this.customers = data;
      },
      (error) => {
        console.error('Error al obtener los clientes:', error);
      }
    );
  }

  loadCustomersWithFees(): void {
    this.customerService.getCustomersWithFees().subscribe(
      (data: Customer[]) => {
        console.log('Clientes obtenidos con cuotas:', data);
        this.customers = data;
      },
      (error) => {
        console.error('Error al obtener los clientes con cuotas:', error);
        this.toastr.error('Error al cargar clientes con cuotas', 'Error');
      }
    );
  }

  onSearch(): void {
    this.customerService.searchCustomers(this.searchName, this.searchLastName).subscribe(data => {
      console.log('Clientes encontrados:', data);
      this.customers = data;
    });
  }

}
