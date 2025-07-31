import "./globals.css";

export const metadata = {
  title: "Nebulae",
  description: "Explore the cosmos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />

        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

