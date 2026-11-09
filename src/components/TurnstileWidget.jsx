import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { CLOUDFLARE_SITE_KEY } from '../config';

/**
 * Reusable Cloudflare Turnstile Widget Component.
 * Supports both automatic data-callback attribute parsing and explicit JS API rendering.
 */
const TurnstileWidget = forwardRef(function TurnstileWidget(
  {
    siteKey = CLOUDFLARE_SITE_KEY,
    onVerify,
    onExpire,
    onError,
    className = '',
  },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Expose reset method to parent component via ref
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (typeof window !== 'undefined' && window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.reset(widgetIdRef.current);
        } catch {
          // ignore reset errors
        }
      }
    },
    getResponse: () => {
      if (typeof window !== 'undefined' && window.turnstile && widgetIdRef.current !== null) {
        try {
          return window.turnstile.getResponse(widgetIdRef.current);
        } catch {
          return null;
        }
      }
      return null;
    },
  }));

  useEffect(() => {
    let isMounted = true;
    let pollInterval = null;

    // Define global callback function specified in requirement: data-callback="enableSubmitBtn"
    window.enableSubmitBtn = (token) => {
      if (isMounted && onVerify) {
        onVerify(token);
      }
    };

    const renderWidget = () => {
      if (!isMounted || !containerRef.current) return false;
      if (typeof window === 'undefined' || !window.turnstile) return false;

      // If already rendered, do nothing
      if (widgetIdRef.current !== null) return true;

      try {
        // Clear any previous child nodes if re-mounting
        containerRef.current.innerHTML = '';

        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => {
            if (isMounted && onVerify) {
              onVerify(token);
            }
          },
          'expired-callback': () => {
            if (isMounted && onExpire) {
              onExpire();
            }
          },
          'error-callback': (err) => {
            if (isMounted && onError) {
              onError(err);
            }
          },
          theme: 'auto',
        });

        widgetIdRef.current = id;
        return true;
      } catch (err) {
        console.warn('Turnstile render warning:', err);
        return false;
      }
    };

    // Attempt to render immediately if script is already loaded
    if (!renderWidget()) {
      // If not yet available, poll until Turnstile script finishes loading
      let attempts = 0;
      pollInterval = setInterval(() => {
        attempts += 1;
        if (renderWidget() || attempts > 50) {
          clearInterval(pollInterval);
        }
      }, 100);
    }

    return () => {
      isMounted = false;
      if (pollInterval) clearInterval(pollInterval);
      if (typeof window !== 'undefined' && window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore cleanup errors
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onVerify, onExpire, onError]);

  return (
    <div className={`my-2 flex flex-col items-center justify-center min-h-[65px] ${className}`}>
      {/* Standard Cloudflare Turnstile container */}
      <div
        ref={containerRef}
        className="cf-turnstile"
        data-sitekey={siteKey}
        data-callback="enableSubmitBtn"
      />
    </div>
  );
});

export default TurnstileWidget;
