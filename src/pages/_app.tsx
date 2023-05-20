import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CursorProvider } from "@/context/CursorContext";
import { ScrollProvider } from "@/context/ScrollContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CursorProvider>
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </CursorProvider>
  );
}
