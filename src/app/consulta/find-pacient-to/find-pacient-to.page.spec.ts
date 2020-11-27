import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindPacientToPage } from './find-pacient-to.page';

describe('FindPacientToPage', () => {
  let component: FindPacientToPage;
  let fixture: ComponentFixture<FindPacientToPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPacientToPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindPacientToPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
