import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenghasilPage } from './penghasil.page';

describe('PenghasilPage', () => {
  let component: PenghasilPage;
  let fixture: ComponentFixture<PenghasilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenghasilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenghasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
