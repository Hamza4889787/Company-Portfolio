
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const whyChooseUs = [
    {
      title: 'Experience',
      description: '5+ years in full-stack development across startups, enterprises, and SaaS platforms.',
      icon: '🎯'
    },
    {
      title: 'Quality Engineering',
      description: 'Clean code, scalable architecture, and production-ready deployments—every time.',
      icon: '⭐'
    },
    {
      title: ' Tech-Driven Innovation',
      description: 'We adopt the latest technologies (React, Next.js, Node.js, Docker, etc.) to future-proof your product.',
      icon: '💡'
    },
    {
      title: 'End-to-End Support',
      description: 'From idea to deployment—and long after—your success is our priority.',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Banner */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
           Learn more about our mission, journey, and what drives our development process.


          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
             CRAFTING SCALABLE WEB SOLUTIONS

              </h2>
              <p className="text-lg text-muted-foreground mb-6">
               Hey, I'm John — a Full Stack Web Developer passionate about building modern, high-performance web applications.


              </p>
              <p className="text-muted-foreground mb-6">
             With deep expertise in both frontend and backend technologies, I create applications that are not only fast and secure but also scalable and user-focused. Whether you need a custom web platform, an optimized API, or a full-stack solution from scratch, I combine clean code, best practices, and strategic thinking to turn your ideas into reality.


              </p>
              <p className="text-muted-foreground mb-8">
               Let's collaborate and build something impactful.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/lovable-uploads/88f2fb0a-beda-426a-a2eb-394d81005b73.png"
                alt="About us"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
What makes us the right development partner for your next big idea:

            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
            "To build reliable, secure, and scalable digital products that help businesses grow and users succeed. We believe the best software is fast, intuitive, and built with purpose."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing.
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

export default About;
