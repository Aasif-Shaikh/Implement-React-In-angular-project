import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactComponentInAngular from './ReactComponentInAngular';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('reactComponent') reactComponentNative!: ElementRef;

  ngAfterViewInit() {
    this.renderReactComp();
  }

  private renderReactComp() {
    ReactDOM.render(
      React.createElement(ReactComponentInAngular),
      this.reactComponentNative.nativeElement
    );
  }
}
