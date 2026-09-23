import './globals.css';

export const metadata = {
  title: 'Talk with Malek | 1-on-1 Communication Practice',
  description: 'Express yourself with confidence in English or Arabic.',
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
