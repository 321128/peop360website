import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Users, GraduationCap, Heart, Briefcase, Settings, MessageSquare, CheckCircle } from 'lucide-react';

const useCases = [
  {
    category: 'Recruitment',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    workflows: [
      {
        title: 'BFSI Integrity Screening',
        description: 'Automated integrity + fit screening → interview scheduling',
        industries: ['Banking', 'Financial Services']
      },
      {
        title: 'Tech Talent Pipeline',
        description: 'Resume parsing → technical assessment → automated communication',
        industries: ['IT', 'Software']
      },
      {
        title: 'Retail Bulk Hiring',
        description: 'Mass screening → shortlisting → batch orientation scheduling',
        industries: ['Retail', 'E-commerce']
      }
    ]
  },
  {
    category: 'Onboarding',
    icon: Briefcase,
    color: 'from-teal-500 to-teal-600',
    workflows: [
      {
        title: 'Healthcare Compliance',
        description: 'Nursing checklist automation + SOP delivery',
        industries: ['Healthcare', 'Hospitals']
      },
      {
        title: 'Retail KPI Training',
        description: 'Automated KPI reminders and performance tracking',
        industries: ['Retail', 'Consumer Goods']
      },
      {
        title: 'Government Skilling',
        description: 'Attendance tracking + dropout escalation workflows',
        industries: ['Government', 'Public Sector']
      }
    ]
  },
  {
    category: 'Learning & Development',
    icon: GraduationCap,
    color: 'from-purple-500 to-purple-600',
    workflows: [
      {
        title: 'Skills Gap Analysis',
        description: 'Gap identification → AMA module recommendation → WhatsApp reminders',
        industries: ['IT', 'Manufacturing']
      },
      {
        title: 'Safety Compliance',
        description: 'Automated safety SOP delivery and compliance tracking',
        industries: ['Manufacturing', 'Construction']
      },
      {
        title: 'Regulatory Training',
        description: 'Automated regulatory refreshers + evaluation workflows',
        industries: ['BFSI', 'Pharmaceuticals']
      }
    ]
  },
  {
    category: 'Academic Lifecycle',
    icon: GraduationCap,
    color: 'from-green-500 to-green-600',
    workflows: [
      {
        title: 'Stream Fitment',
        description: 'Academic stream recommendation + adaptive learning paths',
        industries: ['Higher Education', 'Universities']
      },
      {
        title: 'Early Warning System',
        description: 'At-risk student identification + intervention workflows',
        industries: ['Vocational Training', 'Colleges']
      },
      {
        title: 'Parent Communication',
        description: 'Automated parent reports + NEP compliance alerts',
        industries: ['K-12 Schools', 'Education Boards']
      }
    ]
  },
  {
    category: 'Wellness & Engagement',
    icon: Heart,
    color: 'from-red-500 to-red-600',
    workflows: [
      {
        title: 'Burnout Prevention',
        description: 'Burnout pulse surveys → HR alert → intervention workflows',
        industries: ['Healthcare', 'IT Services']
      },
      {
        title: 'Mood Monitoring',
        description: 'Team mood tracking → manager notifications + support resources',
        industries: ['IT', 'Consulting']
      },
      {
        title: 'Academic Stress Management',
        description: 'Stress index monitoring → parent/faculty reporting',
        industries: ['Education', 'Training Institutes']
      }
    ]
  }
];

const integrations = [
  { name: 'Zoho CRM', logo: 'Z' },
  { name: 'SAP SuccessFactors', logo: 'SAP' },
  { name: 'Oracle HCM', logo: 'O' },
  { name: 'Moodle LMS', logo: 'M' },
  { name: 'MS Teams', logo: 'T' },
  { name: 'Google Workspace', logo: 'G' },
  { name: 'WhatsApp Business', logo: 'W' },
  { name: 'Slack', logo: 'S' }
];

export default function AutomationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">n8nflows</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Workflow{' '}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              100+ pre-built n8n workflows for recruitment, onboarding, L&D, and student lifecycle management 
              with behavioral intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Ready Workflows</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">8+</div>
                <div className="text-sm text-gray-600">Platform Integrations</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Automated Operations</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">Real-time</div>
                <div className="text-sm text-gray-600">Dashboard Updates</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Workflow Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pre-configured workflows designed for specific industry challenges and requirements
            </p>
          </div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center`}>
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.category}</h3>
                    <p className="text-gray-600">Automated workflows for {useCase.category.toLowerCase()} processes</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {useCase.workflows.map((workflow, idx) => (
                    <Card key={idx} className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">{workflow.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">{workflow.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {workflow.industries.map((industry, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seamless Platform Integrations
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with your existing tools and platforms for a unified automation experience
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-gray-600">{integration.logo}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See AI Workflows in Action
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Watch how our behavioral intelligence drives smart automation decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              <Link href="/book">
                See Live Workflow Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600">
              <Link href="/contact">
                Discuss Custom Workflows
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}