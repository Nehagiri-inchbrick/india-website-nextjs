const SOCIAL_LINKS = [
  {
    href: 'https://wa.me/919876543210?text=Hi%20Inchbrick%2C%20I%20need%20help%20finding%20a%20property',
    label: 'Chat on WhatsApp',
    icon: 'fa-whatsapp',
    variant: 'whatsapp',
  },
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: 'fa-facebook-f',
    variant: 'facebook',
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: 'fa-instagram',
    variant: 'instagram',
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: 'fa-youtube',
    variant: 'youtube',
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: 'fa-linkedin-in',
    variant: 'linkedin',
  },
];

export default function HomeSocialFixed() {
  return (
    <nav className="home-social-fixed" aria-label="Follow Inchbrick on social media">
      <span className="home-social-fixed__label" aria-hidden="true">
        Connect
      </span>
      <ul className="home-social-fixed__list">
        {SOCIAL_LINKS.map((item) => (
          <li key={item.variant}>
            <a
              href={item.href}
              className={`home-social-fixed__btn home-social-fixed__btn--${item.variant}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
            >
              <i className={`fab ${item.icon}`} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
