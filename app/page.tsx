import ScrollAnimator from '@/components/ScrollAnimator'
import WebinarNav from '@/components/webinar/WebinarNav'
import WebinarHero from '@/components/webinar/WebinarHero'
import WebinarMarquee from '@/components/webinar/WebinarMarquee'
import WhyItMatters from '@/components/webinar/WhyItMatters'
import WhatYouLearn from '@/components/webinar/WhatYouLearn'
import PhotoCarousel from '@/components/PhotoCarousel'
import AudiencePrep from '@/components/webinar/AudiencePrep'
import WebinarAbout from '@/components/webinar/WebinarAbout'
import WebinarFAQ from '@/components/webinar/WebinarFAQ'
import FinalCTA from '@/components/webinar/FinalCTA'
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
      <AudiencePrep />
      <WebinarAbout />
      <WebinarFAQ />
      <FinalCTA />
      <Disclaimer />
      <WebinarFooter />
      <BackToTop />
    </>
  )
}
