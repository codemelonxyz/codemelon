import '../app/globals.css';
export const metadata = {
  title: 'CodeMelon',
  description: 'CodeMelon is a website where you can find various tools to help you with your coding journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
