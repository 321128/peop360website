import Link from 'next/link';
// Using standard img tags for static export simplicity
// import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Assessments', href: '/assessments' },
  { name: 'AI Automation', href: '/automation' },
  { name: 'Training', href: '/training' },
  { name: 'Industries', href: '/industries' },
  { name: 'Store', href: '/store' }
];

const company = [
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '#' },
  { name: 'News', href: '#' }
];

const support = [
  { name: 'Contact', href: '/contact' },
  { name: 'Book a Meeting', href: '/book' },
  { name: 'Help Center', href: '#' },
  { name: 'Documentation', href: '#' }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'GDPR Compliance', href: '#' }
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/peop360', name: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/peop360', name: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/peop360', name: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@peop360', name: 'YouTube' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img
                  src="/img.png"
                  alt="Peop360 Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              
              <p className="text-gray-400 mb-6">
                Revolutionizing people decisions through AI, assessments, and training. 
                Your partner in building high-performing, engaged teams.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:contact@peop360.com" className="text-gray-400 hover:text-white transition-colors">
                    contact@peop360.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a href="tel:+919810360693" className="text-gray-400 hover:text-white transition-colors">
                    +91-9810360693
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Delhi NCR, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 mb-8">
                {company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
              <p className="text-gray-400 mb-4">
                Get insights on people analytics and industry trends
              </p>
              
              <div className="flex gap-2 mb-6">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>

              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <h4 className="text-sm font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                {legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Peop360. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-400 text-sm">Made with ❤️ in India</span>
              <Link href="/contact" className="text-blue-400 hover:text-white text-sm transition-colors">
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}