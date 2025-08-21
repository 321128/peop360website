import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Brain, Heart, Shield, Target, BarChart3, Globe, Smartphone, CheckCircle } from 'lucide-react';

const assessmentPortfolio = [
  {
    title: '16-Type Personality Assessment',
    description: 'Indianized MBTI-style personality profiling with cultural context',
    icon: Users,
    category: 'Leadership',
    features: ['Indian cultural norms', 'Comprehensive personality mapping', 'Leadership style identification', 'Team dynamics analysis']
  },
  {
    title: 'Strengths & Motivators',
    description: 'Identify core strengths and intrinsic motivation drivers',
    icon: Target,
    category: 'Performance',
    features: ['Natural talent identification', 'Motivation mapping', 'Career alignment', 'Performance optimization']
  },
  {
    title: 'Emotional Intelligence & Collaboration',
    description: 'EQ assessment with collaborative behavior analysis',
    icon: Heart,
    category: 'Social',
    features: ['EQ measurement', 'Social awareness', 'Relationship management', 'Team collaboration']
  },
  {
    title: 'Learning Agility Assessment',
    description: 'Measure adaptability and learning potential',
    icon: Brain,
    category: 'Development',
    features: ['Learning speed assessment', 'Adaptability measurement', 'Growth potential', 'Skill acquisition']
  },
  {
    title: 'Role Fitment Analysis',
    description: '250+ job archetypes for precise role matching',
    icon: Target,
    category: 'Recruitment',
    features: ['250+ role archetypes', 'Job-person fit', 'Performance prediction', 'Retention analysis']
  },
  {
    title: 'Abstract Reasoning & Aptitude',
    description: 'Cognitive ability and problem-solving assessment',
    icon: Brain,
    category: 'Cognitive',
    features: ['Logical reasoning', 'Problem-solving ability', 'Pattern recognition', 'Analytical thinking']
  },
  {
    title: 'Integrity & Ethics Screening',
    description: 'Comprehensive integrity and ethical behavior assessment',
    icon: Shield,
    category: 'Compliance',
    features: ['Integrity measurement', 'Ethical decision-making', 'Risk assessment', 'Compliance screening']
  },
  {
    title: 'Wellness Assessment',
    description: 'Holistic wellness evaluation across multiple dimensions',
    icon: Heart,
    category: 'Wellness',
    features: ['Emotional wellness', 'Physical health indicators', 'Mental health screening', 'Social well-being']
  }
];

const features = [
  {
    icon: Globe,
    title: 'Indian Norms & Context',
    description: 'Assessments calibrated for Indian cultural context and workplace dynamics'
  },
  {
    icon: Smartphone,
    title: '8+ Languages',
    description: 'Multi-lingual support including Hindi, English, and regional languages'
  },
  {
    icon: BarChart3,
    title: 'API/LMS Ready',
    description: 'Seamless integration with existing HRMS and LMS platforms'
  },
  {
    icon: Users,
    title: 'White-label Options',
    description: 'Customizable branding and reporting for organizational consistency'
  }
];

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Assessment Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Evidence-Based{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Behavioral Assessments
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of Indian-normed, multilingual assessments designed for 
              precise people analytics and decision-making
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Portfolio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Assessment Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientifically validated assessments covering all aspects of human potential and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessmentPortfolio.map((assessment, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <assessment.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary">{assessment.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{assessment.title}</CardTitle>
                  <p className="text-gray-600">{assessment.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {assessment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rich, Actionable Reports
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our assessment reports provide deep insights with practical recommendations 
                for development and decision-making.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Individual Reports</h3>
                    <p className="text-gray-600">Detailed personal insights with development recommendations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Team Analytics</h3>
                    <p className="text-gray-600">Aggregate team insights and dynamics analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Organizational Dashboards</h3>
                    <p className="text-gray-600">Real-time organizational people analytics</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Request Demo Report
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sample Assessment Report</h3>
                  <p className="text-gray-600">Leadership Profile Analysis</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Leadership Style</span>
                    <span className="font-semibold text-gray-900">Transformational</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Emotional Intelligence</span>
                    <span className="font-semibold text-gray-900">High</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cultural Fit</span>
                    <span className="font-semibold text-gray-900">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Making Better People Decisions
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the power of evidence-based assessments tailored for Indian organizations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/store">
                Explore Assessment Store
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/book">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}