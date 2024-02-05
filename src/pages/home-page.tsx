import AppButton, { AppButtonAlign, AppButtonSize, AppButtonSizeBackgroundColor } from '../atoms/app-button.tsx';
import AppText, { AppTextColor, AppTextSize, AppTextWeight } from '../atoms/app-text.tsx';

const HomePage = () => {
  return <div>
    <AppButton border={true} size={AppButtonSize.L} align={AppButtonAlign.CENTER}
               backgroundColor={AppButtonSizeBackgroundColor.GRADIENT}>
      Button
    </AppButton>
    <AppText color={AppTextColor.DARK} size={AppTextSize.L} weight={AppTextWeight.L}>
      Text
    </AppText>
  </div>;
};

export default HomePage;
