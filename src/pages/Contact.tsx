import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbychfzEa2JD0z35zzGtcYF-iX3zHkAGijWG8CYqgR1tNsmdyIGI2DuvN3o2hpdAtFEE/exec';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Build a URL-encoded payload (allowed in no-cors mode)
    const formBody = new URLSearchParams();
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('message', formData.message);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      alert('✅ Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('❌ Could not send message');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-oswald font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Contact Us
            </h1>
            <p className="font-inter text-xl text-secondary max-w-3xl mx-auto">
              Ready to discuss your next racing engine project? Get in touch to explore how we can help you achieve peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <h2 className="font-oswald font-semibold text-2xl text-primary mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-inter font-medium text-secondary mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-accent focus:ring-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-inter font-medium text-secondary mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-accent focus:ring-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-inter font-medium text-secondary mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 focus:border-accent focus:ring-accent"
                    placeholder="Tell us about your racing engine project..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-inter font-semibold py-3 transition-colors duration-200"
                >
                  Send Message
                </Button>
              </form>
              
              {/* Contact Information */}
              <div className="mt-12">
                <h2 className="font-oswald font-semibold text-2xl text-primary mb-6">Get in touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent mt-1" />
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-primary">Email</h3>
                      <p className="font-inter text-secondary">info@prestigeracingusa.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent mt-1" />
                    </div>
                    <div>
                      <h3 className="font-inter font-medium text-primary">Availability</h3>
                      <p className="font-inter text-secondary">By appointment only</p>
                      <p className="font-inter text-sm text-secondary/70 mt-1">
                        Due to our exclusive approach, all consultations and shop visits are scheduled in advance to ensure dedicated attention to your project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Image */}
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/8bb860c1-fee1-4b2f-8ef3-d91ce5f48ad5.png"
                alt="Prestige Racing USA Shop"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
