declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    duration?: number;
    offset?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
  }

  export class Link extends React.Component<LinkProps> {
    render(): React.ReactElement;
  }
}

