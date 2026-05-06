import "./globals.css";

export const metadata = {
  title: "Tejaaswin V | Portfolio",
  description: "Portfolio of Tejaaswin V",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}