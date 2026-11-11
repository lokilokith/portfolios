import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            toast.error('Please enter a valid email address.');
            return;
        }

        if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
            toast.error('Please fill out all required fields.');
            return;
        }

        // EmailJS Configuration from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            toast.error('Contact service configuration is pending. Please email lokilokith123@gmail.com directly.', {
                duration: 5000,
            });
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name.trim(),
                    from_email: formData.email.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                    to_email: 'lokilokith123@gmail.com',
                },
                publicKey
            );
            toast.success('Message sent successfully.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error('EmailJS delivery error:', err);
            toast.error('Delivery failed. Please contact lokilokith123@gmail.com directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-primary to-neon-green"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-neon-purple font-medium tracking-wide text-sm uppercase">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Let's Work Together</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Open to SOC Analyst, Threat Detection, and Security Operations opportunities. Send a message below or connect via professional platforms.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-purple group-hover:text-white transition-all duration-300 text-gray-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Email</h4>
                                    <a href="mailto:lokilokith123@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                        lokilokith123@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-green group-hover:text-dark transition-all duration-300 text-gray-400">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/lokith-cybersec/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        linkedin.com/in/lokith-cybersec
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 text-gray-400">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">GitHub</h4>
                                    <a href="https://github.com/lokilokith" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        github.com/lokilokith
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-dark p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors"
                                    placeholder="Inquiry / Opportunity"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-neon-purple to-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
