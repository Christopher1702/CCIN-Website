import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CleanBC Intelligence Network - Transparency Portal',
  description:
    'Transparent tracking of climate indicators and sector performance for public accountability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[color:var(--bg-default)] text-slate-900">
        {children}
      </body>
    </html>
  );
}