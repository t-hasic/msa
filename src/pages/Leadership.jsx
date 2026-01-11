import { Hero, Section } from '../components/ui';

/**
 * Leadership page - Chaplain and team information
 */
export default function Leadership() {
  return (
    <>
      <Hero
        title="Leadership"
        subtitle="Meet our chaplain and learn about spiritual guidance at MIT."
      />

      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Muslim Chaplain</h2>
          <p className="text-muted mb-6">
            The Muslim Chaplain serves as a spiritual advisor and resource for
            Muslim students at MIT. They provide guidance, counseling, and support
            for students navigating their faith while pursuing their education.
          </p>

          <div className="info-box mb-8">
            <h3 className="info-box__title">Chaplaincy Services</h3>
            <ul className="list-disc">
              <li>Personal spiritual counseling</li>
              <li>Guidance on Islamic practices</li>
              <li>Support during difficult times</li>
              <li>Interfaith dialogue and programs</li>
              <li>Connection with the broader Muslim community</li>
            </ul>
          </div>

          <p className="text-muted">
            For more information about Muslim chaplaincy at MIT, please contact the{' '}
            <a
              href="https://studentlife.mit.edu/rl"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              MIT Office of Religious Life
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
