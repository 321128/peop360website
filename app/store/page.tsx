'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Users, Brain, Heart, Shield, Target, Star, CheckCircle, ShoppingCart, GraduationCap } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Leadership Strengths Report',
    description: 'Comprehensive 16-type personality assessment with leadership style analysis',
    icon: Users,
    category: 'Leadership',
    price: 'Individual: ₹2,500 | License: ₹25,000/year',
    rating: 4.8,
    features: [
      'Complete personality profiling',
      'Leadership style identification',
      'Team dynamics analysis',
      'Development recommendations',
      'Cultural context mapping'
    ],
    accessOptions: ['Individual Assessment', 'Team License', 'API Integration', 'White-label Option']
  },
  {
    id: 2,
    title: 'NEP Student Profiler',
    description: 'National Education Policy compliant student assessment and career guidance',
    icon: GraduationCap,
    category: 'Education',
    price: 'Individual: ₹1,500 | Institutional: ₹50,000/year',
    rating: 4.9,
    features: [
      'NEP compliance framework',
      'Aptitude and interest mapping',
      'Career pathway recommendations',
      'Academic performance prediction',
      'Learning style identification'
    ],
    accessOptions: ['Student Assessment', 'Institutional License', 'Bulk Packages', 'Custom Integration']
  },
  {
    id: 3,
    title: 'Sales Empathy Screener',
    description: 'Specialized assessment for sales roles focusing on empathy and ethical behavior',
    icon: Target,
    category: 'Sales',
    price: 'Individual: ₹2,000 | License: ₹30,000/year',
    rating: 4.7,
    features: [
      'Sales aptitude measurement',
      'Empathy assessment',
      'Ethical behavior screening',
      'Customer orientation analysis',
      'Performance prediction'
    ],
    accessOptions: ['Individual Assessment', 'Team License', 'API Integration', 'Recruiting Package']
  },
  {
    id: 4,
    title: 'Manager 360 Kit',
    description: 'Complete managerial effectiveness assessment with 360-degree feedback',
    icon: Users,
    category: 'Management',
    price: 'Individual: ₹5,000 | License: ₹75,000/year',
    rating: 4.8,
    features: [
      '360-degree feedback system',
      'Managerial competency mapping',
      'Leadership effectiveness score',
      'Development action plans',
      'Team performance correlation'
    ],
    accessOptions: ['Manager Assessment', 'Organizational License', 'Custom Modules', 'Integration Support']
  },
  {
    id: 5,
    title: 'Wellness Index Assessment',
    description: 'Comprehensive wellness evaluation across emotional, physical, mental, and social dimensions',
    icon: Heart,
    category: 'Wellness',
    price: 'Individual: ₹1,800 | License: ₹40,000/year',
    rating: 4.6,
    features: [
      'Multi-dimensional wellness scoring',
      'Burnout risk assessment',
      'Work-life balance analysis',
      'Stress management recommendations',
      'Intervention trigger alerts'
    ],
    accessOptions: ['Individual Assessment', 'Employee Wellness License', 'API Integration', 'Dashboard Access']
  },
  {
    id: 6,
    title: 'Integrity & Ethics Screener',
    description: 'Advanced integrity assessment for high-stakes recruitment and compliance',
    icon: Shield,
    category: 'Compliance',
    price: 'Individual: ₹3,000 | License: ₹45,000/year',
    rating: 4.9,
    features: [
      'Integrity measurement',
      'Ethical decision-making scenarios',
      'Risk behavior identification',
      'Compliance screening',
      'Background verification integration'
    ],
    accessOptions: ['Individual Screening', 'Corporate License', 'API Integration', 'Compliance Package']
  }
];

const categories = ['All', 'Leadership', 'Education', 'Sales', 'Management', 'Wellness', 'Compliance'];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [inquiryItems, setInquiryItems] = useState<number[]>([]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToInquiry = (productId: number) => {
    if (!inquiryItems.includes(productId)) {
      setInquiryItems([...inquiryItems, productId]);
    }
  };

  const removeFromInquiry = (productId: number) => {
    setInquiryItems(inquiryItems.filter(id => id !== productId));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Assessment Store</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Assessment Solution
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive catalog of validated assessments and build your 
              custom people analytics solution
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 text-white" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Inquiry Cart */}
          {inquiryItems.length > 0 && (
            <div className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-lg p-4 shadow-lg z-50">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="font-semibold">{inquiryItems.length} items in inquiry</span>
              </div>
              <Button asChild size="sm" className="bg-white text-blue-600 hover:bg-gray-50 w-full">
                <Link href="/contact">
                  Submit Inquiry
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{product.category}</Badge>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-sm font-semibold text-blue-600">{product.price}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Access Options:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.accessOptions.map((option, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {option}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {inquiryItems.includes(product.id) ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeFromInquiry(product.id)}
                        className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                      >
                        Remove from Inquiry
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => addToInquiry(product.id)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        Add to Inquiry
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contact">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Access Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Access Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the access model that best fits your organizational needs and scale
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Individual</h3>
                <p className="text-sm text-gray-600">Perfect for single assessments and personal development</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">License</h3>
                <p className="text-sm text-gray-600">Annual licenses for teams and departments</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Brain className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">API</h3>
                <p className="text-sm text-gray-600">Integrate assessments into your existing systems</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">White-label</h3>
                <p className="text-sm text-gray-600">Customized branding for your organization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team to discuss your assessment needs and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/contact">
                Submit Product Inquiry
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/book">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}