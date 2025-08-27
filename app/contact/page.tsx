'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'info@peop360.com',
    action: 'mailto:contact@peop360.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91-9810360693',
    action: 'tel:+919810360693'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: 'C-5/6 Ground Floor,Vasant Kunj, New Delhi 110070
',
    action: '#'
  }
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', href: 'https://linkedin.com/company/peop360' },
  { icon: Twitter, name: 'Twitter', href: 'https://twitter.com/peop360' },
  { icon: Instagram, name: 'Instagram', href: 'https://instagram.com/peop360' },
  { icon: Youtube, name: 'YouTube', href: 'https://youtube.com/@peop360' }
];

const interestOptions = [
  'Assessments',
  'Automation',
  'Training',
  'Partnership',
  'Integration',
  'Other'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
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
              Get in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your people strategy? Our experts are here to help you 
              discover the perfect solution for your organization
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-blue-100">
                  Fill out the form and we'll get back to you within 24 hours
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

                  <div>
                    <Label htmlFor="interest">Primary Interest</Label>
                    <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What interests you most?" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.map((interest) => (
                          <SelectItem key={interest} value={interest}>
                            {interest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your specific needs, challenges, or questions..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!formData.name || !formData.email || !formData.organization || !formData.message}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <p className="text-gray-600">
                    Get in touch through any of these channels
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                        <contact.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                        <p className="text-gray-600">{contact.details}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                  <p className="text-gray-600">
                    Stay updated with our latest insights and announcements
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <social.icon className="h-6 w-6 text-blue-600" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Office Location</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map Placeholder</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prefer a Scheduled Call?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a time that works for you and speak directly with our experts
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
            <a href="/book">
              Schedule a Meeting
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
