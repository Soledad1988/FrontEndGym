import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coustumer',
  templateUrl: './coustumer.component.html',
  styleUrl: './coustumer.component.css'
})
export class CoustumerComponent implements OnInit{

  customer: Customer = new Customer();
  customers: Customer[] = [];
  searchName: string = '';
  searchLastName: string = '';

  editCustomerId: number | null = null;

  selectedCustomer: any;
  currentDate: Date = new Date();

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService, 
  ) {}

  ngOnInit(): void {
    //this.getCustomers();
    this.loadCustomers();
  }

  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      res => {
        console.log(res);
        this.toastr.success('El cliente se ha creado correctamente', 'Éxito');
        this.getCustomers();
      },
      (err) => {
        console.error('Error al crear cliente:', err);
        this.toastr.error('Error al crear el cliente', 'Error');
     
      }
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

  editCustomer(idCustomer: number) {
    this.editCustomerId = idCustomer;
  }

  saveCustomer(customer: Customer): void {
    if (customer.idCustomer) {
      this.customerService.update(customer.idCustomer, customer).subscribe(
        res => {
          console.log('Cliente actualizado correctamente:', res);
          this.toastr.success('Cliente actualizado correctamente:', 'Éxito');
          this.editCustomerId = null;
          this.getCustomers(); // Actualiza la lista de clientes después de guardar los cambios
        },
        error => {
          console.error('Error al guardar el cliente:', error);
        }
      );
    }
  }

  cancelEdit() {
    this.editCustomerId = null;
    this.getCustomers(); // Revertir los cambios y actualizar la lista
  }

  deleteCustomer(idCustomer: number) {
    this.customerService.deleteCustomer(idCustomer).subscribe(
      res => {
        console.log('Cliente eliminado correctamente:', res);
        this.getCustomers(); // Actualiza la lista de clientes después de eliminar uno
        this.toastr.success('El cliente se ha eliminado correctamente', 'Cuidado');
      },
      error => {
        console.error('Error al eliminar el cliente:', error);
      }
    );
  }

  loadCustomers(): void {
    this.customerService.getCustomer().subscribe(data => {
      this.customers = data;
    });
  }

  onSearch(): void {
    this.customerService.searchCustomers(this.searchName, this.searchLastName).subscribe(data => {
      this.customers = data;
    });
  }

  /*viewDetails(customer: any) {
    this.selectedCustomer = customer;
  }*/
    viewDetails(customer: any) {
      this.selectedCustomer = customer;
  
      // Calcular el estado de cada cuota
      this.selectedCustomer.fees.forEach((fee: any) => {
        const feeDate = new Date(fee.datePayment);
        fee.isPending = feeDate < this.currentDate;
      });
    }

  closeDetails() {
    this.selectedCustomer = null;
  }


}
