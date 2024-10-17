import React from "react"

export default function CarreerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <main className="flex justify-center items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}