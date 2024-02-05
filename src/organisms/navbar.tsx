import AppLogo from '../atoms/app-logo.tsx';
import AppButton, { AppButtonAlign, AppButtonSize, AppButtonSizeBackgroundColor } from '../atoms/app-button.tsx';
import { Fragment } from 'react';
import AppText, { AppTextColor, AppTextSize, AppTextWeight } from '../atoms/app-text.tsx';

const Navbar = () => {
  interface ISubMenu {
    path?: string;
    link: string;
  }

  interface NavItems {
    title: string;
    subMenu?: ISubMenu[];
  }

  const navItems: NavItems[] = [
    {
      title: 'Продукты',
      subMenu: [
        {
          link: 'ИИ решение',
          path: '/',
        },
        {
          link: 'ИИ решение',
          path: '/',
        },
        {
          link: 'ИИ решение',
          path: '/',
        },
      ],
    },
    {
      title: 'Портфолио',
      subMenu: [
        {
          link: 'ИИ решение',
          path: '/',
        },
        {
          link: 'ИИ решение',
          path: '/',
        },
        {
          link: 'ИИ решение',
          path: '/',
        },
      ],
    },
    {
      title: 'Контакты',
      subMenu: [
        {
          link: 'ИИ решение',
          path: '/',
        },
        {
          link: 'ИИ решение',
          path: '/',
        },
        {
          link: 'ИИ решение',
          path: '/',
        },
      ],
    },
  ];

  return (
    <header className='flex justify-between items-center bg-gray-950 max-w-full px-10 h-20'>
      <AppLogo />
      <nav>
        <ul className='flex gap-10'>
          {navItems.map((item, id) => (
            <Fragment key={id}>
              <AppText color={AppTextColor.LIGHT} size={AppTextSize.L} weight={AppTextWeight.L}>
                {item.title} {'>'}
              </AppText>
            </Fragment>
          ))}
        </ul>
      </nav>
      <AppButton radius size={AppButtonSize.L} align={AppButtonAlign.CENTER} backgroundColor={AppButtonSizeBackgroundColor.GRADIENT}>
        Рассчет проекта
      </AppButton>
    </header>
  );
};

export default Navbar;
