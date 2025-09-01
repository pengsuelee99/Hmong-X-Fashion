import { Award, Users, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-foreground">
              About <span className="bg-gradient-gold bg-clip-text text-transparent">Hmong X Fashion</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A story of passion, craftsmanship, and unwavering commitment to excellence. 
              Discover how Hmong X Fashion became synonymous with premium quality and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2025, Hmong X Fashion emerged from a simple yet powerful vision: to create products 
                  that embody the perfect harmony of functionality, beauty, and craftsmanship. Our journey 
                  began with a small team of passionate artisans who refused to compromise on quality.
                </p>
                <p>
                  Every piece in our collection tells a story of meticulous attention to detail, 
                  premium materials sourced from around the world, and innovative design processes 
                  that honor traditional craftsmanship while embracing modern technology.
                </p>
                <p>
                  Today, Hmong X Fashion stands as a beacon of excellence in the luxury goods industry, 
                  trusted by discerning customers who appreciate the finer things in life and 
                  understand that true quality is an investment that transcends trends.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-gold rounded-2xl p-8 flex items-center justify-center">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                      4+
                    </div>
                    <p className="text-muted-foreground font-medium">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-premium-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We pursue perfection in every detail, ensuring each product meets the highest standards of quality and craftsmanship.'
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We listen, learn, and continuously improve to exceed expectations.'
              },
              {
                icon: Globe,
                title: 'Sustainability',
                description: 'We are committed to responsible sourcing and sustainable practices that protect our planet for future generations.'
              },
              {
                icon: Heart,
                title: 'Passion',
                description: 'Every team member brings genuine passion and love for what they do, creating products that truly make a difference.'
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-border shadow-card-premium">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl text-muted-foreground italic leading-relaxed">
                "To create exceptional products that enhance the lives of our customers, 
                while fostering a culture of innovation, sustainability, and respect for traditional craftsmanship. 
                We believe that luxury should be accessible, meaningful, and made to last."
              </blockquote>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg font-semibold text-foreground">The Hmong X Fashion Team</p>
                <p className="text-muted-foreground">Crafting Excellence Since 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-premium text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '150+', label: 'Premium Products' },
              { number: '50+', label: 'Countries Served' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind every Hmong X Fashion creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Founder & Creative Director',
                description: 'Visionary leader with 15+ years in luxury goods design and a passion for sustainable craftsmanship.'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Head of Operations',
                description: 'Operations expert ensuring every product meets our exacting standards from conception to delivery.'
              },
              {
                name: 'Elena Kowalski',
                role: 'Chief Design Officer',
                description: 'Award-winning designer bringing innovative concepts to life while honoring traditional techniques.'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-border shadow-card-premium">
                <CardContent className="p-8 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-gold font-medium">{member.role}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;