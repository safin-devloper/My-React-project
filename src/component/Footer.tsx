 import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-10">
            <div className="container mx-auto px-4">
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
                
                    {/* লোগো এবং সোশ্যাল লিংক সেকশন */}
                    <div className="lg:col-span-2 flex flex-col items-start">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-7 h-7 rounded-lg bg-pink-600 flex items-center justify-center text-white font-bold text-xs tracking-wider">
                                DS
                            </div>
                            <span className="text-lg font-bold text-slate-900 tracking-tight">
                                Dev Stack
                            </span>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex items-center gap-5 text-sm font-medium">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                                GitHub
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                                Twitter
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product কলাম */}
                    <div>
                        <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">PRODUCT</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#home" className="text-slate-500 hover:text-slate-900 transition-colors">Home</a></li>
                            <li><a href="#technologies" className="text-slate-500 hover:text-slate-900 transition-colors">Technologies</a></li>
                            <li><a href="#projects" className="text-slate-500 hover:text-slate-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Company কলাম (এখানে আগের কোডে div মিসিং ছিল) */}
                    <div>
                        <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">COMPANY</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#about" className="text-slate-500 hover:text-slate-900 transition-colors">About</a></li>
                            <li><a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">Contact</a></li>
                            <li><a href="#careers" className="text-slate-500 hover:text-slate-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                </div>

                {/* কপিরাইট এবং প্রাইভেসি সেকশন */}
                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                    <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
                    
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="hover:text-slate-700 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-slate-700 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;