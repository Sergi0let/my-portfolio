import ContactForm from '@/components/contactpage/ContactForm'
import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Let's Work Together"
        badgeTitle="Contact"
        description="Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you within 24 hours."
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <ContactForm />
      <CTA buttonText="Get in Touch">
        Got an idea?
        <br />
        <i className="font-instrument italic">Let&apos;s build it.</i>
      </CTA>
    </LayoutOne>
  )
}

export default ContactPage
