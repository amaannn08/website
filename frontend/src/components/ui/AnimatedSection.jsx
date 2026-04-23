import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
