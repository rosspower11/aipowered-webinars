export default function RegistrationCTA() {
  return (
    <section className="webinar-register" id="register">
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <p className="eyebrow eyebrow-accent anim">Great event last week &middot; Watch the replay</p>
        <h2 className="white anim d1">Watch the replay</h2>
        <p className="sub sub-grey anim d2" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          60 minutes. The full framework. A live skill build. Something you can use straight away.
        </p>
        <a
          href="https://replay.aipowered.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white anim d3"
        >
          Watch the replay
        </a>
      </div>
    </section>
  )
}
