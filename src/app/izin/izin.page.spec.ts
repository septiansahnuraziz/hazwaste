import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzinPage } from './izin.page';

describe('IzinPage', () => {
  let component: IzinPage;
  let fixture: ComponentFixture<IzinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
