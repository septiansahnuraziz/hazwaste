import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPengemudiPage } from './add-pengemudi.page';

describe('AddPengemudiPage', () => {
  let component: AddPengemudiPage;
  let fixture: ComponentFixture<AddPengemudiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPengemudiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPengemudiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
