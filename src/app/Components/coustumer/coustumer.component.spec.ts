import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustumerComponent } from './coustumer.component';

describe('CoustumerComponent', () => {
  let component: CoustumerComponent;
  let fixture: ComponentFixture<CoustumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoustumerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
