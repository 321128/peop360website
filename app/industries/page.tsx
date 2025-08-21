import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Code, Heart, GraduationCap, ShoppingCart, Shield, CheckCircle } from 'lucide-react';

const industries = [
  {
    name: 'BFSI',
    title: 'Banking, Financial Services & Insurance',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
    description: 'Specialized solutions for financial sector compliance, risk management, and customer service excellence.',
    keyOutcomes: [
      'Reduced compliance violations by 40%',
      'Improved customer satisfaction scores',
      'Enhanced risk assessment accuracy',
      'Streamlined regulatory training'
    ],
    quickWins: [
      'Automated compliance tracking',
      'Customer service aptitude screening',
      'Leadership pipeline development',
      'Regulatory update workflows'
    ],
    caseStudy: 'Leading private bank reduced onboarding time by 60% while improving compliance scores through automated assessment workflows.'
  },
  {
    name: 'IT/ITES',
    title: 'Information Technology & Services',
    icon: Code,
    color: 'from-teal-500 to-teal-600',
    description: 'Technology-focused solutions for talent acquisition, skill development, and project team optimization.',
    keyOutcomes: [
      'Faster technical hiring decisions',
      '35% reduction in project team conflicts',
      'Improved employee retention',
      'Enhanced skill gap identification'
    ],
    quickWins: [
      'Technical aptitude screening',
      'Team compatibility analysis',
      'Skill-based learning paths',
      'Performance prediction models'
    ],
    caseStudy: 'Global IT services company improved project success rate by 45% through behavioral team composition analysis.'
  },
  {
    name: 'Healthcare',
    title: 'Healthcare & Medical Services',
    icon: Heart,
    color: 'from-green-500 to-green-600',
    description: 'Healthcare-specific assessments for clinical excellence, patient care, and wellness management.',
    keyOutcomes: [
      'Improved patient satisfaction',
      'Reduced staff burnout by 30%',
      'Enhanced care team coordination',
      'Better clinical decision-making'
    ],
    quickWins: [
      'Empathy and patient care assessment',
      'Stress and burnout monitoring',
      'Clinical team optimization',
      'Continuing education workflows'
    ],
    caseStudy: 'Multi-specialty hospital chain reduced nurse turnover by 50% through wellness monitoring and intervention workflows.'
  },
  {
    name: 'Education (NEP)',
    title: 'Educational Institutions',
    icon: GraduationCap,
    color: 'from-purple-500 to-purple-600',
    description: 'NEP-compliant solutions for student assessment, faculty development, and institutional excellence.',
    keyOutcomes: [
      'NEP compliance achievement',
      'Improved student outcomes',
      'Enhanced faculty effectiveness',
      'Better career guidance'
    ],
    quickWins: [
      'Student aptitude profiling',
      'Stream recommendation system',
      'Faculty competency assessment',
      'Parent communication automation'
    ],
    caseStudy: 'State university improved student placement rates by 65% through career aptitude assessments and guidance workflows.'
  },
  {
    name: 'Retail',
    title: 'Retail & Consumer Goods',
    icon: ShoppingCart,
    color: 'from-orange-500 to-orange-600',
    description: 'Retail-focused solutions for customer service, sales performance, and operational excellence.',
    keyOutcomes: [
      'Increased sales performance',
      'Better customer service ratings',
      'Reduced employee turnover',
      'Improved inventory management'
    ],
    quickWins: [
      'Sales aptitude assessment',
      'Customer service screening',
      'Store manager development',
      'Seasonal hiring automation'
    ],
    caseStudy: 'National retail chain increased sales productivity by 40% through sales aptitude-based hiring and training.'
  },
  {
    name: 'Government & Skilling',
    title: 'Public Sector & Skill Development',
    icon: Shield,
    color: 'from-indigo-500 to-indigo-600',
    description: 'Government and skilling solutions for public service delivery, citizen engagement, and capacity building.',
    keyOutcomes: [
      'Improved service delivery',
      'Enhanced citizen satisfaction',
      'Better skill development outcomes',
      'Increased program completion rates'
    ],
    quickWins: [
      'Public service aptitude testing',
      'Skill gap analysis',
      'Training effectiveness measurement',
      'Citizen feedback automation'
    ],
    caseStudy: 'State skill development corporation achieved 80% course completion rate through early intervention workflows.'
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored assessments, workflows, and training programs designed for specific 
              industry challenges and regulatory requirements
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center`}>
                          <industry.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <Badge className="mb-2">{industry.name}</Badge>
                          <h2 className="text-2xl font-bold text-gray-900">{industry.title}</h2>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-8">{industry.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Key Outcomes</h3>
                          <div className="space-y-2">
                            {industry.keyOutcomes.map((outcome, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                {outcome}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Quick Wins</h3>
                          <div className="space-y-2">
                            {industry.quickWins.map((win, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                {win}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button asChild size="lg" className={`bg-gradient-to-r ${industry.color} text-white hover:opacity-90`}>
                        <Link href="/book">
                          Explore Tailored Demo <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg">Success Story</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 italic mb-4">"{industry.caseStudy}"</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Verified Results
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Industry, Our Expertise
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how we've helped organizations in your industry achieve exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/book">
                Book Industry-Specific Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">
                Discuss Your Challenges
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}