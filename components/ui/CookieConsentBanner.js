import { useState } from 'react'

const COOKIE_NAME = 'madeiras-santos-cookie-consent'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180

function hasAcceptedCookies() {
  return document.cookie.split('; ').some((cookie) => cookie.startsWith(`${COOKIE_NAME}=true`))
}

function acceptCookies() {
  document.cookie = `${COOKIE_NAME}=true; max-age=${MAX_AGE_SECONDS}; path=/; samesite=lax`
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof document === 'undefined') return false
    return !hasAcceptedCookies()
  })

  if (!isVisible) {
    return null
  }

  return (
    <div className="cookie-consent-banner" role="region" aria-label="Aviso de cookies">
      <div className="cookie-consent-content">
        Utilizamos cookies para melhorar sua navegação, analisar tráfego e personalizar sua
        experiência.
      </div>
      <button
        type="button"
        className="cookie-consent-button"
        onClick={() => {
          acceptCookies()
          setIsVisible(false)
        }}
      >
        Aceitar cookies
      </button>
    </div>
  )
}
