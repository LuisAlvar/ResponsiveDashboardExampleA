import { RouterLink } from "@angular/router";
import { INavbarData } from "./navbardata";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'home',
    label: 'Dashboard'
  },
  {
    routeLink: 'products',
    icon: 'inventory_2',
    label: 'Products',
    items: [
      {
        routeLink: 'products/level1.1',
        label: 'Level 1.1',
        items: [
          {
            routeLink: 'products/level2.1',
            label: 'Level 2.1'
          },
          {
            routeLink: 'products/level2.2',
            label: 'Level 2.2',
            items: [
              {
                routeLink: 'products/level3.1',
                label: 'Level 3.1'
              },
              {
                routeLink: 'products/level3.2',
                label: 'Level 3.2'
              }
            ]
          }
        ]
      },
      {
        routeLink: 'products/level1.2',
        label: 'Level 1.2'
      }
    ]
  },
  {
    routeLink: 'statistics',
    icon: 'bar_chart',
    label: 'Statistics'
  },
  {
    routeLink: 'coupens',
    icon: 'style',
    label: 'Coupens',
    items: [
      {
        routeLink: 'coupens/list',
        label: 'List Coupens'
      },
      {
        routeLink: 'coupens/create',
        label: 'Create Coupens'
      }
    ]
  },
  {
    routeLink: 'pages',
    icon: 'description',
    label: 'Pages'
  },
  {
    routeLink: 'media',
    icon: 'photo_camera',
    label: 'Media'
  },
  {
    routeLink: 'settings',
    icon: 'settings',
    label: 'Settings',
    expanded: true,
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile'
      },
      {
        routeLink: 'settings/customize',
        label: 'Custom'
      }
    ]
  },
];