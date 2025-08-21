import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, Lightbulb, TrendingUp, Users, CheckCircle, Award } from 'lucide-react';

const mission = {
  title: 'Our Mission',
  description: 'To revolutionize people decisions across India through the integration of behavioral science, artificial intelligence, and world-class training methodologies.'
};

const vision = {
  title: 'Our Vision',
  description: 'To become India\'s most trusted platform for evidence-based people analytics, empowering organizations to build high-performing, engaged, and culturally aligned teams.'
};

const values = [
  {
    icon: Target,
    title: 'Integrity',
    description: 'Unwavering commitment to ethical practices and transparent methodologies in all our assessments and recommendations.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously advancing the science of people analytics through cutting-edge AI and behavioral research.'
  },
  {
    icon: TrendingUp,
    title: 'Impact',
    description: 'Measurable business outcomes and positive transformation in every client engagement.'
  },
  {
    icon: Users,
    title: 'Inclusion',
    description: 'Celebrating diversity and ensuring our solutions work effectively across all segments of Indian society.'
  }
];

const differentiators = [
  {
    title: 'Integrated Ecosystem',
    description: 'India\'s only platform combining consulting, diagnostics, AI automation, and training delivery'
  },
  {
    title: 'Cultural Intelligence',
    description: 'Deep understanding of Indian workplace dynamics and cultural nuances'
  },
  {
    title: 'AMA Partnership',
    description: 'Official AMA South Asia partnership bringing global standards to local delivery'
  },
  {
    title: 'Compliance Ready',
    description: 'NEP and IIBP aligned frameworks ensuring regulatory compliance'
  },
  {
    title: 'Enterprise Scale',
    description: 'Proven ability to handle large-scale deployments across diverse industries'
  },
  {
    title: 'White-label Ready',
    description: 'Flexible platform enabling partners to deliver under their own brand'
  }
];

const achievements = [
  { value: '500,000+', label: 'Assessments Completed' },
  { value: '100+', label: 'AI Workflows Deployed' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '15+', label: 'Years Combined Experience' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Peop360
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-driven, technology-enabled platform at the intersection of behavioral science, 
              artificial intelligence, and professional development
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h2>
                <p className="text-lg text-gray-600">{mission.description}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{vision.title}</h2>
                <p className="text-lg text-gray-600">{vision.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Positioning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At the convergence of behavioral science, artificial intelligence, and professional development, 
              we occupy a unique position in the Indian market
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h3>
                <div className="space-y-4">
                  {differentiators.map((diff, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{diff.title}</h4>
                        <p className="text-gray-600">{diff.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Platform Ecosystem</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">Behavioral Assessments</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                    <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">AI Workflow Automation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">AMA Training Programs</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">Analytics & Insights</span>
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
            Partner with Peop360
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the organizations transforming their people strategy with our integrated platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/book">
                Schedule Partnership Discussion
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/team">
                Meet Our Leadership
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}