import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/layout.css';
import '@/styles/utilities.css';
import Toast from '@/components/common/Toast';
import Footer from '@/components/modules/footer/Footer';
import Sidebar from '@/components/modules/Sidebar';
import Header from '@/components/modules/Header';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HiveMind - Task Manager',
  description: 'Task manager for personal and professional use',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={jost.className}>
        <Toast />
        <div className="layout bg-bunker-900 text-white">
          <div className="sidebar">
            <Sidebar />
          </div>
          <header className="header">
            <Header />
          </header>
          <main className="content overflow-auto bg-bunker-950">
            {children}
          </main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
