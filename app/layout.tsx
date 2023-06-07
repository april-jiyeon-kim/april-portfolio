import "./globals.css";
import {
  Archivo,
  Archivo_Black,
  Archivo_Narrow,
  Karla,
} from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { I18nUrlManager } from "./components/I18nUrlManager";

const archivo = Archivo({ subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--archivo-black",
});
const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--archivo-narrow",
});
const karla = Karla({
  subsets: ["latin"],
  variable: "--karla",
});

export const metadata = {
  title: "April's portfolio",
  description: "This is a Web Devloper April's portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cls = (...classnames: string[]) => {
    return classnames.join(" ");
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>{`April's portfolio`}</title>
        <meta
          name="description"
          content="This is a Web Devloper April's portfolio."
        />
        <meta property="og:title" content="April's Portfolio" />
        <meta
          property="og:description"
          content="This is a Web Devloper April's portfolio."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body
        className={cls(
          archivo.className,
          archivoBlack.variable,
          archivoNarrow.variable,
          karla.variable
        )}
      >
        {/* <I18nUrlManager /> */}
        {children}
      </body>
    </html>
  );
}
