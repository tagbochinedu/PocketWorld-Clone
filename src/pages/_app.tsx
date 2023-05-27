import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CursorProvider } from "@/context/CursorContext";
import { ScrollProvider } from "@/context/ScrollContext";
import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CursorProvider>
      <ScrollProvider>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </ScrollProvider>
    </CursorProvider>
  );
}
