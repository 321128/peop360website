import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const team = [
  {
    name: 'Ruby Kanth',
    role: 'Founder & CEO',
    experience: '15+ years in HR Analytics & Organizational Psychology',
    image: '/api/placeholder/300/300',
    bio: 'Visionary leader with extensive experience in behavioral assessments and people analytics. Ruby has pioneered the integration of AI workflows with traditional HR practices, bringing scientific rigor to people decisions across diverse industries.',
    expertise: ['Behavioral Science', 'HR Analytics', 'Organizational Psychology', 'Strategic Leadership'],
    linkedin: 'https://linkedin.com/in/ruby-kanth',
    achievements: [
      'Led 500,000+ assessments across 50+ organizations',
      'Developed India-specific behavioral norms',
      'Pioneered AI-driven people analytics',
      'Established AMA South Asia partnership'
    ]
  },
  {
    name: 'Parham Kanth',
    role: 'Co-Founder & CTO',
    experience: '12+ years in Technology & AI Automation',
    image: '/api/placeholder/300/300',
    bio: 'Technology innovator specializing in AI workflow automation and enterprise integrations. Parham leads the development of our n8n-based automation platform and ensures seamless integration with existing organizational systems.',
    expertise: ['AI Automation', 'n8n Workflows', 'Enterprise Architecture', 'System Integration'],
    linkedin: 'https://linkedin.com/in/parham-kanth',
    achievements: [
      'Built 100+ enterprise AI workflows',
      'Led digital transformation initiatives',
      'Architected scalable automation platform',
      'Expert in multi-platform integrations'
    ]
  },
  {
    name: 'Deepak Kanth',
    role: 'Chief Sales & Marketing Consultant',
    experience: '18+ years in B2B Sales & Marketing',
    image: '/api/placeholder/300/300',
    bio: 'Strategic sales and marketing leader with deep expertise in consultative selling and market development. Deepak drives our go-to-market strategy and builds lasting partnerships with enterprise clients across India.',
    expertise: ['Consultative Sales', 'Strategic Marketing', 'Partnership Development', 'Market Expansion'],
    linkedin: 'https://linkedin.com/in/deepak-kanth',
    achievements: [
      'Established partnerships with 50+ enterprises',
      'Led market expansion across 6 industries',
      'Developed consultative sales methodology',
      'Built strategic channel partnerships'
    ]
  }
];

const advisors = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Behavioral Science Advisor',
    expertise: 'Organizational Psychology, Assessment Validation'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Industry Advisor - BFSI',
    expertise: 'Banking Operations, Risk Management'
  },
  {
    name: 'Prof. Anita Rao',
    role: 'Education Advisor',
    expertise: 'NEP Implementation, Academic Assessment'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders bringing together expertise in behavioral science, 
              technology innovation, and strategic business development
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {team.map((member, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge className="mb-4">{member.role}</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  <p className="text-lg text-blue-600 font-medium mb-6">{member.experience}</p>
                  
                  <p className="text-gray-600 mb-6">{member.bio}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Core Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Achievements</h3>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href={member.linkedin} target="_blank">
                        <Linkedin className="h-4 w-4 mr-2" />
                        Connect on LinkedIn
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contact">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <p className="text-sm">Professional Photo</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry experts and thought leaders guiding our strategic direction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-gray-900 mb-1">{advisor.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{advisor.role}</p>
                  <p className="text-sm text-gray-600">{advisor.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Speak with Our Leadership
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect directly with our founders to discuss your organization's unique challenges and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/book">
                Schedule Leadership Meeting
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">
                Send Direct Message
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}