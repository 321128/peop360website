import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Zap, Award, CheckCircle, Brain, Target, BarChart3, Settings, MessageSquare } from 'lucide-react';

const solutions = [
  {
    title: 'Behavioral Assessments',
    description: 'Comprehensive suite of Indian-normed, multilingual assessments for complete people analytics',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    href: '/assessments',
    features: [
      'Leadership Profiling (16-Type Personality)',
      'Cognitive & Aptitude Testing',
      'Pre-employment Screening',
      'Motivation & Cultural Fit Analysis',
      'NEP Student Profiling',
      'Wellness & Dropout Risk Assessment',
      'Multilingual Reporting',
      'Real-time Dashboards'
    ],
    highlights: [
      '8+ Languages Supported',
      'Indian Cultural Norms',
      'API/LMS Ready',
      'White-label Options'
    ]
  },
  {
    title: 'AI Workflow Automation',
    description: '100+ pre-built n8n workflows for recruitment, onboarding, L&D, and student lifecycle management',
    icon: Zap,
    color: 'from-teal-500 to-teal-600',
    href: '/automation',
    features: [
      'Recruitment Process Automation',
      'Employee Onboarding Workflows',
      'Learning & Development Triggers',
      'Student Lifecycle Management',
      'Behavioral-based Routing',
      'Manager Dashboard Integration',
      'WhatsApp Automation',
      'Multi-platform Connectivity'
    ],
    highlights: [
      '100+ Ready Workflows',
      'WhatsApp Integration',
      'Zoho/SAP/Oracle Ready',
      'Behavioral Triggers'
    ]
  },
  {
    title: 'AMA Training Programs',
    description: 'Professional development through AMA South Asia partnership with diagnostics-driven program selection',
    icon: Award,
    color: 'from-purple-500 to-purple-600',
    href: '/training',
    features: [
      'Leadership Development Programs',
      'Business Communication Training',
      'Managerial Effectiveness',
      'Compliance & Ethics Training',
      'Diagnostics-driven Selection',
      'Curated Learning Paths',
      'Blended Delivery Models',
      'Analytics-linked Feedback'
    ],
    highlights: [
      '160+ AMA Programs',
      'Diagnostics Integration',
      'Blended Delivery',
      'ROI Measurement'
    ]
  }
];

const integrations = [
  'WhatsApp Business', 'Zoho CRM', 'SAP SuccessFactors', 'Oracle HCM', 
  'Moodle LMS', 'Microsoft Teams', 'Google Workspace', 'Slack'
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                People Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated platform combining AI-powered workflows, evidence-based assessments, 
              and world-class training programs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {solution.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="justify-start">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild size="lg" className={`bg-gradient-to-r ${solution.color} text-white hover:opacity-90`}>
                    <Link href={solution.href}>
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
                      <div className="grid gap-3">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seamless Integration Ecosystem
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with your existing tools and platforms for a unified experience
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Settings className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-900">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your People Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            See how our integrated solutions can drive measurable results for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/book">
                Schedule Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">
                Contact Our Experts
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}