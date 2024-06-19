import { Component } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../service/customer.service';
import { PayService } from '../../service/pay.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  selected: Date | null = null;

  showFeeForm = false;
  selectedDate: Date | null = null;
  feeAmount: number | null = null;
  selectedCustomerId: number | null = null;
  selectedCustomer: Customer | null = null;
  customers: Customer[] = [];

  constructor(private route: ActivatedRoute, 
    private customerService: CustomerService,
    private feeService: PayService
  ) { }

  ngOnInit() {
    const customerId = this.route.snapshot.paramMap.get('idCustomer');
    if (customerId) {
      this.customerService.getCustomerById(+customerId).subscribe(customer => {
        this.selectedCustomer = customer;
      });
    }
  }


  loadCustomers() {
    this.customerService.getCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }

  assignFeeToCustomer() {
    // Verificar que se haya seleccionado un cliente, una fecha y un importe
    if (this.selectedCustomerId && this.selectedDate && this.feeAmount) {
      // Crear objeto con los datos de la cuota
      const feeData = {
        datePayment: this.selectedDate.toISOString(),  // Convertir la fecha a formato ISO
        fee: this.feeAmount
      };

      // Llamar al servicio para asignar la cuota al cliente seleccionado
      this.feeService.assignFeeToCustomer(this.selectedCustomerId, feeData).subscribe(
        (response) => {
          console.log('Cuota asignada exitosamente:', response);
          // Limpiar campos después de asignar la cuota
          this.selectedDate = null;
          this.feeAmount = null;
          // Recargar la lista de clientes después de asignar la cuota
          this.loadCustomers();
        },
        (error) => {
          console.error('Error al asignar la cuota:', error);
          // Manejar el error según sea necesario
        }
      );
    } else {
      console.error('Debe seleccionar un cliente, una fecha y un importe.');
      // Manejar caso donde faltan datos requeridos
    }
  }

  cancelAssignFee() {
    this.showFeeForm = false;
    this.feeAmount = null;
    this.selectedDate = new Date();
  }
}
