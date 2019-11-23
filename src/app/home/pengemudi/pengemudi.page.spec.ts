import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengemudiPage } from './pengemudi.page';

describe('PengemudiPage', () => {
  let component: PengemudiPage;
  let fixture: ComponentFixture<PengemudiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengemudiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengemudiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
