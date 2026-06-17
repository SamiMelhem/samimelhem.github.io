'use client'

import { useEffect, useState } from 'react'

interface DocumentViewerProps {
  title: string
  pdfPath: string
  downloadName: string
}

export default function DocumentViewer({ title, pdfPath }: DocumentViewerProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    setIsMobile(mobile)
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-white">
      {isMobile ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
          <div className="bg-gray-800/70 rounded-xl p-8 max-w-md w-full border border-gray-700">
            <svg className="mx-auto mb-6 w-16 h-16 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
            <p className="text-gray-400 text-sm mb-6">
              Tap the button below to open the document in your browser&apos;s PDF viewer.
            </p>
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg transition-colors font-semibold text-white"
            >
              Open Document
            </a>
          </div>
        </div>
      ) : (
        <iframe
          src={pdfPath}
          className="w-full h-screen border-0"
          title={title}
        />
      )}
    </main>
  )
}
