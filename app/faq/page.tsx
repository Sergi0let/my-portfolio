import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Faq',
}

const FAQPage = () => {
  return (
    <LayoutOne>
      <FAQ bigTitleWithBadge={true} />
      <CTA buttonText="Get in Touch">
        Got an idea?
        <br />
        <i className="font-instrument italic">Let&apos;s build it.</i>
      </CTA>
    </LayoutOne>
  )
}

export default FAQPage
