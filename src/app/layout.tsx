'use client';
import React from 'react';
import { CatNombreProvider } from '@/context/CatNombreContext'; // Importa el provider adecuado
import '@/app/globals.css';
import '@/app/styles/dropDown.css';
import '@/app/styles/institucional.css';
import '@/app/styles/autoridades.css';
import '@/app/styles/contacto.css';
import '@/app/styles/operativos.css';
import '@/app/styles/publicaciones.css';
import '@/app/styles/revista.css';
import '@/app/styles/anuarios.css';
import { Navigation } from '@/components/ui/Navigation'; 
import { Main_Menu } from '@/components/ui/Menu_main';
import { Footer } from '@/components/ui/Footer';
import { Baner } from '@/components/ui/Baner';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-...a..." 
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <CatNombreProvider>
          {' '}
          {/* Envolver todo dentro del proveedor */}
          <Navigation />
          <Baner />
          <Main_Menu />
          {children}
          <Footer />
        </CatNombreProvider>
      </body>
    </html>
  );
}
