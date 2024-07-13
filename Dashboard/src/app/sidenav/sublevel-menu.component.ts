import { Component, Input, input, OnInit } from '@angular/core';
import { INavbarData } from './navbardata';
import { onSidenavSubLevelSubmenu_Hidden, onSidenavText_FadeInOut } from './sidenav-animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    onSidenavSubLevelSubmenu_Hidden,
    onSidenavText_FadeInOut
  ]
})
export class SublevelMenuComponent implements OnInit {

  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(public router: Router){ }
  
  ngOnInit(): void {

  }


  handleClick(item: any): void {
    if(!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }

  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routeLink) 
    ? 'active-sublevel' 
    : '';
  }

}
