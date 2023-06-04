import "./globals.css"
import { Roboto_Flex, Bai_Jamjuree } from "next/font/google"

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" })
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-baijamjuree",
})

export const metadata = {
  title: "Spacetime",
  description: "Uma cápsula do tempo construída com React, Tailwind e Next13",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}
      >
        
        {children}
      </body>
    </html>
  )
}
