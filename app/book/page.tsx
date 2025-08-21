'use client';

import Link from 'next/link';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Users, Target, CheckCircle, Calendar, Phone, Mail } from 'lucide-react';

const meetingTypes = [
  {
    duration: '15 minutes',
    title: 'Discovery Call',
    description: 'Quick introduction and needs assessment',
    icon: Clock,
    color: 'bg-blue-500',
    suitable: ['Initial exploration', 'General questions', 'Product overview']
  },
  {
    duration: '30 minutes',
    title: 'Strategy Session',
    description: 'Detailed discussion of your specific requirements',
    icon: Target,
    color: 'bg-teal-500',
    suitable: ['Requirement analysis', 'Solution design', 'Implementation planning']
  },
  {
    duration: '60 minutes',
    title: 'Deep Dive',
    description: 'Comprehensive consultation with demo and roadmap',
    icon: Users,
    color: 'bg-purple-500',
    suitable: ['Complete solution overview', 'Live demonstrations', 'Detailed roadmap discussion']
  }
];

const industries = [
  'BFSI', 'IT/ITES', 'Healthcare', 'Education', 'Retail', 'Government & Skilling', 'Manufacturing', 'Other'
];

const teamSizes = [
  '1-50 employees', '51-200 employees', '201-1000 employees', '1000+ employees'
];

const primaryGoals = [
  'Improve hiring quality',
  'Enhance employee engagement',
  'Develop leadership pipeline',
  'Automate HR processes',
  'Implement training programs',
  'Ensure compliance',
  'Other'
];

export default function BookPage() {
  const [selectedMeeting, setSelectedMeeting] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    industry: '',
    teamSize: '',
    primaryGoal: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, meetingType: selectedMeeting });
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book a{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Strategy Meeting
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with our experts to explore how Peop360 can transform 
              your people strategy
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Meeting Type
            </h2>
            <p className="text-lg text-gray-600">
              Select the format that best matches your needs and available time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {meetingTypes.map((meeting, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-lg ${
                  selectedMeeting === meeting.duration 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedMeeting(meeting.duration)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${meeting.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <meeting.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{meeting.title}</CardTitle>
                  <p className="text-lg font-semibold text-blue-600">{meeting.duration}</p>
                  <p className="text-gray-600">{meeting.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                  <div className="space-y-2">
                    {meeting.suitable.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">
                {selectedMeeting ? `Book Your ${selectedMeeting} Meeting` : 'Complete Your Booking Details'}
              </CardTitle>
              <p className="text-blue-100">
                Fill out the form below to schedule your consultation
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      placeholder="Your organization name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        {teamSizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="primaryGoal">Primary Goal</Label>
                  <Select value={formData.primaryGoal} onValueChange={(value) => handleInputChange('primaryGoal', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="What's your main objective?" />
                    </SelectTrigger>
                    <SelectContent>
                      {primaryGoals.map((goal) => (
                        <SelectItem key={goal} value={goal}>
                          {goal}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about your specific needs and challenges..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    disabled={!selectedMeeting || !formData.name || !formData.email || !formData.organization}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">
                      Contact Us Instead
                    </Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prefer to Connect Directly?
              </h3>
              <p className="text-gray-600 mb-6">
                Reach out to us directly for immediate assistance
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-blue-600">contact@peop360.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-blue-600">+91-9810360693</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}