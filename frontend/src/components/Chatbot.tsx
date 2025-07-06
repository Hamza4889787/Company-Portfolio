
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you learn about our web development services. Ask me anything about our technologies, services, or experience!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const websiteKnowledge = {
    services: [
      'Web Application Development',
      'API & Backend Development', 
      'Performance Optimization',
      'Authentication & Security',
      'Testing & Deployment',
      'Mobile-Responsive Interfaces'
    ],
    technologies: [
      'React', 'TypeScript', 'Next.js', 'SQL', 'PostgreSQL', 
      'MongoDB', 'Supabase', 'Node.js', 'FastAPI', 'Laravel', 'PHP'
    ],
    experience: '5+ years in full-stack development',
    projects: '100+ projects completed',
    satisfaction: '99% client satisfaction rate'
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return `We offer comprehensive web development services including: ${websiteKnowledge.services.join(', ')}. Each service is tailored to meet your specific business needs with modern, scalable solutions.`;
    }
    
    if (message.includes('technology') || message.includes('tech') || message.includes('stack')) {
      return `We use cutting-edge technologies including: ${websiteKnowledge.technologies.join(', ')}. Our tech stack ensures fast, secure, and maintainable web applications.`;
    }
    
    if (message.includes('experience') || message.includes('how long')) {
      return `We have ${websiteKnowledge.experience} across startups, enterprises, and SaaS platforms. We've completed ${websiteKnowledge.projects} with a ${websiteKnowledge.satisfaction}.`;
    }
    
    if (message.includes('contact') || message.includes('get in touch')) {
      return "You can contact us through our Contact page or email us at hello@portfolio.com. We'd love to discuss your project and help bring your vision to life!";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return "Our pricing depends on the scope and complexity of your project. We offer competitive rates and provide detailed quotes after understanding your requirements. Contact us for a personalized estimate!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to our portfolio. I'm here to help you learn about our web development services. What would you like to know?";
    }
    
    return "I'd be happy to help! I can tell you about our services, technologies, experience, pricing, or how to contact us. What specific information are you looking for?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: generateResponse(inputValue),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 h-96 shadow-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
