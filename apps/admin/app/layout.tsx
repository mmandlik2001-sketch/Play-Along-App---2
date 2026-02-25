import './globals.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ maxWidth: 1100, margin: '0 auto', padding: 24 }}>
          <h1 style={{ color: '#B6FF00' }}>PlayAlong Admin</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
