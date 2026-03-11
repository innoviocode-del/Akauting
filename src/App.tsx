/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Server, 
  ShieldCheck, 
  Zap, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Settings, 
  Terminal, 
  LifeBuoy,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  Database,
  Globe,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Akaunting<span className="text-indigo-600">Deploy</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Problem</a>
          <a href="#solution" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Solution</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Process</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200">
            Request Installation
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
          Self-Hosted Financial Freedom
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
          Professional Financial Management <br className="hidden lg:block" />
          <span className="text-indigo-600">Running on Your Own Server</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          We deploy Akaunting for your business with full installation, initial configuration, and specialized technical support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
            Request Installation <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all">
            See how it works
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: LayoutDashboard, text: "Modern financial management system" },
          { icon: ShieldCheck, text: "Full control over your data" },
          { icon: Server, text: "Installed on your own server" },
          { icon: Zap, text: "No mandatory subscription fees" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
          >
            <div className="bg-indigo-50 p-2 rounded-lg">
              <item.icon className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700 text-left">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 bg-slate-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
            Is your financial management still dependent on spreadsheets or expensive software?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Many businesses face problems such as:
          </p>
          <ul className="space-y-6">
            {[
              "Complex spreadsheets that are difficult to maintain",
              "Expensive financial systems with monthly subscriptions",
              "Dependency on third-party platforms",
              "Limited control over financial data"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-red-500/10 p-1 rounded-full">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-slate-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl text-slate-400 italic">
            "These issues often lead to errors, wasted time, and poor visibility into business finances."
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="h-20 bg-slate-700/50 rounded-xl"></div>
                <div className="h-20 bg-slate-700/50 rounded-xl"></div>
                <div className="h-20 bg-slate-700/50 rounded-xl"></div>
              </div>
              <div className="h-32 bg-slate-700/30 rounded-xl border border-dashed border-slate-600 flex items-center justify-center">
                <span className="text-slate-500 text-sm font-mono tracking-tighter">DATA_FRAGMENTATION_ERROR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          A complete financial platform running <br /> on your own infrastructure
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We deploy Akaunting directly on your server or VPS, allowing your business to run a professional financial system without depending on external platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Accounts", icon: Users },
          { title: "Expenses", icon: Zap },
          { title: "Income", icon: BarChart3 },
          { title: "Financial Reports", icon: LayoutDashboard },
          { title: "Cash Flow", icon: Zap },
          { title: "Customers & Suppliers", icon: Users }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all group">
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-indigo-600 transition-colors">
              <item.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm">Full control over your {item.title.toLowerCase()} through a modern and intuitive interface.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Included = () => (
  <section className="py-24 bg-indigo-600 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What you receive with the deployment</h2>
        <p className="text-indigo-100 text-lg">A comprehensive service to get you up and running in no time.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Full Installation",
            icon: Server,
            items: ["Installation on client's server", "Environment configuration", "Database setup", "Domain & secure access"]
          },
          {
            title: "Initial Configuration",
            icon: Settings,
            items: ["Company setup", "Basic chart of accounts", "Essential system settings"]
          },
          {
            title: "Testing & Validation",
            icon: ShieldCheck,
            items: ["Functionality verification", "Administrative access setup", "System testing"]
          },
          {
            title: "Ready-to-Use Delivery",
            icon: CheckCircle2,
            items: ["Fully working system", "Ready to start using", "Full administrative control"]
          }
        ].map((block, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl">
            <block.icon className="w-10 h-10 mb-6 text-indigo-200" />
            <h3 className="text-xl font-bold mb-4">{block.title}</h3>
            <ul className="space-y-3">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-indigo-50">
                  <Check className="w-4 h-4 mt-0.5 text-indigo-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Support = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 blur-2xl rounded-full"></div>
            <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-indigo-600 p-3 rounded-2xl">
                  <LifeBuoy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">On-Demand Support</h3>
                  <p className="text-slate-500 text-sm">Pay only when you need it</p>
                </div>
              </div>
              <div className="space-y-4">
                {["System updates", "Server maintenance", "Plugin installation", "Troubleshooting", "Performance optimization"].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-medium text-slate-700">{item}</span>
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Technical support whenever you need it
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            After installation, you can request technical support for any maintenance or optimization tasks.
          </p>
          <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 text-xl mb-2">Flexible Model</h4>
            <p className="text-indigo-700">
              No mandatory monthly subscription. You only pay for support when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhoItsFor = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-16">
        Perfect for businesses that want independence
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "Small and medium businesses",
          "Startups",
          "Companies transitioning away from spreadsheets",
          "Businesses that prefer full control of their data"
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <Check className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="font-bold text-slate-800">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple 4-step process</h2>
        <p className="text-slate-600">From request to a fully working system in days.</p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
        <div className="grid lg:grid-cols-4 gap-12 relative z-10">
          {[
            { step: "01", title: "Request", desc: "You contact us and provide your server or VPS details." },
            { step: "02", title: "Preparation", desc: "We configure the environment required for the system." },
            { step: "03", title: "Installation", desc: "Akaunting is installed and configured." },
            { step: "04", title: "Delivery", desc: "You receive full access to your working system." }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-indigo-200">
                {item.step}
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Requirements = () => (
  <section className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Requirements for installation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Server, title: "Server", desc: "A VPS or dedicated server" },
              { icon: Globe, title: "Domain", desc: "A domain (optional)" },
              { icon: Terminal, title: "Access", desc: "Root or administrative access" }
            ].map((item, i) => (
              <div key={i} className="bg-black/20 p-8 rounded-3xl border border-white/10">
                <item.icon className="w-8 h-8 mb-6 text-indigo-200" />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-indigo-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-indigo-100 flex items-center gap-2">
            <Zap className="w-5 h-5" /> If needed, we can also assist with server configuration.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why choose our service</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Technical expertise", desc: "Experience deploying and configuring Akaunting.", icon: Terminal },
          { title: "Professional setup", desc: "Correctly prepared environment for stability and performance.", icon: Settings },
          { title: "Independence", desc: "Your system runs on your own infrastructure.", icon: ShieldCheck },
          { title: "Scalable", desc: "The platform can grow with your business.", icon: Zap }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all">
            <item.icon className="w-10 h-10 text-indigo-600 mb-6" />
            <h3 className="font-bold text-lg text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-bold text-slate-800 text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 bg-slate-50">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        <FAQItem 
          question="Do I need to pay a monthly fee for the system?" 
          answer="No. Akaunting is open-source software. Once installed on your server, there are no mandatory subscription fees to use the core system."
        />
        <FAQItem 
          question="Do you host the system?" 
          answer="No. We install it on the client’s server (VPS or dedicated). This ensures you have full control and ownership of your financial data."
        />
        <FAQItem 
          question="Can I request support later?" 
          answer="Yes. Support is optional and provided on an on-demand model. You only pay for technical assistance when you actually need it."
        />
        <FAQItem 
          question="Do you configure plugins?" 
          answer="Yes, we can assist with plugin installation and configuration during technical support requests."
        />
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Ready to take full control of your company’s finances?</h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Request the installation of Akaunting on your server and start using a professional financial management system today.
        </p>
        <button className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-indigo-50 transition-all shadow-xl">
          Request Installation
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Akaunting<span className="text-indigo-600">Deploy</span></span>
          </div>
          <p className="text-slate-500 max-w-sm mb-6">
            Professional deployment and configuration of self-hosted financial management systems for modern businesses.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Service</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-indigo-600">About the service</a></li>
            <li><a href="#" className="hover:text-indigo-600">Technical Support</a></li>
            <li><a href="#" className="hover:text-indigo-600">Installation Process</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Legal & Contact</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-indigo-600">Support Request</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">© 2026 AkauntingDeploy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-indigo-600"><HelpCircle className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Included />
      <Support />
      <WhoItsFor />
      <HowItWorks />
      <Requirements />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
