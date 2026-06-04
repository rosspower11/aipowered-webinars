import { webinar } from '@/lib/webinar'

type Props = {
  className?: string
  children?: React.ReactNode
  /** Override config href (e.g. nav uses shorter label) */
  href?: string
}

export default function WebinarCTA({ className = 'btn-white', children, href }: Props) {
  const url = href ?? webinar.cta.href
  const external = url.startsWith('http')
  return (
    <a
      href={url}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : undefined)}
    >
      {children ?? webinar.cta.label}
    </a>
  )
}
