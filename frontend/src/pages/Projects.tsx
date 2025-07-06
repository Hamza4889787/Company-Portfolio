
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Dental', 'Landscaping', 'Real Estate', 'Car Wrapping', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'Doral Dental - Modern Dental Practice',
      category: 'Dental',
      description: 'A comprehensive dental practice website featuring modern design, appointment booking, and service showcase for healthy smiles.',
      image: '/lovable-uploads/0bbc7e35-37a9-410e-8720-49c65d079a55.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      year: '2024'
    },
    {
      id: 2,
      title: 'Elite Landscape Solutions',
      category: 'Landscaping',
      description: 'Transform your outdoor space into a living masterpiece with premium landscape design and installation services.',
      image: '/lovable-uploads/a143b9ad-d3d0-4ecc-a761-8b453249d45f.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      year: '2024'
    },
    {
      id: 3,
      title: 'MN3 Luxury Real Estate',
      category: 'Real Estate',
      description: 'Your exclusive gateway to the world\'s most prestigious properties with unparalleled luxury service.',
      image: '/lovable-uploads/9adf4582-344a-4fad-b7a2-8764996d2806.png',
      technologies: ['React', 'Next.js', 'Supabase'],
      year: '2024'
    },
    {
      id: 4,
      title: 'WrapPro Vehicle Transformation',
      category: 'Car Wrapping',
      description: 'Transform your vehicle beyond recognition with premium car wrapping services and custom designs.',
      image: '/lovable-uploads/2b2807aa-21ce-4219-aaed-962fc7a30bb4.png',
      technologies: ['React', 'Express.js', 'MongoDB'],
      year: '2024'
    },
    {
      id: 5,
      title: 'Organico E-commerce Store',
      category: 'E-commerce',
      description: 'Living the clean life with organic products and eco-friendly solutions for modern lifestyle.',
      image: '/lovable-uploads/1e77b862-35df-412e-85ea-5375c2bf0279.png',
      technologies: ['React', 'WooCommerce', 'Stripe'],
      year: '2024'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our recent work and discover how we transform ideas into reality.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
