'use client'

import { useEffect } from 'react'
import Script from 'next/script'

const FeaturebaseMessenger = () => {
  useEffect(() => {
    const win = window as any

    if (typeof win.Featurebase !== 'function') {
      win.Featurebase = function () {
        ;(win.Featurebase.q = win.Featurebase.q || []).push(arguments)
      }
    }

    const browserLang = navigator.language?.split('-')[0] || 'en'

    win.Featurebase('boot', {
      appId: '69e49717f41fb278b83445b3',
      theme: 'light',
      language: browserLang,
    })
  }, [])

  return (
    <Script
      src="https://do.featurebase.app/js/sdk.js"
      id="featurebase-sdk"
      strategy="afterInteractive"
    />
  )
}

export default FeaturebaseMessenger
