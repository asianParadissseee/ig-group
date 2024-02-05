import { FC, memo, ReactNode } from 'react';


export enum AppTitleColor {
  DARK = 'text-black',
  LIGHT = 'text-white'
}

export enum AppTitleSize {
  S = 'text-base',
  M = 'text-2xl',
  L = 'text-3xl',
  XL = 'text-5xl',
  XXL = 'text-6xl'
}

export enum AppTitleWeight {
  L = 'font-normal',
  XL = 'font-semibold',
}

interface AppTitleProps {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
  size?: AppTitleSize;
  weight?: AppTitleWeight;
  color?: AppTitleColor;
}

const AppTitle: FC<AppTitleProps> = memo((props) => {
  const { tag, children, weight, size, color } = props;
  const Tag = tag;

  return (
    <Tag className={`${weight} ${color} ${size}`}>
      {children}
    </Tag>
  );
});

export default AppTitle;
