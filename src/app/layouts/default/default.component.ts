import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  reason = '';

  close(reason: string){
    this.drawer.close();
    this.reason = reason;
  }

  togglSideDrawer(){
    if (this.drawer.opened)
      this.close("Button");
    else
      this.drawer.open();
  }
}
