import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../service/customer.service';
import { PayService } from '../../service/pay.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent implements OnInit{
  selectedDate: Date | null = null;
  actualCustomer: Customer  = {
    name:'',
    lastName:''
  };

  feeAmount: number | null = null;
  showFeeForm = false;

  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private payService: PayService,
    private router: Router,
    private toastr: ToastrService,  
  ) {}

  ngOnInit(): void {
   this.getCustomers();
  }

  getCustomers(): void {
    this.activatedRoute.params.subscribe(params => {
      const idCustomer = params['id'];
      if (idCustomer) {
        this.customerService.getCustomerById(idCustomer).subscribe(
          res => {
            this.actualCustomer = res;
          
          },
          error => {
            console.error('Error al obtener el colaborador:', error);
          }
        );
      }
    });
  }

  assignFee(): void {
    if (this.feeAmount !== null && this.selectedDate !== null) {
      const feeData = {
        fee: this.feeAmount,
        datePayment: this.selectedDate
      };
  
      console.log('Sending fee data:', feeData);
  
      this.payService.assignFeeToCustomer(this.actualCustomer.idCustomer!, feeData).subscribe(
        response => {
          console.log('Cuota asignada exitosamente', response);
          this.toastr.success('Cuota asignada exitosamente', 'Éxito');
          this.router.navigate(['/customer']);
        },
        error => {
          console.error('Error al asignar la cuota:', error);
        }
      );
    } else {
      console.error('Fecha o importe no válidos');
    }
  }

  cancel(): void {
    this.toastr.info('Operación cancelada', 'Atención');
    this.router.navigate(['/customer']); // Redireccionar a la ruta de clientes
  }

}
