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

  customer: Customer[] = [];

  constructor(private costomerService: CustomerService,
    private router:Router, 
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  createCutomer(){
    this.costomerService.createCutomer(this.costomerService).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/menu']);
      },
      err=>console.log(err)
    );
  }


getCustomer(): void{
    this.costomerService.getCustomer().subscribe(
      res=>{
        this.getCustomer=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }
}
