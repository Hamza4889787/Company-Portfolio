
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Project data with different images for each category
  const projectsData = {
    1: {
      id: 1,
      title: 'Doral Dental - Modern Dental Practice',
      category: 'Dental',
      year: '2024',
      client: 'Doral Dental',
      duration: '2 months',
      description: 'A comprehensive dental practice website featuring modern design, appointment booking, and service showcase for healthy smiles for the whole family.',
      challenge: 'The dental practice needed a modern, trustworthy website that could showcase their services while making patients feel comfortable and confident about their dental care.',
      solution: 'We developed a clean, professional website with easy appointment booking, detailed service information, and a welcoming design that builds trust and confidence.',
      results: [
        '50% increase in online appointments',
        '35% growth in new patient inquiries',
        '60% improvement in user engagement',
        '40% faster page load times'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      images: [
        '/lovable-uploads/0bbc7e35-37a9-410e-8720-49c65d079a55.png',
        '/lovable-uploads/bc0ce633-1f70-4fb4-933b-565814748770.png',
        '/lovable-uploads/d0cc5fdd-aa0a-4665-a667-91e09bc34c74.png'
      ]
    },
    2: {
      id: 2,
      title: 'Elite Landscape Solutions',
      category: 'Landscaping',
      year: '2024',
      client: 'Elite Landscapes',
      duration: '3 months',
      description: 'Transform your outdoor space into a living masterpiece with premium landscape design and installation services.',
      challenge: 'The landscaping company needed to showcase their diverse portfolio and attract high-end residential clients.',
      solution: 'We created a visually stunning website highlighting their portfolio with before/after galleries and detailed service descriptions.',
      results: [
        '45% increase in premium project inquiries',
        '30% growth in consultation bookings',
        '55% improvement in lead quality',
        '25% faster project completion'
      ],
      technologies: ['React', 'Node.js', 'MongoDB'],
      images: [
        '/lovable-uploads/a143b9ad-d3d0-4ecc-a761-8b453249d45f.png',
        '/lovable-uploads/bf55b311-bbf5-4d1d-b3f1-e7522e09d578.png',
        '/lovable-uploads/7c753532-1c89-46d3-b571-fefb4f1d77ff.png'
      ]
    },
    3: {
      id: 3,
      title: 'MN3 Luxury Real Estate',
      category: 'Real Estate',
      year: '2024',
      client: 'MN3 Realty',
      duration: '4 months',
      description: 'Your exclusive gateway to the world\'s most prestigious properties with unparalleled luxury service.',
      challenge: 'A luxury real estate agency needed a sophisticated platform to showcase high-end properties and attract affluent clients.',
      solution: 'We developed an elegant, feature-rich platform with advanced property search, virtual tours, and personalized client experiences.',
      results: [
        '70% increase in luxury property inquiries',
        '40% growth in qualified leads',
        '85% improvement in client engagement',
        '50% faster property matching'
      ],
      technologies: ['React', 'Next.js', 'Supabase'],
      images: [
        '/lovable-uploads/9adf4582-344a-4fad-b7a2-8764996d2806.png',
        '/lovable-uploads/cbbaacfe-1796-400d-9310-781f5a5531cf.png',
        '/lovable-uploads/cf7c598e-74e2-4a1b-8ae7-d4e460c8710e.png'
      ]
    },
    4: {
      id: 4,
      title: 'WrapPro Vehicle Transformation',
      category: 'Car Wrapping',
      year: '2024',
      client: 'WrapPro',
      duration: '2 months',
      description: 'Transform your vehicle beyond recognition with premium car wrapping services and custom designs.',
      challenge: 'The car wrapping business needed to showcase their transformation capabilities and attract car enthusiasts.',
      solution: 'We created a dynamic website featuring stunning before/after galleries and interactive design tools.',
      results: [
        '60% increase in custom design requests',
        '45% growth in booking conversions',
        '75% improvement in portfolio views',
        '35% faster quote processing'
      ],
      technologies: ['React', 'Express.js', 'MongoDB'],
      images: [
        '/lovable-uploads/2b2807aa-21ce-4219-aaed-962fc7a30bb4.png',
        '/lovable-uploads/8b8e1d1b-a89f-4f3e-a271-9ee323e6c438.png',
        '/lovable-uploads/77a29898-8eb7-4732-98a0-19201a61ed4e.png'
      ]
    },
    5: {
      id: 5,
      title: 'Organico E-commerce Store',
      category: 'E-commerce',
      year: '2024',
      client: 'Organico',
      duration: '3 months',
      description: 'Living the clean life with organic products and eco-friendly solutions for modern lifestyle.',
      challenge: 'An organic products company needed an e-commerce platform that reflected their eco-friendly values.',
      solution: 'We developed a sustainable-themed e-commerce site with subscription services and eco-impact tracking.',
      results: [
        '80% increase in online sales',
        '55% growth in subscription sign-ups',
        '65% improvement in customer retention',
        '40% increase in average order value'
      ],
      technologies: ['React', 'WooCommerce', 'Stripe'],
      images: [
        '/lovable-uploads/1e77b862-35df-412e-85ea-5375c2bf0279.png'
      ]
    }
  };

  const project = projectsData[parseInt(id || '1')] || projectsData[1];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Back Button */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Button asChild variant="outline" size="sm">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.description}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Year</h3>
                <p className="text-muted-foreground">{project.year}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-muted-foreground">{project.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg">
                <p className="font-semibold text-primary">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Like What You See?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can create something amazing for your project.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
