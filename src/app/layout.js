import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "EverHelp",
  description: "Social impact platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
