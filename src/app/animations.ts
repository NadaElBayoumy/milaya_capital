
import { trigger, state, style, animate, transition } from '@angular/animations';
/////////New Animations
export const enterFromTop = trigger('enterFromTop', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(-20%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('800ms ease-in')),
  ]);
  export const enterFromTop1 = trigger('enterFromTop1', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(-10%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('500ms ease-in')),
  ]);
  export const enterFromTop2 = trigger('enterFromTop2', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(-10%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('800ms ease-in')),
  ]);
  export const enterFromTop3 = trigger('enterFromTop3', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(-10%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('2s ease-in')),
  ]);
  export const enterFromLeft = trigger('enterFromLeft', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateX(-100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('hidden => visible', animate('1s ease-in')),
  ]);
  export const enterFromLeft2 = trigger('enterFromLeft2', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateX(-100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('hidden => visible', animate('1.5s ease-in')),
  ]);
  export const enterFromRight =  trigger('enterFromRight', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateX(100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('hidden => visible', animate('0.5s ease-in')),
  ]);

  export const enterFromRight2 =  trigger('enterFromRight2', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateX(100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('hidden => visible', animate('1s ease-in')),
  ]);

  export const enterFromBottom =  trigger('enterFromBottom', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('0.5s ease-in')),
  ]);



  export const enterFromBottom1 =  trigger('enterFromBottom1', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('1s ease-in')),
  ]);




  export const enterFromBottom2 =  trigger('enterFromBottom2', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('1.5s ease-in')),
  ]);
  


  export const enterFromBottom3 =  trigger('enterFromBottom3', [
    state('hidden', style({
      opacity: 0,
      transform: 'translateY(100%)'
    })),
    state('visible', style({
      opacity: 1,
      transform: 'translateY(0)'
    })),
    transition('hidden => visible', animate('2s ease-in')),
  ]);

  export const fadeInFromTop = trigger('fadeInFromTop', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('800ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);

export const fadeInFromLeft = trigger('fadeInFromLeft', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);

export const enterFromLeft0 = trigger('enterFromLeft0', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
]);


export const fadeInFromTop1 = trigger('fadeInFromTop1', [
  transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-80px)' }),
      animate('2000ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
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


/////////End of New Animations




export const fadeInFromBottomTy20 = trigger('fadeInFromBottomTy20', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);

export const fadeInFromBottom = trigger('fadeInFromBottom', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);



export const enterFromBottomLeftToTopRight333 = trigger('enterFromBottomLeftToTopRight333', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translate(10%, 100%)' }),
        animate('1000ms ease-in', style({ opacity: 1, transform: 'translate(100%, 10%)' })),
    ]),
]);


export const enterFromBottomLeftToTopRight1 = trigger('enterFromBottomLeftToTopRight1', [
  state('start', style({
    transform: 'translate(0, 100%)' // Start position at the bottom left
  })),
  state('end', style({
    transform: 'translate(100%, 0)' // End position at the top right
  })),
  transition('start => end', animate('500ms ease-out'))
]);


export const enterFromBottomLeftToTopRight2 = trigger('enterFromBottomLeftToTopRight2', [
  state('start', style({
    transform: 'translate(0, 100%)' // Start position at the bottom left
  })),
  state('end', style({
    transform: 'translate(100%, 0)' // End position at the top right
  })),
  transition('start => end', animate('600ms ease-out'))
]);


export const enterFromBottomLeftToTopRight3 = trigger('enterFromBottomLeftToTopRight3', [
  state('start', style({
    transform: 'translate(0, 100%)' // Start position at the bottom left
  })),
  state('end', style({
    transform: 'translate(100%, 0)' // End position at the top right
  })),
  transition('start => end', animate('700ms ease-out'))
]);





export const fadeInFromRight = trigger('fadeInFromRight', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10%)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
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
        animate('900ms ease-in', style({ transform: 'translateY(0)' })),
    ]),
]);
export const slideFromTop2 = trigger('slideFromTop2', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('800ms ease-in', style({ transform: 'translateY(0)' })),
    ]),
]);
export const slideFromTop3 = trigger('slideFromTop3', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('700ms ease-in', style({ transform: 'translateY(0)' })),
    ]),
]);
export const slideFromTop4 = trigger('slideFromTop4', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('600ms ease-out', style({ transform: 'translateY(0)' })),
    ]),
]);

export const slideFromRight = trigger('slideFromRight', [
    transition(':enter', [
        style({ transform: 'translateX(80%)' }),
        animate('800ms ease-out', style({ transform: 'translateX(0)' })),
    ]),
]);


export const slideFromLeft = trigger('slideFromLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('800ms ease-in', style({ transform: 'translateX(0)' })),
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


// export const enterFromLeft = trigger('enterFromLeft', [
//     transition(':enter', [
//         style({ opacity: 0, transform: 'translateX(-20%)' }),
//         animate('1500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
//     ]),
// ]);

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


export const slideFromTop = trigger('slideFromTop', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);


export const enterFromBottom00 = trigger('enterFromBottom00', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
]);

export const scrollAnimation =
    trigger('scrollAnimation', [
        state('start', style({
            opacity: 0,
            transform: 'translateY(-50px)'
        })),
        state('end', style({
            opacity: 1,
            transform: 'translateY(0)'
        })),
        transition('start => end', animate('1s ease-in')),
    ]);


export const countUp = trigger('countUp', [
  transition(':increment', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);