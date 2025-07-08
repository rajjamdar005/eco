import ThreeGlobe from './ThreeGlobe';

interface FloatingGlobeProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const FloatingGlobe = ({ size = 'medium', className = '' }: FloatingGlobeProps) => {
  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-48 h-48'
  };

  return (
    <div className={`floating-globe parallax-element ${sizeClasses[size]} ${className}`}>
      <ThreeGlobe />
    </div>
  );
};

export default FloatingGlobe;