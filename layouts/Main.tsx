import '@mantine/core/styles.css';
import Header from '@/components/header/header';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from '../store';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const Layout = ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Provider store={store}>
      <div className="app-main">
        <Head>
          <title>{title}</title>
          <ColorSchemeScript />
        </Head>

        <Header />

        <main className={pathname !== '/' ? 'main-page' : ''}>
          {' '}
          <MantineProvider>{children}</MantineProvider>
        </main>
      </div>
    </Provider>
  );
};

export default Layout;
