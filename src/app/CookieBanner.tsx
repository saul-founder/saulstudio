'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50">
      <div className="pointer-events-auto max-w-xl rounded-xl bg-white p-6 shadow-lg outline-1 outline-gray-900/10 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <p className="text-sm/6 text-gray-900 dark:text-white">
          This website uses cookies to provide support features and improve your experience. See our{' '}
          <a
            href="/privacy"
            className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            privacy policy
          </a>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-gray-700 dark:inset-ring dark:inset-ring-white/10 dark:hover:bg-white/15 dark:focus-visible:outline-white"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={reject}
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  )
}
