import { FC, memo, ReactNode } from 'react';

export enum AppTextColor {
  LIGHT = 'text-white',
  DARK = 'text-black',
  GRAY = 'text-gray-800',
}

export enum AppTextWeight {
  M = 'font-normal',
  L = 'font-semibold',
}

export enum AppTextSize {
  S = 'text-[10px]',
  M = 'text-xs',
  L = 'text-sm',
}

interface AppTextProps {
  children: ReactNode;
  size?: AppTextSize;
  weight?: AppTextWeight;
  color?: AppTextColor;
}

const AppText: FC<AppTextProps> = memo((props) => {
  const { children, size, weight, color } = props;

  return <p className={`${size} ${weight} ${color}`}>{children}</p>;
});

export default AppText;
