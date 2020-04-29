import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain contact info in footer', () => {
    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('li').textContent).toContain('E-services, 2020');
    expect(compiled.getElementsByTagName('li')[1].textContent).toContain('Riga, Latvia');
    expect(compiled.getElementsByTagName('li')[2].textContent).toContain('+371 29 831 905');
  });

});
