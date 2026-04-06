'use client'

import { useState } from 'react'

const faqs = [
  {
    q: "What exactly will I learn in 60 minutes?",
    a: "You'll see the complete 5C Framework (Chat → Create → Connect → Customise → Command), watch a Claude Skill get built live from scratch, and complete a self-assessment across Standardisation, Optimisation, and Personalisation. You'll leave with a clear picture of where you are and what to do next.",
  },
  {
    q: "I've watched Claude tutorials before. How is this different?",
    a: "Tutorials teach features. This teaches a system. You'll leave with a framework for how every feature connects — not just what buttons to press. The difference between knowing what Claude can do and having an operating system that runs your business.",
  },
  {
    q: "I'm not technical. Is this for me?",
    a: "Yes. This is designed for people who think in frameworks, not code. Zero technical experience required. If you can use a word processor, you can build a Personal OS. No APIs, no coding, no developer tools.",
  },
  {
    q: "Can't I just figure this out myself?",
    a: "You can. It'll take you 6–12 months of trial and error. The webinar compresses that into a 60-minute overview. The Accelerator compresses it into 6 weeks of guided builds.",
  },
  {
    q: "Is this just going to pitch me the Accelerator for an hour?",
    a: "No. The framework, the live build, and the self-assessment are all delivered in full. You'll walk away with usable knowledge regardless. The Accelerator is mentioned at the end for people who want structured guidance — that's it.",
  },
  {
    q: "What is a 'Personal OS' exactly?",
    a: "A Personal OS is a collection of Claude Skills that work together to run your business. Each Skill handles one domain — content, outreach, proposals, research, client delivery. Together, they handle everything. Same prompt, same answer. That's what a system gives you.",
  },
  {
    q: "What is the ClaudeOS Accelerator?",
    a: "A 6-week cohort programme where you build your Personal OS from scratch using the 5C Framework. It's mentioned in the webinar so you understand the full picture, but the webinar delivers standalone value whether you join or not.",
  },
  {
    q: "Is this only for Claude users? What about ChatGPT?",
    a: "The framework is built on Claude by Anthropic because it's the most capable platform for building real business systems — Projects, Custom Instructions, Skills, and structured workflows. The principles transfer, but the OS is built on Claude.",
  },
]

export default function WebinarFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq">
      <div className="container-narrow">
        <p className="eyebrow anim">FAQ</p>
        <h2 className="white anim d1">Common Questions</h2>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
            >
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
