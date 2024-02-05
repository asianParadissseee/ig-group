import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/app-router.tsx';
import BaseLayout from './layouts/base-layout.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <AppRouter />
      </BaseLayout>
    </BrowserRouter>
  );
};

export default App;
