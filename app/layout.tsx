import { Nunito } from "next/font/google";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
//import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ['latin'] })

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Aribnb',
  description: 'Aribnb:-Store Your Project Here',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}

      </body>
    </html>
  )
}
