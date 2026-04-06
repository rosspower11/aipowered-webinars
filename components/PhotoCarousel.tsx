import { getCDN } from '@/lib/cdn'

const photos = [
  { src: getCDN('ross-events/4.png'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/7.png'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/16.png'), alt: 'Ross at event' },
  { src: getCDN('ross-events/17.png'), alt: 'Ross at event' },
  { src: getCDN('ross-events/20.png'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/PFER5335.JPG'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/PFER5511.JPG'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/PFER5554.JPG'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/SAM00013.JPG'), alt: 'Ross at event' },
  { src: getCDN('ross-events/SAM09932.JPG'), alt: 'Ross at event' },
  { src: getCDN('ross-events/DSC00028.JPG'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/DSC02164.jpg'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/DSC02374.jpg'), alt: 'Ross presenting' },
  { src: getCDN('ross-events/IMG_3847.jpeg'), alt: 'Ross at event' },
  { src: getCDN('ross-events/IMG_3858.jpeg'), alt: 'Ross at event' },
  { src: getCDN('ross-events/IMG_3889.jpeg'), alt: 'Ross presenting' },
]

const doubled = [...photos, ...photos]

export default function PhotoCarousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {doubled.map((photo, i) => (
          <div key={i} className="carousel-img">
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
