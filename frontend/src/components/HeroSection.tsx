
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [counts, setCounts] = useState({ experience: 0, projects: 0, satisfaction: 0, clients: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    experience: 5,
    projects: 100,
    satisfaction: 99,
    clients: 50
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCounts({ experience: 0, projects: 0, satisfaction: 0, clients: 0 });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (key: keyof typeof targetCounts) => {
      const target = targetCounts[key];
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);

      return timer;
    };

    const timers = [
      animateCount('experience'),
      animateCount('projects'),
      animateCount('satisfaction'),
      animateCount('clients')
    ];

    return () => timers.forEach(timer => clearInterval(timer));
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="min-h-screen bg-background px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-6 lg:mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                ● FULL STACK WEB DEVELOPER
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8">
                Hey, I'm Hamza,<br />
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">A</span><br />
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold italic">Full Stack </span><br />
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">Web Developer</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0">
               Building powerful, scalable, and modern web applications from frontend to backend.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 py-3 text-base font-semibold">
                <Link to="/contact">CONTACT ME</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile & Stats */}
          <div className="order-1 lg:order-2 relative">
            {/* Menu Badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium z-10">
              MENU
            </div>
            
            {/* Profile Image */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden bg-accent mb-8 lg:mb-12 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Designer Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8 text-center max-w-md mx-auto">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-border/50">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {counts.experience}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-border/50">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {counts.projects}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Projects Delivered</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-border/50">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {counts.satisfaction}%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-border/50">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {counts.clients}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">Clients Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
