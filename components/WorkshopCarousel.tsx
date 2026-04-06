import { getCDN } from '@/lib/cdn'

const photos = [
  getCDN('aipowered-live-workshops/PFER5544.JPG'),
  getCDN('aipowered-live-workshops/SAM00035.JPG'),
  getCDN('aipowered-live-workshops/SAM00037.JPG'),
  getCDN('aipowered-live-workshops/SAM00046.JPG'),
  getCDN('aipowered-live-workshops/SAM00082.JPG'),
  getCDN('aipowered-live-workshops/SAM00104.JPG'),
  getCDN('aipowered-live-workshops/SAM00125.JPG'),
  getCDN('aipowered-live-workshops/SAM00129.JPG'),
  getCDN('aipowered-live-workshops/SAM00141.JPG'),
  getCDN('aipowered-live-workshops/SAM00158.JPG'),
  getCDN('aipowered-live-workshops/SAM00211.JPG'),
  getCDN('aipowered-live-workshops/SAM00290.JPG'),
  getCDN('aipowered-live-workshops/SAM00310.JPG'),
  getCDN('aipowered-live-workshops/SAM00360.JPG'),
  getCDN('aipowered-live-workshops/SAM00373.JPG'),
  getCDN('aipowered-live-workshops/SAM00408.JPG'),
  getCDN('aipowered-live-workshops/SAM00418.JPG'),
  getCDN('aipowered-live-workshops/SAM00424.JPG'),
  getCDN('aipowered-live-workshops/SAM00538.JPG'),
  getCDN('aipowered-live-workshops/SAM00615.JPG'),
  getCDN('aipowered-live-workshops/SAM00787.JPG'),
]

const doubled = [...photos, ...photos]

export default function WorkshopCarousel() {
  return (
    <div className="carousel carousel-reverse">
      <div className="carousel-track carousel-track-reverse">
        {doubled.map((src, i) => (
          <div key={i} className="carousel-img">
            <img
              src={src}
              alt="AI Powered live workshop"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
