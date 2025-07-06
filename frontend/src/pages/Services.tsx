import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'Custom web apps with clean frontend and scalable backend systems.',
      features: ['Responsive UI', 'Scalable Backend', 'SPA/SSR Support', 'Database Integration'],
      image: '/lovable-uploads/44c8b6d4-9ddf-40e2-be93-9be0fcd5a6dd.png'
    },
    {
      title: 'API & Backend Development',
      description: 'Robust APIs and backend services built for performance and security.',
      features: ['REST & GraphQL APIs', 'Database Design', 'Cloud Deployment', 'Auth Integration'],
      image: '/lovable-uploads/5a3b327d-2bed-4d84-bccd-ad008ec04ff6.png'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimizing speed, SEO, and scalability for seamless performance.',
      features: ['SEO Enhancements', 'Lazy Loading', 'Code Splitting', 'Server Caching'],
      image: '/lovable-uploads/987a0ca2-ad00-4d10-ba7c-c6ec817afddd.png'
    },
    {
      title: 'Authentication & Security',
      description: 'Secure access and data protection for every user interaction.',
      features: ['JWT/OAuth', 'Role-based Access', 'Protected Routes', 'Encryption'],
      image: '/lovable-uploads/ac705090-3480-433e-93ac-6691df266854.png'
    },
    {
      title: 'Testing & Deployment',
      description: 'Ensuring quality with automated tests and smooth deployments.',
      features: ['Unit Testing', 'CI/CD Pipelines', 'Production Builds', 'Error Monitoring'],
      image: '/lovable-uploads/98b1090a-4f74-469a-87c8-09c23106c2dc.png'
    },
    {
      title: 'Mobile-Responsive Interfaces',
      description: 'Designed for flawless performance across all screen sizes.',
      features: ['Mobile-First Design', 'Responsive Layouts', 'Touch Optimization', 'Cross-Browser Support'],
      image: '/lovable-uploads/83e24590-1850-4490-88e3-107cd374935b.png'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Research',
      description: 'Market analysis, competitor research, and user behavior studies.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Creating wireframes, mockups, and interactive prototypes.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building your project with clean, scalable, and optimized code.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing across devices and browsers for quality assurance.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'Deployment and post-launch support to ensure everything runs smoothly.'
    }
  ];

  const tools = [
    'React', 'TypeScript', 'Next.js', 'SQL', 'PostgreSQL', 
    'MongoDB', 'Supabase', 'Node.js','FastAPI','Laravel','PHP'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Banner */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive design and development solutions to bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              From concept to completion, we provide end-to-end solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A systematic approach to ensure project success and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Tools & Technologies</h2>
            <p className="section-subtitle">
              We use industry-leading tools to deliver exceptional results.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
