import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

export enum AppButtonSizeBackgroundColor {
  DARK = 'bg-black',
  GRADIENT = 'bg-gradient-to-br from-red-500 to-yellow-300',
}

export enum AppButtonAlign {
  RIGHT = 'text-right',
  LEFT = 'text-left',
  CENTER = 'text-center',
}

export enum AppButtonSize {
  L = 'w-44 h-16',
  XL = 'w-6/12 h-10',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: AppButtonSize;
  align?: AppButtonAlign;
  backgroundColor?: AppButtonSizeBackgroundColor;
  children: ReactNode;
  border?: boolean;
}

const AppButton: FC<AppButtonProps> = memo((props) => {
  const { children, size, align, backgroundColor, border, ...otherProps } = props;
  return (
    <button className={`${size} ${align} ${backgroundColor} ${border ? 'rounded-md' : ''} text-white font-semibold`} {...otherProps}>
      {children}
    </button>
  );
});

export default AppButton;
