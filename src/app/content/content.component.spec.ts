import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';


describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show all default values', () => {
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.getElementsByClassName('main__invoice-text')[0].textContent).toContain('Invoices');
    expect(compiled.querySelector('a').textContent).toContain('Review all invoices >');
    expect(compiled.querySelectorAll('p')[1].textContent).toContain('All invoices are done');
    expect(compiled.querySelectorAll('p')[2].textContent).toContain('Discounts for You and Your friend!');
    expect(component.steps.length).toEqual(3);

    expect(compiled.querySelectorAll('button')[0].textContent).toContain('Receive discount');
    expect(compiled.querySelectorAll('p')[3].textContent).toContain('Discounts of this Month');
    expect(compiled.querySelectorAll('button')[1].textContent).toContain('Receive discount');

  })
});

