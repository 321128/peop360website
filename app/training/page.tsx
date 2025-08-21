import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Award, Users, TrendingUp, Target, CheckCircle, BookOpen, BarChart3, MessageSquare } from 'lucide-react';

const programs = [
  {
    category: 'Leadership Development',
    icon: Users,
    color: 'bg-blue-500',
    programs: [
      'Executive Leadership Program',
      'Middle Management Excellence',
      'Team Leadership Essentials',
      'Strategic Decision Making'
    ]
  },
  {
    category: 'Business Communication',
    icon: MessageSquare,
    color: 'bg-teal-500',
    programs: [
      'Executive Communication',
      'Presentation Mastery',
      'Cross-cultural Communication',
      'Digital Communication'
    ]
  },
  {
    category: 'Financial Acumen',
    icon: TrendingUp,
    color: 'bg-green-500',
    programs: [
      'Finance for Non-Finance',
      'Budget Management',
      'Financial Analysis',
      'Investment Decision Making'
    ]
  },
  {
    category: 'Strategy & Innovation',
    icon: Target,
    color: 'bg-purple-500',
    programs: [
      'Strategic Planning',
      'Innovation Management',
      'Change Leadership',
      'Digital Transformation'
    ]
  }
];

const deliveryFlow = [
  {
    step: '01',
    title: 'Diagnose',
    description: 'Comprehensive assessment to identify learning needs and gaps',
    icon: BarChart3
  },
  {
    step: '02',
    title: 'Map to AMA Modules',
    description: 'AI-powered matching to relevant AMA South Asia programs',
    icon: Target
  },
  {
    step: '03',
    title: 'Deliver',
    description: 'Blended learning delivery through online, offline, and hybrid modes',
    icon: BookOpen
  },
  {
    step: '04',
    title: 'Reinforce via Nudges',
    description: 'Behavioral nudges and follow-up activities to ensure retention',
    icon: MessageSquare
  },
  {
    step: '05',
    title: 'Measure ROI',
    description: 'Analytics-driven ROI measurement and continuous improvement',
    icon: TrendingUp
  }
];

const features = [
  'Diagnostics-driven program selection',
  'Curated learning paths based on assessment results',
  'Blended delivery (online/offline/hybrid)',
  'Real-time progress tracking',
  'Manager dashboards and insights',
  'Behavioral reinforcement through automation',
  'ROI measurement and analytics',
  'AMA South Asia certification'
];

export default function TrainingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 mb-4">AMA South Asia Partnership</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Development{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Training Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              160+ globally benchmarked training programs delivered through our official 
              AMA South Asia partnership with diagnostics-driven customization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">160+</div>
                <div className="text-sm text-gray-600">AMA Training Programs</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Organizations Trained</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Participant Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AMA Partnership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Official AMA South Asia Partnership
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                As an official consulting and delivery partner of AMA South Asia, we bring world-class 
                management training programs with local expertise and cultural context.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.slice(4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AMA South Asia Certified</h3>
                <p className="text-gray-600 mb-6">
                  Official partnership ensures global standards with local delivery excellence
                </p>
                <Badge className="bg-purple-100 text-purple-800">Certified Partner</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Delivery Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From assessment to impact measurement, our systematic approach ensures maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {deliveryFlow.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < deliveryFlow.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform origin-left group-hover:scale-x-110 transition-transform"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Program Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from 160+ AMA programs across key business competencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.programs.map((program, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        {program}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Design Your Learning Journey
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our assessments guide the perfect training program selection for your team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
              <Link href="/contact">
                Download Program Catalog
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/book">
                Plan a Cohort
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}