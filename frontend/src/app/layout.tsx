import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">📋 Tasks Manager</h1>
              <nav className="flex space-x-4">
                <a href="/" className="text-blue-600 hover:underline">Home</a>
                <a href="/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ New Task</a>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
