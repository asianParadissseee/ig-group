import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './config/router-config.tsx';
import { Suspense } from 'react';

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map((route) => {
        return <Route key={route.path} path={route.path}
                      element={<Suspense fallback={'loader...'}>{route.element}</Suspense>} />;
      })}
    </Routes>
  );
};

export default AppRouter;
