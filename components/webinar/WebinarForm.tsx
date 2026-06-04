import Script from 'next/script'
import { webinar } from '@/lib/webinar'

export default function WebinarForm() {
  const { form } = webinar
  const widget = `${form.baseUrl}/widget/form/${form.formId}`
  const inlineId = `inline-${form.formId}`
  const popupId = `popup-${form.formId}`

  return (
    <>
      <iframe
        src={widget}
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          display: 'block',
          border: 'none',
          borderRadius: '4px',
        }}
        id={inlineId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={form.formName}
        data-height={String(form.inlineHeight)}
        data-layout-iframe-id={inlineId}
        data-form-id={form.formId}
        title={form.formName}
      />
      <iframe
        src={widget}
        style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
        id={popupId}
        data-layout="{'id':'POPUP'}"
        data-trigger-type="showOnScrolling"
        data-trigger-value={String(form.popupScrollPercent)}
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={form.formName}
        data-height={String(form.popupHeight)}
        data-layout-iframe-id={popupId}
        data-form-id={form.formId}
        title={form.formName}
      />
      <Script src={`${form.baseUrl}/js/form_embed.js`} strategy="lazyOnload" />
    </>
  )
}
