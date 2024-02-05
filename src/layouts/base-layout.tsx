import { FC, Fragment, ReactNode } from 'react';
import Navbar from '../organisms/navbar.tsx';
import Footer from '../organisms/footer.tsx';
import Sidebar from '../organisms/sidebar.tsx';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="container mx-auto p-10">
          {children}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default BaseLayout;
