import { Hero, Section, Card } from '../components/ui';

// Restaurant images
import halalguysImg from '../assets/images/restaurants/halalguys.jpeg';
import shahsImg from '../assets/images/restaurants/shahs.jpg';
import sofraImg from '../assets/images/restaurants/sofra.jpg';
import blackseedImg from '../assets/images/restaurants/blackseed.jpg';
import davesImg from '../assets/images/restaurants/daves.jpeg';
import peshwariImg from '../assets/images/restaurants/peshwari.png';

// Mosque images
import isbImg from '../assets/images/mosques/ISB.jpg';
import roxburyImg from '../assets/images/mosques/roxbury_mosque.jpeg';
import waylandImg from '../assets/images/mosques/wayland_mosque.jpg';
import yusufImg from '../assets/images/mosques/yusuf_mosque.jpg';

// Grocery/Off-campus images
import foodlandImg from '../assets/images/off_campus_resources/foodland.jpeg';
import qualityImg from '../assets/images/off_campus_resources/quality.jpeg';
import cheemasImg from '../assets/images/off_campus_resources/cheemas.jpeg';

/**
 * Resources page - Helpful resources for Muslims at MIT
 */
export default function Resources() {
  const halalRestaurants = [
    {
      name: 'The Halal Guys',
      description: 'Famous halal food cart style with gyros, chicken, and falafel.',
      image: halalguysImg,
    },
    {
      name: "Shah's Halal",
      description: 'Halal food cart style with a South Asian flair.',
      image: shahsImg,
    },
    {
      name: 'Sofra Bakery & Cafe',
      description: 'Middle Eastern bakery and cafe with many halal options.',
      image: sofraImg,
    },
    {
      name: 'Black Seed Halal Grill',
      description: 'Casual choice providing Middle Eastern eats like kabobs & falafel wraps, plus pancakes & omelets.',
      image: blackseedImg,
    },
    {
      name: 'Peshwari Kebab',
      description: 'Casual halal restaurant serving Pakistani dishes, including kebabs and slow-cooked barbecued meats.',
      image: peshwariImg,
    },
    {
      name: "Dave's Hot Chicken",
      description: 'Fried chicken and fries!',
      image: davesImg,
    },
  ];

  const halalGroceries = [
    {
      name: 'Foodland',
      description: 'Halal grocery store with fresh meat and Middle Eastern products.',
      image: foodlandImg,
    },
    {
      name: 'Quality Mart',
      description: 'Halal grocery and convenience store.',
      image: qualityImg,
    },
    {
      name: "Cheema's",
      description: 'South Asian grocery with halal meats and spices.',
      image: cheemasImg,
    },
  ];

  const localMosques = [
    {
      name: 'Islamic Society of Boston (Cambridge)',
      address: '204 Prospect St, Cambridge',
      website: 'https://isb-cambridge.org',
      description: 'Close to MIT, offers daily prayers and Friday khutbah.',
      image: isbImg,
    },
    {
      name: 'Islamic Society of Boston Cultural Center (ISBCC)',
      address: '100 Malcolm X Blvd, Roxbury',
      website: 'https://isbcc.org',
      description: 'Largest mosque in New England with extensive programs.',
      image: roxburyImg,
    },
    {
      name: 'Wayland Islamic Center',
      address: '7 Cochituate Rd, Wayland',
      website: '',
      description: 'Suburban mosque west of Boston.',
      image: waylandImg,
    },
    {
      name: 'Yusuf Mosque',
      address: 'Brighton, MA',
      website: '',
      description: 'Community mosque in the Brighton area.',
      image: yusufImg,
    },
  ];

  const usefulLinks = [
    { name: 'MIT Chaplaincy', url: 'https://studentlife.mit.edu/rl', description: 'MIT Religious Life office' },
    { name: 'MIT Events Calendar', url: 'https://calendar.mit.edu/group/muslim_students_association', description: 'Official MIT MSA events' },
    { name: 'IslamicFinder', url: 'https://www.islamicfinder.org', description: 'Prayer times and Qibla direction' },
  ];

  return (
    <>
      <Hero
        title="Resources"
        subtitle="Helpful resources for Muslim life at MIT and in the Cambridge area."
      />

      {/* Halal Restaurants Section */}
      <Section variant="light" id="halal-food">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Halal Restaurants</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            Halal dining options near MIT and in the Boston area. Always verify halal status directly with the restaurant.
          </p>
          <div className="grid grid--3">
            {halalRestaurants.map((item) => (
              <Card key={item.name}>
                <Card.Image src={item.image} alt={item.name} />
                <Card.Content>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Halal Groceries Section */}
      <Section id="groceries">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Halal Grocery Stores</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            Find halal meat, spices, and other grocery items at these stores.
          </p>
          <div className="grid grid--3">
            {halalGroceries.map((item) => (
              <Card key={item.name}>
                <Card.Image src={item.image} alt={item.name} />
                <Card.Content>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Local Mosques */}
      <Section variant="light" id="mosques">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Local Mosques</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            Mosques and Islamic centers in the Boston/Cambridge area.
          </p>
          <div className="grid grid--2">
            {localMosques.map((mosque) => (
              <Card key={mosque.name}>
                <Card.Image src={mosque.image} alt={mosque.name} />
                <Card.Content>
                  <Card.Title>{mosque.name}</Card.Title>
                  <Card.Subtitle>{mosque.address}</Card.Subtitle>
                  <Card.Text>{mosque.description}</Card.Text>
                  {mosque.website && (
                    <a href={mosque.website} target="_blank" rel="noopener noreferrer" className="link mt-2 block">
                      Visit website
                    </a>
                  )}
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Useful Links */}
      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6 text-center">Useful Links</h2>
          <div className="grid grid--2">
            {usefulLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card--bordered"
                style={{ textDecoration: 'none' }}
              >
                <div className="card__content">
                  <h3 className="card__title">{link.name}</h3>
                  <p className="card__text">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
