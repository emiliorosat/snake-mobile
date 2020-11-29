import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorfechaPage } from './porfecha.page';

describe('PorfechaPage', () => {
  let component: PorfechaPage;
  let fixture: ComponentFixture<PorfechaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfechaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorfechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
