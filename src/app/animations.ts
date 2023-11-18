
import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInFromBottomTy20 = trigger('fadeInFromBottomTy20', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);

export const fadeInFromBottom = trigger('fadeInFromBottom', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);


export const fadeInFromLeft = trigger('fadeInFromLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('2000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);
export const fadeInFromTop = trigger('fadeInFromTop', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);
export const enterFromBottomLeftToTopRight333 = trigger('enterFromBottomLeftToTopRight333', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translate(10%, 100%)' }),
        animate('1000ms ease-in', style({ opacity: 1, transform: 'translate(100%, 10%)' })),
    ]),
]);
export const enterFromBottomLeftToTopRight1 = trigger('enterFromBottomLeftToTopRight1', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translate(0, 100%)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translate(50%, -50%)' })),
    ]),
]);
export const enterFromBottomLeftToTopRight2 = trigger('enterFromBottomLeftToTopRight2', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translate(0, 100%)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translate(50%, -50%)' })),
    ]),
]);
export const enterFromBottomLeftToTopRight3 = trigger('enterFromBottomLeftToTopRight3', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translate(0, 100%)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translate(50%, -50%)' })),
    ]),
]);

export const fadeInFromRight = trigger('fadeInFromRight', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10%)' }),
        animate('2000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);


export const fadeInFromTop1 = trigger('fadeInFromTop1', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-80px)' }),
        animate('2000ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);


export const slideInFromLeft = trigger('slideInFromLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
]);


export const slideInFromRight = trigger('slideInFromRight', [
    transition(':enter', [
        style({ transform: 'translateX(30%)' }),
        animate('800ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
]);


export const slideInFromRight2 = trigger('slideInFromRight2', [
    transition(':enter', [
        style({ transform: 'translateX(30%)' }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
]);

export const slideLeftToRight = trigger('slideLeftToRight', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);


export const slideFromTop1 = trigger('slideFromTop1', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('2500ms ease-in', style({ transform: 'translateY(0)' })),
    ]),
]);
export const slideFromTop2 = trigger('slideFromTop2', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('2000ms ease-in', style({ transform: 'translateY(0)' })),
    ]),
]);
export const slideFromTop3 = trigger('slideFromTop3', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('1500ms ease-in', style({ transform: 'translateY(0)' })),
    ]),
]);
export const slideFromTop4 = trigger('slideFromTop4', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('1000ms ease-out', style({ transform: 'translateY(0)' })),
    ]),
]);

export const slideFromRight = trigger('slideFromRight', [
    transition(':enter', [
        style({ transform: 'translateX(80%)' }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
]);


export const slideFromLeft = trigger('slideFromLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1000ms ease-in', style({ transform: 'translateX(0)' })),
    ]),
]);


export const fadeInFromBottom1 = trigger('fadeInFromBottom1', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);


export const fadeInFromBottom2 = trigger('fadeInFromBottom2', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('2000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);
export const fadeInFromBottom3 = trigger('fadeInFromBottom3', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('3000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);
export const fadeInFromBottom4 = trigger('fadeInFromBottom4', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('4000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);
export const fadeInFromBottom5 = trigger('fadeInFromBottom5', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('5000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);


export const enterFromLeft = trigger('enterFromLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate('1500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);

export const fadeInFromLeft2 = trigger('fadeInFromLeft2', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10%)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);

export const fadeInFromBottomToTop1 = trigger('fadeInFromBottomToTop1', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);

export const fadeInFromBottomToTop2 = trigger('fadeInFromBottomToTop2', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);
export const fadeInFromBottomToTop3 = trigger('fadeInFromBottomToTop3', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('2000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);

export const fadeInFromTop2 = trigger('fadeInFromTop2', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-80px)' }),
        animate('1500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);
export const fadeInFromTop3 = trigger('fadeInFromTop3', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('2000ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);


export const slideFromTop = trigger('slideFromTop', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),  
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })), 
      ]),
]);


export const enterFromBottom = trigger('enterFromBottom', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(100%)' }), 
      animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })), 
    ]),
  ]);