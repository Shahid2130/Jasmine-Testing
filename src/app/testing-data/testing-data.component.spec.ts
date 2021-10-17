import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestingDataComponent } from './testing-data.component';

describe('TestingDataComponent', () => {
  let component: TestingDataComponent;
  let fixture: ComponentFixture<TestingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 it('should return toogle value on click', () => {
      expect(component.isOn).toBe(false);
      component.clicked();
      expect(component.isOn).toBe(true);
      component.clicked();
      expect(component.isOn).toBe(false);
    });
  
    it('should return toggle value with message', () => {
      expect(component.message()).toMatch(/is off/i);
      component.clicked();
      expect(component.message()).toMatch(/is on/i);
    });

    it('should contain "Testing Data Component"', () => {
      const paragraphElement: HTMLElement = fixture.nativeElement;
      expect(paragraphElement.textContent).toContain('Testing Data Component');
    });

    it('should have <h2> with "Testing data with heading tag"', () => {
      const headingElement: HTMLElement = fixture.nativeElement;
      const h2 = headingElement.querySelector('h2')!;
      expect(h2.textContent).toEqual('Testing data with heading tag');
    });

    it('should have <h2> with "Testing data with heading tag" using debugElement', () => {
      const headingDebugElement:DebugElement=fixture.debugElement
      const headingElement: HTMLElement = headingDebugElement.nativeElement;
      const h2 = headingElement.querySelector('h2')!;
      expect(h2.textContent).toEqual('Testing data with heading tag');
    });
    it('should have <h2> with "Testing data with heading tag" using debugElement && byCSS', () => {
      const headingDebugElement:DebugElement=fixture.debugElement
      const headingByCss = headingDebugElement.query(By.css('h2'));
      const h2:HTMLElement=headingByCss.nativeElement;
      expect(h2.textContent).toEqual('Testing data with heading tag');
    });
});
