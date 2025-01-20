"use client"
import type { Metadata } from "next"; 
import { Inter } from "next/font/google";
import "./app.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const inter = Inter({ subsets: ["latin"] });
/* jack dbg, I have to comment out the following to fix compilation error
Attempted import error: 'useForm' is not exported from 'react-hook-form' (imported as 'useForm').
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>      
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}
