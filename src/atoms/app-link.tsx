import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkSize {
  S = 'text-10px',
  M = 'text-4xl',
}

export enum AppLinkColor {
  DARK = 'text-black',
  LIGHT = 'text-white',
}

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  to: string;
  size?: AppLinkSize;
  color?: AppLinkColor;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, size, color } = props;
  return (
    <Link to={to} className={` ${size} ${color} hover:text-red-600 transition-all easy-in-out`}>
      {children}
    </Link>
  );
};

export default AppLink;
