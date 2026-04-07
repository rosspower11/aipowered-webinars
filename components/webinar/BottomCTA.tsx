import Script from 'next/script'

export default function BottomCTA() {
  return (
    <section className="webinar-register" id="register-bottom">
      <div className="container-narrow">
        <p className="eyebrow eyebrow-accent anim">Free live webinar &middot; 23 April &middot; 5pm UK</p>
        <h2 className="white anim d1">Ready to claim your spot?</h2>
        <p className="sub sub-grey anim d2" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          60 minutes. The full framework. A live skill build. Something you can use straight away.
        </p>
        <div className="webinar-form-wrap anim d3">
          <iframe
            src="https://links.productizeyourself.ai/widget/form/ZjEhdNNknUgy1WOuEnPe"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
            id="inline-bottom-ZjEhdNNknUgy1WOuEnPe"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="[301.01] Webinar - Claude Cohort"
            data-height="675"
            data-layout-iframe-id="inline-bottom-ZjEhdNNknUgy1WOuEnPe"
            data-form-id="ZjEhdNNknUgy1WOuEnPe"
            title="[301.01] Webinar - Claude Cohort"
          />
        </div>
      </div>
      <Script src="https://links.productizeyourself.ai/js/form_embed.js" strategy="lazyOnload" />
    </section>
  )
}
