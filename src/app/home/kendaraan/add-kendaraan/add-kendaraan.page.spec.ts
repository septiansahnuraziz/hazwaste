import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddKendaraanPage } from './add-kendaraan.page';

describe('AddKendaraanPage', () => {
  let component: AddKendaraanPage;
  let fixture: ComponentFixture<AddKendaraanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKendaraanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddKendaraanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
