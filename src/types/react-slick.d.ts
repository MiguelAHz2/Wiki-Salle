declare module 'react-slick' {
  import React from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    cssEase?: string;
    pauseOnHover?: boolean;
    arrows?: boolean;
    [key: string]: any;
  }

  export interface SliderProps extends Settings {
    children?: React.ReactNode;
    className?: string;
  }

  export default class Slider extends React.Component<SliderProps> {}
}
