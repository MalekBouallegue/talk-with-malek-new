'use client';

import React, { useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    language: 'English',
    callType: 'Video Call',
    goal: '',
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
      setFormData({ name: '', email: '', language: 'English', callType: 'Video Call', goal: '' });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* AFTER: Concept 1 Logo */}
<svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="120" rx="32" fill="#059669" />
  <path d="M34 78V48C34 38.0589 42.0589 30 52 30C61.9411 30 70 38.0589 70 48V78" stroke="white" strokeWidth="9" strokeLinecap="round" />
  <path d="M50 78V48C50 38.0589 58.0589 30 68 30C77.9411 30 86 38.0589 86 48V78" stroke="#A7F3D0" strokeWidth="9" strokeLinecap="round" />
  <path d="M34 78L26 86V74H34Z" fill="white" />
</svg>
            <span>Talk with <span className="text-emerald-600">Malek</span></span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Me' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'pricing', label: 'Pricing & Schedule' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`transition-colors py-1 ${
                  activeTab === tab.id
                    ? 'text-emerald-600 border-b-2 border-emerald-600 font-semibold'
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-500 shadow-sm transition"
          >
            Book Free Call
          </button>
        </div>

        <div className="md:hidden flex justify-around border-t border-slate-100 bg-white py-2.5 text-xs font-medium text-slate-600">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'how-it-works', label: 'How It Works' },
            { id: 'pricing', label: 'Pricing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? 'text-emerald-600 font-bold' : ''}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
        
        {/* SECTION 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-16">
            <section className="text-center py-12 max-w-3xl mx-auto space-y-6">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                1-on-1 Judgment-Free Communication
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Express yourself with confidence. <br className="hidden sm:inline" />
                <span className="text-emerald-600">One-on-one, your way.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Hello, I&apos;m <strong>Malek</strong>, a communication educator. If you struggle to speak in big groups or feel anxious making mistakes, this is a safe, relaxed space to practice speaking English or Arabic naturally.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-emerald-600 text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-emerald-500 shadow-md transition"
                >
                  Book Your Free 30-Min Call
                </button>
                <button
                  onClick={() => setActiveTab('how-it-works')}
                  className="border border-slate-300 bg-white text-slate-700 px-7 py-3.5 rounded-full text-base font-semibold hover:bg-slate-100 transition"
                >
                  Explore How It Works
                </button>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-3xl">🗣️</div>
                <h3 className="text-xl font-bold text-slate-900">1-on-1 Connection</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No large classrooms or group pressure. Just you and me, focused entirely on your rhythm and comfort.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-3xl">🛡️</div>
                <h3 className="text-xl font-bold text-slate-900">Zero Judgment</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mistakes are welcomed here. We focus on getting your ideas across smoothly rather than memorizing grammar rules.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-3xl">🌍</div>
                <h3 className="text-xl font-bold text-slate-900">English & Arabic</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Practice spoken English or Arabic with an expert who understands real dialogue.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* SECTION 2: ABOUT ME */}
        {activeTab === 'about' && (
          <div className="max-w-3xl mx-auto space-y-8 py-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">About Me</h1>
            <p className="text-lg text-emerald-700 font-medium">
              Communication Educator & TESOL Specialist
            </p>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Hi, I&apos;m Malek! I specialize in helping people build real speaking confidence in 1-on-1 environments.
              </p>
              <p>
                Many people spend years studying grammar in textbooks or taking language classes, yet still feel frozen when it comes to speaking out loud—especially in front of groups. My mission is to give you a supportive, comfortable space where you can practice expressing your thoughts without fear of being judged.
              </p>
              <p>
                Whether you want to improve your conversational English, practice spoken Arabic, or simply get comfortable articulating your ideas in 1-on-1 conversations, I am here to listen, support, and guide you.
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-emerald-900">My Promise To You:</h3>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>✓ 100% judgment-free environment</li>
                <li>✓ Patience and active listening during every session</li>
                <li>✓ Conversations centered on real-life topics you care about</li>
                <li>✓ Video or audio call—whichever makes you feel most comfortable</li>
              </ul>
            </div>
          </div>
        )}

        {/* SECTION 3: HOW IT WORKS */}
        {activeTab === 'how-it-works' && (
          <div className="max-w-3xl mx-auto space-y-10 py-6">
            <div className="text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How It Works</h1>
              <p className="text-slate-600">A simple, stress-free process to start speaking comfortably.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Book Your Free 30-Minute Intro Call',
                  desc: 'We start with a 100% free 30-minute conversation. No pressure, no credit card needed. This gives us a chance to meet and see if you feel comfortable talking with me.',
                },
                {
                  step: '02',
                  title: 'Choose Video or Audio Call',
                  desc: 'You decide how we connect! If camera pressure makes you nervous, we can start with a standard phone or audio call.',
                },
                {
                  step: '03',
                  title: 'Enjoy Real 1-on-1 Conversation',
                  desc: 'We talk about everyday topics, interest areas, or practice scenarios. No strict textbooks or boring grammar drills.',
                },
                {
                  step: '04',
                  title: 'Continue At Your Own Pace ($10 / call)',
                  desc: 'If you enjoy our first session, you can book regular 1-on-1 sessions for $10 per call whenever you want to practice.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex gap-5 items-start">
                  <span className="text-2xl font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl">
                    {item.step}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-500 shadow-md transition"
              >
                Start With A Free 30-Min Call
              </button>
            </div>
          </div>
        )}

        {/* SECTION 4: PRICING & SCHEDULE */}
        {activeTab === 'pricing' && (
          <div className="space-y-10 py-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Simple, Transparent Pricing</h1>
              <p className="text-slate-600">Start free, then continue whenever you need practice.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white border-2 border-emerald-600 rounded-2xl p-8 shadow-sm flex flex-col justify-between relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  First Step
                </span>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">First Conversation</h3>
                  <div className="text-4xl font-extrabold text-slate-900">FREE</div>
                  <p className="text-sm font-semibold text-emerald-600">30 Minutes • Video or Phone</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Test the experience, see if you feel comfortable talking directly with me, and discuss your goals.
                  </p>
                </div>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-8 w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-500 transition shadow-sm"
                >
                  Book Free Call
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">1-on-1 Practice Call</h3>
                  <div className="text-4xl font-extrabold text-slate-900">$10 <span className="text-base font-medium text-slate-500">/ session</span></div>
                  <p className="text-sm font-semibold text-emerald-600">30 Minutes • Personal Session</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dedicated individual session to practice speaking skills, build fluency, and express yourself freely.
                  </p>
                </div>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-8 w-full bg-slate-900 text-white py-3 rounded-full font-semibold hover:bg-slate-800 transition"
                >
                  Book A Session
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* BOOKING MODAL POPUP */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-xl font-bold"
            >
              ✕
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-slate-900">You&apos;re All Set!</h3>
                <p className="text-sm text-slate-600">
                  Thank you! I will email you shortly with call details for our 30-minute session.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900">Book Free 30-Min Call</h3>
                  <p className="text-xs text-slate-500">Meet Malek and test your comfort level 1-on-1.</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Language</label>
                      <select
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option>English</option>
                        <option>Arabic</option>
                        <option>Both</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Format</label>
                      <select
                        value={formData.callType}
                        onChange={(e) => setFormData({ ...formData, callType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option>Video Call</option>
                        <option>Audio Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">What would you like to work on?</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Speaking fluency, overcoming anxiety..."
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-500 transition shadow-sm text-sm"
                  >
                    Confirm Booking (Free)
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Talk with Malek. All rights reserved. 1-on-1 communication practice.</p>
      </footer>
    </div>
  );
}
