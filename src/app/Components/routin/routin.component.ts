import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-routin',
  templateUrl: './routin.component.html',
  styleUrl: './routin.component.css'
})
export class RoutinComponent implements OnInit{

  categories: Category[] = [
    {
      idCategory: 1,
      type: 'Cardio',
      routine: [
        { idRoutine: 1, description: 'Morning Run', dayOfWeek: 'Monday', exerciseType: 'Cardio', duration: 30, intensityLevel: 3 },
        { idRoutine: 2, description: 'Evening Swim', dayOfWeek: 'Wednesday', exerciseType: 'Cardio', duration: 45, intensityLevel: 4 },
        // Add more routines as needed
      ]
    },
    {
      idCategory: 2,
      type: 'Strength Training',
      routine: [
        { idRoutine: 3, description: 'Weight Lifting', dayOfWeek: 'Tuesday', exerciseType: 'Strength Training', duration: 60, intensityLevel: 5 },
        // Add more routines as needed
      ]
    }
    // Add more categories as needed
  ];

  constructor() { }

  ngOnInit(): void { }

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

