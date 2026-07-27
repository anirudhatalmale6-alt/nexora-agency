import { pageMetadata } from '@/lib/seo';
import { Section, Container } from '@/components/ui/Section';
import { PageHeader } from '@/components/sections/PageHeader';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Book a free consultation. Tell us about your project and get a plan, timeline and next steps within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about your project."
        lead="Share a few details below and we’ll come back with a clear plan and timeline — usually within one business day."
      />
      <Section className="!pt-4">
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
