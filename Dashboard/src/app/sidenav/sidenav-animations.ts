import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const onSidenavText_FadeInOut =  
trigger('onSidenavText_FadeInOut', [
  transition(':enter', [
    style({opacity: 0}), 
    animate('350ms', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({opacity: 1}), 
    animate('350ms', style({opacity: 0}))
  ]),
]);

export const onSidenavBtn_Rotate = 
trigger('onSidenavBtn_Rotate', [
  transition(':enter', [
    animate('1000ms',
      keyframes([
        style({transform: 'rotate(0deg)', offset: '0'}),
        style({transform: 'rotate(1turn)', offset: '1'})
      ])
    )
  ])
]);

export const onSidenavSubLevelSubmenu_Hidden = 
trigger('onSidenavSubLevelSubmenu_Hidden', [
  state('hidden', style({height: '0', overflow: 'hidden'})),
  state('visible', style({height: '*'})),
  transition('visible <=> hidden', [
    style({overflow: 'hidden'}),
    animate('{{transitionParams}}')
  ]),
  transition('void => *', animate(0))

]);

