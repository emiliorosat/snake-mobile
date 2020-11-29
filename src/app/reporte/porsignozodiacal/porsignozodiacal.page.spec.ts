import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorsignozodiacalPage } from './porsignozodiacal.page';

describe('PorsignozodiacalPage', () => {
  let component: PorsignozodiacalPage;
  let fixture: ComponentFixture<PorsignozodiacalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorsignozodiacalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorsignozodiacalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
