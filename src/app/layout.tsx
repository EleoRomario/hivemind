import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { Sidebar } from '@/components/modules/sidebar';
import { Header } from '@/components/modules/header';
import '@/styles/globals.css';
import '@/styles/layout.css';
import '@/styles/utilities.css';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={jost.className}>
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
          <footer className="footer">footer</footer>
        </div>
      </body>
    </html>
  );
}
