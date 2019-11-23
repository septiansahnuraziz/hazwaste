import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KendaraanPage } from './kendaraan.page';

describe('KendaraanPage', () => {
  let component: KendaraanPage;
  let fixture: ComponentFixture<KendaraanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendaraanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KendaraanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
