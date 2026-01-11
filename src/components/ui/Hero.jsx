/**
 * Hero section component for page headers
 *
 * @param {string} title - Main headline
 * @param {string} subtitle - Supporting text
 * @param {ReactNode} actions - CTA buttons
 * @param {string} size - 'default' | 'lg'
 * @param {string} className - Additional CSS classes
 */
export default function Hero({
  title,
  subtitle,
  actions,
  size = 'default',
  className = '',
  ...props
}) {
  const sizeClass = size === 'lg' ? 'hero--lg' : '';
  const classes = ['hero', sizeClass, className].filter(Boolean).join(' ');

  return (
    <section className={classes} {...props}>
      <div className="hero__pattern" aria-hidden="true" />
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {actions && <div className="hero__actions">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
