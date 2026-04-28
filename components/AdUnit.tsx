'use client'

import { useEffect } from 'react'

interface AdUnitProps {
  slot: string
  format?: 'horizontal' | 'rectangle' | 'vertical' | 'auto'
  style?: React.CSSProperties
  className?: string
}

export default function AdUnit({ slot, format = 'auto', style, className }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [])

  const adStyle: React.CSSProperties = {
    display: 'block',
    ...(format === 'horizontal' && { width: '100%', height: '90px' }),
    ...(format === 'rectangle' && { width: '336px', height: '280px' }),
    ...(format === 'vertical' && { width: '160px', height: '600px' }),
    ...style,
  }

  return (
    <div className={className} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive="true"
      />
    </div>
  )
}
