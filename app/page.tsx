import ScrollAnimator from '@/components/ScrollAnimator'
import WebinarNav from '@/components/webinar/WebinarNav'
import WebinarHero from '@/components/webinar/WebinarHero'
import WebinarMarquee from '@/components/webinar/WebinarMarquee'
import WhyItMatters from '@/components/webinar/WhyItMatters'
import WhatYouLearn from '@/components/webinar/WhatYouLearn'
import PhotoCarousel from '@/components/PhotoCarousel'
import WebinarWhoFor from '@/components/webinar/WebinarWhoFor'
import BeforeYouJoin from '@/components/webinar/BeforeYouJoin'
import WebinarAbout from '@/components/webinar/WebinarAbout'
import CohortPromo from '@/components/webinar/CohortPromo'
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
      <WhyItMatters />
      <WhatYouLearn />
      <PhotoCarousel />
      <WebinarWhoFor />
      <BeforeYouJoin />
      <WebinarAbout />
      <CohortPromo />
      <Testimonials />
      <WebinarFAQ />
      <FinalOffer />
      <Disclaimer />
      <WebinarFooter />
      <BackToTop />
    </>
  )
}
