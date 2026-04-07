import ScrollAnimator from '@/components/ScrollAnimator'
import WebinarNav from '@/components/webinar/WebinarNav'
import WebinarHero from '@/components/webinar/WebinarHero'
import WebinarMarquee from '@/components/webinar/WebinarMarquee'
import GettingAhead from '@/components/webinar/GettingAhead'
import WhatYouLearn from '@/components/webinar/WhatYouLearn'
import PhotoCarousel from '@/components/PhotoCarousel'
import WebinarAbout from '@/components/webinar/WebinarAbout'
import AcademicVsAccelerator from '@/components/webinar/AcademicVsAccelerator'
import WebinarComparison from '@/components/webinar/WebinarComparison'
import DruckerQuote from '@/components/webinar/DruckerQuote'
import WebinarWhoFor from '@/components/webinar/WebinarWhoFor'
import WorkshopCarousel from '@/components/WorkshopCarousel'
import WhatYoullGet from '@/components/webinar/WhatYoullGet'
import Testimonials from '@/components/webinar/Testimonials'
import WebinarFAQ from '@/components/webinar/WebinarFAQ'
import FinalOffer from '@/components/webinar/FinalOffer'
import Disclaimer from '@/components/webinar/Disclaimer'
import WebinarFooter from '@/components/webinar/WebinarFooter'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <WebinarNav />
      <WebinarHero />
      <WebinarMarquee />
      <GettingAhead />
      <WhatYouLearn />
      <PhotoCarousel />
      <WebinarAbout />
      <AcademicVsAccelerator />
      <WebinarComparison />
      <DruckerQuote />
      <WebinarWhoFor />
      <WorkshopCarousel />
      <WhatYoullGet />
      <Testimonials />
      <WebinarFAQ />
      <FinalOffer />
      <Disclaimer />
      <WebinarFooter />
      <BackToTop />
    </>
  )
}
