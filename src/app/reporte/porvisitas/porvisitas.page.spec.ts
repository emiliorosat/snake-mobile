import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorvisitasPage } from './porvisitas.page';

describe('PorvisitasPage', () => {
  let component: PorvisitasPage;
  let fixture: ComponentFixture<PorvisitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorvisitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorvisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
