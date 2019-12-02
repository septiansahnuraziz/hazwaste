import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIzinPage } from './add-izin.page';

describe('AddIzinPage', () => {
  let component: AddIzinPage;
  let fixture: ComponentFixture<AddIzinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIzinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIzinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
