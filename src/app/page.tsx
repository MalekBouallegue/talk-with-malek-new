'use client';

import { useState } from 'react';

const ACCESS_KEY = "3b223a59-622c-4759-9063-5c4bc0534d36";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'how' | 'pricing'>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative overflow-hidden font-sans">
      
      {/* ------------------------------------------------------------- */}
      {/* FLOATING ALPHABET BUBBLES BACKGROUND                          */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-60">
        {/* English Alphabet Bubbles */}
        <div className="absolute top-16 left-[5%] w-12 h-12 rounded-full bg-emerald-100/70 border border-emerald-300/50 text-emerald-800/50 font-extrabold text-xl flex items-center justify-center shadow-sm">
          A
        </div>
        <div className="absolute top-1/4 right-[8%] w-16 h-16 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/40 font-extrabold text-2xl flex items-center justify-center shadow-sm">
          B
        </div>
        <div className="absolute top-1/2 left-[3%] w-14 h-14 rounded-full bg-emerald-100/50 border border-emerald-300/30 text-emerald-800/40 font-extrabold text-2xl flex items-center justify-center shadow-sm">
          C
        </div>
        <div className="absolute bottom-1/3 right-[5%] w-12 h-12 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/50 font-extrabold text-xl flex items-center justify-center shadow-sm">
          D
        </div>
        <div className="absolute bottom-16 left-[10%] w-16 h-16 rounded-full bg-emerald-100/50 border border-emerald-300/30 text-emerald-800/30 font-extrabold text-3xl flex items-center justify-center shadow-sm">
          E
        </div>

        {/* Arabic Alphabet Bubbles */}
        <div className="absolute top-28 right-[18%] w-14 h-14 rounded-full bg-emerald-100/70 border border-emerald-300/50 text-emerald-800/60 font-bold text-2xl flex items-center justify-center shadow-sm">
          أ
        </div>
        <div className="absolute top-1/3 left-[12%] w-14 h-14 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/50 font-bold text-2xl flex items-center justify-center shadow-sm">
          ب
        </div>
        <div className="absolute top-2/3 right-[12%] w-16 h-16 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/40 font-bold text-3xl flex items-center justify-center shadow-sm">
          ت
        </div>
        <div className="absolute bottom-1/4 left-[6%] w-12 h-12 rounded-full bg-emerald-100/50 border border-emerald-300/30 text-emerald-800/40 font-bold text-xl flex items-center justify-center shadow-sm">
          ث
        </div>
        <div className="absolute bottom-24 right-[22%] w-14 h-14 rounded-full bg-emerald-100/60 border border-emerald-300/40 text-emerald-800/50 font-bold text-2xl flex items-center justify-center shadow-sm">
          ض
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* HEADER / NAVIGATION                                           */}
      {/* ------------------------------------------------------------- */}
      <header className="relative z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo + Brand Name */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 focus:outline-none group"
          >
            <svg className="w-10 h-10 flex-shrink-0 transition-transform group-hover:scale-105" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" rx="32" fill="#059669" />
              <path d="M34 78V48C34 38.0589 42.0589 30 52 30C61.9411 30 70 38.0589 70 48V78" stroke="white" strokeWidth="9" strokeLinecap="round" />
              <path d="M50 78V48C50 38.0589 58.0589 30 68 30C77.9411 30 86 38.0589 86 48V78" stroke="#A7F3D0" strokeWidth="9" strokeLinecap="round" />
              <path d="M34 78L26 86V74H34Z" fill="white" />
            </svg>

            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Talk with <span className="text-emerald-600">Malek</span>
            </span>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60 text-sm font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'home' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'about' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab('how')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'how' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              How It Works
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-4 py-1.5 rounded-full transition ${activeTab === 'pricing' ? 'bg-white text-emerald-700 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Pricing & Schedule
            </button>
          </nav>

          {/* CTA Header Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition shadow-sm hover:shadow"
          >
            Book Free Call
          </button>

        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* MAIN CONTENT CONTAINER                                        */}
      {/* ------------------------------------------------------------- */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20">
        
        {/* TAB 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-16 text-center max-w-3xl mx-auto">
            
            {/* Clean Hero Header */}
            <div className="space-y-6 pt-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Speak with confidence.
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Relaxed 1-on-1 conversation sessions tailored to your pace—no group pressure, no grammar drills, and zero judgment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition transform active:scale-95 text-sm"
                >
                  Book Your Free 30-Min Call
                </button>
                <button 
                  onClick={() => setActiveTab('how')}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-700 font-semibold px-7 py-3 rounded-full border border-slate-300 transition text-sm"
                >
                  How It Works
                </button>
              </div>
            </div>

            {/* Feature Cards Grid (Value-Add Points) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4 text-xl">
                  🎯
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Personalized Pace</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No rigid curricula. We talk about real-life topics you care about and focus entirely on your rhythm.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4 text-xl">
                  🗣️
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Real Conversation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ditch textbook drills. We focus on articulating your thoughts clearly and overcoming speaking anxiety.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4 text-xl">
                  🌍
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">Bilingual Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Practice spoken English or Arabic with an educator who understands real dialogue and language nuances.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ABOUT ME */}
        {activeTab === 'about' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Bio & Promise Box */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">About Me</h2>
                  <p className="text-emerald-700 font-semibold text-lg">Communication Educator & TESOL Specialist</p>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Hi, I'm Malek! I specialize in helping people build real speaking confidence in 1-on-1 environments.
                  </p>
                  <p>
                    Many people spend years studying grammar in textbooks or taking language classes, yet still feel frozen when it comes to speaking out loud—especially in front of groups. My mission is to give you a supportive, comfortable space where you can practice expressing your thoughts without fear of being judged.
                  </p>
                  <p>
                    Whether you want to improve your conversational English, practice spoken Arabic, or simply get comfortable articulating your ideas in 1-on-1 conversations, I am here to listen, support, and guide you.
                  </p>
                </div>

                {/* Promise Box */}
                <div className="bg-emerald-50/90 backdrop-blur border border-emerald-200 rounded-2xl p-6 space-y-3">
                  <h3 className="font-bold text-emerald-900 text-lg">My Promise To You:</h3>
                  <ul className="space-y-2 text-slate-700 text-sm md:text-base">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> 100% judgment-free environment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> Patience and active listening during every session
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> Conversations centered on real-life topics you care about
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span> Video or audio call—whichever makes you feel most comfortable
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Profile Picture Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-sm">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  
                  <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <img 
                      src="/profile.jpg" 
                      alt="Malek - Communication Educator" 
                      className="w-full h-[400px] object-cover rounded-2xl"
                    />
                    <div className="p-4 text-center">
                      <h4 className="font-bold text-slate-900 text-lg">Malek</h4>
                      <p className="text-xs text-emerald-600 font-medium">TESOL Specialist & Coach</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: HOW IT WORKS */}
        {activeTab === 'how' && (
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">How It Works</h2>
              <p className="text-slate-600">A simple, stress-free process to start speaking comfortably.</p>
            </div>

            <div className="space-y-4 text-left">
              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-5 items-start">
                <span className="bg-emerald-100 text-emerald-800 font-black text-lg px-3 py-1 rounded-xl">01</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Book Your Free 30-Minute Intro Call</h3>
                  <p className="text-slate-600 text-sm mt-1">We start with a 100% free 30-minute conversation. No pressure, no credit card needed. This gives us a chance to meet and see if you feel comfortable talking with me.</p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-5 items-start">
                <span className="bg-emerald-100 text-emerald-800 font-black text-lg px-3 py-1 rounded-xl">02</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Choose Video or Audio Call</h3>
                  <p className="text-slate-600 text-sm mt-1">You decide how we connect! If camera pressure makes you nervous, we can start with a standard phone or audio call.</p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-5 items-start">
                <span className="bg-emerald-100 text-emerald-800 font-black text-lg px-3 py-1 rounded-xl">03</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Enjoy Real 1-on-1 Conversation</h3>
                  <p className="text-slate-600 text-sm mt-1">We talk about everyday topics, interest areas, or practice scenarios. No strict textbooks or boring grammar drills.</p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl border border-slate-200/80 shadow-sm flex gap-5 items-start">
                <span className="bg-emerald-100 text-emerald-800 font-black text-lg px-3 py-1 rounded-xl">04</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Continue At Your Own Pace ($10 / call)</h3>
                  <p className="text-slate-600 text-sm mt-1">If you enjoy our first session, you can book regular 1-on-1 sessions for $10 per call whenever you want to practice.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-full transition shadow-md"
            >
              Start With A Free 30-Min Call
            </button>
          </div>
        )}

        {/* TAB 4: PRICING & SCHEDULE */}
        {activeTab === 'pricing' && (
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Simple, Transparent Pricing</h2>
              <p className="text-slate-600">Start free, then continue whenever you need practice.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Free Trial Card */}
              <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border-2 border-emerald-500 shadow-lg relative flex flex-col justify-between">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  First Step
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">First Conversation</h3>
                  <div className="text-4xl font-black text-emerald-600 my-4">FREE</div>
                  <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 py-1 px-3 rounded-full inline-block mb-4">
                    30 Minutes • Video or Phone
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Test the experience, see if you feel comfortable talking directly with me, and discuss your goals.
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition"
                >
                  Book Free Call
                </button>
              </div>

              {/* Paid Session Card */}
              <div className="bg-white/90 backdrop-blur p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">1-on-1 Practice Call</h3>
                  <div className="text-4xl font-black text-slate-900 my-4">$10 <span className="text-sm font-normal text-slate-500">/ session</span></div>
                  <p className="text-xs font-semibold text-slate-600 bg-slate-100 py-1 px-3 rounded-full inline-block mb-4">
                    30 Minutes • Personal Session
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Dedicated individual session to practice speaking skills, build fluency, and express yourself freely.
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition"
                >
                  Book A Session
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ------------------------------------------------------------- */}
      {/* BOOKING MODAL FORM                                           */}
      {/* ------------------------------------------------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl relative border border-slate-100">
            <button 
              onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center bg-slate-100"
            >
              ✕
            </button>

            {formStatus === 'success' ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Sent!</h3>
                <p className="text-slate-600 text-sm">
                  Thanks for reaching out! I've received your message and will reply to your email shortly to schedule our call.
                </p>
                <button
                  onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
                  className="mt-4 bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-full hover:bg-emerald-700 transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-slate-900">Book Your Session</h3>
                  <p className="text-slate-600 text-sm mt-1">Fill in your details below to schedule your call with Malek.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Language Goal</label>
                  <select 
                    name="language"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                  >
                    <option value="English Practice">English Speaking Practice</option>
                    <option value="Arabic Practice">Arabic Speaking Practice</option>
                    <option value="Both / General">Both / General Communication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Preferred Time / Note</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    required
                    placeholder="Tell me a bit about your goals and when you are free..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <p className="text-xs text-red-600 text-center font-medium">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow-md disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Booking Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © 2026 Talk with Malek. All rights reserved. 1-on-1 communication practice.
      </footer>

    </div>
  );
}
