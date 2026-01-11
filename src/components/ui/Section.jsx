/**
 * Reusable Section component for page sections
 *
 * @param {string} variant - 'default' | 'light' | 'dark' | 'primary'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} className - Additional CSS classes
 */
export default function Section({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClass = 'section';
  const variantClass = variant !== 'default' ? `section--${variant}` : '';
  const sizeClass = size !== 'md' ? `section--${size}` : '';

  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}

/**
 * Section Header component for consistent section titles
 */
Section.Header = function SectionHeader({
  title,
  subtitle,
  className = '',
  ...props
}) {
  return (
    <div className={`section-header ${className}`} {...props}>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};
