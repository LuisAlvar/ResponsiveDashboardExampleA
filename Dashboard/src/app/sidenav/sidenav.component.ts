import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './navdata';
import { onSidenavBtn_Rotate, onSidenavText_FadeInOut } from './sidenav-animations';
import { SideNavToggle } from './sidenav-toggle';
import { INavbarData } from './navbardata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    onSidenavText_FadeInOut,
    onSidenavBtn_Rotate
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = true; // false means only one sub-level menu can be seen at a time. 
  //otherwise, true, you can have all sub-level menu viewable all at once.
  
  // if the browser window changes in any way, then it will trigger this functionality
  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    console.log("Calling onResize");
    this.screenWidth = window.innerWidth;
    // if the window gets to a this particular lower range, 
    // then close the sidenav, and send an event of type (SideNavToggle) to any component that uses <app-sidenav>
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor(public router: Router){ }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    console.log("Init: collapsed: " + this.collapsed + " screenwidth: " + this.screenWidth);
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    console.log("logo was pushed: collapsed: " + this.collapsed + " screenwidth: " + this.screenWidth);
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    console.log("closeIcon was pushed: collapsed: " + this.collapsed + " screenwidth: " + this.screenWidth);
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    console.log("Setting nav element " + item.label + " with expanded: " + !item.expanded);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    console.log("a nav element with possible multiple pages was pushed: collapsed: " + this.collapsed + " screenwidth: " + this.screenWidth);
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if  (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
          console.log("Setting nav element " + modelItem.label + " with expanded: " + modelItem.expanded);
        }
      }
    }
  }

}
