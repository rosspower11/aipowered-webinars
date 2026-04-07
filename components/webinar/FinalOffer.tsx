import Script from 'next/script'

export default function FinalOffer() {
  return (
    <section className="final-offer" id="register">
      <div className="container-narrow">
        <div className="final-offer-panel anim">
          <p className="final-offer-eyebrow">Your journey starts here</p>
          <h2>Understand the building blocks of Claude and start your journey in just 60 minutes</h2>
          <div className="final-offer-bullets">
            <div className="final-offer-bullet">
              <h4>Immediate clarity</h4>
              <p>Walk in unsure about AI. Walk out with the complete 5C framework, a self-assessment, and a concrete action plan you can use Monday morning.</p>
            </div>
            <div className="final-offer-bullet">
              <h4>Learn by doing</h4>
              <p>Watch a real skill get built live. Understand how the building blocks of Claude connect into a system. Leave knowing exactly how to start.</p>
            </div>
            <div className="final-offer-bullet">
              <h4>Works for anyone</h4>
              <p>Personal trainers, Big 4 managing directors, political advisors, students, coaches, founders. The framework flexes to you and your mission. No code required.</p>
            </div>
          </div>
          <div className="webinar-form-wrap" style={{ marginTop: '40px' }}>
            <iframe
              src="https://links.productizeyourself.ai/widget/form/ZjEhdNNknUgy1WOuEnPe"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
              id="inline-ZjEhdNNknUgy1WOuEnPe"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="[301.01] Webinar - Claude Cohort"
              data-height="675"
              data-layout-iframe-id="inline-ZjEhdNNknUgy1WOuEnPe"
              data-form-id="ZjEhdNNknUgy1WOuEnPe"
              title="[301.01] Webinar - Claude Cohort"
            />
          </div>
          <p className="final-offer-note">Free. 60 minutes. No commitment beyond showing up.</p>
        </div>
      </div>
      {/* Popup form triggered on 25% scroll */}
      <iframe
        src="https://links.productizeyourself.ai/widget/form/ZjEhdNNknUgy1WOuEnPe"
        style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
        id="popup-ZjEhdNNknUgy1WOuEnPe"
        data-layout="{'id':'POPUP'}"
        data-trigger-type="showOnScrolling"
        data-trigger-value="25"
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="[301.01] Webinar - Claude Cohort"
        data-height="881"
        data-layout-iframe-id="popup-ZjEhdNNknUgy1WOuEnPe"
        data-form-id="ZjEhdNNknUgy1WOuEnPe"
        title="[301.01] Webinar - Claude Cohort"
      />
      <Script src="https://links.productizeyourself.ai/js/form_embed.js" strategy="lazyOnload" />
    </section>
  )
}
