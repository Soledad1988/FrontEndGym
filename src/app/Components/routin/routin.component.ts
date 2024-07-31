import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { CategoryService } from '../../service/category.service';
import { ToastrService } from 'ngx-toastr';
import { Routine } from '../../models/Routine';
import { RoutinService } from '../../service/routin.service';

@Component({
  selector: 'app-routin',
  templateUrl: './routin.component.html',
  styleUrl: './routin.component.css'
})
export class RoutinComponent implements OnInit{

  category: Category = new Category();
  categories: Category[] = [];

  routin: Routine = new Routine();
  routines: Routine[] = [];

  constructor( private categoryService: CategoryService,
    private routinService: RoutinService,
    private toastr: ToastrService, 
  ) { }

  ngOnInit(): void {
    this.getCategory();
   }

  createCategory() {
    this.categoryService.createCategory(this.category).subscribe(
      res => {
        console.log(res);
        this.toastr.success('El cliente se ha creado correctamente', 'Éxito');
        this.getCategory(); // Refresh categories after adding a new one
      },
      (err) => {
        console.error('Error al crear cliente:', err);
        this.toastr.error('Error al crear el cliente', 'Error');
     
      }
    );
  }

  getCategory(): void {
    this.categoryService.getCategory().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error al obtener las categorias:', error);
      }
    );
  }


  createRutine() {
    if (this.routin.categoryId) {
      this.routinService.assignCategoryToRoutine(this.routin.categoryId, this.routin).subscribe(
        res => {
          console.log(res);
          this.toastr.success('La rutina se ha creado y asignado a la categoría', 'Éxito');
        },
        err => {
          console.error('Error al crear la rutina:', err);
          this.toastr.error('Error al crear la rutina', 'Error');
        }
      );
    } else {
      console.error('Error: No se ha seleccionado una categoría para la rutina');
      this.toastr.error('Error: No se ha seleccionado una categoría para la rutina', 'Error');
    }
  }

  getRoutine(): void {
    this.routinService.getRoutine().subscribe(
      (data: Routine[]) => {
        this.routines = data;
      },
      error => {
        console.error('Error al obtener las rutinas:', error);
      }
    );
  }

  scrollCarousel(categoryId: number | undefined, direction: string): void {
    if (categoryId !== undefined) {
      const carousel = document.getElementById('routine-carousel-' + categoryId);
      const scrollAmount = 320; // Width of routine card plus margin

      if (carousel) {
        if (direction === 'left') {
          carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
          });
        } else if (direction === 'right') {
          carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }
  }
}

