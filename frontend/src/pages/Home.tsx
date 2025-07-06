import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const technologies = [
    'React', 'TypeScript', 'Next.js', 'SQL', 'PostgreSQL', 
    'MongoDB', 'Supabase', 'Node.js','FastAPI','Laravel','PHP'
  ];

  const services = [
    {
      title: 'Web Application Development',
      description: 'Custom web apps built with scalable backend and beautiful, responsive frontend.',
      image: '/lovable-uploads/44c8b6d4-9ddf-40e2-be93-9be0fcd5a6dd.png'
    },
    {
      title: ' API & Backend Development',
      description: 'Secure, RESTful or GraphQL APIs, database integration, and cloud-ready architecture.',
      image: '/lovable-uploads/5a3b327d-2bed-4d84-bccd-ad008ec04ff6.png'
    },
    {
      title: ' Performance Optimization',
      description: 'Fast load times, SEO-friendly structure, and scalable solutions for growth.',
      image: '/lovable-uploads/987a0ca2-ad00-4d10-ba7c-c6ec817afddd.png'
    },
    {
      title: ' Authentication & Security',
      description: 'Role-based access, JWT/OAuth, protected routes, and secure data handling.',
      image: '/lovable-uploads/ac705090-3480-433e-93ac-6691df266854.png'
    },
      {
      title: ' Testing & Deployment',
      description: 'Unit/integration tests, CI/CD pipelines, and production-grade deployment.',
      image: '/lovable-uploads/98b1090a-4f74-469a-87c8-09c23106c2dc.png'
    },
      {
      title: ' Mobile-Responsive Interfaces',
      description: 'Built with a mobile-first approach for perfect performance on every device.',
      image: '/lovable-uploads/83e24590-1850-4490-88e3-107cd374935b.png'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      content: 'Our web platform went from slow and outdated to fast and reliable. John handled everything end-to-end.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b93c?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Brand',
      content: 'Outstanding developer. From database to frontend, everything was smooth and professional.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      company: 'Digital Agency',
      content: 'Code quality, performance, and clarity—everything top-notch. Highly recommended.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-card px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle">
I leverage modern, production-ready tools to deliver fast, secure, and maintainable web solutions:

            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-background border border-border rounded-full text-sm font-medium hover:bg-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
Complete Full Stack Web Development Services Tailored to Your Business

            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-card px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="section-title">What Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's collaborate and create something extraordinary together.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8 py-3">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
