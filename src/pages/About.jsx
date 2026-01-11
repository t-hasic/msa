import { Hero, Section, Button } from '../components/ui';

/**
 * About page - Information about MIT MSA
 */
export default function About() {
  return (
    <>
      <Hero
        title="About MIT MSA"
        subtitle="Learn about our mission, values, and the community we've built."
      />

      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted mb-6">
            MIT Muslim Students Association is a close-knit and friendly community
            which aims to assist MIT Muslims with their practice of Islam and
            endeavors to promote understanding between Muslims and people of other
            faiths on campus.
          </p>
          <p className="text-muted mb-8">
            Representing nearly one hundred Muslims, MSA holds events year-round
            that promote peace, brotherhood, and the Islamic message.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12" id="events">What We Do</h2>
          <ul className="list-disc text-muted mb-8">
            <li>Weekly Jumu'ah (Friday) prayers</li>
            <li>Daily prayer spaces and community</li>
            <li>Ramadan iftars and programs</li>
            <li>Educational lectures and discussions</li>
            <li>Social events and community gatherings</li>
            <li>Interfaith dialogues and outreach</li>
            <li>Support for new Muslim students</li>
          </ul>

          <div className="text-center mt-12">
            <Button to="/join" variant="primary" size="lg">
              Join Our Community
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
