import React, { useState, useEffect } from 'react';
import {
  Home, MapPin, Calculator, User, Phone, Mail, MessageSquare,
  CheckCircle2, Circle, ArrowRight, ArrowLeft, X, ChevronRight,
  FileText, Calendar, DollarSign, Key, Search, BookOpen,
  Send, Sparkles, Clipboard, HandCoins, Handshake, Award
} from 'lucide-react';

/* ===========================================================
   THE LEWIS TEAM — REAL ESTATE HOMEBUYER GUIDE
   =========================================================== */

const AGENT = {
  // Primary agent (this is Lancey — the app is his lead-gen tool)
  name: 'The Lewis Team',
  title: 'Sales Associate',
  brokerage: 'HomeLife Realty Coastal Properties',
  licenseNumber: 'SL3591641',
  photoUrl: 'https://www.lewisteamrealestate.com/files/agent_profile_pics/1733943270.png',
  phone: '863-288-1546',
  email: 'LewisTeamHomelife@gmail.com',
  website: 'lewisteamrealestate.com',
  serviceArea: 'Central Florida · Polk County · Winter Haven',

  // Team info
  teamName: 'The Lewis Team',
  appName: 'The Lewis Team Homebuyer Guide',
  tagline: 'Your step-by-step path to the keys.',
  mission: 'Turning dreams into reality — a husband-and-wife duo delivering stress-free, rewarding real estate for Central Florida.',
  specialty: 'First-Time Homebuyers · New Construction · Residential',

  // Co-agent (Stacy)
  coAgent: {
    name: 'Stacy Lewis',
    title: 'Sales Associate',
    licenseNumber: 'SL3591875',
    photoUrl: 'https://www.lewisteamrealestate.com/files/agent_profile_pics/1732249947.jpg',
    phone: '863-288-1772',
    email: 'LewisTeamHomelife@gmail.com',
  },

  // Social
  facebook: 'https://www.facebook.com/LewisTeamRealEstateFL',
  youtube: 'https://www.youtube.com/@LewisTeamRealEstate',

  // Brand colors — Florida coastal / trusted professional
  // Tweak these hex codes anytime to match your exact branding
  colors: {
    ink: '#0F2A3F', // deep coastal navy — primary dark
    gold: '#C8985A', // warm brass — accent
    cream: '#F5EFE6', // warm cream — background
    paper: '#FBF7F0', // lighter paper
    charcoal:'#2A2A2A',
    muted: '#6B6256',
    line: '#E4DCCC',
    success: '#4A7C59',
  },
};

/* =========================================================== */

const C = AGENT.colors;

// Typography helper
const serif = { fontFamily: "'Fraunces', Georgia, serif" };
const sans = { fontFamily: "'DM Sans', system-ui, sans-serif" };

// ------- BUYER JOURNEY DATA -------
const JOURNEY_STEPS = [
  {
    id: 'preapproval',
    icon: HandCoins,
    title: 'Get Pre-Approved',
    subtitle: 'Step 1 · 1–2 weeks',
    summary: 'Know what you can borrow before you fall in love with a house.',
    whatToExpect: [
      'Lender reviews your income, credit, and debts',
      'You get a pre-approval letter showing your max loan amount',
      'Sellers take your offers seriously once you have this letter',
    ],
    documents: ['2 years W-2s or tax returns', 'Recent pay stubs', 'Bank statements (2 months)', 'ID & Social Security number'],
    tip: 'Pre-qualification and pre-approval are NOT the same. You want pre-approval in writing.',
  },
  {
    id: 'wants',
    icon: Clipboard,
    title: 'Define Wants & Needs',
    subtitle: 'Step 2 · 1 week',
    summary: 'Separate must-haves from nice-to-haves before you tour.',
    whatToExpect: [
      'We walk through your lifestyle, commute, schools, future plans',
      'You rank what matters most — bedrooms, yard, location, style',
      'I set up a custom search so you only see homes that fit',
    ],
    documents: ['Your priority list', 'Preferred zip codes or school zones'],
    tip: 'Buyers who write it down before touring close 2x faster than buyers who "know it when they see it."',
  },
  {
    id: 'search',
    icon: Search,
    title: 'House Hunting',
    subtitle: 'Step 3 · 2–8 weeks',
    summary: 'Tour smart. Compare honestly. Trust the process.',
    whatToExpect: [
      'Scheduled showings with me — you never tour alone',
      'Private notes and a comparison sheet for every home',
      'Market intel on neighborhoods, trends, and time-on-market',
    ],
    documents: ['Pre-approval letter (bring it to every showing)'],
    tip: "The house that 'checks every box' is rare. The house that checks the RIGHT boxes is the one.",
  },
  {
    id: 'offer',
    icon: Handshake,
    title: 'Make an Offer',
    subtitle: 'Step 4 · 1–3 days',
    summary: 'Strategy matters more than price.',
    whatToExpect: [
      'We analyze comps and market conditions together',
      'I draft the offer: price, earnest money, contingencies, timeline',
      'Negotiation — counters, multiple offers, tradeoffs',
    ],
    documents: ['Earnest money (typically 1–3% of price)', 'Signed offer paperwork'],
    tip: 'Your best offer is rarely just the highest price. Terms, flexibility, and speed win deals.',
  },
  {
    id: 'inspection',
    icon: FileText,
    title: 'Inspection & Appraisal',
    subtitle: 'Step 5 · 2–3 weeks',
    summary: 'Under contract. Due diligence begins.',
    whatToExpect: [
      'Home inspection — you hire a licensed inspector',
      'Appraisal — lender hires one to verify value',
      'Negotiate repairs or credits based on findings',
    ],
    documents: ['Inspection report', 'Appraisal report from your lender'],
    tip: 'Cosmetic issues are for you to fix. Structural, roof, HVAC, plumbing — those are negotiation items.',
  },
  {
    id: 'closing',
    icon: Key,
    title: 'Closing Day',
    subtitle: 'Step 6 · 1 day',
    summary: 'Sign the papers. Get the keys. Welcome home.',
    whatToExpect: [
      'Final walkthrough the day of closing',
      'Sign loan documents at title company',
      'Wire funds for closing costs and down payment',
      'Keys handed over — the home is yours',
    ],
    documents: ['Government-issued ID', 'Cashier\'s check or wire confirmation', 'Proof of homeowner\'s insurance'],
    tip: 'Do NOT make any large purchases or open new credit between pre-approval and closing. It can kill your loan.',
  },
];

// ------- GLOSSARY DATA -------
const GLOSSARY = [
  { term: 'Earnest Money', def: 'A good-faith deposit (usually 1–3% of purchase price) you put down when your offer is accepted. Goes toward your closing costs if the deal closes.' },
  { term: 'Escrow', def: 'A neutral third party holds funds and documents until all conditions of the sale are met.' },
  { term: 'Contingency', def: 'A condition in your offer that must be met or you can back out (e.g., inspection, financing, appraisal contingencies).' },
  { term: 'PMI', def: 'Private Mortgage Insurance. Required on most conventional loans with less than 20% down. Usually drops off once you reach 20% equity.' },
  { term: 'Closing Costs', def: 'Fees due at closing — typically 2–5% of purchase price. Includes lender fees, title insurance, taxes, and more.' },
  { term: 'Appraisal', def: 'A licensed appraiser\'s opinion of a home\'s market value. Your lender requires this to approve your loan.' },
  { term: 'Comps', def: 'Comparable recently sold homes used to determine a fair price for the home you want.' },
  { term: 'DTI', def: 'Debt-to-Income ratio. Your monthly debt payments divided by gross monthly income. Most lenders want this under 43%.' },
  { term: 'FHA Loan', def: 'A loan backed by the Federal Housing Administration. Lower down payment (3.5%) and more flexible credit requirements.' },
  { term: 'Conventional Loan', def: 'A standard mortgage not backed by a government agency. Often requires better credit and 5%+ down.' },
  { term: 'Title Insurance', def: 'Protects you and your lender from disputes over property ownership.' },
  { term: 'Amortization', def: 'How your loan gets paid off over time — early payments mostly go to interest, later payments mostly to principal.' },
];

// ------- CHECKLIST DATA -------
const CHECKLIST = [
  { id: 'preapp', category: 'Before Pre-Approval', label: 'Gather 2 years of W-2s or tax returns' },
  { id: 'paystubs', category: 'Before Pre-Approval', label: 'Collect 2 most recent pay stubs' },
  { id: 'bankstmt', category: 'Before Pre-Approval', label: 'Pull last 2 months of bank statements' },
  { id: 'id', category: 'Before Pre-Approval', label: 'Valid government-issued ID ready' },
  { id: 'credit', category: 'Before Pre-Approval', label: 'Check your credit report (free at annualcreditreport.com)' },
  { id: 'lender', category: 'Before Pre-Approval', label: 'Talk to 2–3 lenders to compare rates' },
  { id: 'priorities', category: 'Before Shopping', label: 'Write your must-have vs. nice-to-have list' },
  { id: 'neighborhoods', category: 'Before Shopping', label: 'Pick 3–5 target neighborhoods or zip codes' },
  { id: 'offer', category: 'Under Contract', label: 'Schedule home inspection within 7–10 days' },
  { id: 'insurance', category: 'Under Contract', label: 'Shop for homeowner\'s insurance' },
  { id: 'funds', category: 'Before Closing', label: 'Confirm wire instructions with title company (BEWARE WIRE FRAUD)' },
  { id: 'walkthrough', category: 'Before Closing', label: 'Final walkthrough the day of closing' },
];

// ============= ROOT APP =============
export default function App() {
  const [screen, setScreen] = useState('welcome'); // welcome | main
  const [activeTab, setActiveTab] = useState('home');
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '', stage: '' });
  const [completedSteps, setCompletedSteps] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [openStep, setOpenStep] = useState(null);
  const [contactModal, setContactModal] = useState(null); // null | 'showing' | 'preapproval' | 'question' | 'glossary'

  // Load Google Fonts once
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const toggleStep = (id) => {
    setCompletedSteps(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleCheck = (id) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  if (screen === 'welcome') {
    return <Welcome onStart={(info) => { setBuyer(info); setScreen('main'); }} />;
  }

  const progressPct = Math.round((completedSteps.length / JOURNEY_STEPS.length) * 100);

  return (
    <div style={{ ...sans, backgroundColor: C.cream, minHeight: '100vh', color: C.charcoal }}>
      {/* Top bar */}
      <header style={{ backgroundColor: C.ink, color: C.cream }} className="px-5 pt-6 pb-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img src={AGENT.photoUrl} alt={AGENT.name}
            className="w-10 h-10 rounded-full object-cover"
            style={{ border: `2px solid ${C.gold}` }} />
          <div className="flex-1 min-w-0">
            <p style={serif} className="text-lg leading-tight truncate">{AGENT.teamName}</p>
            <p className="text-xs opacity-70 truncate">Homebuyer Guide</p>
          </div>
          <a href={`tel:${AGENT.phone}`}
             style={{ backgroundColor: C.gold, color: C.ink }}
             className="w-9 h-9 rounded-full grid place-items-center active:scale-95 transition">
            <Phone size={16} strokeWidth={2.5} />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="pb-24">
        {activeTab === 'home' && (
          <HomeTab
            buyer={buyer} progressPct={progressPct}
            completedSteps={completedSteps}
            onGoTo={setActiveTab}
            onContact={setContactModal}
          />
        )}
        {activeTab === 'journey' && (
          <JourneyTab
            completedSteps={completedSteps}
            toggleStep={toggleStep}
            openStep={openStep}
            setOpenStep={setOpenStep}
            onContact={setContactModal}
          />
        )}
        {activeTab === 'tools' && (
          <ToolsTab
            checkedItems={checkedItems} toggleCheck={toggleCheck}
            onOpenGlossary={() => setContactModal('glossary')}
          />
        )}
        {activeTab === 'agent' && (
          <AgentTab onContact={setContactModal} />
        )}
      </main>

      {/* Bottom tab bar */}
      <nav
        style={{ backgroundColor: C.paper, borderTop: `1px solid ${C.line}` }}
        className="fixed bottom-0 left-0 right-0 grid grid-cols-4 z-10">
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'journey', label: 'Journey', icon: MapPin },
          { id: 'tools', label: 'Tools', icon: Calculator },
          { id: 'agent', label: 'Agent', icon: User },
        ].map(tab => {
          const active = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ color: active ? C.ink : C.muted }}
              className="py-3 flex flex-col items-center gap-1 transition active:scale-95">
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span className="text-[11px] font-medium tracking-wide">{tab.label}</span>
              {active && (
                <span style={{ backgroundColor: C.gold }}
                  className="absolute bottom-1 w-1 h-1 rounded-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Modals */}
      {contactModal === 'showing' && (
        <ContactForm type="showing" buyer={buyer} onClose={() => setContactModal(null)} />
      )}
      {contactModal === 'preapproval' && (
        <ContactForm type="preapproval" buyer={buyer} onClose={() => setContactModal(null)} />
      )}
      {contactModal === 'question' && (
        <ContactForm type="question" buyer={buyer} onClose={() => setContactModal(null)} />
      )}
      {contactModal === 'glossary' && (
        <GlossaryModal onClose={() => setContactModal(null)} />
      )}
    </div>
  );
}

// ============= WELCOME / ONBOARDING =============
function Welcome({ onStart }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', stage: '' });
  const valid = form.name && form.email && form.type && form.stage;

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ ...sans, backgroundColor: C.ink, minHeight: '100vh', color: C.cream }}
         className="flex flex-col">
      <div className="flex-1 px-6 pt-16 pb-6">
        {/* Decorative header */}
        <div className="flex items-center gap-2 mb-6 opacity-70">
          <Sparkles size={14} style={{ color: C.gold }} />
          <span className="text-xs tracking-[0.25em] uppercase">Welcome</span>
        </div>
        <h1 style={serif} className="text-4xl leading-tight mb-3">
          {AGENT.tagline}
        </h1>
        <p className="text-sm opacity-70 leading-relaxed mb-8">
          {AGENT.mission}
        </p>

        {/* Team card */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: `1px solid rgba(200,152,90,0.3)` }}
             className="rounded-xl p-4 mb-8">
          <div className="flex items-center gap-2 -mb-1">
            <img src={AGENT.photoUrl} alt={AGENT.name}
              className="w-14 h-14 rounded-full object-cover"
              style={{ border: `2px solid ${C.gold}` }} />
            <img src={AGENT.coAgent.photoUrl} alt={AGENT.coAgent.name}
              className="w-14 h-14 rounded-full object-cover -ml-3"
              style={{ border: `2px solid ${C.gold}` }} />
            <div className="flex-1 min-w-0 ml-2">
              <p style={serif} className="text-lg leading-tight">{AGENT.teamName}</p>
              <p className="text-xs opacity-70 truncate">Lancey & Stacy Lewis</p>
              <p className="text-[11px] opacity-60 truncate">{AGENT.brokerage}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <Field label="Your name" value={form.name}
            onChange={v => setForm({ ...form, name: v })}
            placeholder="First and last" />
          <Field label="Email" type="email" value={form.email}
            onChange={v => setForm({ ...form, email: v })}
            placeholder="you@email.com" />
          <Field label="Phone (optional)" type="tel" value={form.phone}
            onChange={v => setForm({ ...form, phone: v })}
            placeholder="555-555-5555" />

          <div>
            <label className="block text-xs uppercase tracking-wider opacity-60 mb-2">
              Are you buying or selling?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { v: 'buyer', l: 'Buying' },
                { v: 'seller', l: 'Selling' },
              ].map(opt => (
                <button key={opt.v}
                  onClick={() => setForm({ ...form, type: opt.v, stage: '' })}
                  style={{
                    backgroundColor: form.type === opt.v ? C.gold : 'rgba(255,255,255,0.04)',
                    color: form.type === opt.v ? C.ink : C.cream,
                    border: form.type === opt.v ? `1px solid ${C.gold}` : `1px solid rgba(255,255,255,0.1)`,
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-semibold transition active:scale-[0.98]">
                  {opt.l}
                </button>
              ))}
            </div>
          </div>

          {form.type && (
            <div>
              <label className="block text-xs uppercase tracking-wider opacity-60 mb-2">
                Where are you in your journey?
              </label>
              <div className="grid grid-cols-1 gap-2">
                {(form.type === 'buyer' ? [
                  { v: 'thinking', l: 'Just thinking about it' },
                  { v: 'planning', l: 'Planning to buy in the next 6–12 months' },
                  { v: 'ready', l: 'Ready to buy — need an agent' },
                  { v: 'lender', l: 'Working with a lender now' },
                ] : [
                  { v: 'curious', l: 'Curious what my home is worth' },
                  { v: 'planning', l: 'Planning to sell in the next 6–12 months' },
                  { v: 'ready', l: 'Ready to sell — need an agent' },
                  { v: 'prepping', l: 'Getting my home ready to list' },
                ]).map(opt => (
                  <button key={opt.v}
                    onClick={() => setForm({ ...form, stage: opt.v })}
                    style={{
                      backgroundColor: form.stage === opt.v ? C.gold : 'rgba(255,255,255,0.04)',
                      color: form.stage === opt.v ? C.ink : C.cream,
                      border: form.stage === opt.v ? `1px solid ${C.gold}` : `1px solid rgba(255,255,255,0.1)`,
                    }}
                    className="text-left px-4 py-3 rounded-lg text-sm transition active:scale-[0.98]">
                    {opt.l}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6" style={{ backgroundColor: C.ink }}>
        <button disabled={!valid}
          onClick={() => onStart(form)}
          style={{
            backgroundColor: valid ? C.gold : 'rgba(184,144,74,0.3)',
            color: valid ? C.ink : 'rgba(245,239,230,0.4)',
          }}
          className="w-full py-4 rounded-xl font-semibold tracking-wide flex items-center justify-center gap-2 transition active:scale-[0.98] disabled:cursor-not-allowed">
          Begin Your Journey
          <ArrowRight size={18} />
        </button>
        <p className="text-[10px] opacity-50 text-center mt-3">
          Your info is sent privately to {AGENT.name}. No spam. No data sold.
        </p>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider opacity-60 mb-2">{label}</label>
      <input
        type={type} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: C.cream,
        }}
        className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2"
      />
    </div>
  );
}

// ============= HOME TAB =============
function HomeTab({ buyer, progressPct, completedSteps, onGoTo, onContact }) {
  const nextStep = JOURNEY_STEPS.find(s => !completedSteps.includes(s.id)) || JOURNEY_STEPS[0];
  const NextIcon = nextStep.icon;

  return (
    <div className="px-5 pt-6 space-y-5">
      {/* Greeting */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>
          Welcome back{buyer.name ? `, ${buyer.name.split(' ')[0]}` : ''}
        </p>
        <h2 style={serif} className="text-3xl leading-tight mt-1" >
          Your path home.
        </h2>
      </div>

      {/* Progress card */}
      <button onClick={() => onGoTo('journey')}
        style={{ backgroundColor: C.ink, color: C.cream }}
        className="w-full text-left rounded-2xl p-5 relative overflow-hidden active:scale-[0.99] transition">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] opacity-60">Your progress</p>
            <p style={serif} className="text-4xl mt-1">{progressPct}%</p>
          </div>
          <div className="w-12 h-12 rounded-full grid place-items-center"
               style={{ backgroundColor: C.gold, color: C.ink }}>
            <NextIcon size={22} strokeWidth={2} />
          </div>
        </div>
        <div className="h-1.5 rounded-full mb-3 overflow-hidden"
             style={{ backgroundColor: 'rgba(245,239,230,0.15)' }}>
          <div style={{ width: `${progressPct}%`, backgroundColor: C.gold }}
               className="h-full transition-all duration-500" />
        </div>
        <p className="text-sm opacity-80">
          Up next: <span style={serif}>{nextStep.title}</span>
        </p>
        <div className="flex items-center gap-1 text-xs mt-2" style={{ color: C.gold }}>
          Continue your journey <ChevronRight size={14} />
        </div>
      </button>

      {/* Quick actions */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
          Quick actions
        </p>
        <div className="grid grid-cols-2 gap-3">
          <QuickCard icon={Calendar} label="Schedule a showing"
            onClick={() => onContact('showing')} />
          <QuickCard icon={HandCoins} label="Get pre-approved"
            onClick={() => onContact('preapproval')} />
          <QuickCard icon={Calculator} label="What can I afford?"
            onClick={() => onGoTo('tools')} />
          <QuickCard icon={MessageSquare} label="Ask a question"
            onClick={() => onContact('question')} />
        </div>
      </div>

      {/* Team card */}
      <div
        style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
        className="rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <img src={AGENT.photoUrl} alt={AGENT.name}
            className="w-14 h-14 rounded-full object-cover"
            style={{ border: `2px solid ${C.gold}` }} />
          <img src={AGENT.coAgent.photoUrl} alt={AGENT.coAgent.name}
            className="w-14 h-14 rounded-full object-cover -ml-3"
            style={{ border: `2px solid ${C.gold}` }} />
          <div className="flex-1 min-w-0 ml-1">
            <p style={serif} className="text-lg leading-tight">{AGENT.teamName}</p>
            <p className="text-xs" style={{ color: C.muted }}>Lancey & Stacy Lewis</p>
            <p className="text-xs" style={{ color: C.muted }}>{AGENT.brokerage}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <ContactBtn icon={Phone} label="Call" href={`tel:${AGENT.phone}`} />
          <ContactBtn icon={MessageSquare} label="Text" href={`sms:${AGENT.phone}`} />
          <ContactBtn icon={Mail} label="Email" href={`mailto:${AGENT.email}`} />
        </div>
      </div>
    </div>
  );
}

function QuickCard({ icon: Icon, label, onClick }) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
      className="p-4 rounded-2xl text-left active:scale-[0.98] transition">
      <div className="w-9 h-9 rounded-lg grid place-items-center mb-3"
           style={{ backgroundColor: C.cream, color: C.ink }}>
        <Icon size={18} strokeWidth={2} />
      </div>
      <p className="text-sm leading-snug font-medium" style={{ color: C.ink }}>{label}</p>
    </button>
  );
}

function ContactBtn({ icon: Icon, label, href }) {
  return (
    <a href={href}
      style={{ backgroundColor: C.ink, color: C.cream }}
      className="py-3 rounded-xl flex flex-col items-center gap-1 active:scale-95 transition">
      <Icon size={16} />
      <span className="text-xs">{label}</span>
    </a>
  );
}

// ============= JOURNEY TAB =============
function JourneyTab({ completedSteps, toggleStep, openStep, setOpenStep, onContact }) {
  return (
    <div className="px-5 pt-6">
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>
        The full path
      </p>
      <h2 style={serif} className="text-3xl leading-tight mt-1 mb-6">
        Your buyer journey.
      </h2>

      <div className="space-y-3">
        {JOURNEY_STEPS.map((step, idx) => {
          const done = completedSteps.includes(step.id);
          const open = openStep === step.id;
          const Icon = step.icon;
          return (
            <div key={step.id}
              style={{
                backgroundColor: C.paper,
                border: `1px solid ${done ? C.gold : C.line}`,
              }}
              className="rounded-2xl overflow-hidden transition">
              <button
                onClick={() => setOpenStep(open ? null : step.id)}
                className="w-full p-4 flex items-center gap-4 text-left">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full grid place-items-center"
                    style={{
                      backgroundColor: done ? C.gold : C.cream,
                      color: done ? C.ink : C.muted,
                    }}>
                    <Icon size={18} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full grid place-items-center text-[10px] font-bold"
                    style={{ backgroundColor: C.ink, color: C.cream }}>
                    {idx + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p style={serif} className="text-base leading-tight">{step.title}</p>
                  <p className="text-[11px]" style={{ color: C.muted }}>{step.subtitle}</p>
                </div>
                <ChevronRight size={18}
                  style={{
                    color: C.muted,
                    transform: open ? 'rotate(90deg)' : 'none',
                    transition: 'transform 200ms',
                  }} />
              </button>
              {open && (
                <div className="px-4 pb-4 space-y-4"
                  style={{ borderTop: `1px solid ${C.line}`, paddingTop: '1rem' }}>
                  <p className="text-sm leading-relaxed" style={{ color: C.charcoal }}>
                    {step.summary}
                  </p>

                  <div>
                    <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: C.muted }}>
                      What to expect
                    </p>
                    <ul className="space-y-1.5">
                      {step.whatToExpect.map((item, i) => (
                        <li key={i} className="text-sm flex gap-2" style={{ color: C.charcoal }}>
                          <span style={{ color: C.gold }}>·</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: C.muted }}>
                      What you'll need
                    </p>
                    <ul className="space-y-1.5">
                      {step.documents.map((item, i) => (
                        <li key={i} className="text-sm flex gap-2" style={{ color: C.charcoal }}>
                          <FileText size={12} style={{ color: C.muted, marginTop: 4 }} />
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-lg" style={{ backgroundColor: C.cream }}>
                    <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: C.gold }}>
                      Agent tip
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: C.charcoal }}>
                      {step.tip}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleStep(step.id)}
                      style={{
                        backgroundColor: completedSteps.includes(step.id) ? C.success : C.cream,
                        color: completedSteps.includes(step.id) ? C.cream : C.ink,
                        border: `1px solid ${completedSteps.includes(step.id) ? C.success : C.line}`,
                      }}
                      className="flex-1 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition active:scale-[0.98]">
                      {completedSteps.includes(step.id) ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                      {completedSteps.includes(step.id) ? 'Done' : 'Mark done'}
                    </button>
                    <button
                      onClick={() => onContact('question')}
                      style={{ backgroundColor: C.ink, color: C.cream }}
                      className="flex-1 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 active:scale-[0.98] transition">
                      Ask the team
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============= TOOLS TAB =============
function ToolsTab({ checkedItems, toggleCheck, onOpenGlossary }) {
  const [view, setView] = useState('menu'); // menu | mortgage | afford | checklist

  if (view === 'mortgage') return <MortgageCalc onBack={() => setView('menu')} />;
  if (view === 'afford') return <AffordCalc onBack={() => setView('menu')} />;
  if (view === 'checklist') return <ChecklistView checkedItems={checkedItems} toggleCheck={toggleCheck} onBack={() => setView('menu')} />;

  return (
    <div className="px-5 pt-6">
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>Buyer tools</p>
      <h2 style={serif} className="text-3xl leading-tight mt-1 mb-6">Run the numbers.</h2>

      <div className="space-y-3">
        <ToolCard icon={Calculator} title="Mortgage calculator"
          subtitle="Estimate your monthly payment"
          onClick={() => setView('mortgage')} />
        <ToolCard icon={DollarSign} title="What can I afford?"
          subtitle="Find your max home price"
          onClick={() => setView('afford')} />
        <ToolCard icon={Clipboard} title="Document checklist"
          subtitle={`${checkedItems.length} of ${CHECKLIST.length} complete`}
          onClick={() => setView('checklist')} />
        <ToolCard icon={BookOpen} title="Real estate glossary"
          subtitle="Every term, in plain English"
          onClick={onOpenGlossary} />
      </div>
    </div>
  );
}

function ToolCard({ icon: Icon, title, subtitle, onClick }) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
      className="w-full p-4 rounded-2xl flex items-center gap-4 text-left active:scale-[0.99] transition">
      <div className="w-11 h-11 rounded-xl grid place-items-center"
        style={{ backgroundColor: C.ink, color: C.gold }}>
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p style={serif} className="text-base leading-tight">{title}</p>
        <p className="text-xs mt-0.5" style={{ color: C.muted }}>{subtitle}</p>
      </div>
      <ChevronRight size={18} style={{ color: C.muted }} />
    </button>
  );
}

// ------- MORTGAGE CALCULATOR -------
function MortgageCalc({ onBack }) {
  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(7.0);
  const [years, setYears] = useState(30);

  const loan = price * (1 - down / 100);
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  const monthly = loan > 0 && monthlyRate > 0
    ? (loan * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
    : 0;
  const totalPaid = monthly * n;
  const totalInterest = totalPaid - loan;

  return (
    <div className="px-5 pt-6">
      <BackBtn onBack={onBack} label="Back to tools" />
      <h2 style={serif} className="text-3xl leading-tight mt-4 mb-1">Mortgage calculator</h2>
      <p className="text-sm mb-6" style={{ color: C.muted }}>Estimates only — your lender sets the real number.</p>

      <div className="space-y-5 mb-6">
        <Slider label="Home price" value={price} setValue={setPrice}
          min={50000} max={2000000} step={5000} format={v => `$${v.toLocaleString()}`} />
        <Slider label="Down payment" value={down} setValue={setDown}
          min={0} max={50} step={1} format={v => `${v}% ($${(price * v / 100).toLocaleString()})`} />
        <Slider label="Interest rate" value={rate} setValue={setRate}
          min={2} max={12} step={0.125} format={v => `${v.toFixed(3)}%`} />
        <Slider label="Loan term" value={years} setValue={setYears}
          min={10} max={30} step={5} format={v => `${v} years`} />
      </div>

      <div style={{ backgroundColor: C.ink, color: C.cream }} className="rounded-2xl p-6 mb-4">
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">Estimated monthly (P&I)</p>
        <p style={serif} className="text-5xl mt-2 mb-5">
          ${Math.round(monthly).toLocaleString()}
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <Stat label="Loan amount" value={`$${Math.round(loan).toLocaleString()}`} />
          <Stat label="Total interest" value={`$${Math.round(totalInterest).toLocaleString()}`} />
        </div>
      </div>

      <p className="text-[11px] leading-relaxed" style={{ color: C.muted }}>
        Does not include property taxes, homeowner's insurance, HOA, or PMI — budget another
        1–1.5% of home value per year for those combined. Talk with {AGENT.name} for a full picture.
      </p>
    </div>
  );
}

function Slider({ label, value, setValue, min, max, step, format }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-xs uppercase tracking-wider" style={{ color: C.muted }}>{label}</span>
        <span style={serif} className="text-sm" >{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="w-full accent-current"
        style={{ accentColor: C.gold }} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="opacity-60 mb-1">{label}</p>
      <p style={serif} className="text-lg">{value}</p>
    </div>
  );
}

// ------- AFFORDABILITY CALCULATOR -------
function AffordCalc({ onBack }) {
  const [income, setIncome] = useState(75000);
  const [debts, setDebts] = useState(400);
  const [downCash, setDownCash] = useState(30000);
  const [rate, setRate] = useState(7.0);

  // 36% DTI target; subtract existing debts; estimate affordable P&I
  const maxMonthlyDebt = (income / 12) * 0.36;
  const availableForMortgage = Math.max(0, maxMonthlyDebt - debts);
  const monthlyRate = rate / 100 / 12;
  const n = 30 * 12;
  const maxLoan = availableForMortgage > 0 && monthlyRate > 0
    ? (availableForMortgage * (Math.pow(1 + monthlyRate, n) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, n))
    : 0;
  const maxPrice = maxLoan + downCash;

  return (
    <div className="px-5 pt-6">
      <BackBtn onBack={onBack} label="Back to tools" />
      <h2 style={serif} className="text-3xl leading-tight mt-4 mb-1">What can I afford?</h2>
      <p className="text-sm mb-6" style={{ color: C.muted }}>Uses a 36% debt-to-income guideline. Final number varies by lender.</p>

      <div className="space-y-5 mb-6">
        <Slider label="Annual gross income" value={income} setValue={setIncome}
          min={20000} max={500000} step={1000} format={v => `$${v.toLocaleString()}`} />
        <Slider label="Current monthly debts" value={debts} setValue={setDebts}
          min={0} max={5000} step={50} format={v => `$${v.toLocaleString()}/mo`} />
        <Slider label="Cash for down payment" value={downCash} setValue={setDownCash}
          min={0} max={300000} step={1000} format={v => `$${v.toLocaleString()}`} />
        <Slider label="Interest rate" value={rate} setValue={setRate}
          min={3} max={10} step={0.125} format={v => `${v.toFixed(3)}%`} />
      </div>

      <div style={{ backgroundColor: C.ink, color: C.cream }} className="rounded-2xl p-6 mb-3">
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">You may qualify for up to</p>
        <p style={serif} className="text-5xl mt-2 mb-2">
          ${Math.round(maxPrice / 1000).toLocaleString()}K
        </p>
        <p className="text-xs opacity-70">
          Based on ~${Math.round(availableForMortgage).toLocaleString()}/mo toward P&I
        </p>
      </div>

      <p className="text-[11px] leading-relaxed" style={{ color: C.muted }}>
        This is a ballpark. A real pre-approval requires a lender review. {AGENT.name} can connect
        you with trusted lenders — tap the Agent tab.
      </p>
    </div>
  );
}

// ------- CHECKLIST VIEW -------
function ChecklistView({ checkedItems, toggleCheck, onBack }) {
  const grouped = CHECKLIST.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="px-5 pt-6">
      <BackBtn onBack={onBack} label="Back to tools" />
      <h2 style={serif} className="text-3xl leading-tight mt-4 mb-1">Your checklist</h2>
      <p className="text-sm mb-6" style={{ color: C.muted }}>
        {checkedItems.length} of {CHECKLIST.length} done
      </p>

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: C.gold }}>
              {category}
            </p>
            <div className="space-y-2">
              {items.map(item => {
                const checked = checkedItems.includes(item.id);
                return (
                  <button key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    style={{
                      backgroundColor: C.paper,
                      border: `1px solid ${checked ? C.success : C.line}`,
                      opacity: checked ? 0.6 : 1,
                    }}
                    className="w-full p-3 rounded-xl flex items-center gap-3 text-left transition active:scale-[0.99]">
                    {checked
                      ? <CheckCircle2 size={18} style={{ color: C.success, flexShrink: 0 }} />
                      : <Circle size={18} style={{ color: C.muted, flexShrink: 0 }} />
                    }
                    <span className="text-sm flex-1"
                      style={{ color: C.charcoal, textDecoration: checked ? 'line-through' : 'none' }}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============= AGENT TAB =============
function AgentTab({ onContact }) {
  return (
    <div className="px-5 pt-6">
      {/* Team hero */}
      <div style={{ backgroundColor: C.ink, color: C.cream }}
        className="rounded-2xl p-6 mb-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={AGENT.photoUrl} alt={AGENT.name}
            className="w-20 h-20 rounded-full object-cover"
            style={{ border: `3px solid ${C.gold}` }} />
          <img src={AGENT.coAgent.photoUrl} alt={AGENT.coAgent.name}
            className="w-20 h-20 rounded-full object-cover -ml-4"
            style={{ border: `3px solid ${C.gold}` }} />
        </div>
        <p style={serif} className="text-2xl">{AGENT.teamName}</p>
        <p className="text-xs opacity-80">Lancey & Stacy Lewis · Husband & Wife Duo</p>
        <p className="text-xs opacity-60 mt-1">{AGENT.brokerage}</p>
        <p className="text-[11px] opacity-60 mt-2 px-4 leading-relaxed">
          {AGENT.specialty}
        </p>
      </div>

      {/* LANCEY card */}
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
        Your agent
      </p>
      <AgentCard agent={{
        name: 'Lancey Lewis', title: AGENT.title,
        licenseNumber: AGENT.licenseNumber, photoUrl: AGENT.photoUrl,
        phone: AGENT.phone, email: AGENT.email,
      }} />

      {/* STACY card */}
      <p className="text-xs uppercase tracking-[0.2em] mt-5 mb-3" style={{ color: C.muted }}>
        Also on your team
      </p>
      <AgentCard agent={AGENT.coAgent} />

      {/* Request forms */}
      <p className="text-xs uppercase tracking-[0.2em] mt-6 mb-3" style={{ color: C.muted }}>
        Send a request
      </p>
      <div className="space-y-3">
        <RequestCard label="Schedule a showing"
          sub="Tour a home with the team"
          icon={Calendar}
          onClick={() => onContact('showing')} />
        <RequestCard label="Request pre-approval help"
          sub="We'll connect you with a trusted lender"
          icon={HandCoins}
          onClick={() => onContact('preapproval')} />
        <RequestCard label="Ask a general question"
          sub="No question too small"
          icon={MessageSquare}
          onClick={() => onContact('question')} />
      </div>

      {/* Social / Footer */}
      <div className="mt-6 flex justify-center gap-3">
        <a href={AGENT.facebook} target="_blank" rel="noopener noreferrer"
          style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.ink }}
          className="px-4 py-2 rounded-full text-xs font-medium">
          Facebook
        </a>
        <a href={AGENT.youtube} target="_blank" rel="noopener noreferrer"
          style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.ink }}
          className="px-4 py-2 rounded-full text-xs font-medium">
          YouTube
        </a>
        <a href={`https://${AGENT.website}`} target="_blank" rel="noopener noreferrer"
          style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.ink }}
          className="px-4 py-2 rounded-full text-xs font-medium">
          Website
        </a>
      </div>

      <div className="mt-6 text-center text-[11px]" style={{ color: C.muted }}>
        <p>{AGENT.brokerage}</p>
        <p>{AGENT.serviceArea}</p>
        <p className="mt-1 opacity-70">{AGENT.website}</p>
      </div>
    </div>
  );
}

function AgentCard({ agent }) {
  return (
    <div
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
      className="rounded-2xl p-4">
      <div className="flex items-center gap-4 mb-4">
        <img src={agent.photoUrl} alt={agent.name}
          className="w-16 h-16 rounded-full object-cover"
          style={{ border: `2px solid ${C.gold}` }} />
        <div className="flex-1 min-w-0">
          <p style={serif} className="text-lg leading-tight">{agent.name}</p>
          <p className="text-xs" style={{ color: C.muted }}>{agent.title}</p>
          <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full"
            style={{ backgroundColor: 'rgba(200,152,90,0.12)', color: C.gold }}>
            <Award size={10} />
            <span className="text-[10px] tracking-wide">{agent.licenseNumber}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <BigContact icon={Phone} label="Call" href={`tel:${agent.phone}`} />
        <BigContact icon={MessageSquare} label="Text" href={`sms:${agent.phone}`} />
        <BigContact icon={Mail} label="Email" href={`mailto:${agent.email}`} />
      </div>
    </div>
  );
}

function BigContact({ icon: Icon, label, href }) {
  return (
    <a href={href}
      style={{ backgroundColor: C.gold, color: C.ink }}
      className="py-4 rounded-xl flex flex-col items-center gap-1.5 active:scale-95 transition">
      <Icon size={22} strokeWidth={2.2} />
      <span className="text-xs font-semibold">{label}</span>
    </a>
  );
}

function RequestCard({ label, sub, icon: Icon, onClick }) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
      className="w-full p-4 rounded-2xl flex items-center gap-4 text-left active:scale-[0.99] transition">
      <div className="w-10 h-10 rounded-lg grid place-items-center"
        style={{ backgroundColor: C.cream, color: C.ink }}>
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p style={serif} className="text-base leading-tight">{label}</p>
        <p className="text-xs mt-0.5" style={{ color: C.muted }}>{sub}</p>
      </div>
      <ChevronRight size={18} style={{ color: C.muted }} />
    </button>
  );
}

// ============= MODALS =============
function ContactForm({ type, buyer, onClose }) {
  const [form, setForm] = useState({
    name: buyer.name || '', email: buyer.email || '', phone: buyer.phone || '',
    message: '', date: '', address: '',
  });

  const titles = {
    showing: { h: 'Schedule a showing', sub: 'Tell me which home and when works for you.' },
    preapproval: { h: 'Request pre-approval help', sub: "I'll connect you with a trusted lender." },
    question: { h: 'Ask a question', sub: 'Anything on your mind — big or small.' },
  };
  const t = titles[type];

  const submit = () => {
    const subject = encodeURIComponent(`${t.h} — from ${form.name || 'App'}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      buyer.type ? `Type: ${buyer.type === 'buyer' ? 'BUYER' : 'SELLER'}` : '',
      buyer.stage ? `Stage: ${buyer.stage}` : '',
      type === 'showing' ? `Address: ${form.address}` : '',
      type === 'showing' ? `Preferred date: ${form.date}` : '',
      `\nMessage:\n${form.message}`,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${AGENT.email}?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ backgroundColor: 'rgba(27,42,58,0.5)' }}
      onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{ backgroundColor: C.cream, maxHeight: '90vh' }}
        className="w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col">
        <div className="p-5 flex items-start gap-3" style={{ borderBottom: `1px solid ${C.line}` }}>
          <div className="flex-1">
            <p style={serif} className="text-xl leading-tight">{t.h}</p>
            <p className="text-xs mt-1" style={{ color: C.muted }}>{t.sub}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full grid place-items-center"
            style={{ backgroundColor: C.paper }}>
            <X size={16} />
          </button>
        </div>
        <div className="p-5 space-y-3 overflow-y-auto">
          <LightField label="Your name" value={form.name}
            onChange={v => setForm({ ...form, name: v })} />
          <LightField label="Email" type="email" value={form.email}
            onChange={v => setForm({ ...form, email: v })} />
          <LightField label="Phone" type="tel" value={form.phone}
            onChange={v => setForm({ ...form, phone: v })} />

          {type === 'showing' && (
            <>
              <LightField label="Home address or MLS#" value={form.address}
                onChange={v => setForm({ ...form, address: v })} />
              <LightField label="Preferred date/time" value={form.date}
                onChange={v => setForm({ ...form, date: v })}
                placeholder="e.g. Saturday afternoon" />
            </>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: C.muted }}>
              {type === 'question' ? 'Your question' : 'Anything else?'}
            </label>
            <textarea value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              rows={4}
              style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.charcoal }}
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none" />
          </div>
        </div>
        <div className="p-5" style={{ borderTop: `1px solid ${C.line}` }}>
          <button onClick={submit}
            style={{ backgroundColor: C.ink, color: C.cream }}
            className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition">
            Send to the team
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function LightField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: C.muted }}>{label}</label>
      <input type={type} value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.charcoal }}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" />
    </div>
  );
}

function GlossaryModal({ onClose }) {
  const [search, setSearch] = useState('');
  const filtered = GLOSSARY.filter(g =>
    g.term.toLowerCase().includes(search.toLowerCase()) ||
    g.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ backgroundColor: 'rgba(27,42,58,0.5)' }}
      onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{ backgroundColor: C.cream, maxHeight: '85vh' }}
        className="w-full sm:max-w-md rounded-t-3xl overflow-hidden flex flex-col">
        <div className="p-5 flex items-start gap-3" style={{ borderBottom: `1px solid ${C.line}` }}>
          <div className="flex-1">
            <p style={serif} className="text-xl leading-tight">Real estate glossary</p>
            <p className="text-xs mt-1" style={{ color: C.muted }}>Plain-English definitions.</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full grid place-items-center"
            style={{ backgroundColor: C.paper }}>
            <X size={16} />
          </button>
        </div>
        <div className="p-5" style={{ borderBottom: `1px solid ${C.line}` }}>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search terms..."
            style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.charcoal }}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" />
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {filtered.map(g => (
            <div key={g.term}>
              <p style={serif} className="text-base mb-1">{g.term}</p>
              <p className="text-sm leading-relaxed" style={{ color: C.charcoal }}>{g.def}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-center py-8" style={{ color: C.muted }}>No results.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function BackBtn({ onBack, label }) {
  return (
    <button onClick={onBack}
      className="flex items-center gap-1 text-xs"
      style={{ color: C.muted }}>
      <ArrowLeft size={14} /> {label}
    </button>
  );
}
