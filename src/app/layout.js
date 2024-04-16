// fontawesome config
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Toaster} from 'sonner'
config.autoAddCss = false

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My portfolio",
  description: "Portfolio web by Maximiliano Rucci",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
      <Toaster richColors/>
    </html>
  );
}
