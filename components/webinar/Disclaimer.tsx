import { webinar } from '@/lib/webinar'

export default function Disclaimer() {
  return (
    <section className="webinar-disclaimer">
      <div className="container-narrow">
        <p>{webinar.disclaimer}</p>
      </div>
    </section>
  )
}
