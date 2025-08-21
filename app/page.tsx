'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Brain, TrendingUp, Shield, Globe, Award, BarChart3, Target, Zap, CheckCircle } from 'lucide-react';

const stats = [
  { value: '500,000+', label: 'Assessments Delivered', icon: Users },
  { value: '100+', label: 'AI Workflows Deployed', icon: Brain },
  { value: '50+', label: 'Enterprise Clients', icon: TrendingUp },
  { value: '8+', label: 'Languages Supported', icon: Globe },
];

const pillars = [
  {
    title: 'Behavioral Assessments',
    description: 'Indian-normed, multilingual assessments for leadership profiling, cognitive evaluation, and cultural fit analysis.',
    icon: Users,
    features: ['16-Type Personality Assessment', 'Cognitive & Aptitude Tests', 'Cultural Fit Analysis', 'Wellness Screening']
  },
  {
    title: 'AI Workflow Automation',
    description: 'n8n-powered workflows for recruitment, onboarding, L&D, and student lifecycle management with seamless integrations.',
    icon: Zap,
    features: ['Recruitment Automation', 'Onboarding Workflows', 'L&D Management', 'WhatsApp Integration']
  },
  {
    title: 'AMA Training Programs',
    description: 'Professional development through AMA South Asia partnership with diagnostics-driven program selection.',
    icon: Award,
    features: ['Leadership Development', 'Communication Skills', 'Management Training', 'Compliance Programs']
  }
];

const industries = [
  { name: 'BFSI', description: 'Banking, Financial Services & Insurance', color: 'bg-blue-100 text-blue-800' },
  { name: 'IT/ITES', description: 'Information Technology Services', color: 'bg-teal-100 text-teal-800' },
  { name: 'Healthcare', description: 'Medical & Healthcare Services', color: 'bg-green-100 text-green-800' },
  { name: 'Education', description: 'Academic Institutions & NEP Compliance', color: 'bg-purple-100 text-purple-800' },
  { name: 'Retail', description: 'Consumer & Retail Industry', color: 'bg-orange-100 text-orange-800' },
  { name: 'Government', description: 'Public Sector & Skilling Programs', color: 'bg-indigo-100 text-indigo-800' }
];

const highlights = [
  { icon: CheckCircle, text: 'IIBP-aligned, Indian-normed tools' },
  { icon: BarChart3, text: 'Real-time analytics dashboards' },
  { icon: Shield, text: 'NEP-compliant assessment framework' },
  { icon: Target, text: 'LMS/HRMS integrations ready' }
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform People Decisions with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                AI, Assessments & Training
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing HR and education with evidence-based diagnostics, adaptive automation, 
              and globally benchmarked professional development programs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/solutions">
                  Explore Peop360 Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <Link href="/store">
                  Visit Assessment Store
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/book">
                  Book a Strategy Call
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <item.icon className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700 text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Trusted by leading organizations across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Pillars of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach combines cutting-edge technology with proven methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pillar.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse sectors across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <Badge className={`${industry.color} mb-4`}>
                    {industry.name}
                  </Badge>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/industries">
                Explore Industry Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Built for Indian Organizations
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">NEP-Aligned Framework</h3>
                      <p className="text-gray-600">Compliant with National Education Policy guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">IIBP Best Practices</h3>
                      <p className="text-gray-600">Following Indian Institute of Banking Personnel standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Enterprise Integrations</h3>
                      <p className="text-gray-600">Seamless LMS/HRMS connectivity and API-ready architecture</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AMA South Asia Partner</h3>
                  <p className="text-gray-600 mb-4">Official consulting and delivery partner for professional development programs</p>
                  <Badge className="bg-teal-100 text-teal-800">Certified Partnership</Badge>
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
            Which assessments and automations fit your organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation to discover tailored solutions for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/book">
                Book 15-min Discovery Call
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/book">
                Schedule 30-min Strategy Session
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/book">
                Book 60-min Deep Dive
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}