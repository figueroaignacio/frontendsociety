// Components
import { Blur } from "@/components/Blur";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { opensans } from "@/font/opensans";

// Global styles
import "@/styles/globals.css";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${opensans.className}`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Blur />
          <Navbar />
          <main className="min-h-screen py-6 m-auto container max-w-6xl">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
