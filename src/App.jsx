import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Home, MapPin, Calculator, User, Phone, Mail, MessageSquare,
  CheckCircle2, Circle, ArrowRight, ArrowLeft, X, ChevronRight,
  FileText, Calendar, DollarSign, Key, Search, BookOpen,
  Send, Sparkles, Clipboard, HandCoins, Handshake, Award,
  Star, TrendingUp, Building2, Heart, ShoppingBag, Wrench,
  Users, Trophy, Gift, Banknote, Briefcase, ListChecks,
  Instagram, Youtube, Facebook, Globe, Megaphone, HomeIcon,
  PartyPopper, BadgeCheck, Target,
  Share2, Link2, Copy, Download, Smartphone, QrCode, Plus,
} from 'lucide-react';

/* ===========================================================
   THE LEWIS TEAM — ULTIMATE APP
   Realtor of the Year 2025 · Let's Open Doors Together
   =========================================================== */

const AGENT = {
  name: 'The Lewis Team',
  teamName: 'The Lewis Team',
  appName: 'The Lewis Team',
  tagline: "Let's Open Doors Together.",
  subTagline: "Higher Standards. Higher Results.",
  mission:
    "Your home is more than just a place — it's where life happens. Whether you're a first-time buyer, an investor, or looking to sell for top dollar, we're here to make it simple, successful, and stress-free.",
  purpose:
    "Our goal is to help families build and grow generational wealth through homeownership.",
  brokerage: 'HomeLife Realty Coastal Properties',
  serviceArea: 'Central Florida · Polk County · Winter Haven',
  serviceCities: [
    'Winter Haven', 'Lakeland', 'Auburndale', 'Bartow', 'Davenport',
    'Dundee', 'Eagle Lake', 'Fort Meade', 'Frostproof', 'Haines City',
    'Highland Park', 'Lake Alfred', 'Lake Wales', 'Mulberry', 'Polk City',
  ],
  specialty: 'First-Time Buyers · New Construction · Luxury · Investment · Property Management',

  // Primary — Lancey
  name1: 'Lancey Lewis',
  title: 'Sales Associate',
  licenseNumber: 'SL3591641',
  photoUrl: 'https://www.lewisteamrealestate.com/files/agent_profile_pics/1733943270.png',
  phone: '863-288-1546',
  email: 'LewisTeamHomelife@gmail.com',
  brandEmail: 'Info@TheLewisTeam.RealEstate',
  website: 'lewisteamrealestate.com',
  brandSite: 'thelewisteam.realestate',
  education: 'Tampa School of Real Estate',

  // Co-agent — Stacy
  coAgent: {
    name: 'Stacy Lewis',
    title: 'Sales Associate',
    licenseNumber: 'SL3591875',
    photoUrl: 'https://www.lewisteamrealestate.com/files/agent_profile_pics/1732249947.jpg',
    phone: '863-288-1772',
    email: 'LewisTeamHomelife@gmail.com',
    tiktok: 'https://www.tiktok.com/@stacylewisrealestate',
  },

  // Socials
  facebook: 'https://www.facebook.com/LewisTeamRealEstateFL',
  youtube: 'https://www.youtube.com/@LewisTeamRealEstate',
  tiktok: 'https://www.tiktok.com/@stacylewisrealestate',
  blinq: 'https://blinq.me/zHszwHRVMidL',
  websiteUrl: 'https://www.lewisteamrealestate.com/',
  brandSiteUrl: 'https://thelewisteam.realestate/',

  // Awards & accolades (2025)
  awards: [
    { year: '2025', title: 'Realtor of the Year', org: 'HomeLife Realty Coastal Properties' },
    { year: '2025', title: 'Bronze Club Member', org: 'HomeLife Realty Coastal Properties' },
    { year: '2025', title: 'Community Service Award', org: 'HomeLife Realty Coastal Properties' },
  ],

  // Brand tokens — Florida coastal + luxury gold
  colors: {
    ink: '#0F2A3F',       // deep coastal navy
    gold: '#C8985A',      // warm brass
    goldDeep: '#A87A3F',  // pressed gold
    cream: '#F5EFE6',     // warm cream background
    paper: '#FBF7F0',     // lighter paper
    charcoal: '#2A2A2A',
    muted: '#6B6256',
    line: '#E4DCCC',
    success: '#4A7C59',
    ruby: '#8E3B3B',      // price reductions / alerts
  },

  assets: {
    logo: '/brand/logo.png',
    heroTeam: '/brand/team-hero.jpg',
    heroJustLeased: '/brand/hero-just-leased.jpg',
    teamHoliday: '/brand/team-holiday.jpg',
    closingDay: '/brand/closing-day.jpg',
    heroSunburst: '/brand/team-sunburst.png',
    homelife: '/brand/homelife.png',
    videoFeatured: '/brand/video/featured.mp4',
    videoReel: '/brand/video/reel.mp4',
  },
};

const C = AGENT.colors;
const serif = { fontFamily: "'Fraunces', Georgia, serif" };
const sans = { fontFamily: "'DM Sans', system-ui, sans-serif" };

/* =========================================================
   DATA
   ========================================================= */

const BUYER_STEPS = [
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
    tip: 'Self-employed? We work with lenders who specialize in bank-statement and non-traditional loans. You have options.',
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
      'We set up a custom search so you only see homes that fit',
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
      'Scheduled showings with us — you never tour alone',
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
      'We draft the offer: price, earnest money, contingencies, timeline',
      'Negotiation — counters, multiple offers, tradeoffs',
    ],
    documents: ['Earnest money (typically 1–3% of price)', 'Signed offer paperwork'],
    tip: 'Marry the house, date the rate. Today\'s prices won\'t wait — you can always refinance later.',
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
    documents: ["Government-issued ID", "Cashier's check or wire confirmation", "Proof of homeowner's insurance"],
    tip: 'Do NOT make any large purchases or open new credit between pre-approval and closing. It can kill your loan.',
  },
];

const SELLER_STEPS = [
  {
    id: 'valuation',
    icon: TrendingUp,
    title: 'Know Your Value',
    subtitle: 'Step 1 · 1 week',
    summary: 'Start with a real number — not a Zestimate.',
    whatToExpect: [
      'We pull live comps in your neighborhood and subdivision',
      'We review recent sales, actives, and expired listings',
      'You get a professional opinion of value, free — no obligation',
    ],
    documents: ['Home address', 'Any recent upgrades or improvements list'],
    tip: 'The right list price in the first 2 weeks is worth more than 6 months of price reductions.',
  },
  {
    id: 'prep',
    icon: Wrench,
    title: 'Prep & Stage',
    subtitle: 'Step 2 · 1–3 weeks',
    summary: 'Make the home show like the pictures buyers save.',
    whatToExpect: [
      'Room-by-room walk-through — what to declutter, freshen, repair',
      'We recommend only high-ROI updates (no wasted spend)',
      'Vendor list: handyman, painters, cleaners, landscapers',
    ],
    documents: ['Repair receipts', 'Appliance warranties (if transferable)'],
    tip: 'Paint, light fixtures, and curb appeal return more per dollar than any renovation.',
  },
  {
    id: 'market',
    icon: Megaphone,
    title: 'High-Impact Marketing',
    subtitle: 'Step 3 · Launch week',
    summary: 'Professional photos, video, social — the works.',
    whatToExpect: [
      'Pro photography + drone + walkthrough video',
      'MLS, Zillow, Realtor, Facebook, Instagram, TikTok reach',
      'Featured in our buyer database (thousands of warm leads)',
      'Open-house event with refreshments',
    ],
    documents: ['Signed listing agreement', 'Seller disclosure forms'],
    tip: 'Homes with video get 403% more inquiries than those without. We bring the production.',
  },
  {
    id: 'offers',
    icon: Handshake,
    title: 'Review & Negotiate',
    subtitle: 'Step 4 · 1–4 weeks',
    summary: 'Top dollar comes from strategy, not luck.',
    whatToExpect: [
      'We present every offer with a plain-English breakdown',
      'Compare NET to you — not just price — across all offers',
      'Negotiate terms, timeline, contingencies, repair asks',
    ],
    documents: ['Buyer pre-approvals or proof of funds'],
    tip: 'Highest price isn\'t always the best offer. Clean terms often net you more at closing.',
  },
  {
    id: 'contract',
    icon: FileText,
    title: 'Under Contract',
    subtitle: 'Step 5 · 3–6 weeks',
    summary: 'Manage inspections, appraisal, repair asks, and timeline.',
    whatToExpect: [
      'Coordinate inspection access with buyers',
      'Handle appraisal — and defend value if needed',
      'Negotiate any repair requests cleanly and fairly',
    ],
    documents: ['Inspection response', 'Appraisal (if you choose to see it)'],
    tip: '80% of deals fall apart in this window without a strong agent. This is where we earn it.',
  },
  {
    id: 'sellclose',
    icon: Key,
    title: 'Closing Day',
    subtitle: 'Step 6 · 1 day',
    summary: 'Sign, receive your proceeds, hand over the keys.',
    whatToExpect: [
      'Sign at title — typically 30–60 minutes',
      'Net proceeds wired to your account (or check)',
      'Keys, garage remotes, mailbox keys to buyer',
    ],
    documents: ['Government-issued ID', 'Wire instructions for proceeds'],
    tip: 'Plan your move-out before the final walkthrough. A clean, empty home seals the deal.',
  },
];

const INVESTOR_STEPS = [
  {
    id: 'goals',
    icon: Target,
    title: 'Set Your Investment Goals',
    subtitle: 'Step 1 · Week 1',
    summary: 'Cash flow, appreciation, or both? Your goal sets your strategy.',
    whatToExpect: [
      'Define: rental income, flip, BRRRR, or long-term hold',
      'Target cash-on-cash return + monthly cash flow minimums',
      'Set a 1-year, 3-year, and 5-year portfolio plan with us',
    ],
    documents: ['Personal financial statement', 'Liquid reserves breakdown'],
    tip: "Best investors build a thesis first. The deal finds you when you know what you're looking for.",
  },
  {
    id: 'finance',
    icon: Banknote,
    title: 'Line Up Financing',
    subtitle: 'Step 2 · 1–2 weeks',
    summary: 'DSCR, conventional, HELOC, or private \u2014 each has its moment.',
    whatToExpect: [
      'DSCR: qualify on rental income, no W-2 needed',
      'Conventional: up to 10 investment properties, 20-25% down',
      'HELOC or cash-out refinance to redeploy equity',
      'Private lenders for flips and value-add plays',
    ],
    documents: ['2 years tax returns (if conventional)', 'Existing rental leases/schedules', 'Proof of reserves'],
    tip: 'Your second and third deals get easier. The first one is the mountain \u2014 we climb it together.',
  },
  {
    id: 'hunt',
    icon: Search,
    title: 'Find the Right Deal',
    subtitle: 'Step 3 · Ongoing',
    summary: 'MLS, off-market, wholesalers, and coming-soon \u2014 we tap every channel.',
    whatToExpect: [
      'Early access to pocket listings and coming-soon homes',
      'Relationships with wholesalers for off-market deals',
      'Distressed + value-add opportunities',
      'New construction with builder incentives stacking',
    ],
    documents: ['Your criteria sheet (beds/baths/area/cap rate target)'],
    tip: 'The deal is made on the buy, not the sell. We only bring you properties that underwrite.',
  },
  {
    id: 'underwrite',
    icon: Calculator,
    title: 'Underwrite Every Number',
    subtitle: 'Step 4 · 1–3 days',
    summary: 'Cap rate, cash-on-cash, DSCR, and stress-tests \u2014 not a vibe.',
    whatToExpect: [
      'Full proforma: rent, taxes, insurance, HOA, maintenance, vacancy, management',
      'Cap rate + cash-on-cash + 1% rule checks',
      'Stress-test rent at 85% and 70% to see where the deal breaks',
      'Exit strategy before you even buy',
    ],
    documents: ['Rent comps (we pull these)', 'Property disclosures + recent improvements'],
    tip: 'Numbers beat stories. If it doesn\u2019t pencil, we walk. No sunk-cost emotion.',
  },
  {
    id: 'close',
    icon: Key,
    title: 'Close + Stabilize',
    subtitle: 'Step 5 · 30\u201360 days',
    summary: 'Close clean, stabilize fast, refinance or hold \u2014 your choice.',
    whatToExpect: [
      'Smooth closing with our title + lender network',
      'Property management referrals (or self-manage playbook)',
      'Tenant placement strategy with screening standards',
      'Refinance window at 6\u201312 months if BRRRR-ing',
    ],
    documents: ['Closing disclosure', 'Insurance binder', 'Lease agreement template'],
    tip: 'Great investors systemize the first deal so the second one runs on autopilot.',
  },
];

const PROGRAMS = [
  {
    id: 'hometown',
    icon: Gift,
    pill: 'Up to $35K',
    title: 'Hometown Heroes DPA',
    subtitle: 'Florida down-payment assistance',
    bullets: [
      'Up to $35,000 for down payment + closing costs',
      'Must be a first-time homebuyer (veterans exempt)',
      'Min. credit score 640',
      'Employed 35+ hrs/wk at a Florida-based employer',
      'Income cannot exceed 150% of county AMI',
    ],
    cta: 'Check if I qualify',
    ctaType: 'preapproval',
  },
  {
    id: 'cashback',
    icon: Banknote,
    pill: 'Up to 10%',
    title: 'Lewis Team Cashback',
    subtitle: 'Earn cash back on your purchase',
    bullets: [
      'Up to 10% cashback + exclusive bonuses',
      'Available on qualifying new-construction + resale deals',
      'Combine with builder incentives where allowed',
      'Enroll early — cashback is set at contract',
    ],
    cta: 'Learn about cashback',
    ctaType: 'question',
  },
  {
    id: 'flexcash',
    icon: Building2,
    pill: '6%+ Flex Cash',
    title: 'D.R. Horton Flex Cash',
    subtitle: 'Builder incentive program',
    bullets: [
      'Use toward down payment OR rate buy-down',
      'Low interest rates through builder lender',
      'Move-in-ready + builder warranty coverage',
      'Brand new homes from the upper $200s',
    ],
    cta: 'See new construction',
    ctaType: 'showing',
  },
  {
    id: 'selfemp',
    icon: Briefcase,
    pill: 'Non-QM',
    title: 'Self-Employed Loans',
    subtitle: 'Bank-statement + 1099 programs',
    bullets: [
      '12–24 month bank-statement qualifying',
      '1099 borrower programs available',
      'DSCR loans for investment properties',
      "Don't let W-2 myths stop you — you have options",
    ],
    cta: 'Talk to a lender',
    ctaType: 'preapproval',
  },
];

const LISTINGS = [
  {
    id: 'sofia',
    status: 'Featured',
    price: '$319,900',
    beds: 4, baths: 2, sqft: 1500,
    address: '317 Sofia Lane',
    city: 'Eden Hills · Haines City, FL',
    highlights: ['Freeport Model · open-concept', 'Pool · Dog park · Walking path', 'No rear neighbors', 'I-4 access, 30 min to Disney'],
  },
  {
    id: 'winterridge',
    status: 'Available',
    price: '$210,000',
    beds: 2, baths: 2, sqft: 1120,
    address: '260 Winter Ridge Blvd',
    city: 'Winter Haven, FL 33881',
    highlights: ['Remodeled 2BR condo', 'Storm windows · AC patio', 'Lake access · Pool · Clubhouse', 'HOA covers roof + lawn'],
  },
  {
    id: 'patterson',
    status: 'Price Reduced',
    price: '$270,000',
    beds: 3, baths: 2, sqft: 1480,
    address: '3018 Patterson Groves Dr',
    city: 'Haines City, FL 33844',
    highlights: ['Move-in ready', 'Great first-home or investment', 'Quiet Patterson Groves community'],
  },
  {
    id: 'canton',
    status: 'New Construction',
    price: 'From $329,000',
    beds: 5, baths: 3, sqft: 2400,
    address: 'Canton Park Dr',
    city: 'Winter Haven, FL 33881',
    highlights: ['Brand-new 5BR / 3BA', 'Closing cost assistance available', 'D.R. Horton Flex Cash eligible'],
  },
];

const GLOSSARY = [
  { term: 'Earnest Money', def: 'A good-faith deposit (usually 1–3% of purchase price) you put down when your offer is accepted. Goes toward your closing costs if the deal closes.' },
  { term: 'Escrow', def: 'A neutral third party holds funds and documents until all conditions of the sale are met.' },
  { term: 'Contingency', def: 'A condition in your offer that must be met or you can back out (e.g., inspection, financing, appraisal contingencies).' },
  { term: 'PMI', def: 'Private Mortgage Insurance. Required on most conventional loans with less than 20% down. Usually drops off once you reach 20% equity.' },
  { term: 'Closing Costs', def: 'Fees due at closing — typically 2–5% of purchase price. Includes lender fees, title insurance, taxes, and more.' },
  { term: 'Appraisal', def: "A licensed appraiser's opinion of a home's market value. Your lender requires this to approve your loan." },
  { term: 'Comps', def: 'Comparable recently sold homes used to determine a fair price for the home you want — or a fair list price for yours.' },
  { term: 'DTI', def: 'Debt-to-Income ratio. Your monthly debt payments divided by gross monthly income. Most lenders want this under 43%.' },
  { term: 'FHA Loan', def: 'A loan backed by the Federal Housing Administration. Lower down payment (3.5%) and more flexible credit requirements.' },
  { term: 'Conventional Loan', def: 'A standard mortgage not backed by a government agency. Often requires better credit and 5%+ down.' },
  { term: 'Title Insurance', def: 'Protects you and your lender from disputes over property ownership.' },
  { term: 'Amortization', def: 'How your loan gets paid off over time — early payments mostly go to interest, later payments mostly to principal.' },
  { term: 'Flex Cash', def: 'Builder credit (often D.R. Horton) that can be used toward down payment, closing costs, or rate buy-down. Stacks with some other programs.' },
  { term: 'Bank-Statement Loan', def: 'A loan for self-employed borrowers that uses 12–24 months of bank deposits to qualify instead of W-2 income.' },
  { term: 'DSCR Loan', def: 'Debt Service Coverage Ratio. A mortgage for investment properties that qualifies based on the rental income, not your personal income.' },
  { term: 'Hometown Heroes', def: "Florida's down-payment assistance program offering up to $35,000 to eligible first-time buyers and active workforce members." },
];

const BUY_CHECKLIST = [
  { id: 'preapp', category: 'Before Pre-Approval', label: 'Gather 2 years of W-2s or tax returns' },
  { id: 'paystubs', category: 'Before Pre-Approval', label: 'Collect 2 most recent pay stubs' },
  { id: 'bankstmt', category: 'Before Pre-Approval', label: 'Pull last 2 months of bank statements' },
  { id: 'id', category: 'Before Pre-Approval', label: 'Valid government-issued ID ready' },
  { id: 'credit', category: 'Before Pre-Approval', label: 'Check your credit report (free at annualcreditreport.com)' },
  { id: 'lender', category: 'Before Pre-Approval', label: 'Talk to 2–3 lenders to compare rates' },
  { id: 'dpa', category: 'Before Pre-Approval', label: 'Ask us about Hometown Heroes DPA ($35K available)' },
  { id: 'priorities', category: 'Before Shopping', label: 'Write your must-have vs. nice-to-have list' },
  { id: 'neighborhoods', category: 'Before Shopping', label: 'Pick 3–5 target neighborhoods or zip codes' },
  { id: 'offer', category: 'Under Contract', label: 'Schedule home inspection within 7–10 days' },
  { id: 'insurance', category: 'Under Contract', label: "Shop for homeowner's insurance" },
  { id: 'funds', category: 'Before Closing', label: 'Confirm wire instructions with title (BEWARE WIRE FRAUD)' },
  { id: 'walkthrough', category: 'Before Closing', label: 'Final walkthrough the day of closing' },
];

const SELL_CHECKLIST = [
  { id: 's_comps', category: 'Before Listing', label: 'Request a free home valuation from The Lewis Team' },
  { id: 's_declutter', category: 'Before Listing', label: 'Declutter and deep-clean every room' },
  { id: 's_curb', category: 'Before Listing', label: 'Boost curb appeal: landscaping, front door, house number' },
  { id: 's_paint', category: 'Before Listing', label: 'Touch up paint in neutral tones' },
  { id: 's_fix', category: 'Before Listing', label: 'Complete small repairs (leaks, squeaks, chips)' },
  { id: 's_photos', category: 'Launch Week', label: 'Pro photos + video (we handle it)' },
  { id: 's_mls', category: 'Launch Week', label: 'Go live on MLS + Zillow + Realtor + socials' },
  { id: 's_open', category: 'Launch Week', label: 'Host launch-weekend open house' },
  { id: 's_negotiate', category: 'Offers', label: 'Review all offers — price AND terms' },
  { id: 's_movingplan', category: 'Under Contract', label: 'Line up movers and donate/sell what you\'re leaving' },
  { id: 's_wireinfo', category: 'Closing', label: 'Provide title with wire instructions for proceeds' },
];

const WINS = [
  {
    id: 'w_firsttime',
    photo: AGENT.assets.closingDay,
    badge: 'First-Time Buyers',
    quote:
      "Clear to close for our first-time homebuyers. Helping them go from \u201CCan we even do this?\u201D to officially closing on a brand-new home for their family — this is why we love what we do.",
    attribution: 'Recent closing · D.R. Horton new construction',
  },
  {
    id: 'w_relocation',
    photo: AGENT.assets.heroJustLeased,
    badge: 'Out-of-State Move',
    quote:
      "Our clients trusted us to help them make a smooth transition from New York to Florida — securing a lease from out of state. Your confidence in us during such an important move means everything.",
    attribution: 'NY \u2192 FL relocation · Just Leased',
  },
  {
    id: 'w_transformation',
    photo: AGENT.assets.heroTeam,
    badge: 'From Doubt to Owner',
    quote:
      "One of our clients came to us just two months ago unsure if homeownership was even possible. Today they're officially on their way to closing. That's the power of the right team, strategy, and guidance.",
    attribution: 'New construction · Under contract',
  },
];

const TESTIMONIALS = [
  {
    id: 't_5star',
    quote:
      "Our goal is to provide nothing less than 5-star service in every experience. Professionalism, clear communication, and care every step of the way.",
    author: 'The Lewis Team Promise',
    stars: 5,
  },
  {
    id: 't_trust',
    quote:
      "Thank you for trusting us to guide you. You were open, trusting, and willing to learn every step of the way \u2014 and it paid off!",
    author: 'To a recent first-time buyer',
    stars: 5,
  },
  {
    id: 't_referral',
    quote:
      "When you refer someone to The Lewis Team, you're connecting them with a 5-star real estate experience from start to finish. Referrals are the heart of our business.",
    author: 'Why clients keep sending us friends',
    stars: 5,
  },
];

/* =========================================================
   LIVE / PODCAST CONFIG
   Update these fields when a show is scheduled or going live.
   - status: 'live' | 'upcoming' | 'offair'
   - liveEmbedUrl: the full iframe embed URL (YouTube embed, Vimeo, Facebook Live, etc.)
   - zoomJoinUrl: the public Zoom meeting link for interactive shows
   ========================================================= */
const LIVE_CONFIG = {
  status: 'upcoming',
  showName: 'Open Doors Live',
  showTagline: 'Real estate truth with The Lewis Team',
  showDescription:
    "A weekly live show covering Central Florida market moves, buyer + seller strategy, new construction deals, and honest Q&A with the community. Produced with OBS, streamed live to YouTube, with a Zoom green-room for guests and live callers.",

  // When status === 'live', paste the current YouTube/Vimeo/Facebook embed URL here
  liveEmbedUrl: '', // e.g. 'https://www.youtube.com/embed/live_stream?channel=UCxxxxxx'
  liveChatUrl: '', // e.g. 'https://www.youtube.com/live_chat?v=VIDEO_ID&embed_domain=localhost'

  // Interactive Zoom room — optional, for real-time caller shows
  zoomJoinUrl: '', // e.g. 'https://zoom.us/j/1234567890?pwd=...'
  zoomPasscode: '',

  // Call-in line (for live on-air callers) — dedicated number or cell
  callInPhone: '863-288-1772',
  callInSms: '863-288-1772',

  // Podcast directory feeds — paste real URLs once shows are syndicated
  podcastFeeds: {
    apple: '',           // e.g. 'https://podcasts.apple.com/us/podcast/open-doors-live/idXXXX'
    spotify: '',         // e.g. 'https://open.spotify.com/show/XXXX'
    amazon: '',          // e.g. 'https://music.amazon.com/podcasts/XXXX'
    rss: '/podcast.xml', // hosted in /public — auto-served at /podcast.xml
  },

  // Upcoming shows
  upcoming: [
    {
      id: 'u1',
      title: 'First-Time Buyer Masterclass',
      dateLabel: 'Thursday · 6:00 PM ET',
      guest: 'With Tara Ivey-Edwards · D.R. Horton',
      topic: 'Hometown Heroes, Flex Cash, and the cleanest path to your first closing.',
    },
    {
      id: 'u2',
      title: 'Sell in 30 Days: Market Strategy',
      dateLabel: 'Saturday · 12:00 PM ET',
      guest: 'The Lewis Team',
      topic: 'Pricing, staging, and the marketing playbook we use on every listing.',
    },
    {
      id: 'u3',
      title: 'Investor Night: Portfolio Building',
      dateLabel: 'Next Tuesday · 7:00 PM ET',
      guest: 'Live Q&A',
      topic: 'DSCR loans, cash-flow math, and how we find off-market deals in Polk County.',
    },
  ],

  // Past episodes — wire these to VOD URLs (YouTube) or local .mp4 files
  past: [
    {
      id: 'p1',
      title: "Let's Open Doors Together",
      duration: 'Featured',
      publishedLabel: 'Season 1, Ep 1',
      description:
        "Meet The Lewis Team — Realtor of the Year 2025. We lay out our approach, our philosophy on generational wealth, and why we believe every family deserves a stress-free path to their keys.",
      poster: '/brand/hero-just-leased.jpg',
      src: '/brand/video/featured.mp4',
      ytUrl: '',
      notes: [
        { time: '0:00', label: 'Welcome + meet Lancey and Stacy' },
        { time: '0:45', label: 'Why we do this: generational wealth' },
        { time: '2:10', label: 'First-time buyer path' },
        { time: '3:30', label: 'Hometown Heroes + Flex Cash explained' },
        { time: '5:00', label: 'How to work with us' },
      ],
      resources: [
        { label: 'Florida Hometown Heroes DPA', url: 'https://www.floridahousing.org/' },
        { label: 'Our main site', url: 'https://www.lewisteamrealestate.com/' },
        { label: 'Book a free strategy call', url: 'tel:863-288-1772' },
      ],
      clips: [
        { id: 'p1c1', title: 'Marry the house, date the rate', start: '02:14', end: '02:48',
          caption: "Best advice for buyers in a shifting market 🏡 Marry the house, date the rate — you can refinance later but today's prices won't wait. #PolkCountyRealEstate #LewisTeam" },
        { id: 'p1c2', title: 'Generational wealth starts with one house', start: '04:05', end: '04:40',
          caption: "Your first home isn't just a house — it's the foundation for generational wealth. Let's build it together. ✨ #FirstTimeHomeBuyer #GenerationalWealth" },
      ],
    },
    {
      id: 'p2',
      title: 'Central Florida Market Moment',
      duration: 'Quick look',
      publishedLabel: 'Season 1, Ep 2',
      description:
        "A tight market update for Polk County — what's moving, what's sitting, and where buyers are finding the best concessions right now.",
      poster: '/brand/closing-day.jpg',
      src: '/brand/video/reel.mp4',
      ytUrl: '',
      notes: [
        { time: '0:00', label: 'Quick intro' },
        { time: '0:20', label: "What's happening in Polk County" },
        { time: '1:00', label: 'Builder incentives stacked high right now' },
        { time: '1:45', label: 'Where to focus your search this month' },
      ],
      resources: [
        { label: 'D.R. Horton new construction', url: 'https://www.drhorton.com/' },
        { label: 'Text us your search criteria', url: 'sms:863-288-1772' },
      ],
      clips: [
        { id: 'p2c1', title: 'Builder incentives are stacked', start: '01:02', end: '01:35',
          caption: "Builders are stacking incentives right now — Flex Cash + rate buy-downs + closing cost help. If you've been waiting, this is your window. 🔑 #NewConstruction" },
      ],
    },
  ],
};

/* =========================================================
   BRAND MOMENTS — shareable, meme-style one-liners
   Each is a self-contained poster the user can fire to Stories / iMessage.
   ========================================================= */
const BRAND_MOMENTS = [
  {
    id: 'bm1',
    emoji: '\uD83D\uDD11',
    headline: 'Your first home is the first brick in a legacy.',
    subline: "Generational wealth starts with one address.",
    shareText: "Your first home is the first brick in a legacy. \uD83D\uDD11 Generational wealth starts with one address. — The Lewis Team",
    gradient: `linear-gradient(135deg, #0F2A3F 0%, #1E3E5C 50%, #C8985A 100%)`,
  },
  {
    id: 'bm2',
    emoji: '\uD83C\uDFE1',
    headline: 'Renting builds someone else\u2019s wealth. Owning builds yours.',
    subline: "Which side of the transaction do you want to be on?",
    shareText: "Renting builds someone else's wealth. Owning builds yours. \uD83C\uDFE1 — The Lewis Team",
    gradient: `linear-gradient(135deg, #C8985A 0%, #0F2A3F 100%)`,
  },
  {
    id: 'bm3',
    emoji: '\u2728',
    headline: 'From doubt to owner in 60 days.',
    subline: "That's the Lewis Team difference.",
    shareText: "From \u201CCan we even do this?\u201D to closing in 60 days. \u2728 That's the Lewis Team difference. — Realtor of the Year 2025",
    gradient: `linear-gradient(135deg, #0F2A3F 0%, #2d1a2e 60%, #C8985A 100%)`,
  },
  {
    id: 'bm4',
    emoji: '\uD83D\uDC8D',
    headline: 'Marry the house. Date the rate.',
    subline: "You can refinance later. Today's prices won't wait.",
    shareText: "Marry the house. Date the rate. \uD83D\uDC8D You can refinance later \u2014 today's prices won't wait. — The Lewis Team",
    gradient: `linear-gradient(135deg, #A87A3F 0%, #0F2A3F 100%)`,
  },
  {
    id: 'bm5',
    emoji: '\uD83C\uDF34',
    headline: 'Central Florida keys. Central Florida families.',
    subline: "Lancey & Stacy Lewis. Your neighbors. Your team.",
    shareText: "Central Florida keys. Central Florida families. \uD83C\uDF34 The Lewis Team \u2014 Polk County's husband-and-wife duo.",
    gradient: `linear-gradient(135deg, #4A7C59 0%, #0F2A3F 70%, #C8985A 100%)`,
  },
  {
    id: 'bm6',
    emoji: '\uD83C\uDFC6',
    headline: 'Higher Standards. Higher Results.',
    subline: "Realtor of the Year 2025.",
    shareText: "Higher Standards. Higher Results. \uD83C\uDFC6 The Lewis Team \u2014 Realtor of the Year 2025.",
    gradient: `linear-gradient(135deg, #C8985A 0%, #A87A3F 40%, #0F2A3F 100%)`,
  },
];

/* =========================================================
   CRM — lead pipeline, activity, tasks
   ========================================================= */
const CRM_STAGES = [
  { id: 'new', label: 'New Lead', color: '#6B6256' },
  { id: 'contacted', label: 'Contacted', color: '#4A7C8C' },
  { id: 'qualified', label: 'Qualified', color: '#C8985A' },
  { id: 'showing', label: 'Showing', color: '#A87A3F' },
  { id: 'offer', label: 'Offer Out', color: '#7A5C88' },
  { id: 'under_contract', label: 'Under Contract', color: '#4A7C59' },
  { id: 'closed', label: 'Closed \u2713', color: '#2F5F40' },
  { id: 'lost', label: 'Lost / Dormant', color: '#8E3B3B' },
];

const CRM_SOURCES = [
  { id: 'client_portal', label: 'Client Portal \u2728' },
  { id: 'app_contact', label: 'App contact form' },
  { id: 'app_valuation', label: 'Home valuation request' },
  { id: 'app_showing', label: 'Showing request' },
  { id: 'app_preapproval', label: 'Pre-approval request' },
  { id: 'app_notify', label: 'Live-show notify list' },
  { id: 'app_callin', label: 'Podcast guest request' },
  { id: 'website', label: 'Website' },
  { id: 'referral', label: 'Referral' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'open_house', label: 'Open house' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'zillow', label: 'Zillow' },
  { id: 'cold', label: 'Cold outreach' },
  { id: 'other', label: 'Other' },
];

const CRM_TYPES = [
  { id: 'buyer', label: 'Buyer' },
  { id: 'seller', label: 'Seller' },
  { id: 'investor', label: 'Investor' },
  { id: 'renter', label: 'Renter' },
  { id: 'both', label: 'Buyer + Seller' },
  { id: 'past_client', label: 'Past client' },
  { id: 'follower', label: 'Follower / Audience' },
  { id: 'other', label: 'Other' },
];

/* =========================================================
   DRIP CAMPAIGNS — automated client-nurture sequences
   Each campaign has a trigger + steps. Steps are computed against
   the lead's createdAt, closeDate, birthday, or moveInDate.
   ========================================================= */
const DRIP_CAMPAIGNS = [
  {
    id: 'new_lead',
    name: 'New Lead Nurture',
    trigger: 'createdAt',
    when: (lead) => true,
    steps: [
      { offsetDays: 0, channel: 'call', title: 'Welcome call', body: "Hey {first}, this is Lancey with The Lewis Team. Thanks for reaching out! Quick call to understand what you're looking for?" },
      { offsetDays: 2, channel: 'text', title: 'Day 2 check-in', body: "Hey {first} \u2014 sending some listings I think you'll love. Any questions? Text me anytime. \u2013 Lancey, Lewis Team" },
      { offsetDays: 7, channel: 'email', title: 'Week 1 resources', body: "Hi {first}, attached is our free Central FL buyer's guide. Market's moving \u2014 let's chat when you're ready. Best, The Lewis Team" },
      { offsetDays: 21, channel: 'text', title: '3-week follow-up', body: "Hey {first}, how's your home search going? Got new listings this week \u2014 want me to send them?" },
      { offsetDays: 45, channel: 'call', title: '6-week check-in', body: "Call to check in. Are they still active? Update their stage." },
    ],
  },
  {
    id: 'closed_stay_in_touch',
    name: 'Closed Client Stay-in-Touch',
    trigger: 'closeDate',
    when: (lead) => lead.stage === 'closed',
    steps: [
      { offsetDays: 14, channel: 'text', title: '2 weeks after close', body: "Hey {first}, how are you settling in? Anything you need \u2014 contractor referrals, anything at all \u2014 I'm a text away. \u2013 Lancey" },
      { offsetDays: 90, channel: 'email', title: '3-month referral ask', body: "Hi {first}, 3 months in your new home \u2014 hope it feels like home! If you know anyone thinking about buying or selling, I'd love an introduction. Referrals are the heart of our business. \u2013 The Lewis Team" },
      { offsetDays: 180, channel: 'text', title: '6-month check-in', body: "Hey {first}, 6 months in! Market update: your home's probably appreciated. Want a quick value check?" },
      { offsetDays: 365, channel: 'call', title: '1-year home anniversary', body: "Call to celebrate 1 year in the home. Offer a free market value report." },
    ],
  },
  {
    id: 'birthday',
    name: 'Birthday Greeting',
    trigger: 'birthday',
    recurring: true,
    when: (lead) => !!lead.birthday,
    steps: [
      { offsetDays: -3, channel: 'note', title: 'Prep a card', body: "Birthday in 3 days \u2014 send a handwritten card." },
      { offsetDays: 0, channel: 'text', title: 'Happy birthday', body: "Happy birthday, {first}! \uD83C\uDF89 Hope today is incredible. \u2013 Lancey, Stacy + The Lewis Team" },
    ],
  },
  {
    id: 'home_anniversary',
    name: 'Home Anniversary',
    trigger: 'moveInDate',
    recurring: true,
    when: (lead) => !!lead.moveInDate,
    steps: [
      { offsetDays: 0, channel: 'text', title: 'Home anniversary', body: "Happy home anniversary, {first}! \uD83C\uDFE1 Can't believe it's been {years} year(s). Want a quick market update on what the house is worth today? \u2013 Lancey" },
      { offsetDays: 14, channel: 'email', title: 'Annual market report', body: "Send CMA: current home value + neighborhood trends + 1-year appreciation." },
    ],
  },
];

// Compute all pending drip actions across all leads as of today
function computeDripQueue(leads, today = new Date()) {
  const queue = [];
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const DAY = 86400000;

  for (const lead of leads || []) {
    for (const campaign of DRIP_CAMPAIGNS) {
      if (!campaign.when(lead)) continue;

      // Figure out base date
      let baseISO = null;
      if (campaign.trigger === 'createdAt') baseISO = lead.createdAt;
      if (campaign.trigger === 'closeDate') baseISO = lead.closeDate || null;
      if (campaign.trigger === 'birthday') baseISO = lead.birthday || null;
      if (campaign.trigger === 'moveInDate') baseISO = lead.moveInDate || null;
      if (!baseISO) continue;

      const base = new Date(baseISO);
      if (isNaN(base)) continue;

      // For recurring campaigns, anchor to this year's occurrence
      let anchor = base;
      if (campaign.recurring) {
        anchor = new Date(today.getFullYear(), base.getMonth(), base.getDate());
      }

      for (const step of campaign.steps) {
        const due = new Date(anchor.getTime() + step.offsetDays * DAY);
        const dueStart = new Date(due.getFullYear(), due.getMonth(), due.getDate()).getTime();
        const diffDays = Math.round((dueStart - todayStart) / DAY);
        const stepKey = `${campaign.id}:${step.offsetDays}:${campaign.recurring ? today.getFullYear() : ''}`;

        // Show actions due today or up to 3 days in the past (missed + today)
        if (diffDays <= 0 && diffDays >= -3) {
          const alreadyDone = (lead.activities || []).some(a => a.dripKey === stepKey);
          if (alreadyDone) continue;
          const years = campaign.recurring ? (today.getFullYear() - base.getFullYear()) : 0;
          queue.push({
            leadId: lead.id,
            leadName: lead.name || lead.phone || lead.email || '(no name)',
            leadPhone: lead.phone,
            leadEmail: lead.email,
            campaignId: campaign.id,
            campaignName: campaign.name,
            step,
            stepKey,
            dueIn: diffDays,
            body: step.body
              .replace('{first}', (lead.name || 'there').split(' ')[0])
              .replace('{years}', years > 0 ? years : 1),
          });
        }
      }
    }
  }

  // Sort by most overdue first
  queue.sort((a, b) => a.dueIn - b.dueIn);
  return queue;
}

// Sponsor slots — rotate per-show or keep evergreen
const SPONSORS = [
  {
    id: 's_drhorton',
    name: 'D.R. Horton',
    tagline: "America's Builder · Flex Cash eligible",
    category: 'Featured builder',
    cta: 'Learn about Flex Cash',
    url: 'https://www.drhorton.com/',
  },
  {
    id: 's_lender',
    name: 'Florida Housing',
    tagline: 'Hometown Heroes DPA · up to $35K',
    category: 'Featured lender partner',
    cta: 'Check eligibility',
    url: 'https://www.floridahousing.org/',
  },
  {
    id: 's_open',
    name: 'Your brand here',
    tagline: 'Reach Central Florida buyers weekly',
    category: 'Sponsor slot',
    cta: 'Become a sponsor',
    url: 'mailto:LewisTeamHomelife@gmail.com?subject=Open%20Doors%20Live%20Sponsorship',
  },
];

const VIDEOS = [
  {
    id: 'v_featured',
    title: "Let's Open Doors Together",
    caption: "Our featured story \u2014 who we are and how we serve Central Florida.",
    src: AGENT.assets.videoFeatured,
    poster: AGENT.assets.heroJustLeased,
  },
  {
    id: 'v_reel',
    title: "Market moment",
    caption: "A quick look at what's happening in Central Florida real estate.",
    src: AGENT.assets.videoReel,
    poster: AGENT.assets.teamHoliday,
  },
];

const WORKSHOPS = [
  {
    id: 'w1',
    title: 'Homebuyer Workshop',
    detail: 'Learn the tips and tricks to navigate the home buying process — from pre-approval to keys.',
    venue: '1136 Havendale Blvd, Winter Haven',
    rsvp: 'RSVP for next workshop',
  },
  {
    id: 'w2',
    title: 'New Construction Deep-Dive',
    detail: 'Tour new homes, learn about builder incentives, cashback, and Flex Cash opportunities.',
    venue: 'Held monthly · Winter Haven area',
    rsvp: 'Save me a seat',
  },
];

/* =========================================================
   ROOT APP
   ========================================================= */

/* =========================================================
   PUSH EMAIL — server-side relay so Lancey gets a Gmail every time.
   Uses formsubmit.co: POST to the endpoint, they email you.
   First submission sends a one-time confirmation to Lancey's inbox — he clicks the link
   and all subsequent forms arrive automatically. No signup, no API key.
   ========================================================= */
const PUSH_EMAIL_ENDPOINT = 'https://formsubmit.co/ajax/LewisTeamHomelife@gmail.com';

async function pushEmailSubmission(subject, fields) {
  try {
    await fetch(PUSH_EMAIL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
        ...fields,
      }),
    });
    return true;
  } catch {
    return false;
  }
}

/* =========================================================
   SUPABASE — lightweight fetch-based client (no npm dep)
   Lancey configures URL + anon key in Admin → Data → Cloud Sync.
   Stored in localStorage under lt_cloud_cfg.
   ========================================================= */
const CLOUD_CFG_KEY = 'lt_cloud_cfg';

function getCloudCfg() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CLOUD_CFG_KEY);
    if (!raw) return null;
    const cfg = JSON.parse(raw);
    if (!cfg.url || !cfg.anonKey) return null;
    return cfg;
  } catch { return null; }
}
function setCloudCfg(cfg) {
  try { window.localStorage.setItem(CLOUD_CFG_KEY, JSON.stringify(cfg || {})); } catch {}
}
function clearCloudCfg() {
  try { window.localStorage.removeItem(CLOUD_CFG_KEY); } catch {}
}

async function supaFetch(path, { method = 'GET', body, headers = {}, signal } = {}) {
  const cfg = getCloudCfg();
  if (!cfg) throw new Error('Cloud not configured');
  const url = `${cfg.url.replace(/\/$/, '')}/rest/v1${path}`;
  const res = await fetch(url, {
    method,
    signal,
    headers: {
      'apikey': cfg.anonKey,
      'Authorization': `Bearer ${cfg.anonKey}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Prefer': method === 'POST' ? 'resolution=merge-duplicates,return=representation' : 'return=representation',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase ${method} ${path} failed: ${res.status} ${text}`);
  }
  const json = await res.json().catch(() => null);
  return json;
}

// Config table ops
async function cloudReadContent(key) {
  const rows = await supaFetch(`/app_content?key=eq.${encodeURIComponent(key)}&select=value`);
  return rows && rows[0] ? rows[0].value : null;
}
async function cloudWriteContent(key, value) {
  return supaFetch(`/app_content`, {
    method: 'POST',
    headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' },
    body: { key, value },
  });
}
async function cloudTestConnection() {
  // Read back any row — empty result is OK, what matters is HTTP 200
  await supaFetch('/app_content?select=key&limit=1');
  return true;
}

// Hardcoded admin PIN — change here if Lancey ever needs to update
const ADMIN_PIN = '0428';

// Haptic feedback — works on Android, silent on iOS Safari (no vibrate API)
function haptic(kind = 'tap') {
  if (typeof navigator === 'undefined' || !navigator.vibrate) return;
  const patterns = { tap: 10, soft: 6, success: [8, 40, 12], warn: [20, 50, 20] };
  try { navigator.vibrate(patterns[kind] ?? 10); } catch {}
}

// Wrap useEditable with cloud sync. Reads from Supabase on mount (if configured),
// pushes every change to cloud. Falls back to localStorage cleanly if cloud fails.
function useCloudEditable(key, defaults) {
  const [data, saveLocal, resetLocal] = useEditable(key, defaults);

  // Hydrate from cloud on mount if configured
  useEffect(() => {
    const cfg = getCloudCfg();
    if (!cfg) return;
    let cancelled = false;
    cloudReadContent(key).then(value => {
      if (cancelled) return;
      if (value !== null && value !== undefined) {
        saveLocal(value); // updates localStorage + state; does NOT re-push to cloud
      }
    }).catch(() => {});
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = (next) => {
    saveLocal(next);
    const cfg = getCloudCfg();
    if (cfg) {
      cloudWriteContent(key, next).catch(err => console.warn('[cloud]', key, err));
    }
  };

  return [data, save, resetLocal];
}

function useEditable(key, defaults) {
  const storageKey = `lt_${key}`;
  const [data, setData] = useState(() => {
    if (typeof window === 'undefined') return defaults;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return defaults;
      return JSON.parse(raw);
    } catch {
      return defaults;
    }
  });
  const save = (next) => {
    setData(next);
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      }
    } catch {}
  };
  const reset = () => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(storageKey);
      }
    } catch {}
    setData(defaults);
  };
  return [data, save, reset];
}

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [client, setClient] = useState({ name: '', email: '', phone: '', type: '', stage: '' });
  const [buyCompleted, setBuyCompleted] = useState([]);
  const [sellCompleted, setSellCompleted] = useState([]);
  const [investCompleted, setInvestCompleted] = useState([]);
  const [buyChecked, setBuyChecked] = useState([]);
  const [sellChecked, setSellChecked] = useState([]);
  const [openStep, setOpenStep] = useState(null);
  const [modal, setModal] = useState(null);
  const [shareData, setShareData] = useState(null);

  // Editable content — cloud-synced when Supabase is configured, otherwise localStorage only
  const [listings, setListings, resetListings] = useCloudEditable('listings', LISTINGS);
  const [liveConfig, setLiveConfig, resetLive] = useCloudEditable('live', LIVE_CONFIG);
  const [moments, setMoments, resetMoments] = useCloudEditable('moments', BRAND_MOMENTS);
  const [sponsors, setSponsors, resetSponsors] = useCloudEditable('sponsors', SPONSORS);
  const [buyerSteps, setBuyerSteps, resetBuyerSteps] = useCloudEditable('buyerSteps', BUYER_STEPS);
  const [sellerSteps, setSellerSteps, resetSellerSteps] = useCloudEditable('sellerSteps', SELLER_STEPS);
  const [investorSteps, setInvestorSteps, resetInvestorSteps] = useCloudEditable('investorSteps', INVESTOR_STEPS);
  const [programs, setPrograms, resetPrograms] = useCloudEditable('programs', PROGRAMS);
  const [testimonials, setTestimonials, resetTestimonials] = useCloudEditable('testimonials', TESTIMONIALS);
  const [wins, setWins, resetWins] = useCloudEditable('wins', WINS);
  const [workshops, setWorkshops, resetWorkshops] = useCloudEditable('workshops', WORKSHOPS);
  const [crm, setCrm, resetCrm] = useCloudEditable('crm', []);
  const [teamOverrides, setTeamOverrides, resetTeam] = useCloudEditable('team', {
    name1: AGENT.name1, title1: AGENT.title, license1: AGENT.licenseNumber,
    phone1: AGENT.phone, email1: AGENT.email, photo1: AGENT.photoUrl,
    bio1: "Lancey leads market strategy and negotiation for The Lewis Team. Educated at Tampa School of Real Estate, he specializes in first-time buyers, new construction, and investment.",
    name2: AGENT.coAgent.name, title2: AGENT.coAgent.title, license2: AGENT.coAgent.licenseNumber,
    phone2: AGENT.coAgent.phone, email2: AGENT.coAgent.email, photo2: AGENT.coAgent.photoUrl,
    bio2: "Stacy handles client care, listing prep, and high-impact marketing. Follow her on TikTok @stacylewisrealestate for daily real estate truth.",
  });

  // Admin unlock
  const [adminMode, setAdminMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === '1') return true;
    try { return window.localStorage.getItem('lt_admin') === '1'; } catch { return false; }
  });
  const [pinPromptOpen, setPinPromptOpen] = useState(false);

  const getStoredPin = () => {
    try { return window.localStorage.getItem('lt_admin_pin'); } catch { return null; }
  };
  const setStoredPin = (pin) => {
    try { window.localStorage.setItem('lt_admin_pin', pin); } catch {}
  };
  const clearStoredPin = () => {
    try { window.localStorage.removeItem('lt_admin_pin'); } catch {}
  };

  const requestUnlock = () => {
    setPinPromptOpen(true);
  };
  const confirmUnlock = () => {
    setAdminMode(true);
    try { window.localStorage.setItem('lt_admin', '1'); } catch {}
    setPinPromptOpen(false);
    haptic('success');
  };
  const lockAdmin = () => {
    setAdminMode(false);
    try { window.localStorage.removeItem('lt_admin'); } catch {}
  };

  // On mount: if URL sync payload is present, offer to import
  const [syncOffer, setSyncOffer] = useState(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const hash = window.location.hash || '';
      const match = hash.match(/sync=([^&]+)/);
      if (match && match[1]) {
        const decoded = JSON.parse(atob(decodeURIComponent(match[1])));
        setSyncOffer(decoded);
      }
    } catch {}
    // Check for a remote JSON URL configured in settings
    try {
      const remoteUrl = window.localStorage.getItem('lt_remote_url');
      if (remoteUrl) {
        fetch(remoteUrl, { cache: 'no-store' }).then(r => r.ok ? r.json() : null).then(data => {
          if (data && typeof data === 'object') {
            if (data.listings) setListings(data.listings);
            if (data.liveConfig) setLiveConfig(data.liveConfig);
            if (data.moments) setMoments(data.moments);
            if (data.sponsors) setSponsors(data.sponsors);
            if (data.buyerSteps) setBuyerSteps(data.buyerSteps);
            if (data.sellerSteps) setSellerSteps(data.sellerSteps);
            if (data.investorSteps) setInvestorSteps(data.investorSteps);
            if (data.programs) setPrograms(data.programs);
            if (data.testimonials) setTestimonials(data.testimonials);
            if (data.wins) setWins(data.wins);
            if (data.workshops) setWorkshops(data.workshops);
            if (data.team) setTeamOverrides(data.team);
          }
        }).catch(() => {});
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applySyncPayload = (payload) => {
    if (payload.listings) setListings(payload.listings);
    if (payload.liveConfig) setLiveConfig(payload.liveConfig);
    if (payload.moments) setMoments(payload.moments);
    if (payload.sponsors) setSponsors(payload.sponsors);
    if (payload.buyerSteps) setBuyerSteps(payload.buyerSteps);
    if (payload.sellerSteps) setSellerSteps(payload.sellerSteps);
    if (payload.investorSteps) setInvestorSteps(payload.investorSteps);
    if (payload.programs) setPrograms(payload.programs);
    if (payload.testimonials) setTestimonials(payload.testimonials);
    if (payload.wins) setWins(payload.wins);
    if (payload.workshops) setWorkshops(payload.workshops);
    if (payload.team) setTeamOverrides(payload.team);
    setSyncOffer(null);
    try {
      if (typeof window !== 'undefined') window.history.replaceState({}, '', window.location.pathname);
    } catch {}
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const toggle = (setter) => (id) =>
    setter(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));

  const openShare = (data) => {
    const payload = {
      title: data.title || 'The Lewis Team',
      text: data.text || data.title || 'Check out The Lewis Team',
      url: data.url || window.location.origin + '/',
    };
    if (navigator.share) {
      navigator.share(payload).catch(() => setShareData(data));
    } else {
      setShareData(data);
    }
  };

  const choosePath = (type) => {
    haptic('success');
    setClient({ ...client, type });
    setScreen('main');
    setActiveTab(
      type === 'seller' ? 'sell' :
      type === 'investor' ? 'invest' :
      'buy'
    );
  };

  // Capture a lead from anywhere in the app. Returns the new lead id.
  const captureLead = (partial) => {
    const now = new Date().toISOString();
    const lead = {
      id: `lead_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: partial.name || '',
      phone: partial.phone || '',
      email: partial.email || '',
      type: partial.type || 'other',
      stage: partial.stage || 'new',
      source: partial.source || 'app_contact',
      budget: partial.budget || null,
      interests: partial.interests || '',
      address: partial.address || '',
      notes: partial.notes || '',
      dealValue: partial.dealValue || 0,
      closeDate: partial.closeDate || '',
      tags: partial.tags || [],
      // Relationship + life-event fields
      birthday: partial.birthday || '',
      spouseName: partial.spouseName || '',
      spouseBirthday: partial.spouseBirthday || '',
      moveInDate: partial.moveInDate || '',
      importantDates: partial.importantDates || [],
      preferredContact: partial.preferredContact || '',
      consent: partial.consent || false,
      activities: [{
        id: `a_${Date.now()}`,
        type: 'system',
        body: `Lead created from ${(CRM_SOURCES.find(s => s.id === (partial.source || 'app_contact'))?.label) || 'app'}.`,
        createdAt: now,
      }],
      tasks: [],
      createdAt: now,
      updatedAt: now,
    };
    // Prepend so newest shows first
    setCrm([lead, ...(crm || [])]);
    return lead.id;
  };

  const updateLead = (id, patch) => {
    const now = new Date().toISOString();
    setCrm((crm || []).map(l => l.id === id ? { ...l, ...patch, updatedAt: now } : l));
  };
  const deleteLead = (id) => {
    setCrm((crm || []).filter(l => l.id !== id));
  };
  const addActivity = (leadId, activity) => {
    const now = new Date().toISOString();
    const entry = {
      id: `a_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      createdAt: now,
      ...activity,
    };
    setCrm((crm || []).map(l => l.id === leadId
      ? { ...l, activities: [entry, ...(l.activities || [])], updatedAt: now }
      : l));
  };
  const addTask = (leadId, task) => {
    const entry = {
      id: `t_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      createdAt: new Date().toISOString(),
      done: false,
      ...task,
    };
    setCrm((crm || []).map(l => l.id === leadId
      ? { ...l, tasks: [entry, ...(l.tasks || [])] } : l));
  };
  const toggleTask = (leadId, taskId) => {
    setCrm((crm || []).map(l => l.id === leadId
      ? { ...l, tasks: (l.tasks || []).map(t => t.id === taskId ? { ...t, done: !t.done } : t) }
      : l));
  };

  if (screen === 'welcome') {
    return <Welcome onStart={() => setScreen('portal')} onShare={openShare} />;
  }
  if (screen === 'portal') {
    return <Portal
      onChoose={choosePath}
      onBack={() => setScreen('welcome')}
      onShare={openShare}
    />;
  }

  const buyPct = Math.round((buyCompleted.length / Math.max(1, buyerSteps.length)) * 100);
  const sellPct = Math.round((sellCompleted.length / Math.max(1, sellerSteps.length)) * 100);

  return (
    <div style={{ ...sans, minHeight: '100vh' }} className="lt-shell">
      <div style={{ backgroundColor: C.cream, color: C.charcoal, minHeight: '100vh' }}
           className="lt-app relative">
      <TopBar
        onContact={setModal} onShare={openShare}
        adminMode={adminMode}
        onUnlockAdmin={requestUnlock}
        onOpenAdmin={() => setModal('admin')}
      />

      <main className="pb-24">
        {activeTab === 'home' && (
          <HomeTab
            client={client} buyPct={buyPct} sellPct={sellPct}
            moments={moments}
            liveConfig={liveConfig}
            programs={programs}
            wins={wins}
            workshops={workshops}
            team={teamOverrides}
            onGoTo={setActiveTab} onContact={setModal} onShare={openShare} />
        )}
        {activeTab === 'buy' && (
          <JourneyTab
            title="Your buyer journey."
            eyebrow="Buy a home"
            steps={buyerSteps}
            completed={buyCompleted} toggle={toggle(setBuyCompleted)}
            openStep={openStep} setOpenStep={setOpenStep}
            onContact={setModal}
          />
        )}
        {activeTab === 'sell' && (
          <SellTab
            sellPct={sellPct}
            steps={sellerSteps}
            completed={sellCompleted} toggle={toggle(setSellCompleted)}
            openStep={openStep} setOpenStep={setOpenStep}
            onContact={setModal}
          />
        )}
        {activeTab === 'invest' && (
          <InvestTab
            steps={investorSteps}
            completed={investCompleted} toggle={toggle(setInvestCompleted)}
            openStep={openStep} setOpenStep={setOpenStep}
            onContact={setModal}
          />
        )}
        {activeTab === 'listings' && (
          <ListingsTab listings={listings} onContact={setModal} onShare={openShare} />
        )}
        {activeTab === 'tools' && (
          <ToolsTab
            buyChecked={buyChecked} toggleBuyCheck={toggle(setBuyChecked)}
            sellChecked={sellChecked} toggleSellCheck={toggle(setSellChecked)}
            programs={programs}
            onContact={setModal}
          />
        )}
        {activeTab === 'team' && (
          <TeamTab
            team={teamOverrides}
            testimonials={testimonials}
            wins={wins}
            onContact={setModal}
          />
        )}
        {activeTab === 'live' && (
          <LiveTab liveConfig={liveConfig} sponsors={sponsors}
            onBack={() => setActiveTab('home')} onContact={setModal} />
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {modal && modal.startsWith('contact:') && (
        <ContactForm type={modal.replace('contact:', '')} client={client}
          onCapture={captureLead}
          onClose={() => setModal(null)} />
      )}
      {modal === 'valuation' && (
        <ValuationForm client={client} onCapture={captureLead} onClose={() => setModal(null)} />
      )}
      {modal === 'glossary' && (
        <GlossaryModal onClose={() => setModal(null)} />
      )}
      {modal === 'notify' && (
        <NotifyForm client={client} onCapture={captureLead} onClose={() => setModal(null)} />
      )}
      {modal === 'callin' && (
        <CallInForm client={client} onCapture={captureLead} onClose={() => setModal(null)} />
      )}
      {modal === 'profile' && (
        <ClientProfileForm client={client} onCapture={captureLead} onClose={() => setModal(null)} />
      )}
      {shareData && (
        <ShareMenu data={shareData} onClose={() => setShareData(null)} />
      )}
      {modal === 'admin' && (
        <AdminCenter
          adminMode={adminMode}
          onLock={lockAdmin}
          crm={crm} setCrm={setCrm} resetCrm={resetCrm}
          updateLead={updateLead} deleteLead={deleteLead}
          addActivity={addActivity} addTask={addTask} toggleTask={toggleTask}
          captureLead={captureLead}
          listings={listings} setListings={setListings} resetListings={resetListings}
          liveConfig={liveConfig} setLiveConfig={setLiveConfig} resetLive={resetLive}
          moments={moments} setMoments={setMoments} resetMoments={resetMoments}
          sponsors={sponsors} setSponsors={setSponsors} resetSponsors={resetSponsors}
          buyerSteps={buyerSteps} setBuyerSteps={setBuyerSteps} resetBuyerSteps={resetBuyerSteps}
          sellerSteps={sellerSteps} setSellerSteps={setSellerSteps} resetSellerSteps={resetSellerSteps}
          investorSteps={investorSteps} setInvestorSteps={setInvestorSteps} resetInvestorSteps={resetInvestorSteps}
          programs={programs} setPrograms={setPrograms} resetPrograms={resetPrograms}
          testimonials={testimonials} setTestimonials={setTestimonials} resetTestimonials={resetTestimonials}
          wins={wins} setWins={setWins} resetWins={resetWins}
          workshops={workshops} setWorkshops={setWorkshops} resetWorkshops={resetWorkshops}
          team={teamOverrides} setTeam={setTeamOverrides} resetTeam={resetTeam}
          getPin={getStoredPin} setPin={setStoredPin} clearPin={clearStoredPin}
          onClose={() => setModal(null)}
        />
      )}
      {pinPromptOpen && (
        <PinPrompt
          onVerify={() => confirmUnlock()}
          onClose={() => setPinPromptOpen(false)}
        />
      )}
      {syncOffer && (
        <SyncOfferModal payload={syncOffer}
          onApply={() => applySyncPayload(syncOffer)}
          onClose={() => setSyncOffer(null)} />
      )}
      </div>
    </div>
  );
}

/* =========================================================
   TOP BAR + BOTTOM NAV
   ========================================================= */

function TopBar({ onContact, onShare, adminMode, onUnlockAdmin, onOpenAdmin }) {
  const tapRef = useRef({ count: 0, last: 0 });
  const [flash, setFlash] = useState(0);
  const shareApp = () => onShare({
    title: 'The Lewis Team',
    text: "Let's Open Doors Together \uD83D\uDD11 Central Florida real estate with Realtor of the Year 2025 \u2014 The Lewis Team.",
    url: typeof window !== 'undefined' ? window.location.origin + '/' : '',
  });

  const tapLogo = () => {
    haptic('soft');
    // If already unlocked, tap logo = open Admin instantly
    if (adminMode) {
      onOpenAdmin();
      return;
    }
    const now = Date.now();
    const t = tapRef.current;
    if (now - t.last > 1500) t.count = 0;
    t.last = now;
    t.count += 1;
    setFlash(t.count);
    if (t.count >= 5) {
      t.count = 0;
      onUnlockAdmin();
    }
  };

  return (
    <header style={{ backgroundColor: C.ink, color: C.cream }} className="sticky top-0 z-20">
      {/* Award banner — full width above logo row */}
      <div className="text-center py-1.5 flex items-center justify-center gap-1.5"
           style={{
             background: `linear-gradient(90deg, ${C.goldDeep} 0%, ${C.gold} 50%, ${C.goldDeep} 100%)`,
             color: C.ink,
             borderBottom: `1px solid rgba(15,42,63,0.15)`,
           }}>
        <Trophy size={11} strokeWidth={2.5} />
        <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
          Realtor of the Year 2025
        </span>
      </div>

      {/* Main row */}
      <div className="px-5 pt-4 pb-4 flex items-center gap-3">
        <button onClick={tapLogo}
          className="w-11 h-11 rounded-lg grid place-items-center overflow-hidden relative transition"
          style={{
            backgroundColor: C.cream,
            boxShadow: flash > 0 ? `0 0 0 ${Math.min(flash * 2, 10)}px rgba(200,152,90,${flash / 10})` : 'none',
          }}
          aria-label="Home">
          <img src={AGENT.assets.logo} alt="The Lewis Team" className="w-8 h-8 object-contain" />
          {flash > 0 && flash < 5 && !adminMode && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[9px] font-bold grid place-items-center"
                  style={{ backgroundColor: C.gold, color: C.ink }}>
              {flash}
            </span>
          )}
        </button>
        <div className="flex-1 min-w-0">
          <p style={serif} className="text-lg leading-tight truncate">{AGENT.teamName}</p>
          <p className="text-[10px] opacity-70 truncate">{AGENT.subTagline}</p>
        </div>
        {adminMode && (
          <button onClick={onOpenAdmin}
            style={{ backgroundColor: C.gold, color: C.ink }}
            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 active:scale-95 transition"
            aria-label="Admin">
            <Wrench size={11} strokeWidth={2.5} /> Admin
          </button>
        )}
        <button onClick={shareApp}
           style={{ backgroundColor: 'rgba(245,239,230,0.1)', color: C.cream, border: `1px solid rgba(245,239,230,0.15)` }}
           className="w-9 h-9 rounded-full grid place-items-center active:scale-95 transition"
           aria-label="Share">
          <Share2 size={14} strokeWidth={2.5} />
        </button>
        <a href={`tel:${AGENT.phone}`}
           style={{ backgroundColor: C.gold, color: C.ink }}
           className="w-9 h-9 rounded-full grid place-items-center active:scale-95 transition"
           aria-label="Call">
          <Phone size={16} strokeWidth={2.5} />
        </a>
      </div>
    </header>
  );
}

function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'buy', label: 'Buy', icon: Key },
    { id: 'sell', label: 'Sell', icon: TrendingUp },
    { id: 'invest', label: 'Invest', icon: Target },
    { id: 'listings', label: 'Homes', icon: ShoppingBag },
    { id: 'tools', label: 'Tools', icon: Calculator },
    { id: 'team', label: 'Team', icon: User },
  ];
  return (
    <nav
      style={{ backgroundColor: C.paper, borderTop: `1px solid ${C.line}` }}
      className="fixed bottom-0 left-0 right-0 z-20 grid grid-cols-7">
      {tabs.map(tab => {
        const active = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            style={{ color: active ? C.ink : C.muted }}
            className="relative py-3 flex flex-col items-center gap-0.5 transition active:scale-95">
            <Icon size={17} strokeWidth={active ? 2.6 : 2} />
            <span className="text-[9px] font-medium tracking-wide">{tab.label}</span>
            {active && (
              <span style={{ backgroundColor: C.gold }}
                className="absolute bottom-1 w-1 h-1 rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

/* =========================================================
   WELCOME SCREEN
   ========================================================= */

function Welcome({ onStart, onShare }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ ...sans }} className="lt-shell min-h-screen">
      <div style={{ backgroundColor: C.ink, color: C.cream, minHeight: '100vh' }}
           className="lt-app flex flex-col relative">
      {/* Landing HERO — full-bleed team image with layered intent */}
      <div className="relative">
        <img src={AGENT.assets.heroTeam} alt="Lancey and Stacy Lewis"
             className="absolute inset-0 w-full h-full object-cover"
             style={{ objectPosition: '50% 25%' }} />
        <div className="absolute inset-0"
             style={{ background: `linear-gradient(180deg, rgba(15,42,63,0.45) 0%, rgba(15,42,63,0.2) 35%, rgba(15,42,63,0.95) 85%)` }} />
        <div className="relative px-6 pt-10 pb-6" style={{ minHeight: 460 }}>
          {/* Top row: logo + share */}
          <div className="flex items-start justify-between mb-4">
            <img src={AGENT.assets.logo} alt="The Lewis Team" className="h-14 w-14 object-contain"
                 style={{ backgroundColor: C.cream, borderRadius: 14, padding: 8 }} />
            <button
              onClick={() => onShare({
                title: 'The Lewis Team',
                text: "Let's Open Doors Together \uD83D\uDD11 Central Florida's Realtor of the Year 2025 \u2014 The Lewis Team.",
                url: typeof window !== 'undefined' ? window.location.origin + '/' : '',
              })}
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: C.cream, border: `1px solid rgba(255,255,255,0.25)` }}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-sm">
              <Share2 size={12} /> Share
            </button>
          </div>

          {/* Award ribbon */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider mb-5"
                style={{ backgroundColor: 'rgba(200,152,90,0.18)', color: C.gold, border: `1px solid ${C.gold}` }}>
            <Trophy size={11} /> Realtor of the Year 2025
          </span>

          {/* Spacer to push text down */}
          <div style={{ height: 120 }} />

          {/* Hero copy pinned to bottom of image */}
          <h1 style={serif} className="text-4xl leading-[1.05] tracking-tight">
            {AGENT.tagline}
          </h1>
          <p className="text-xs uppercase tracking-[0.22em] mt-2" style={{ color: C.gold }}>
            {AGENT.subTagline}
          </p>
        </div>
      </div>

      <div className="flex-1 px-6 pt-5 pb-6" style={{ backgroundColor: C.ink }}>
        {/* 5-star + stat strip */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={13} fill={C.gold} color={C.gold} />)}
            </div>
            <span className="text-[10px] uppercase tracking-wider opacity-80">5-Star Service</span>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider opacity-60">Central Florida</p>
            <p className="text-[11px] opacity-90">15 cities &middot; Polk County</p>
          </div>
        </div>

        {/* Mission */}
        <p className="text-sm opacity-90 leading-relaxed mb-5">
          {AGENT.mission}
        </p>

        {/* Install prompt (iOS + Android) */}
        <div className="mb-5">
          <InstallPrompt />
        </div>

        {/* Brand moments — shareable "meme" cards */}
        <div className="-mx-6 mb-6">
          <BrandMomentsCarouselDark onShare={onShare} />
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="p-6 sticky bottom-0" style={{ backgroundColor: C.ink, borderTop: `1px solid rgba(200,152,90,0.25)` }}>
        <button onClick={onStart}
          style={{ backgroundColor: C.gold, color: C.ink }}
          className="w-full py-4 rounded-xl font-semibold tracking-wide flex items-center justify-center gap-2 transition active:scale-[0.98]">
          Start Your Journey <ArrowRight size={18} />
        </button>
        <p className="text-[10px] opacity-50 text-center mt-3">
          Realtor of the Year 2025 &middot; HomeLife Realty Coastal Properties
        </p>
      </div>
      </div>
    </div>
  );
}

/* =========================================================
   PORTAL — 3-path picker (Buyer / Seller / Investor)
   ========================================================= */
const PATHS = [
  {
    id: 'buyer',
    icon: Key,
    title: 'I\u2019m a Buyer',
    tagline: 'Find my home',
    summary: "First home, dream home, or your next one \u2014 we'll guide every step. Pre-approval through keys in hand.",
    bullets: [
      'First-time buyer specialists',
      'Hometown Heroes DPA up to $35K',
      'Cashback up to 10% on qualifying deals',
    ],
    badge: 'Most popular',
    accent: 'gold',
    cta: 'Start my buyer journey',
  },
  {
    id: 'seller',
    icon: TrendingUp,
    title: 'I\u2019m a Seller',
    tagline: 'Sell for top dollar',
    summary: "Pro photography, video, drone, and a buyer database thousands deep. We defend every dollar of your net.",
    bullets: [
      'Free professional valuation',
      'High-impact marketing package',
      'Aggressive negotiation strategy',
    ],
    badge: 'Free valuation',
    accent: 'ink',
    cta: 'Start my seller journey',
  },
  {
    id: 'investor',
    icon: TrendingUp,
    title: 'I\u2019m an Investor',
    tagline: 'Build generational wealth',
    summary: "DSCR loans, off-market deals, cash-flow underwriting, and portfolio strategy. This is how wealth scales.",
    bullets: [
      'DSCR loans (qualify on rental income)',
      'Off-market + coming-soon access',
      'Rental, flip, and long-term hold',
    ],
    badge: 'Generational wealth',
    accent: 'success',
    cta: 'Start my investor journey',
  },
];

function Portal({ onChoose, onBack, onShare }) {
  return (
    <div style={{ ...sans }} className="lt-shell min-h-screen">
      <div style={{ backgroundColor: C.ink, color: C.cream, minHeight: '100vh' }}
           className="lt-app flex flex-col relative">
      <div className="px-6 pt-10 pb-4 flex items-center justify-between">
        <button onClick={onBack}
          style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: C.cream, border: `1px solid rgba(255,255,255,0.15)` }}
          className="px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 active:scale-[0.98]">
          <ArrowLeft size={12} /> Back
        </button>
        <button
          onClick={() => onShare({
            title: 'The Lewis Team',
            text: "Let's Open Doors Together \uD83D\uDD11 \u2014 The Lewis Team.",
            url: typeof window !== 'undefined' ? window.location.origin + '/' : '',
          })}
          style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: C.cream, border: `1px solid rgba(255,255,255,0.15)` }}
          className="px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 active:scale-[0.98]">
          <Share2 size={12} /> Share
        </button>
      </div>

      <div className="px-6 pb-4">
        <div className="flex items-center gap-2 mb-3 opacity-80">
          <Sparkles size={14} style={{ color: C.gold }} />
          <span className="text-[11px] tracking-[0.22em] uppercase">Choose your path</span>
        </div>
        <h1 style={serif} className="text-4xl leading-[1.05] tracking-tight mb-2">
          Which door are we opening?
        </h1>
        <p className="text-sm opacity-80 leading-relaxed">
          Pick the path that matches where you are today. You can always change it later from the menu.
        </p>
      </div>

      <div className="px-6 pb-8 space-y-3 flex-1">
        {PATHS.map(p => {
          const Icon = p.icon;
          const accentBg =
            p.accent === 'gold' ? `linear-gradient(135deg, ${C.ink}, ${C.goldDeep})` :
            p.accent === 'success' ? `linear-gradient(135deg, #1a3d2d, ${C.ink}, #4A7C59)` :
            `linear-gradient(135deg, #0a1a2a, ${C.ink})`;
          return (
            <button key={p.id}
              onClick={() => onChoose(p.id)}
              className="w-full rounded-3xl p-5 text-left active:scale-[0.99] transition relative overflow-hidden"
              style={{ background: accentBg, color: C.cream, border: `1px solid ${C.gold}` }}>
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl grid place-items-center"
                     style={{ backgroundColor: C.gold, color: C.ink }}>
                  <Icon size={22} />
                </div>
                {p.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(200,152,90,0.18)', color: C.gold, border: `1px solid ${C.gold}` }}>
                    {p.badge}
                  </span>
                )}
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: C.gold }}>
                {p.tagline}
              </p>
              <p style={serif} className="text-2xl leading-tight mt-1 mb-2">{p.title}</p>
              <p className="text-xs opacity-85 leading-relaxed mb-3">{p.summary}</p>

              <ul className="space-y-1 mb-3">
                {p.bullets.map((b, i) => (
                  <li key={i} className="text-xs flex gap-2 opacity-90">
                    <CheckCircle2 size={12} style={{ color: C.gold, marginTop: 2, flexShrink: 0 }} />
                    <span className="flex-1">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: C.gold }}>
                {p.cta} <ArrowRight size={13} />
              </div>
            </button>
          );
        })}
      </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  const isNumeric = type === 'number' || type === 'tel';
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.22em] opacity-60 mb-2">{label}</label>
      <input type={type} value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={isNumeric ? 'tel' : undefined}
        style={{
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: `1px solid ${isNumeric ? 'rgba(200,152,90,0.55)' : 'rgba(255,255,255,0.1)'}`,
          color: isNumeric ? C.gold : C.cream,
          boxShadow: isNumeric ? `inset 0 0 10px rgba(200,152,90,0.08)` : 'none',
        }}
        className={`w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 no-spin ${
          isNumeric ? 'digital-readout text-base' : ''
        }`} />
    </div>
  );
}

/* =========================================================
   HOME TAB
   ========================================================= */

function HomeTab({ client, buyPct, sellPct, moments, liveConfig, programs, wins, workshops, team, onGoTo, onContact, onShare }) {
  const activePrograms = programs || PROGRAMS;
  const activeWins = wins || WINS;
  const activeWorkshops = workshops || WORKSHOPS;
  const first = client.name ? client.name.split(' ')[0] : '';
  const showSeller = client.type === 'seller' || client.type === 'both';
  const showBuyer = client.type !== 'seller';

  return (
    <div className="px-5 pt-5 space-y-5">
      {/* Greeting */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>
          Welcome{first ? `, ${first}` : ''}
        </p>
        <h2 style={serif} className="text-3xl leading-tight mt-1">
          Your path home.
        </h2>
      </div>

      {/* NEW CLIENT PORTAL — hero CTA */}
      <button onClick={() => onContact('profile')}
        className="w-full relative overflow-hidden rounded-3xl p-6 text-left active:scale-[0.99] transition"
        style={{
          background: `linear-gradient(135deg, ${C.gold} 0%, ${C.goldDeep} 100%)`,
          color: C.ink,
          boxShadow: `0 12px 32px rgba(200, 152, 90, 0.35), inset 0 1px 0 rgba(255,255,255,0.3)`,
        }}>
        {/* Decorative star */}
        <div className="absolute -right-4 -top-4 w-28 h-28 rounded-full opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)' }} />

        <div className="flex items-start gap-4 relative">
          <div className="w-14 h-14 rounded-2xl grid place-items-center flex-shrink-0"
               style={{ backgroundColor: C.ink, color: C.gold }}>
            <User size={26} strokeWidth={2.2} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] opacity-80 mb-1">
              New Client Portal
            </p>
            <p style={serif} className="text-2xl leading-tight">Join our family.</p>
            <p className="text-xs opacity-85 mt-1.5 leading-relaxed">
              Birthday wishes, home anniversary reminders, market intel tailored to you.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 pt-4"
             style={{ borderTop: `1px solid rgba(15,42,63,0.18)` }}>
          <span className="text-xs font-bold uppercase tracking-wider">Create your profile</span>
          <div className="w-9 h-9 rounded-full grid place-items-center"
               style={{ backgroundColor: C.ink, color: C.gold }}>
            <ArrowRight size={16} strokeWidth={2.5} />
          </div>
        </div>
      </button>

      {/* Hero card with team portrait — faces front and center */}
      <div className="rounded-3xl overflow-hidden relative"
           style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}>
        <img src={AGENT.assets.heroTeam} alt="Lancey and Stacy Lewis"
             className="w-full h-72 object-cover"
             style={{ objectPosition: '50% 22%' }} />
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: `linear-gradient(180deg, rgba(15,42,63,0.2) 0%, rgba(15,42,63,0) 30%, rgba(15,42,63,0.88) 100%)` }} />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
             style={{ backgroundColor: C.gold, color: C.ink }}>
          <Trophy size={12} strokeWidth={2.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Realtor of the Year 2025</span>
        </div>
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
             style={{ backgroundColor: 'rgba(15,42,63,0.7)', color: C.cream, border: `1px solid ${C.gold}` }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={9} fill={C.gold} color={C.gold} />)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p style={serif} className="text-3xl leading-tight">Lancey &amp; Stacy Lewis</p>
          <p className="text-sm opacity-90 mt-1" style={{ color: C.gold }}>{AGENT.tagline}</p>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 mt-1">
            {AGENT.subTagline}
          </p>
        </div>
      </div>

      {/* Progress cards */}
      {showBuyer && (
        <ProgressCard
          title="Your buyer journey"
          pct={buyPct}
          nextLabel={`Up next: ${BUYER_STEPS[0].title}`}
          onClick={() => onGoTo('buy')}
          icon={Key}
        />
      )}
      {showSeller && (
        <ProgressCard
          title="Your seller journey"
          pct={sellPct}
          nextLabel={`Up next: ${SELLER_STEPS[0].title}`}
          onClick={() => onGoTo('sell')}
          icon={TrendingUp}
        />
      )}

      {/* Quick actions */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
          Quick actions
        </p>
        <div className="grid grid-cols-2 gap-3">
          <QuickCard icon={Calendar} label="Schedule a showing"
            onClick={() => onContact('contact:showing')} />
          <QuickCard icon={HandCoins} label="Get pre-approved"
            onClick={() => onContact('contact:preapproval')} />
          <QuickCard icon={TrendingUp} label="What's my home worth?"
            onClick={() => onContact('valuation')} />
          <QuickCard icon={ShoppingBag} label="See listings"
            onClick={() => onGoTo('listings')} />
          <QuickCard icon={Gift} label="Hometown Heroes DPA"
            onClick={() => onContact('contact:preapproval')} />
          <QuickCard icon={MessageSquare} label="Ask a question"
            onClick={() => onContact('contact:question')} />
        </div>
      </div>

      {/* LIVE / Podcast hero card */}
      <LiveHeroCard onOpen={() => onGoTo('live')} liveConfig={liveConfig} />

      {/* Brand moments — shareable meme-style cards */}
      <div className="-mx-5">
        <BrandMomentsCarousel onShare={onShare} moments={moments} />
      </div>

      {/* Install + share strip */}
      <div className="grid grid-cols-2 gap-2">
        <button onClick={() => onShare({
          title: 'The Lewis Team',
          text: "Let's Open Doors Together \uD83D\uDD11 Central Florida's Realtor of the Year 2025.",
          url: typeof window !== 'undefined' ? window.location.origin + '/' : '',
        })}
          style={{ backgroundColor: C.ink, color: C.cream }}
          className="py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
          <Share2 size={13} /> Share with a friend
        </button>
        <a href="sms:?body=Check%20out%20The%20Lewis%20Team%20%E2%80%94%20Central%20Florida%20real%20estate%20experts.%20https%3A%2F%2Fwww.lewisteamrealestate.com%2F"
          style={{ backgroundColor: C.gold, color: C.ink }}
          className="py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
          <MessageSquare size={13} /> Text a referral
        </a>
      </div>

      {/* Recent wins (social proof) */}
      <div>
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.gold }}>
              <span className="inline-flex items-center gap-1"><Trophy size={11} /> Recent wins</span>
            </p>
            <p style={serif} className="text-xl leading-tight">Real keys. Real families.</p>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory">
          {activeWins.map(w => <WinCard key={w.id} win={w} />)}
        </div>
      </div>

      {/* Programs teaser */}
      <div>
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>Featured programs</p>
            <p style={serif} className="text-xl leading-tight">Money-saving opportunities.</p>
          </div>
          <button onClick={() => onGoTo('tools')} className="text-xs flex items-center gap-0.5"
            style={{ color: C.gold }}>
            All tools <ChevronRight size={12} />
          </button>
        </div>
        <div className="space-y-3">
          {activePrograms.slice(0, 3).map(p => (
            <ProgramCard key={p.id} program={p}
              onClick={() => onContact(`contact:${p.ctaType}`)} />
          ))}
        </div>
      </div>


      {/* Workshops */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
          Upcoming events
        </p>
        <div className="space-y-3">
          {activeWorkshops.map(w => (
            <button key={w.id}
              onClick={() => onContact('contact:question')}
              style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
              className="w-full p-4 rounded-2xl flex items-center gap-3 text-left active:scale-[0.99] transition">
              <div className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0"
                   style={{ backgroundColor: C.ink, color: C.gold }}>
                <PartyPopper size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p style={serif} className="text-base leading-tight">{w.title}</p>
                <p className="text-xs mt-0.5" style={{ color: C.muted }}>{w.venue}</p>
              </div>
              <ChevronRight size={16} style={{ color: C.muted }} />
            </button>
          ))}
        </div>
      </div>

      {/* Team card */}
      <div style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
           className="rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <img src={AGENT.photoUrl} alt={AGENT.name1}
            className="w-14 h-14 rounded-full object-cover"
            style={{ border: `2px solid ${C.gold}` }} />
          <img src={AGENT.coAgent.photoUrl} alt={AGENT.coAgent.name}
            className="w-14 h-14 rounded-full object-cover -ml-3"
            style={{ border: `2px solid ${C.gold}` }} />
          <div className="flex-1 min-w-0 ml-1">
            <p style={serif} className="text-lg leading-tight">{AGENT.teamName}</p>
            <p className="text-xs" style={{ color: C.muted }}>Lancey &amp; Stacy Lewis</p>
            <p className="text-xs" style={{ color: C.muted }}>{AGENT.brokerage}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <ContactBtn icon={Phone} label="Call" href={`tel:${AGENT.coAgent.phone}`} />
          <ContactBtn icon={MessageSquare} label="Text" href={`sms:${AGENT.coAgent.phone}`} />
          <ContactBtn icon={Mail} label="Email" href={`mailto:${AGENT.email}`} />
        </div>
      </div>

      {/* Communities link — SEO landing pages */}
      <a href="/communities"
         style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}
         className="block rounded-2xl p-5 active:scale-[0.99] transition">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl grid place-items-center flex-shrink-0"
               style={{ backgroundColor: C.gold, color: C.ink }}>
            <MapPin size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: C.gold }}>
              Serving Central Florida
            </p>
            <p style={serif} className="text-lg leading-tight">Explore communities</p>
            <p className="text-xs opacity-80 mt-0.5">
              Winter Haven, Lakeland, Haines City, Davenport &amp; more.
            </p>
          </div>
          <ChevronRight size={18} style={{ color: C.gold }} />
        </div>
      </a>
    </div>
  );
}

function ProgressCard({ title, pct, nextLabel, onClick, icon: Icon }) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.paper, color: C.ink, border: `1px solid ${C.line}` }}
      className="w-full text-left rounded-2xl p-5 relative overflow-hidden active:scale-[0.99] transition">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>{title}</p>
          <p style={serif} className="text-4xl mt-1">{pct}%</p>
        </div>
        <div className="w-12 h-12 rounded-full grid place-items-center"
             style={{ backgroundColor: C.ink, color: C.gold }}>
          <Icon size={20} />
        </div>
      </div>
      <div className="h-1.5 rounded-full mb-3 overflow-hidden" style={{ backgroundColor: C.line }}>
        <div style={{ width: `${pct}%`, backgroundColor: C.gold }} className="h-full transition-all duration-500" />
      </div>
      <p className="text-xs" style={{ color: C.muted }}>{nextLabel}</p>
    </button>
  );
}

function QuickCard({ icon: Icon, label, onClick }) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
      className="p-4 rounded-2xl text-left active:scale-[0.98] transition">
      <div className="w-9 h-9 rounded-lg grid place-items-center mb-3"
           style={{ backgroundColor: C.ink, color: C.gold }}>
        <Icon size={16} strokeWidth={2} />
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

function VideoCard({ video }) {
  return (
    <div className="rounded-3xl overflow-hidden relative"
         style={{ backgroundColor: C.ink, border: `1px solid ${C.gold}` }}>
      <video
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="metadata"
        className="w-full aspect-video object-cover bg-black"
      />
      <div className="p-4" style={{ backgroundColor: C.ink, color: C.cream }}>
        <p style={serif} className="text-base leading-tight">{video.title}</p>
        <p className="text-xs opacity-75 mt-0.5">{video.caption}</p>
      </div>
    </div>
  );
}

function WinCard({ win }) {
  return (
    <div className="snap-start flex-shrink-0 w-72 rounded-2xl overflow-hidden"
         style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
      <div className="relative h-44 overflow-hidden">
        <img src={win.photo} alt={win.badge} className="w-full h-full object-cover"
             style={{ objectPosition: 'center 30%' }} />
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: `linear-gradient(180deg, rgba(15,42,63,0) 40%, rgba(15,42,63,0.9) 100%)` }} />
        <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full"
              style={{ backgroundColor: C.gold, color: C.ink }}>
          {win.badge}
        </span>
        <div className="absolute bottom-3 left-3 right-3 flex gap-0.5">
          {[1,2,3,4,5].map(i => <Star key={i} size={11} fill={C.gold} color={C.gold} />)}
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs leading-relaxed italic mb-2" style={{ color: C.charcoal }}>
          &ldquo;{win.quote}&rdquo;
        </p>
        <p className="text-[10px] uppercase tracking-wider" style={{ color: C.muted }}>
          {win.attribution}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   LIVE / PODCAST UI
   ========================================================= */

function LiveStatusBadge({ status, size = 'md' }) {
  const scale = size === 'lg' ? 'text-[11px] px-3 py-1.5' : 'text-[10px] px-2 py-1';
  if (status === 'live') {
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wider ${scale}`}
            style={{ backgroundColor: '#d04848', color: '#fff' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        Live Now
      </span>
    );
  }
  if (status === 'upcoming') {
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wider ${scale}`}
            style={{ backgroundColor: C.gold, color: C.ink }}>
        <Calendar size={10} />
        Next show
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-wider ${scale}`}
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: C.cream, border: `1px solid rgba(255,255,255,0.2)` }}>
      Off air
    </span>
  );
}

function LiveHeroCard({ onOpen, liveConfig }) {
  const cfg = liveConfig || LIVE_CONFIG;
  const { status, showName, showTagline, upcoming } = cfg;
  const next = upcoming && upcoming[0];
  const isLive = status === 'live';

  return (
    <button onClick={onOpen}
      className="w-full rounded-3xl relative overflow-hidden text-left active:scale-[0.99] transition"
      style={{
        background: isLive
          ? `linear-gradient(135deg, #1a1a2e, #2d1a2e 60%, #d04848)`
          : `linear-gradient(135deg, ${C.ink}, ${C.goldDeep})`,
        color: C.cream,
        border: `1px solid ${isLive ? '#d04848' : C.gold}`,
      }}>
      <div className="p-5 relative">
        <div className="flex items-start justify-between mb-3">
          <LiveStatusBadge status={status} size="lg" />
          <div className="flex items-center gap-1.5 text-[10px] opacity-70 uppercase tracking-wider">
            <Megaphone size={10} /> Podcast
          </div>
        </div>
        <p style={serif} className="text-2xl leading-tight">{showName}</p>
        <p className="text-xs opacity-80 mt-1">{showTagline}</p>

        {isLive ? (
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold"
               style={{ color: '#fff' }}>
            Watch now <ArrowRight size={14} />
          </div>
        ) : next ? (
          <div className="mt-4 pt-3 border-t" style={{ borderColor: 'rgba(245,239,230,0.15)' }}>
            <p className="text-[10px] uppercase tracking-wider opacity-70 mb-1">Up next</p>
            <p style={serif} className="text-base leading-tight">{next.title}</p>
            <p className="text-[11px] opacity-80 mt-0.5">{next.dateLabel} · {next.guest}</p>
          </div>
        ) : null}
      </div>

      {/* Decorative pulse for live */}
      {isLive && (
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none animate-pulse"
             style={{ background: 'radial-gradient(circle, rgba(208,72,72,0.4), transparent 70%)' }} />
      )}
    </button>
  );
}

function LiveTab({ liveConfig, sponsors, onBack, onContact }) {
  const cfg = liveConfig || LIVE_CONFIG;
  const { status, showName, showTagline, showDescription,
          liveEmbedUrl, liveChatUrl, zoomJoinUrl,
          callInPhone, callInSms, podcastFeeds,
          upcoming, past } = cfg;
  const activeSponsors = sponsors || SPONSORS;
  const [playingPast, setPlayingPast] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [openEp, setOpenEp] = useState(null);
  const isLive = status === 'live';
  const canShowChat = !!liveChatUrl;

  return (
    <div className="px-5 pt-5 pb-6">
      <BackBtn onBack={onBack} label="Back" />

      <div className="mt-4 mb-5 flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <LiveStatusBadge status={status} size="lg" />
          </div>
          <h2 style={serif} className="text-3xl leading-tight">{showName}</h2>
          <p className="text-sm mt-1" style={{ color: C.muted }}>{showTagline}</p>
        </div>
      </div>

      {/* LIVE embed (+ chat on sm+) OR NEXT show hero */}
      {isLive && liveEmbedUrl ? (
        <div className={`mb-4 ${chatOpen && canShowChat ? 'sm:grid sm:grid-cols-3 sm:gap-3' : ''}`}>
          <div className={`rounded-3xl overflow-hidden ${chatOpen && canShowChat ? 'sm:col-span-2' : ''}`}
               style={{ backgroundColor: '#000', border: `1px solid #d04848` }}>
            <div className="relative aspect-video">
              <iframe src={liveEmbedUrl} title={showName}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full" />
            </div>
          </div>
          {chatOpen && canShowChat && (
            <div className="rounded-3xl overflow-hidden mt-3 sm:mt-0 sm:col-span-1"
                 style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, minHeight: 320 }}>
              <div className="px-4 py-2.5 flex items-center justify-between"
                   style={{ borderBottom: `1px solid ${C.line}`, backgroundColor: C.cream }}>
                <span className="text-[11px] uppercase tracking-wider font-semibold"
                      style={{ color: C.ink }}>Live chat</span>
                <button onClick={() => setChatOpen(false)}
                        className="w-6 h-6 rounded-full grid place-items-center"
                        style={{ backgroundColor: C.paper, color: C.muted }}>
                  <X size={12} />
                </button>
              </div>
              <iframe src={liveChatUrl} title="Live chat"
                className="w-full" style={{ height: 'clamp(320px, 60vh, 600px)', border: 0 }} />
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-3xl overflow-hidden mb-4 relative"
             style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}>
          <img src="/brand/team-hero.jpg" alt=""
               className="w-full h-56 object-cover opacity-40"
               style={{ objectPosition: '50% 25%' }} />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <p className="text-xs uppercase tracking-[0.22em] opacity-70 mb-1">
              {isLive ? 'Awaiting stream' : 'Tune in'}
            </p>
            <p style={serif} className="text-2xl leading-tight mb-3">
              {isLive ? 'Going live shortly\u2026' : upcoming[0]?.title || 'Show details coming soon'}
            </p>
            {!isLive && upcoming[0] && (
              <p className="text-sm opacity-90">
                {upcoming[0].dateLabel} &middot; {upcoming[0].guest}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Chat toggle (only when live and chat URL set) */}
      {isLive && canShowChat && !chatOpen && (
        <button onClick={() => setChatOpen(true)}
          style={{ backgroundColor: C.gold, color: C.ink }}
          className="w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 mb-3 active:scale-[0.98]">
          <MessageSquare size={14} /> Open live chat
        </button>
      )}

      {/* Primary CTAs */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <button onClick={() => onContact('notify')}
          style={{ backgroundColor: C.ink, color: C.cream }}
          className="py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
          <Megaphone size={14} /> Notify me live
        </button>
        {zoomJoinUrl ? (
          <a href={zoomJoinUrl} target="_blank" rel="noopener noreferrer"
             style={{ backgroundColor: C.gold, color: C.ink }}
             className="py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
            <MessageSquare size={14} /> Join Zoom room
          </a>
        ) : (
          <button onClick={() => onContact('contact:question')}
            style={{ backgroundColor: C.gold, color: C.ink }}
            className="py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
            <MessageSquare size={14} /> Submit a question
          </button>
        )}
      </div>

      {/* Call-in live — tap-to-call + request-to-be-on-air */}
      <div className="rounded-2xl p-4 mb-5"
           style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}>
        <div className="flex items-center gap-2 mb-2">
          <Phone size={14} style={{ color: C.gold }} />
          <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: C.gold }}>
            Call in live
          </p>
        </div>
        <p className="text-sm leading-relaxed opacity-90 mb-3">
          Got a question on-air? Call the show line or request to come on as a guest.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <a href={`tel:${callInPhone}`}
             style={{ backgroundColor: C.gold, color: C.ink }}
             className="py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
            <Phone size={12} /> Call the show
          </a>
          <button onClick={() => onContact('callin')}
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: C.cream, border: `1px solid rgba(245,239,230,0.2)` }}
            className="py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
            <Users size={12} /> Come on as a guest
          </button>
        </div>
      </div>

      {/* Listen on... */}
      <ListenOnRow feeds={podcastFeeds} />

      {/* About the show */}
      <div className="rounded-2xl p-5 mb-5"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: C.gold }}>
          About the show
        </p>
        <p className="text-sm leading-relaxed" style={{ color: C.charcoal }}>
          {showDescription}
        </p>
      </div>

      {/* Sponsors strip */}
      <SponsorStrip sponsors={activeSponsors} />

      {/* Upcoming shows */}
      <p className="text-xs uppercase tracking-[0.2em] mt-6 mb-3" style={{ color: C.muted }}>
        Upcoming episodes
      </p>
      <div className="space-y-3 mb-6">
        {upcoming.map(show => (
          <div key={show.id} className="rounded-2xl p-4 flex items-start gap-3"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <div className="w-11 h-11 rounded-xl grid place-items-center flex-shrink-0"
                 style={{ backgroundColor: C.ink, color: C.gold }}>
              <Calendar size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p style={serif} className="text-base leading-tight">{show.title}</p>
              <p className="text-[11px] mt-0.5" style={{ color: C.gold }}>{show.dateLabel}</p>
              <p className="text-xs mt-1" style={{ color: C.muted }}>{show.guest}</p>
              {show.topic && (
                <p className="text-xs mt-1.5 leading-relaxed" style={{ color: C.charcoal }}>
                  {show.topic}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Past episodes with show notes + clips */}
      {past.length > 0 && (
        <>
          <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
            Past episodes
          </p>
          <div className="space-y-4 mb-6">
            {past.map(ep => (
              <PastEpisodeCard key={ep.id}
                ep={ep}
                isPlaying={playingPast === ep.id}
                onPlay={() => setPlayingPast(ep.id)}
                isOpen={openEp === ep.id}
                onToggleOpen={() => setOpenEp(openEp === ep.id ? null : ep.id)}
              />
            ))}
          </div>
        </>
      )}

      {/* Producer note — shows Lancey how to wire it up */}
      <details className="rounded-2xl p-4 text-sm"
               style={{ backgroundColor: C.ink, color: C.cream }}>
        <summary className="cursor-pointer flex items-center gap-2 font-medium">
          <Wrench size={14} style={{ color: C.gold }} />
          <span>Studio setup (tap to open)</span>
        </summary>
        <div className="mt-3 space-y-2 text-xs opacity-90 leading-relaxed">
          <p><span style={{ color: C.gold }}>&#9312; OBS</span> produces the show &mdash; scenes, branded lower-thirds, cameras, intro stinger.</p>
          <p><span style={{ color: C.gold }}>&#9313; Zoom</span> hosts guests + callers. Pull Zoom into OBS via <strong>OBS Virtual Camera</strong> (Tools &rarr; Start Virtual Camera in OBS, then select &ldquo;OBS Virtual Camera&rdquo; inside Zoom).</p>
          <p><span style={{ color: C.gold }}>&#9314; YouTube Live</span> is the public output. In OBS Settings &rarr; Stream, select YouTube, paste your stream key. Hit &ldquo;Start Streaming.&rdquo;</p>
          <p><span style={{ color: C.gold }}>&#9315; The app</span> auto-embeds the YouTube Live player (paste the embed URL into <code className="digital-mono">LIVE_CONFIG.liveEmbedUrl</code>). For live chat, also paste the chat iframe URL into <code className="digital-mono">liveChatUrl</code>.</p>
          <p><span style={{ color: C.gold }}>&#9316; Clips</span> &mdash; each past episode has pre-written social captions (see Clips section). Copy one, grab the timestamp range in any clipper (Opus / Descript / CapCut), export, post to Reels + TikTok.</p>
          <p className="pt-1 opacity-70">YouTube archives the stream automatically &mdash; drop the archive URL into <code className="digital-mono">past[]</code> to replay it in-app.</p>
        </div>
      </details>
    </div>
  );
}

function ListenOnRow({ feeds }) {
  const platforms = [
    { id: 'apple', label: 'Apple Podcasts', url: feeds.apple, color: '#a855f7' },
    { id: 'spotify', label: 'Spotify', url: feeds.spotify, color: '#1db954' },
    { id: 'amazon', label: 'Amazon Music', url: feeds.amazon, color: '#22d3ee' },
    { id: 'rss', label: 'RSS feed', url: feeds.rss, color: C.gold },
  ];
  return (
    <div className="mb-5">
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
        Listen anywhere
      </p>
      <div className="grid grid-cols-2 gap-2">
        {platforms.map(p => {
          const disabled = !p.url;
          return (
            <a key={p.id}
               href={p.url || '#'}
               onClick={disabled ? (e) => e.preventDefault() : undefined}
               target={p.id === 'rss' ? undefined : '_blank'}
               rel="noopener noreferrer"
               style={{
                 backgroundColor: C.paper,
                 border: `1px solid ${disabled ? C.line : 'rgba(200,152,90,0.4)'}`,
                 opacity: disabled ? 0.5 : 1,
                 color: C.ink,
               }}
               className="px-3 py-3 rounded-xl text-xs font-medium flex items-center gap-2 active:scale-[0.98] transition">
              <span className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: p.color }} />
              <span className="flex-1">{p.label}</span>
              {disabled && <span className="text-[9px] uppercase tracking-wider opacity-60">soon</span>}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SponsorStrip({ sponsors }) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
        <span className="inline-flex items-center gap-1">
          <Sparkles size={11} style={{ color: C.gold }} /> Presented by
        </span>
      </p>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory">
        {sponsors.map(s => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
             className="snap-start flex-shrink-0 w-64 rounded-2xl p-4 active:scale-[0.99] transition"
             style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.gold }}>
              {s.category}
            </p>
            <p style={serif} className="text-lg leading-tight mt-1">{s.name}</p>
            <p className="text-xs mt-1" style={{ color: C.muted }}>{s.tagline}</p>
            <div className="inline-flex items-center gap-1 mt-3 text-xs font-semibold"
                 style={{ color: C.ink }}>
              {s.cta} <ArrowRight size={12} />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

function PastEpisodeCard({ ep, isPlaying, onPlay, isOpen, onToggleOpen }) {
  const [copiedClip, setCopiedClip] = useState(null);

  const copyClip = (clip) => {
    const text = `${clip.caption}\n\n[${clip.start}–${clip.end}]`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedClip(clip.id);
    setTimeout(() => setCopiedClip(null), 1800);
  };

  return (
    <div className="rounded-2xl overflow-hidden"
         style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
      {/* Video / poster */}
      {isPlaying ? (
        ep.ytUrl ? (
          <div className="relative aspect-video">
            <iframe src={ep.ytUrl} title={ep.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full" />
          </div>
        ) : (
          <video src={ep.src} poster={ep.poster} controls autoPlay
                 playsInline preload="metadata"
                 className="w-full aspect-video object-cover bg-black" />
        )
      ) : (
        <button onClick={onPlay} className="w-full relative">
          <img src={ep.poster} alt={ep.title}
               className="w-full aspect-video object-cover" />
          <div className="absolute inset-0 grid place-items-center"
               style={{ backgroundColor: 'rgba(15,42,63,0.4)' }}>
            <div className="w-16 h-16 rounded-full grid place-items-center"
                 style={{ backgroundColor: C.gold, color: C.ink }}>
              <div className="w-0 h-0 ml-1"
                   style={{
                     borderTop: '10px solid transparent',
                     borderBottom: '10px solid transparent',
                     borderLeft: `16px solid ${C.ink}`,
                   }} />
            </div>
          </div>
          <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded"
                style={{ backgroundColor: C.ink, color: C.cream }}>
            {ep.duration}
          </span>
        </button>
      )}

      {/* Header */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {ep.publishedLabel && (
              <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.gold }}>
                {ep.publishedLabel}
              </p>
            )}
            <p style={serif} className="text-base leading-tight mt-0.5">{ep.title}</p>
            {ep.description && (
              <p className="text-xs mt-1.5 leading-relaxed" style={{ color: C.muted }}>
                {ep.description}
              </p>
            )}
          </div>
          <button onClick={onToggleOpen}
            style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.line}` }}
            className="w-8 h-8 rounded-lg grid place-items-center flex-shrink-0 transition">
            <ChevronRight size={14}
              style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 200ms' }} />
          </button>
        </div>

        {/* Expanded show notes + clips */}
        {isOpen && (
          <div className="mt-4 space-y-4" style={{ borderTop: `1px solid ${C.line}`, paddingTop: 16 }}>
            {/* Chapters */}
            {ep.notes && ep.notes.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: C.muted }}>
                  Show notes &middot; chapters
                </p>
                <ul className="space-y-1.5">
                  {ep.notes.map((n, i) => (
                    <li key={i} className="flex gap-3 text-sm" style={{ color: C.charcoal }}>
                      <span className="digital-mono text-xs flex-shrink-0 mt-0.5"
                            style={{ color: C.gold }}>
                        {n.time}
                      </span>
                      <span className="flex-1">{n.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resources */}
            {ep.resources && ep.resources.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: C.muted }}>
                  Resources mentioned
                </p>
                <div className="space-y-1.5">
                  {ep.resources.map((r, i) => (
                    <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-sm active:opacity-70"
                       style={{ color: C.ink }}>
                      <ArrowRight size={12} style={{ color: C.gold }} />
                      <span className="underline decoration-dotted">{r.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Clips */}
            {ep.clips && ep.clips.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: C.muted }}>
                  <span className="inline-flex items-center gap-1">
                    <Sparkles size={10} style={{ color: C.gold }} /> Social clips &mdash; copy the caption
                  </span>
                </p>
                <div className="space-y-2">
                  {ep.clips.map(clip => (
                    <div key={clip.id} className="rounded-lg p-3"
                         style={{ backgroundColor: C.cream, border: `1px solid ${C.line}` }}>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold" style={{ color: C.ink }}>
                            {clip.title}
                          </p>
                          <p className="digital-mono text-[10px] mt-0.5"
                             style={{ color: C.muted }}>
                            {clip.start} &rarr; {clip.end}
                          </p>
                        </div>
                        <button onClick={() => copyClip(clip)}
                          style={{
                            backgroundColor: copiedClip === clip.id ? C.success : C.ink,
                            color: C.cream,
                          }}
                          className="px-2.5 py-1 rounded-md text-[10px] font-semibold flex-shrink-0 transition">
                          {copiedClip === clip.id ? 'Copied!' : 'Copy caption'}
                        </button>
                      </div>
                      <p className="text-xs italic leading-relaxed" style={{ color: C.charcoal }}>
                        &ldquo;{clip.caption}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   SHARE + INSTALL + BRAND MOMENTS
   ========================================================= */

function ShareButton({ label, data, onShare, variant = 'pill' }) {
  if (variant === 'icon') {
    return (
      <button onClick={() => onShare(data)}
        style={{ backgroundColor: 'rgba(15,42,63,0.7)', color: C.cream, border: `1px solid rgba(200,152,90,0.4)` }}
        className="w-8 h-8 rounded-full grid place-items-center active:scale-95 transition"
        aria-label="Share">
        <Share2 size={13} strokeWidth={2.2} />
      </button>
    );
  }
  return (
    <button onClick={() => onShare(data)}
      style={{ backgroundColor: C.paper, color: C.ink, border: `1px solid ${C.line}` }}
      className="px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 active:scale-[0.98] transition">
      <Share2 size={12} /> {label || 'Share'}
    </button>
  );
}

function ShareMenu({ data, onClose }) {
  const [copied, setCopied] = useState(false);
  const url = data.url || (typeof window !== 'undefined' ? window.location.origin + '/' : '');
  const text = data.text || data.title || 'The Lewis Team';
  const fullShare = `${text}\n\n${url}`;

  const copy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullShare);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const enc = encodeURIComponent;
  const targets = [
    { id: 'sms', label: 'iMessage / SMS', icon: MessageSquare,
      href: `sms:?&body=${enc(fullShare)}` },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare,
      href: `https://wa.me/?text=${enc(fullShare)}` },
    { id: 'facebook', label: 'Facebook', icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}&quote=${enc(text)}` },
    { id: 'twitter', label: 'X / Twitter', icon: Send,
      href: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}` },
    { id: 'email', label: 'Email', icon: Mail,
      href: `mailto:?subject=${enc(data.title || 'The Lewis Team')}&body=${enc(fullShare)}` },
  ];

  const qrUrl = `https://quickchart.io/qr?text=${enc(url)}&size=280&margin=2&ecLevel=H&dark=0F2A3F&light=F5EFE6`;

  return (
    <ModalShell
      title="Share"
      sub={data.title || "Let's Open Doors Together"}
      onClose={onClose}>
      {/* Copy-link row */}
      <div className="rounded-lg p-3 flex items-center gap-2"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <Link2 size={14} style={{ color: C.muted, flexShrink: 0 }} />
        <span className="digital-mono text-xs truncate flex-1" style={{ color: C.charcoal }}>
          {url}
        </span>
        <button onClick={copy}
          style={{ backgroundColor: copied ? C.success : C.ink, color: C.cream }}
          className="px-3 py-1.5 rounded-md text-[11px] font-semibold transition flex-shrink-0">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Share targets */}
      <div className="grid grid-cols-2 gap-2">
        {targets.map(t => {
          const Icon = t.icon;
          return (
            <a key={t.id} href={t.href}
               target={t.id === 'sms' || t.id === 'email' ? undefined : '_blank'}
               rel="noopener noreferrer"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.ink }}
               className="px-3 py-3 rounded-xl text-xs font-medium flex items-center gap-2 active:scale-[0.98]">
              <Icon size={14} style={{ color: C.gold }} />
              <span className="flex-1">{t.label}</span>
            </a>
          );
        })}
      </div>

      {/* QR code — great for in-person referrals */}
      <div className="rounded-xl p-4 flex items-center gap-4"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <img src={qrUrl} alt="QR code" className="w-24 h-24 rounded-lg"
             style={{ border: `1px solid ${C.line}` }} />
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.18em] mb-1" style={{ color: C.gold }}>
            <span className="inline-flex items-center gap-1"><QrCode size={11} /> Scan to open</span>
          </p>
          <p className="text-xs leading-relaxed" style={{ color: C.charcoal }}>
            Show this QR at an open house, workshop, or on a yard sign. Any phone camera opens the app.
          </p>
        </div>
      </div>
    </ModalShell>
  );
}

function InstallPrompt() {
  const [deferred, setDeferred] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Already installed / standalone
    const standalone = window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone === true;
    if (standalone) { setInstalled(true); return; }

    // Was dismissed previously
    if (window.localStorage && window.localStorage.getItem('lt_install_dismissed') === '1') {
      setDismissed(true);
    }

    // iOS needs static instructions
    const ua = window.navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) setIsIOS(true);

    // Android / Chrome install prompt
    const handler = (e) => { e.preventDefault(); setDeferred(e); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (installed || dismissed) return null;

  const install = async () => {
    if (deferred) {
      deferred.prompt();
      const { outcome } = await deferred.userChoice;
      if (outcome === 'accepted') setInstalled(true);
      setDeferred(null);
    }
  };
  const dismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('lt_install_dismissed', '1');
    }
  };

  // Nothing to prompt + not iOS → hide
  if (!deferred && !isIOS) return null;

  return (
    <div className="rounded-2xl p-4 relative overflow-hidden"
         style={{
           background: `linear-gradient(135deg, ${C.ink}, ${C.goldDeep})`,
           color: C.cream,
           border: `1px solid ${C.gold}`,
         }}>
      <button onClick={dismiss}
        style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: C.cream }}
        className="absolute top-2 right-2 w-6 h-6 rounded-full grid place-items-center">
        <X size={12} />
      </button>
      <div className="flex items-start gap-3 mb-3 pr-6">
        <div className="w-10 h-10 rounded-xl grid place-items-center flex-shrink-0"
             style={{ backgroundColor: C.gold, color: C.ink }}>
          <Smartphone size={18} />
        </div>
        <div className="flex-1">
          <p style={serif} className="text-base leading-tight">Put us on your Home Screen</p>
          <p className="text-xs opacity-85 mt-0.5">
            One tap to your team, listings, and live shows. Works like a native app.
          </p>
        </div>
      </div>
      {deferred ? (
        <button onClick={install}
          style={{ backgroundColor: C.gold, color: C.ink }}
          className="w-full py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
          <Download size={13} /> Install The Lewis Team
        </button>
      ) : isIOS ? (
        <div className="text-xs opacity-90 leading-relaxed pl-1">
          Tap the <span style={{ color: C.gold }}>Share</span> icon at the bottom of Safari,
          then choose <span style={{ color: C.gold }}>&ldquo;Add to Home Screen.&rdquo;</span>
        </div>
      ) : null}
    </div>
  );
}

function BrandMomentCard({ moment, onShare }) {
  const shareThis = () => onShare({
    title: 'The Lewis Team',
    text: moment.shareText,
    url: typeof window !== 'undefined' ? window.location.origin + '/' : '',
  });
  return (
    <div
      className="snap-center flex-shrink-0 w-80 rounded-3xl p-6 relative overflow-hidden"
      style={{ background: moment.gradient, color: C.cream, minHeight: 320 }}>
      {/* Subtle logo watermark */}
      <div className="absolute top-4 left-5 flex items-center gap-1.5 opacity-90">
        <div className="w-6 h-6 rounded grid place-items-center"
             style={{ backgroundColor: C.cream }}>
          <img src={AGENT.assets.logo} alt="" className="w-4 h-4 object-contain" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
          The Lewis Team
        </span>
      </div>

      <button onClick={shareThis}
        style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: C.cream, border: `1px solid rgba(245,239,230,0.3)` }}
        className="absolute top-4 right-4 w-9 h-9 rounded-full grid place-items-center active:scale-95 transition backdrop-blur-sm">
        <Share2 size={14} />
      </button>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-5xl mb-3">{moment.emoji}</div>
        <p style={serif} className="text-2xl leading-tight mb-2">
          {moment.headline}
        </p>
        <p className="text-xs opacity-85 leading-relaxed">
          {moment.subline}
        </p>
      </div>

      {/* Hairline gold corner */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5"
           style={{ background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)` }} />
    </div>
  );
}

function BrandMomentsCarouselDark({ onShare, moments }) {
  const list = moments || BRAND_MOMENTS;
  return (
    <div>
      <div className="flex items-end justify-between mb-3 px-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] opacity-70">
            <span className="inline-flex items-center gap-1">
              <Sparkles size={11} style={{ color: C.gold }} /> Spread the vision
            </span>
          </p>
          <p style={serif} className="text-lg leading-tight" >Share a truth.</p>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory px-6">
        {list.map(m => (
          <BrandMomentCard key={m.id} moment={m} onShare={onShare} />
        ))}
      </div>
    </div>
  );
}

function BrandMomentsCarousel({ onShare, onMore, moments }) {
  const list = moments || BRAND_MOMENTS;
  return (
    <div>
      <div className="flex items-end justify-between mb-3 px-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.gold }}>
            <span className="inline-flex items-center gap-1"><Sparkles size={11} /> Spread the vision</span>
          </p>
          <p style={serif} className="text-xl leading-tight" >Share a truth.</p>
        </div>
        {onMore && (
          <button onClick={onMore} className="text-xs flex items-center gap-0.5"
                  style={{ color: C.gold }}>
            All <ChevronRight size={12} />
          </button>
        )}
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory px-5">
        {list.map(m => (
          <BrandMomentCard key={m.id} moment={m} onShare={onShare} />
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ program, onClick }) {
  const Icon = program.icon;
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
      className="w-full p-4 rounded-2xl flex items-center gap-4 text-left active:scale-[0.99] transition">
      <div className="w-11 h-11 rounded-xl grid place-items-center flex-shrink-0"
           style={{ backgroundColor: C.ink, color: C.gold }}>
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p style={serif} className="text-base leading-tight">{program.title}</p>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{ backgroundColor: C.gold, color: C.ink }}>
            {program.pill}
          </span>
        </div>
        <p className="text-xs" style={{ color: C.muted }}>{program.subtitle}</p>
      </div>
      <ChevronRight size={16} style={{ color: C.muted }} />
    </button>
  );
}

/* =========================================================
   BUYER / SELLER JOURNEY (shared)
   ========================================================= */

function JourneyTab({ title, eyebrow, steps, completed, toggle, openStep, setOpenStep, onContact }) {
  return (
    <div className="px-5 pt-5">
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>{eyebrow}</p>
      <h2 style={serif} className="text-3xl leading-tight mt-1 mb-5">{title}</h2>

      <div className="space-y-3">
        {steps.map((step, idx) => {
          const done = completed.includes(step.id);
          const open = openStep === step.id;
          const Icon = step.icon;
          return (
            <div key={step.id}
              style={{ backgroundColor: C.paper, border: `1px solid ${done ? C.gold : C.line}` }}
              className="rounded-2xl overflow-hidden transition">
              <button onClick={() => setOpenStep(open ? null : step.id)}
                className="w-full p-4 flex items-center gap-4 text-left">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full grid place-items-center"
                    style={{ backgroundColor: done ? C.gold : C.cream, color: done ? C.ink : C.muted }}>
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
                  style={{ color: C.muted, transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 200ms' }} />
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
                      Team tip
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: C.charcoal }}>
                      {step.tip}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { haptic(done ? 'tap' : 'success'); toggle(step.id); }}
                      style={{
                        backgroundColor: done ? C.success : C.cream,
                        color: done ? C.cream : C.ink,
                        border: `1px solid ${done ? C.success : C.line}`,
                      }}
                      className="flex-1 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition active:scale-[0.98]">
                      {done ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                      {done ? 'Done' : 'Mark done'}
                    </button>
                    <button
                      onClick={() => onContact('contact:question')}
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

/* =========================================================
   SELLER TAB (with valuation hero)
   ========================================================= */

function SellTab({ sellPct, steps, completed, toggle, openStep, setOpenStep, onContact }) {
  return (
    <div className="px-5 pt-5">
      {/* Valuation hero */}
      <button onClick={() => onContact('valuation')}
        className="w-full rounded-3xl p-5 text-left relative overflow-hidden mb-5 active:scale-[0.99] transition"
        style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] opacity-70">Free, no obligation</p>
            <p style={serif} className="text-2xl leading-tight mt-1">What's your home worth?</p>
          </div>
          <div className="w-12 h-12 rounded-full grid place-items-center"
               style={{ backgroundColor: C.gold, color: C.ink }}>
            <TrendingUp size={20} />
          </div>
        </div>
        <p className="text-xs opacity-80 leading-relaxed mb-3">
          A real number from real comps — not a Zestimate. We'll email your professional valuation within 24 hours.
        </p>
        <div className="inline-flex items-center gap-1 text-xs" style={{ color: C.gold }}>
          Request my valuation <ArrowRight size={12} />
        </div>
      </button>

      <JourneyTab
        title="Your seller journey."
        eyebrow="Sell a home"
        steps={steps}
        completed={completed} toggle={toggle}
        openStep={openStep} setOpenStep={setOpenStep}
        onContact={onContact}
      />

      <div className="mt-6 rounded-2xl p-5"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: C.gold }}>
          Why The Lewis Team
        </p>
        <ul className="space-y-2 text-sm" style={{ color: C.charcoal }}>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> Realtor of the Year 2025 — HomeLife Realty</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> Professional photography, drone &amp; video on every listing</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> MLS + Zillow + Realtor + Facebook + Instagram + TikTok</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> Thousands of warm buyer leads in our database</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> Aggressive negotiation — we defend every dollar of your net</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================================================
   INVESTOR TAB
   ========================================================= */

function InvestTab({ steps, completed, toggle, openStep, setOpenStep, onContact }) {
  const stepList = steps || INVESTOR_STEPS;
  const pct = Math.round((completed.length / stepList.length) * 100);

  return (
    <div className="px-5 pt-5">
      {/* Hero */}
      <div className="rounded-3xl p-5 mb-5 relative overflow-hidden"
           style={{
             background: `linear-gradient(135deg, #1a3d2d, ${C.ink} 55%, ${C.goldDeep})`,
             color: C.cream,
             border: `1px solid ${C.gold}`,
           }}>
        <div className="flex items-start justify-between mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(200,152,90,0.2)', color: C.gold, border: `1px solid ${C.gold}` }}>
            <Target size={11} /> Investor portal
          </span>
          <div className="text-right">
            <p className="digital-readout text-3xl leading-none" style={{ color: C.gold }}>{pct}%</p>
            <p className="text-[10px] uppercase tracking-wider opacity-70">Your progress</p>
          </div>
        </div>
        <p style={serif} className="text-3xl leading-tight">Build generational wealth.</p>
        <p className="text-xs opacity-85 leading-relaxed mt-2">
          DSCR loans, off-market deals, underwriting that pencils. This is how portfolios are built in Central Florida.
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <button onClick={() => onContact('contact:question')}
          style={{ backgroundColor: C.ink, color: C.cream }}
          className="py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
          <Search size={13} /> Off-market access
        </button>
        <button onClick={() => onContact('contact:preapproval')}
          style={{ backgroundColor: C.gold, color: C.ink }}
          className="py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98]">
          <Banknote size={13} /> DSCR pre-qual
        </button>
      </div>

      <JourneyTab
        title="Your investor journey."
        eyebrow="Path to portfolio"
        steps={stepList}
        completed={completed} toggle={toggle}
        openStep={openStep} setOpenStep={setOpenStep}
        onContact={onContact}
      />

      {/* Why The Lewis Team for investors */}
      <div className="mt-6 rounded-2xl p-5"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: C.gold }}>
          Why invest with The Lewis Team
        </p>
        <ul className="space-y-2 text-sm" style={{ color: C.charcoal }}>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> We underwrite deals to the dollar before presenting them</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> DSCR, non-QM, and private money lender network</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> Relationships with wholesalers + off-market operators</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> Polk County market specialists &mdash; fastest-growing corridor in FL</li>
          <li className="flex gap-2"><Star size={14} style={{ color: C.gold, marginTop: 2 }} /> We'll tell you when to walk. No commissions over judgment.</li>
        </ul>
      </div>
    </div>
  );
}

/* =========================================================
   LISTINGS TAB
   ========================================================= */

function ListingsTab({ listings, onContact, onShare }) {
  const list = listings || LISTINGS;
  const [filter, setFilter] = useState('all');
  const filters = [
    { id: 'all', l: 'All' },
    { id: 'Featured', l: 'Featured' },
    { id: 'New Construction', l: 'New Build' },
    { id: 'Price Reduced', l: 'Reduced' },
  ];
  const filtered = list.filter(l => filter === 'all' || l.status === filter);

  return (
    <div className="px-5 pt-5">
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>Central Florida</p>
      <h2 style={serif} className="text-3xl leading-tight mt-1 mb-4">Current listings.</h2>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {filters.map(f => {
          const active = filter === f.id;
          return (
            <button key={f.id} onClick={() => setFilter(f.id)}
              style={{
                backgroundColor: active ? C.ink : C.paper,
                color: active ? C.cream : C.ink,
                border: `1px solid ${active ? C.ink : C.line}`,
              }}
              className="px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap">
              {f.l}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {filtered.map(l => <ListingCard key={l.id} listing={l} onContact={onContact} onShare={onShare} />)}
        {filtered.length === 0 && (
          <p className="text-sm text-center py-8" style={{ color: C.muted }}>No listings match that filter.</p>
        )}
      </div>

      <div className="mt-6 rounded-2xl p-5 text-center"
           style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}>
        <p style={serif} className="text-xl leading-tight mb-1">Don't see the one?</p>
        <p className="text-xs opacity-80 mb-4">
          We have access to every MLS listing in Central Florida plus off-market and coming-soon homes.
        </p>
        <button onClick={() => onContact('contact:question')}
          style={{ backgroundColor: C.gold, color: C.ink }}
          className="px-5 py-2.5 rounded-full text-xs font-semibold">
          Tell us what you're looking for
        </button>
      </div>
    </div>
  );
}

function ListingCard({ listing, onContact, onShare }) {
  const statusColor = {
    'Featured': C.gold,
    'Price Reduced': C.ruby,
    'New Construction': C.success,
    'Available': C.ink,
  }[listing.status] || C.ink;

  const shareThis = () => onShare && onShare({
    title: `${listing.address} \u2014 ${listing.price}`,
    text: `\uD83C\uDFE1 ${listing.address}, ${listing.city} \u2014 ${listing.beds}BR/${listing.baths}BA \u2014 ${listing.price}. Tour with The Lewis Team.`,
    url: typeof window !== 'undefined' ? window.location.origin + '/' : '',
  });

  return (
    <div className="rounded-2xl overflow-hidden"
         style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
      <div className="relative h-40"
           style={{ background: `linear-gradient(135deg, ${C.ink}, ${C.goldDeep})` }}>
        {listing.photo ? (
          <img src={listing.photo} alt={listing.address}
               className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center opacity-25">
            <HomeIcon size={72} color={C.cream} strokeWidth={1.2} />
          </div>
        )}
        <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded"
              style={{ backgroundColor: statusColor, color: C.cream }}>
          {listing.status}
        </span>
        {onShare && (
          <button onClick={shareThis}
            style={{ backgroundColor: 'rgba(15,42,63,0.7)', color: C.cream, border: `1px solid rgba(200,152,90,0.5)` }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full grid place-items-center active:scale-95 backdrop-blur-sm"
            aria-label="Share listing">
            <Share2 size={13} strokeWidth={2.2} />
          </button>
        )}
        <span className="absolute bottom-3 right-3 text-base font-bold px-3 py-1.5 rounded-lg"
              style={{ backgroundColor: C.cream, color: C.ink }} >
          {listing.price}
        </span>
      </div>

      <div className="p-4">
        <p style={serif} className="text-lg leading-tight">{listing.address}</p>
        <p className="text-xs mb-3" style={{ color: C.muted }}>{listing.city}</p>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <Spec label="Beds" value={listing.beds} />
          <Spec label="Baths" value={listing.baths} />
          <Spec label="Sq Ft" value={listing.sqft.toLocaleString()} />
        </div>

        <ul className="space-y-1 mb-3">
          {listing.highlights.map((h, i) => (
            <li key={i} className="text-xs flex gap-1.5" style={{ color: C.charcoal }}>
              <span style={{ color: C.gold }}>✦</span>{h}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => onContact('contact:showing')}
            style={{ backgroundColor: C.ink, color: C.cream }}
            className="py-2.5 rounded-lg text-xs font-semibold active:scale-[0.98]">
            Tour this home
          </button>
          <button onClick={() => onContact('contact:question')}
            style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.line}` }}
            className="py-2.5 rounded-lg text-xs font-semibold active:scale-[0.98]">
            Ask about it
          </button>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div style={{ backgroundColor: C.cream }} className="rounded-lg py-2 text-center">
      <p style={serif} className="text-base leading-none">{value}</p>
      <p className="text-[10px] uppercase tracking-wider mt-0.5" style={{ color: C.muted }}>{label}</p>
    </div>
  );
}

/* =========================================================
   TOOLS TAB
   ========================================================= */

function ToolsTab({ buyChecked, toggleBuyCheck, sellChecked, toggleSellCheck, programs, onContact }) {
  const [view, setView] = useState('menu');
  const activePrograms = programs || PROGRAMS;

  if (view === 'mortgage') return <MortgageCalc onBack={() => setView('menu')} />;
  if (view === 'afford') return <AffordCalc onBack={() => setView('menu')} />;
  if (view === 'buyCheck') return <ChecklistView title="Buyer checklist" items={BUY_CHECKLIST}
    checked={buyChecked} toggle={toggleBuyCheck} onBack={() => setView('menu')} />;
  if (view === 'sellCheck') return <ChecklistView title="Seller checklist" items={SELL_CHECKLIST}
    checked={sellChecked} toggle={toggleSellCheck} onBack={() => setView('menu')} />;
  if (view === 'programs') return <ProgramsView programs={activePrograms} onBack={() => setView('menu')} onContact={onContact} />;

  return (
    <div className="px-5 pt-5">
      <p className="text-xs uppercase tracking-[0.2em]" style={{ color: C.muted }}>Buyer &amp; seller tools</p>
      <h2 style={serif} className="text-3xl leading-tight mt-1 mb-5">Run the numbers.</h2>

      <div className="space-y-3">
        <ToolCard icon={Calculator} title="Mortgage calculator"
          subtitle="Estimate your monthly payment" onClick={() => setView('mortgage')} />
        <ToolCard icon={DollarSign} title="What can I afford?"
          subtitle="Find your max home price" onClick={() => setView('afford')} />
        <ToolCard icon={TrendingUp} title="Home valuation"
          subtitle="Get a real opinion of value" onClick={() => onContact('valuation')} />
        <ToolCard icon={Gift} title="Money-saving programs"
          subtitle="Hometown Heroes · Cashback · Flex Cash" onClick={() => setView('programs')} />
        <ToolCard icon={ListChecks} title="Buyer checklist"
          subtitle={`${buyChecked.length} of ${BUY_CHECKLIST.length} complete`}
          onClick={() => setView('buyCheck')} />
        <ToolCard icon={ListChecks} title="Seller checklist"
          subtitle={`${sellChecked.length} of ${SELL_CHECKLIST.length} complete`}
          onClick={() => setView('sellCheck')} />
        <ToolCard icon={BookOpen} title="Real estate glossary"
          subtitle="Every term, in plain English" onClick={() => onContact('glossary')} />
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

/* ----- MORTGAGE CALCULATOR ----- */
function MortgageCalc({ onBack }) {
  const [price, setPrice] = useState(350000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const loan = price * (1 - down / 100);
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  const monthly = loan > 0 && monthlyRate > 0
    ? (loan * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
    : 0;
  const totalInterest = (monthly * n) - loan;

  return (
    <div className="px-5 pt-5">
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

      <div style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}
           className="rounded-2xl p-6 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
             style={{
               background: `radial-gradient(circle at 100% 0%, rgba(200,152,90,0.12), transparent 55%)`,
             }} />
        <p className="text-[10px] uppercase tracking-[0.22em] opacity-70 relative">
          Estimated monthly · P&amp;I
        </p>
        <div className="relative mt-2 mb-5">
          <p className="digital-readout text-5xl leading-none"
             style={{ color: C.gold, textShadow: `0 0 18px rgba(200,152,90,0.35)` }}>
            ${Math.round(monthly).toLocaleString()}
          </p>
          <span className="text-[10px] uppercase tracking-widest opacity-50 ml-1">/ month</span>
        </div>
        <div className="grid grid-cols-2 gap-3 relative">
          <Stat label="Loan amount" value={`$${Math.round(loan).toLocaleString()}`} />
          <Stat label="Total interest" value={`$${Math.round(totalInterest).toLocaleString()}`} />
        </div>
      </div>

      <p className="text-[11px] leading-relaxed" style={{ color: C.muted }}>
        Does not include property taxes, homeowner's insurance, HOA, or PMI — budget another
        1–1.5% of home value per year for those combined. Talk with The Lewis Team for a full picture.
      </p>
    </div>
  );
}

function Slider({ label, value, setValue, min, max, step, format }) {
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const dec = () => setValue(Math.max(min, +(value - step).toFixed(6)));
  const inc = () => setValue(Math.min(max, +(value + step).toFixed(6)));

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] uppercase tracking-[0.18em] font-medium"
              style={{ color: C.muted }}>
          {label}
        </span>
        <div className="flex items-center gap-1.5">
          <button onClick={dec}
            style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.line}` }}
            className="w-7 h-7 rounded-md grid place-items-center text-sm font-semibold active:scale-90 transition">
            −
          </button>
          <div
            className="digital-readout px-3 py-1.5 rounded-md text-sm min-w-[128px] text-center"
            style={{
              backgroundColor: C.ink,
              color: C.gold,
              border: `1px solid ${C.gold}`,
              boxShadow: `inset 0 0 12px rgba(200,152,90,0.18), 0 1px 2px rgba(15,42,63,0.12)`,
            }}>
            {format(value)}
          </div>
          <button onClick={inc}
            style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.line}` }}
            className="w-7 h-7 rounded-md grid place-items-center text-sm font-semibold active:scale-90 transition">
            +
          </button>
        </div>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="lt-slider"
        style={{ '--pct': `${pct}%` }}
      />
      <div className="flex justify-between mt-1">
        <span className="digital text-[10px]" style={{ color: C.muted }}>
          {format(min)}
        </span>
        <span className="digital text-[10px]" style={{ color: C.muted }}>
          {format(max)}
        </span>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg px-3 py-2"
         style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: `1px solid rgba(200,152,90,0.22)` }}>
      <p className="text-[10px] uppercase tracking-[0.18em] opacity-60 mb-0.5">{label}</p>
      <p className="digital-readout text-base" style={{ color: C.gold }}>{value}</p>
    </div>
  );
}

/* ----- AFFORDABILITY ----- */
function AffordCalc({ onBack }) {
  const [income, setIncome] = useState(75000);
  const [debts, setDebts] = useState(400);
  const [downCash, setDownCash] = useState(30000);
  const [rate, setRate] = useState(6.5);

  const maxMonthlyDebt = (income / 12) * 0.36;
  const available = Math.max(0, maxMonthlyDebt - debts);
  const monthlyRate = rate / 100 / 12;
  const n = 30 * 12;
  const maxLoan = available > 0 && monthlyRate > 0
    ? (available * (Math.pow(1 + monthlyRate, n) - 1)) / (monthlyRate * Math.pow(1 + monthlyRate, n))
    : 0;
  const maxPrice = maxLoan + downCash;

  return (
    <div className="px-5 pt-5">
      <BackBtn onBack={onBack} label="Back to tools" />
      <h2 style={serif} className="text-3xl leading-tight mt-4 mb-1">What can I afford?</h2>
      <p className="text-sm mb-6" style={{ color: C.muted }}>Uses a 36% DTI guideline. Final number varies by lender.</p>

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

      <div style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}
           className="rounded-2xl p-6 mb-3 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
             style={{
               background: `radial-gradient(circle at 100% 0%, rgba(200,152,90,0.12), transparent 55%)`,
             }} />
        <p className="text-[10px] uppercase tracking-[0.22em] opacity-70 relative">
          You may qualify for up to
        </p>
        <p className="digital-readout text-5xl leading-none mt-2 mb-2 relative"
           style={{ color: C.gold, textShadow: `0 0 18px rgba(200,152,90,0.35)` }}>
          ${Math.round(maxPrice / 1000).toLocaleString()}K
        </p>
        <p className="digital text-xs opacity-80 relative">
          Based on ~${Math.round(available).toLocaleString()} / mo toward P&amp;I
        </p>
      </div>

      <p className="text-[11px] leading-relaxed" style={{ color: C.muted }}>
        This is a ballpark. A real pre-approval requires lender review. Ask us about Hometown Heroes
        DPA — up to $35K in down-payment help.
      </p>
    </div>
  );
}

/* ----- CHECKLIST ----- */
function ChecklistView({ title, items, checked, toggle, onBack }) {
  const grouped = items.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="px-5 pt-5">
      <BackBtn onBack={onBack} label="Back to tools" />
      <h2 style={serif} className="text-3xl leading-tight mt-4 mb-1">{title}</h2>
      <p className="text-sm mb-6" style={{ color: C.muted }}>
        {checked.length} of {items.length} done
      </p>

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, catItems]) => (
          <div key={category}>
            <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: C.gold }}>{category}</p>
            <div className="space-y-2">
              {catItems.map(item => {
                const isChecked = checked.includes(item.id);
                return (
                  <button key={item.id} onClick={() => toggle(item.id)}
                    style={{
                      backgroundColor: C.paper,
                      border: `1px solid ${isChecked ? C.success : C.line}`,
                      opacity: isChecked ? 0.6 : 1,
                    }}
                    className="w-full p-3 rounded-xl flex items-center gap-3 text-left transition active:scale-[0.99]">
                    {isChecked
                      ? <CheckCircle2 size={18} style={{ color: C.success, flexShrink: 0 }} />
                      : <Circle size={18} style={{ color: C.muted, flexShrink: 0 }} />}
                    <span className="text-sm flex-1"
                      style={{ color: C.charcoal, textDecoration: isChecked ? 'line-through' : 'none' }}>
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

/* ----- PROGRAMS ----- */
function ProgramsView({ programs, onBack, onContact }) {
  const list = programs || PROGRAMS;
  return (
    <div className="px-5 pt-5">
      <BackBtn onBack={onBack} label="Back to tools" />
      <h2 style={serif} className="text-3xl leading-tight mt-4 mb-1">Money-saving programs.</h2>
      <p className="text-sm mb-6" style={{ color: C.muted }}>
        Every program we use to help you save thousands.
      </p>

      <div className="space-y-4">
        {list.map(p => {
          const Icon = p.icon;
          return (
            <div key={p.id} className="rounded-2xl p-5"
                 style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl grid place-items-center flex-shrink-0"
                     style={{ backgroundColor: C.ink, color: C.gold }}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p style={serif} className="text-lg leading-tight">{p.title}</p>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: C.gold, color: C.ink }}>
                      {p.pill}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: C.muted }}>{p.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-1.5 mb-3">
                {p.bullets.map((b, i) => (
                  <li key={i} className="text-sm flex gap-2" style={{ color: C.charcoal }}>
                    <CheckCircle2 size={14} style={{ color: C.gold, marginTop: 2, flexShrink: 0 }} />
                    <span className="flex-1">{b}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => onContact(`contact:${p.ctaType}`)}
                style={{ backgroundColor: C.ink, color: C.cream }}
                className="w-full py-2.5 rounded-lg text-xs font-semibold active:scale-[0.98]">
                {p.cta}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   TEAM TAB
   ========================================================= */

function TeamTab({ team, testimonials, wins, onContact }) {
  const T = team || {};
  const activeTestimonials = testimonials || TESTIMONIALS;
  const activeWins = wins || WINS;
  return (
    <div className="px-5 pt-5">
      {/* Team hero */}
      <div style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${C.gold}` }}
        className="rounded-3xl overflow-hidden mb-5 relative">
        <img src={AGENT.assets.heroTeam} alt="The Lewis Team"
             className="w-full h-56 object-cover object-top opacity-95" />
        <div className="absolute inset-0"
             style={{ background: `linear-gradient(180deg, rgba(15,42,63,0) 35%, rgba(15,42,63,0.9) 100%)` }} />
        <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
          <p style={serif} className="text-2xl leading-tight">The Lewis Team</p>
          <p className="text-xs opacity-80">Lancey &amp; Stacy Lewis · Husband &amp; Wife Duo</p>
          <p className="text-[11px] opacity-60 mt-1">{AGENT.brokerage}</p>
        </div>
      </div>

      {/* Awards */}
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
        2025 Recognition
      </p>
      <div className="grid grid-cols-1 gap-2 mb-6">
        {AGENT.awards.map(a => (
          <div key={a.title} className="rounded-xl p-4 flex items-center gap-3"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.gold}` }}>
            <div className="w-10 h-10 rounded-full grid place-items-center"
                 style={{ backgroundColor: C.gold, color: C.ink }}>
              <Trophy size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p style={serif} className="text-base leading-tight">{a.title}</p>
              <p className="text-xs" style={{ color: C.muted }}>{a.year} · {a.org}</p>
            </div>
            <BadgeCheck size={18} style={{ color: C.gold }} />
          </div>
        ))}
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <StatTile label="Polk County cities" value="15" />
        <StatTile label="Specialties" value="6+" />
        <StatTile label="Star service" value="5★" />
      </div>

      {/* LANCEY card */}
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>Your agent</p>
      <AgentCard agent={{
        name: T.name1 || AGENT.name1,
        title: T.title1 || AGENT.title,
        licenseNumber: T.license1 || AGENT.licenseNumber,
        photoUrl: T.photo1 || AGENT.photoUrl,
        phone: T.phone1 || AGENT.phone,
        email: T.email1 || AGENT.email,
        bio: T.bio1,
      }} />

      {/* STACY card */}
      <p className="text-xs uppercase tracking-[0.2em] mt-5 mb-3" style={{ color: C.muted }}>
        Also on your team
      </p>
      <AgentCard agent={{
        name: T.name2 || AGENT.coAgent.name,
        title: T.title2 || AGENT.coAgent.title,
        licenseNumber: T.license2 || AGENT.coAgent.licenseNumber,
        photoUrl: T.photo2 || AGENT.coAgent.photoUrl,
        phone: T.phone2 || AGENT.coAgent.phone,
        email: T.email2 || AGENT.coAgent.email,
        bio: T.bio2,
      }} />

      {/* Recent wins — photo + story */}
      <p className="text-xs uppercase tracking-[0.2em] mt-6 mb-3" style={{ color: C.gold }}>
        <span className="inline-flex items-center gap-1"><Trophy size={11} /> Recent wins</span>
      </p>
      <div className="space-y-3 mb-6">
        {activeWins.map(w => (
          <div key={w.id} className="rounded-2xl overflow-hidden"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <div className="relative h-44">
              <img src={w.photo} alt={w.badge} className="w-full h-full object-cover"
                   style={{ objectPosition: 'center 30%' }} />
              <div className="absolute inset-0 pointer-events-none"
                   style={{ background: `linear-gradient(180deg, rgba(15,42,63,0) 45%, rgba(15,42,63,0.85) 100%)` }} />
              <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: C.gold, color: C.ink }}>
                {w.badge}
              </span>
            </div>
            <div className="p-4">
              <p style={serif} className="text-sm leading-relaxed mb-2" >
                &ldquo;{w.quote}&rdquo;
              </p>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: C.muted }}>
                {w.attribution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 5-star service promise */}
      <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>
        Our 5-Star service promise
      </p>
      <div className="space-y-3">
        {activeTestimonials.map(t => (
          <div key={t.id} className="rounded-2xl p-5"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <div className="flex gap-0.5 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} fill={C.gold} color={C.gold} />
              ))}
            </div>
            <p style={serif} className="text-sm leading-relaxed mb-3" >
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-xs" style={{ color: C.muted }}>
              — {t.author}
            </p>
          </div>
        ))}
      </div>

      {/* Request forms */}
      <p className="text-xs uppercase tracking-[0.2em] mt-6 mb-3" style={{ color: C.muted }}>Send a request</p>
      <div className="space-y-3">
        <RequestCard label="Schedule a showing" sub="Tour a home with the team"
          icon={Calendar} onClick={() => onContact('contact:showing')} />
        <RequestCard label="Request pre-approval help" sub="We'll connect you with a trusted lender"
          icon={HandCoins} onClick={() => onContact('contact:preapproval')} />
        <RequestCard label="Free home valuation" sub="Know what your home is worth today"
          icon={TrendingUp} onClick={() => onContact('valuation')} />
        <RequestCard label="Ask a general question" sub="No question too small"
          icon={MessageSquare} onClick={() => onContact('contact:question')} />
      </div>

      {/* Social grid */}
      <p className="text-xs uppercase tracking-[0.2em] mt-6 mb-3" style={{ color: C.muted }}>
        Follow the journey
      </p>
      <div className="grid grid-cols-2 gap-2">
        <SocialBtn icon={Facebook} label="Facebook" href={AGENT.facebook} />
        <SocialBtn icon={Youtube} label="YouTube" href={AGENT.youtube} />
        <SocialBtn icon={Instagram} label="TikTok — Stacy" href={AGENT.tiktok} />
        <SocialBtn icon={Globe} label="Website" href={AGENT.websiteUrl} />
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-[11px] space-y-0.5 pb-4" style={{ color: C.muted }}>
        <p>{AGENT.brokerage}</p>
        <p>{AGENT.serviceArea}</p>
        <p className="opacity-70">{AGENT.website} · {AGENT.brandSite}</p>
      </div>
    </div>
  );
}

function StatTile({ label, value }) {
  return (
    <div className="rounded-2xl p-4 text-center"
         style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
      <p style={serif} className="text-2xl leading-none">{value}</p>
      <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: C.muted }}>{label}</p>
    </div>
  );
}

function AgentCard({ agent }) {
  return (
    <div style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
         className="rounded-2xl p-4">
      <div className="flex items-start gap-4 mb-3">
        <img src={agent.photoUrl} alt={agent.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
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
      {agent.bio && (
        <p className="text-xs leading-relaxed mb-3" style={{ color: C.charcoal }}>
          {agent.bio}
        </p>
      )}
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
      className="py-3.5 rounded-xl flex flex-col items-center gap-1.5 active:scale-95 transition">
      <Icon size={20} strokeWidth={2.2} />
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

function SocialBtn({ icon: Icon, label, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.ink }}
      className="px-4 py-3 rounded-xl text-xs font-medium flex items-center gap-2 justify-center">
      <Icon size={14} /> {label}
    </a>
  );
}

/* =========================================================
   MODALS
   ========================================================= */

function ContactForm({ type, client, onCapture, onClose }) {
  const [form, setForm] = useState({
    name: client.name || '', email: client.email || '', phone: client.phone || '',
    message: '', date: '', address: '',
  });

  const titles = {
    showing: { h: 'Schedule a showing', sub: 'Tell us which home and when works for you.' },
    preapproval: { h: 'Request pre-approval help', sub: "We'll connect you with a trusted lender." },
    question: { h: 'Ask a question', sub: 'Anything on your mind — big or small.' },
  };
  const t = titles[type] || titles.question;

  const submit = () => {
    if (onCapture) {
      onCapture({
        name: form.name, email: form.email, phone: form.phone,
        type: client.type || (type === 'showing' ? 'buyer' : 'other'),
        source: type === 'showing' ? 'app_showing' :
                type === 'preapproval' ? 'app_preapproval' : 'app_contact',
        address: form.address,
        interests: type === 'showing'
          ? `Wants to see: ${form.address}${form.date ? ' on ' + form.date : ''}`
          : '',
        notes: form.message,
      });
    }
    haptic('success');
    const subject = encodeURIComponent(`${t.h} — from ${form.name || 'App'}`);
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      client.type ? `Type: ${client.type.toUpperCase()}` : '',
      client.stage ? `Stage: ${client.stage}` : '',
      type === 'showing' ? `Address: ${form.address}` : '',
      type === 'showing' ? `Preferred date: ${form.date}` : '',
      `\nMessage:\n${form.message}`,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${AGENT.email}?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;
    setTimeout(onClose, 300);
  };

  return (
    <ModalShell title={t.h} sub={t.sub} onClose={onClose}
      footer={<SubmitBtn onClick={submit} label="Send to the team" />}>
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
      <TextArea label={type === 'question' ? 'Your question' : 'Anything else?'}
        value={form.message}
        onChange={v => setForm({ ...form, message: v })} />
    </ModalShell>
  );
}

function ValuationForm({ client, onCapture, onClose }) {
  const [form, setForm] = useState({
    name: client.name || '', email: client.email || '', phone: client.phone || '',
    address: '', beds: '', baths: '', upgrades: '',
  });

  const submit = () => {
    if (onCapture) {
      onCapture({
        name: form.name, email: form.email, phone: form.phone,
        type: 'seller', source: 'app_valuation',
        address: form.address,
        interests: `Seller \u2014 ${form.beds || '?'} BR / ${form.baths || '?'} BA at ${form.address}`,
        notes: form.upgrades,
      });
    }
    haptic('success');
    const subject = encodeURIComponent(`Home valuation request — ${form.address || form.name}`);
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `\nProperty address: ${form.address}`,
      `Beds: ${form.beds} · Baths: ${form.baths}`,
      `\nRecent upgrades / notes:\n${form.upgrades}`,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${AGENT.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setTimeout(onClose, 300);
  };

  return (
    <ModalShell
      title="What's your home worth?"
      sub="Free, no obligation. We'll email your professional valuation within 24 hours."
      onClose={onClose}
      footer={<SubmitBtn onClick={submit} label="Request my valuation" />}>
      <LightField label="Your name" value={form.name}
        onChange={v => setForm({ ...form, name: v })} />
      <LightField label="Email" type="email" value={form.email}
        onChange={v => setForm({ ...form, email: v })} />
      <LightField label="Phone" type="tel" value={form.phone}
        onChange={v => setForm({ ...form, phone: v })} />
      <LightField label="Property address" value={form.address}
        onChange={v => setForm({ ...form, address: v })}
        placeholder="123 Main St, Winter Haven, FL" />
      <div className="grid grid-cols-2 gap-3">
        <LightField label="Beds" value={form.beds} type="number"
          onChange={v => setForm({ ...form, beds: v })} />
        <LightField label="Baths" value={form.baths} type="number"
          onChange={v => setForm({ ...form, baths: v })} />
      </div>
      <TextArea label="Recent upgrades or anything we should know"
        value={form.upgrades}
        onChange={v => setForm({ ...form, upgrades: v })}
        placeholder="New roof 2024, kitchen remodel, pool, etc." />
    </ModalShell>
  );
}

function NotifyForm({ client, onCapture, onClose }) {
  const [form, setForm] = useState({
    name: client.name || '', email: client.email || '', phone: client.phone || '',
    topics: [],
  });

  const toggleTopic = (t) =>
    setForm(f => ({
      ...f,
      topics: f.topics.includes(t) ? f.topics.filter(x => x !== t) : [...f.topics, t],
    }));

  const topicOptions = [
    'First-time buyers',
    'Selling strategy',
    'New construction',
    'Investment property',
    'Market updates',
    'Open Doors Live (all shows)',
  ];

  const submit = () => {
    if (onCapture) {
      onCapture({
        name: form.name, email: form.email, phone: form.phone,
        type: 'follower', source: 'app_notify',
        interests: form.topics.join(', ') || 'Open Doors Live',
      });
    }
    haptic('success');
    const subject = encodeURIComponent(`Notify me live \u2014 ${form.name || 'App subscriber'}`);
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `\nTopics of interest:`,
      ...form.topics.map(t => `  \u2022 ${t}`),
      `\nAdd to the Open Doors Live notification list.`,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${AGENT.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setTimeout(onClose, 300);
  };

  return (
    <ModalShell
      title="Notify me when live"
      sub="Get a text/email right before the next Open Doors Live show starts."
      onClose={onClose}
      footer={<SubmitBtn onClick={submit} label="Add me to the list" />}>
      <LightField label="Your name" value={form.name}
        onChange={v => setForm({ ...form, name: v })} />
      <LightField label="Email" type="email" value={form.email}
        onChange={v => setForm({ ...form, email: v })} />
      <LightField label="Phone (for text alerts)" type="tel" value={form.phone}
        onChange={v => setForm({ ...form, phone: v })} />
      <div>
        <label className="block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: C.muted }}>
          Topics you care about
        </label>
        <div className="grid grid-cols-2 gap-2">
          {topicOptions.map(t => {
            const on = form.topics.includes(t);
            return (
              <button key={t} onClick={() => toggleTopic(t)}
                style={{
                  backgroundColor: on ? C.gold : C.paper,
                  color: on ? C.ink : C.charcoal,
                  border: `1px solid ${on ? C.gold : C.line}`,
                }}
                className="px-3 py-2 rounded-lg text-xs font-medium text-left active:scale-[0.98]">
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </ModalShell>
  );
}

function ClientProfileForm({ client, onCapture, onClose }) {
  const [f, setF] = useState({
    name: client.name || '',
    email: client.email || '',
    phone: client.phone || '',
    type: 'past_client',
    birthday: '',
    spouseName: '',
    spouseBirthday: '',
    moveInDate: '',
    address: '',
    importantDates: [],
    preferredContact: 'text',
    notes: '',
    consent: true,
  });
  const [newDateLabel, setNewDateLabel] = useState('');
  const [newDateValue, setNewDateValue] = useState('');

  const addDate = () => {
    if (!newDateLabel.trim() || !newDateValue) return;
    setF({ ...f, importantDates: [...f.importantDates, { label: newDateLabel.trim(), date: newDateValue }] });
    setNewDateLabel(''); setNewDateValue('');
  };
  const removeDate = (i) => {
    setF({ ...f, importantDates: f.importantDates.filter((_, idx) => idx !== i) });
  };

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const valid = f.name && (f.email || f.phone) && f.consent;

  const submit = async () => {
    if (!valid || submitting) return;
    setSubmitting(true);
    haptic('success');

    // 1) Save to CRM locally (and cloud if connected)
    if (onCapture) {
      onCapture({
        name: f.name,
        email: f.email,
        phone: f.phone,
        type: f.type,
        source: 'client_portal',
        stage: 'new',
        address: f.address,
        birthday: f.birthday,
        spouseName: f.spouseName,
        spouseBirthday: f.spouseBirthday,
        moveInDate: f.moveInDate,
        importantDates: f.importantDates,
        preferredContact: f.preferredContact,
        notes: f.notes,
        consent: f.consent,
        tags: ['client_portal', 'new_lead'],
      });
    }

    // 2) Automatic email push to Lancey's Gmail
    await pushEmailSubmission(`\uD83C\uDF89 New Client Portal: ${f.name}`, {
      'Form type': 'New Client Portal',
      'Name': f.name,
      'Email': f.email || '(not provided)',
      'Phone': f.phone || '(not provided)',
      'Preferred contact': f.preferredContact,
      'Birthday': f.birthday || '(not provided)',
      'Spouse / partner': f.spouseName || '(n/a)',
      'Spouse birthday': f.spouseBirthday || '(n/a)',
      'Home anniversary': f.moveInDate || '(n/a)',
      'Home address': f.address || '(n/a)',
      'Other important dates': f.importantDates.length
        ? f.importantDates.map(d => `${d.label}: ${d.date}`).join('; ')
        : '(none)',
      'Notes': f.notes || '(none)',
      'Consent to ongoing comms': f.consent ? 'YES' : 'NO',
      'Submitted at': new Date().toISOString(),
    });

    setSubmitting(false);
    setDone(true);
    setTimeout(onClose, 2000);
  };

  if (done) {
    return (
      <ModalShell title="You're in!" onClose={onClose}>
        <div className="text-center py-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full grid place-items-center"
               style={{ backgroundColor: C.gold, color: C.ink }}>
            <CheckCircle2 size={48} strokeWidth={1.8} />
          </div>
          <p style={serif} className="text-2xl leading-tight mb-3" >
            Welcome to the family.
          </p>
          <div className="text-left rounded-xl p-4 mx-auto max-w-[320px] mb-4 space-y-2"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <p className="text-xs flex items-start gap-2" style={{ color: C.charcoal }}>
              <CheckCircle2 size={14} style={{ color: C.success, marginTop: 1, flexShrink: 0 }} />
              <span>Your profile is saved in our CRM.</span>
            </p>
            <p className="text-xs flex items-start gap-2" style={{ color: C.charcoal }}>
              <CheckCircle2 size={14} style={{ color: C.success, marginTop: 1, flexShrink: 0 }} />
              <span>Lancey &amp; Stacy got an instant email.</span>
            </p>
            <p className="text-xs flex items-start gap-2" style={{ color: C.charcoal }}>
              <CheckCircle2 size={14} style={{ color: C.success, marginTop: 1, flexShrink: 0 }} />
              <span>You'll hear from us on your birthday &amp; home anniversary \u2728</span>
            </p>
          </div>
          <p className="text-[11px]" style={{ color: C.muted }}>
            Expect a personal hello from the team soon.
          </p>
        </div>
      </ModalShell>
    );
  }

  return (
    <ModalShell
      title="Your client profile"
      sub="Stay on our list for market updates, birthday wishes, and home anniversary reminders. We never share your info."
      onClose={onClose}
      footer={
        <button onClick={valid && !submitting ? submit : undefined}
          disabled={!valid || submitting}
          style={{
            backgroundColor: valid ? C.gold : 'rgba(200,152,90,0.35)',
            color: valid ? C.ink : 'rgba(15,42,63,0.45)',
          }}
          className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition disabled:cursor-not-allowed">
          {submitting ? 'Sending\u2026' : (<>Save my profile <Send size={15} /></>)}
        </button>
      }>
      <LightField label="Your name" value={f.name} onChange={v => setF({ ...f, name: v })} />
      <div className="grid grid-cols-2 gap-2">
        <LightField label="Email" type="email" value={f.email} onChange={v => setF({ ...f, email: v })} />
        <LightField label="Phone" type="tel" value={f.phone} onChange={v => setF({ ...f, phone: v })} />
      </div>
      <LightField label="Birthday (MM/DD/YYYY)" type="date" value={f.birthday}
                  onChange={v => setF({ ...f, birthday: v })} />

      <div>
        <label className="block text-[11px] uppercase tracking-wider mb-2" style={{ color: C.muted }}>
          Relationship (optional)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <LightField label="Spouse/partner name" value={f.spouseName}
                      onChange={v => setF({ ...f, spouseName: v })} />
          <LightField label="Their birthday" type="date" value={f.spouseBirthday}
                      onChange={v => setF({ ...f, spouseBirthday: v })} />
        </div>
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-wider mb-2" style={{ color: C.muted }}>
          Home anniversary (if you own)
        </label>
        <LightField label="Move-in / closing date" type="date" value={f.moveInDate}
                    onChange={v => setF({ ...f, moveInDate: v })} />
        <LightField label="Home address" value={f.address}
                    onChange={v => setF({ ...f, address: v })}
                    placeholder="Optional" />
      </div>

      {/* Additional important dates */}
      <div>
        <label className="block text-[11px] uppercase tracking-wider mb-2" style={{ color: C.muted }}>
          Other important dates (anniversaries, kids' birthdays, etc.)
        </label>
        {f.importantDates.length > 0 && (
          <div className="space-y-1.5 mb-2">
            {f.importantDates.map((d, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg"
                   style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                <span className="text-sm flex-1" style={{ color: C.ink }}>{d.label}</span>
                <span className="digital-mono text-xs" style={{ color: C.gold }}>{d.date}</span>
                <button onClick={() => removeDate(i)}
                  className="text-xs" style={{ color: C.ruby }}>&times;</button>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 items-end">
          <input value={newDateLabel} onChange={e => setNewDateLabel(e.target.value)}
            placeholder="Label (e.g. Wedding anniv.)"
            style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.charcoal }}
            className="px-3 py-2.5 rounded-lg text-sm outline-none" />
          <input type="date" value={newDateValue} onChange={e => setNewDateValue(e.target.value)}
            style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.charcoal }}
            className="px-3 py-2.5 rounded-lg text-sm outline-none" />
          <button onClick={addDate}
            style={{ backgroundColor: C.ink, color: C.cream }}
            className="px-3 py-2.5 rounded-lg text-sm font-semibold">+</button>
        </div>
      </div>

      {/* Preferred contact */}
      <div>
        <label className="block text-[11px] uppercase tracking-wider mb-2" style={{ color: C.muted }}>
          Preferred contact
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: 'text', l: 'Text' },
            { v: 'call', l: 'Call' },
            { v: 'email', l: 'Email' },
          ].map(opt => (
            <button key={opt.v} onClick={() => setF({ ...f, preferredContact: opt.v })}
              style={{
                backgroundColor: f.preferredContact === opt.v ? C.gold : C.paper,
                color: f.preferredContact === opt.v ? C.ink : C.ink,
                border: `1px solid ${f.preferredContact === opt.v ? C.gold : C.line}`,
              }}
              className="px-3 py-2.5 rounded-lg text-xs font-semibold">
              {opt.l}
            </button>
          ))}
        </div>
      </div>

      <TextArea label="Anything else we should know?" rows={3}
                value={f.notes} onChange={v => setF({ ...f, notes: v })}
                placeholder="Family milestones, favorite restaurants, what makes you tick..." />

      <label className="flex items-start gap-2 text-xs cursor-pointer"
             style={{ color: C.charcoal }}>
        <input type="checkbox" checked={f.consent}
               onChange={e => setF({ ...f, consent: e.target.checked })}
               className="mt-0.5" style={{ accentColor: C.gold }} />
        <span className="leading-relaxed">
          I agree to receive occasional texts, emails, and cards from The Lewis Team \u2014 birthday wishes, home anniversary notes, market updates. You can opt out any time by replying STOP.
        </span>
      </label>
    </ModalShell>
  );
}

function CallInForm({ client, onCapture, onClose }) {
  const [form, setForm] = useState({
    name: client.name || '', phone: client.phone || '', email: client.email || '',
    question: '', whichShow: '', consent: false,
  });

  const valid = form.name && form.phone && form.question && form.consent;

  const submit = () => {
    if (onCapture) {
      onCapture({
        name: form.name, email: form.email, phone: form.phone,
        type: 'follower', source: 'app_callin',
        interests: `Podcast guest request: ${form.whichShow || 'Any show'}`,
        notes: form.question,
      });
    }
    haptic('success');
    const subject = encodeURIComponent(`Come on as a guest \u2014 ${form.name}`);
    const body = [
      `CALL-IN GUEST REQUEST`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `\nWhich show they want to be on: ${form.whichShow || 'Next available'}`,
      `\nQuestion / topic for the show:`,
      form.question,
      `\nConsent to be recorded + published: ${form.consent ? 'YES' : 'NO'}`,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${AGENT.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setTimeout(onClose, 300);
  };

  return (
    <ModalShell
      title="Come on the show"
      sub="Get on-air with The Lewis Team. Tell us who you are, what you want to talk about, and we'll reach out with next steps."
      onClose={onClose}
      footer={
        <button onClick={valid ? submit : undefined}
          disabled={!valid}
          style={{
            backgroundColor: valid ? C.ink : 'rgba(15,42,63,0.25)',
            color: valid ? C.cream : 'rgba(245,239,230,0.5)',
          }}
          className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition disabled:cursor-not-allowed">
          Request to be on-air <Send size={15} />
        </button>
      }>
      <LightField label="Your name" value={form.name}
        onChange={v => setForm({ ...form, name: v })} />
      <LightField label="Phone" type="tel" value={form.phone}
        onChange={v => setForm({ ...form, phone: v })} />
      <LightField label="Email" type="email" value={form.email}
        onChange={v => setForm({ ...form, email: v })} />
      <LightField label="Which show (optional)" value={form.whichShow}
        onChange={v => setForm({ ...form, whichShow: v })}
        placeholder="e.g. Investor Night · Sell in 30 Days" />
      <TextArea label="What do you want to talk about?"
        value={form.question}
        onChange={v => setForm({ ...form, question: v })}
        placeholder="Your question, story, or topic for the show." />
      <label className="flex items-start gap-2 text-xs cursor-pointer"
             style={{ color: C.charcoal }}>
        <input type="checkbox" checked={form.consent}
               onChange={e => setForm({ ...form, consent: e.target.checked })}
               className="mt-0.5" style={{ accentColor: C.gold }} />
        <span className="leading-relaxed">
          I consent to being recorded and to my segment being published on YouTube, Apple Podcasts,
          Spotify, and social media clips. I understand I can request removal after the show.
        </span>
      </label>
    </ModalShell>
  );
}

/* =========================================================
   ADMIN CENTER — in-app content editor
   ========================================================= */

function PinPrompt({ onVerify, onClose }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (pin === ADMIN_PIN) {
      haptic('success');
      onVerify();
    } else {
      haptic('warn');
      setError('Wrong PIN.');
      setPin('');
    }
  };

  // Auto-submit when 4 digits entered
  useEffect(() => {
    if (pin.length === 4) {
      if (pin === ADMIN_PIN) {
        haptic('success');
        onVerify();
      } else {
        haptic('warn');
        setError('Wrong PIN.');
        setTimeout(() => setPin(''), 400);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
         style={{ backgroundColor: 'rgba(15,42,63,0.85)' }}
         onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
           style={{ backgroundColor: C.cream, width: '100%', maxWidth: 360 }}
           className="rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-5 flex items-center gap-3"
             style={{ backgroundColor: C.ink, color: C.cream, borderBottom: `1px solid ${C.gold}` }}>
          <div className="w-10 h-10 rounded-lg grid place-items-center"
               style={{ backgroundColor: C.gold, color: C.ink }}>
            <Wrench size={18} />
          </div>
          <div className="flex-1">
            <p style={serif} className="text-xl leading-tight">Admin PIN</p>
            <p className="text-[11px] opacity-70">4-digit code to unlock admin.</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full grid place-items-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <X size={16} />
          </button>
        </div>
        <div className="p-5 space-y-3">
          <input type="password" inputMode="numeric" pattern="[0-9]*" maxLength={4}
            value={pin}
            onChange={e => { setPin(e.target.value.replace(/[^0-9]/g, '').slice(0, 4)); setError(''); }}
            placeholder="\u2022 \u2022 \u2022 \u2022"
            autoFocus
            className="digital-readout w-full px-4 py-4 rounded-lg text-3xl text-center outline-none no-spin"
            style={{
              backgroundColor: C.paper,
              border: `2px solid ${error ? C.ruby : C.gold}`,
              color: C.ink,
              letterSpacing: '0.5em',
              paddingLeft: '0.5em',
            }} />
          {error && (
            <p className="text-xs text-center" style={{ color: C.ruby }}>{error}</p>
          )}
          <button onClick={submit}
            style={{ backgroundColor: C.ink, color: C.cream }}
            className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98]">
            Unlock Admin \u2192
          </button>
        </div>
      </div>
    </div>
  );
}

function SyncOfferModal({ payload, onApply, onClose }) {
  const kinds = Object.keys(payload || {}).filter(k => k !== 'exportedAt');
  return (
    <ModalShell title="Apply shared content?"
      sub="Someone sent you a content bundle. Review what it includes, then apply to your device."
      onClose={onClose}
      footer={
        <div className="grid grid-cols-2 gap-2">
          <button onClick={onClose}
            style={{ backgroundColor: C.paper, color: C.ink, border: `1px solid ${C.line}` }}
            className="py-3 rounded-xl text-sm font-semibold">
            Ignore
          </button>
          <button onClick={onApply}
            style={{ backgroundColor: C.gold, color: C.ink }}
            className="py-3 rounded-xl text-sm font-semibold">
            Apply now
          </button>
        </div>
      }>
      <p className="text-sm mb-2" style={{ color: C.charcoal }}>
        This bundle contains:
      </p>
      <ul className="space-y-1">
        {kinds.map(k => (
          <li key={k} className="text-xs flex gap-2" style={{ color: C.charcoal }}>
            <CheckCircle2 size={12} style={{ color: C.gold, marginTop: 2 }} />
            <span>{k}</span>
          </li>
        ))}
      </ul>
      <p className="text-[10px] mt-4" style={{ color: C.muted }}>
        Applying overwrites your current content. Export yours first if you want a backup.
      </p>
    </ModalShell>
  );
}

function AdminSyncBar({ all }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'saving' | 'saved' | 'error'
  const [lastSaved, setLastSaved] = useState(null);
  const cfg = getCloudCfg();

  const save = async () => {
    setStatus('saving');
    try {
      if (cfg) {
        const keys = ['listings','live','moments','sponsors',
          'buyerSteps','sellerSteps','investorSteps','programs',
          'testimonials','wins','workshops','crm','team'];
        const mapKey = (k) => k === 'live' ? 'liveConfig' : k;
        for (const k of keys) {
          await cloudWriteContent(k, all[mapKey(k)]);
        }
      }
      setStatus('saved');
      setLastSaved(new Date());
      setTimeout(() => setStatus('idle'), 2000);
      haptic('success');
    } catch (e) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const label = status === 'saving' ? 'Saving\u2026' :
                status === 'saved' ? 'Saved \u2713' :
                status === 'error' ? 'Save failed' :
                cfg ? 'Auto-saving to cloud' : 'Saving locally only';
  const color = status === 'saved' ? C.success :
                status === 'error' ? C.ruby :
                cfg ? C.gold : C.muted;

  return (
    <div className="px-4 py-2 flex items-center gap-2 sticky top-0 z-10"
         style={{ backgroundColor: C.cream, borderBottom: `1px solid ${C.line}` }}>
      <span className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: color }} />
      <span className="text-xs font-medium flex-1" style={{ color: C.ink }}>
        {label}
      </span>
      {lastSaved && status === 'idle' && (
        <span className="text-[10px]" style={{ color: C.muted }}>
          Last: {lastSaved.toLocaleTimeString()}
        </span>
      )}
      <button onClick={save} disabled={status === 'saving'}
        style={{
          backgroundColor: status === 'saved' ? C.success : C.ink,
          color: C.cream,
          opacity: status === 'saving' ? 0.6 : 1,
        }}
        className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 active:scale-95 transition">
        {status === 'saved' ? <CheckCircle2 size={12} /> : <Send size={11} />}
        {status === 'saving' ? 'Saving' : status === 'saved' ? 'Saved' : 'Save all'}
      </button>
    </div>
  );
}

function AdminCenter({
  adminMode, onLock, onClose,
  crm, setCrm, resetCrm,
  updateLead, deleteLead, addActivity, addTask, toggleTask, captureLead,
  listings, setListings, resetListings,
  liveConfig, setLiveConfig, resetLive,
  moments, setMoments, resetMoments,
  sponsors, setSponsors, resetSponsors,
  buyerSteps, setBuyerSteps, resetBuyerSteps,
  sellerSteps, setSellerSteps, resetSellerSteps,
  investorSteps, setInvestorSteps, resetInvestorSteps,
  programs, setPrograms, resetPrograms,
  testimonials, setTestimonials, resetTestimonials,
  wins, setWins, resetWins,
  workshops, setWorkshops, resetWorkshops,
  team, setTeam, resetTeam,
  getPin, setPin, clearPin,
}) {
  const [section, setSection] = useState('crm');

  const sections = [
    { id: 'crm', label: 'CRM' },
    { id: 'listings', label: 'Listings' },
    { id: 'live', label: 'Live show' },
    { id: 'journeys', label: 'Journeys' },
    { id: 'programs', label: 'Programs' },
    { id: 'moments', label: 'Brand' },
    { id: 'content', label: 'Content' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'team', label: 'Team' },
    { id: 'data', label: 'Data' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center"
         style={{ backgroundColor: 'rgba(15,42,63,0.7)' }}
         onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
           style={{ backgroundColor: C.cream, maxHeight: '95vh', width: '100%', maxWidth: 680 }}
           className="rounded-t-3xl sm:rounded-3xl mt-4 sm:mt-8 overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-5 flex items-center gap-3"
             style={{ backgroundColor: C.ink, color: C.cream, borderBottom: `1px solid ${C.gold}` }}>
          <div className="w-10 h-10 rounded-lg grid place-items-center"
               style={{ backgroundColor: C.gold, color: C.ink }}>
            <Wrench size={18} />
          </div>
          <div className="flex-1">
            <p style={serif} className="text-xl leading-tight">Admin Center</p>
            <p className="text-[11px] opacity-70">Edit content live. Changes save to this device.</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full grid place-items-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <X size={16} />
          </button>
        </div>

        {/* Sync status + Save All button */}
        <AdminSyncBar all={{ listings, liveConfig, moments, sponsors,
                            buyerSteps, sellerSteps, investorSteps,
                            programs, testimonials, wins, workshops, team, crm }} />

        {/* Section tabs */}
        <div className="flex gap-1 overflow-x-auto p-2"
             style={{ backgroundColor: C.paper, borderBottom: `1px solid ${C.line}` }}>
          {sections.map(s => {
            const active = section === s.id;
            return (
              <button key={s.id} onClick={() => setSection(s.id)}
                style={{
                  backgroundColor: active ? C.ink : 'transparent',
                  color: active ? C.cream : C.ink,
                }}
                className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 flex-1">
          {section === 'crm' && (
            <CrmPanel
              leads={crm || []}
              onAdd={captureLead}
              onUpdate={updateLead}
              onDelete={deleteLead}
              onAddActivity={addActivity}
              onAddTask={addTask}
              onToggleTask={toggleTask}
              onReset={resetCrm}
            />
          )}
          {section === 'listings' && (
            <ListingsEditor items={listings} onChange={setListings} onReset={resetListings} />
          )}
          {section === 'live' && (
            <LiveEditor config={liveConfig} onChange={setLiveConfig} onReset={resetLive} />
          )}
          {section === 'journeys' && (
            <JourneysEditor
              buyer={buyerSteps} setBuyer={setBuyerSteps} resetBuyer={resetBuyerSteps}
              seller={sellerSteps} setSeller={setSellerSteps} resetSeller={resetSellerSteps}
              investor={investorSteps} setInvestor={setInvestorSteps} resetInvestor={resetInvestorSteps}
            />
          )}
          {section === 'programs' && (
            <ProgramsEditor items={programs} onChange={setPrograms} onReset={resetPrograms} />
          )}
          {section === 'moments' && (
            <MomentsEditor items={moments} onChange={setMoments} onReset={resetMoments} />
          )}
          {section === 'content' && (
            <ContentEditor
              testimonials={testimonials} setTestimonials={setTestimonials} resetTestimonials={resetTestimonials}
              wins={wins} setWins={setWins} resetWins={resetWins}
              workshops={workshops} setWorkshops={setWorkshops} resetWorkshops={resetWorkshops}
            />
          )}
          {section === 'sponsors' && (
            <SponsorsEditor items={sponsors} onChange={setSponsors} onReset={resetSponsors} />
          )}
          {section === 'team' && (
            <TeamEditor team={team} onChange={setTeam} onReset={resetTeam} />
          )}
          {section === 'data' && (
            <DataPanel
              all={{
                listings, liveConfig, moments, sponsors,
                buyerSteps, sellerSteps, investorSteps,
                programs, testimonials, wins, workshops, team, crm,
              }}
              setAll={{
                setListings, setLiveConfig, setMoments, setSponsors,
                setBuyerSteps, setSellerSteps, setInvestorSteps,
                setPrograms, setTestimonials, setWins, setWorkshops, setTeam, setCrm,
              }}
              resetAll={() => {
                resetListings(); resetLive(); resetMoments(); resetSponsors();
                resetBuyerSteps(); resetSellerSteps(); resetInvestorSteps();
                resetPrograms(); resetTestimonials(); resetWins(); resetWorkshops(); resetTeam();
              }}
              onLock={onLock}
              getPin={getPin} setPin={setPin} clearPin={clearPin}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function AdminInput({ label, value, onChange, type = 'text', placeholder, hint }) {
  return (
    <div className="mb-3">
      <label className="block text-[11px] uppercase tracking-[0.16em] mb-1.5" style={{ color: C.muted }}>
        {label}
      </label>
      <input type={type} value={value ?? ''}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, color: C.charcoal }}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none" />
      {hint && <p className="text-[10px] mt-1" style={{ color: C.muted }}>{hint}</p>}
    </div>
  );
}
function AdminTextArea({ label, value, onChange, placeholder, rows = 3 }) {
  return (
    <div className="mb-3">
      <label className="block text-[11px] uppercase tracking-[0.16em] mb-1.5" style={{ color: C.muted }}>
        {label}
      </label>
      <textarea value={value ?? ''} rows={rows}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, color: C.charcoal }}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-y font-mono" />
    </div>
  );
}
function AdminSelect({ label, value, onChange, options }) {
  return (
    <div className="mb-3">
      <label className="block text-[11px] uppercase tracking-[0.16em] mb-1.5" style={{ color: C.muted }}>
        {label}
      </label>
      <select value={value} onChange={e => onChange(e.target.value)}
        style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, color: C.charcoal }}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none">
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
function AdminBtn({ children, onClick, variant = 'primary', className = '' }) {
  const style = variant === 'primary'
    ? { backgroundColor: C.ink, color: C.cream }
    : variant === 'gold'
    ? { backgroundColor: C.gold, color: C.ink }
    : variant === 'danger'
    ? { backgroundColor: C.ruby, color: C.cream }
    : { backgroundColor: C.paper, color: C.ink, border: `1px solid ${C.line}` };
  return (
    <button onClick={onClick} style={style}
      className={`px-3.5 py-2 rounded-lg text-xs font-semibold active:scale-[0.98] transition ${className}`}>
      {children}
    </button>
  );
}

/* =========================================================
   CRM PANEL — dashboard, pipeline, lead detail, activity log
   ========================================================= */
function CrmPanel({ leads, onAdd, onUpdate, onDelete, onAddActivity, onAddTask, onToggleTask, onReset }) {
  const [view, setView] = useState('dashboard');
  const [focusLeadId, setFocusLeadId] = useState(null);
  const [search, setSearch] = useState('');
  const [filterStage, setFilterStage] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterSource, setFilterSource] = useState('all');

  const focusLead = leads.find(l => l.id === focusLeadId) || null;

  // Close detail view if lead was deleted
  useEffect(() => {
    if (focusLeadId && !focusLead) setFocusLeadId(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads.length]);

  const filtered = leads.filter(l => {
    if (filterStage !== 'all' && l.stage !== filterStage) return false;
    if (filterType !== 'all' && l.type !== filterType) return false;
    if (filterSource !== 'all' && l.source !== filterSource) return false;
    if (search) {
      const q = search.toLowerCase();
      const haystack = [l.name, l.email, l.phone, l.address, l.notes, l.interests]
        .join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  // Dashboard stats
  const activeStages = ['new', 'contacted', 'qualified', 'showing', 'offer', 'under_contract'];
  const activeLeads = leads.filter(l => activeStages.includes(l.stage));
  const closedLeads = leads.filter(l => l.stage === 'closed');
  const pipelineValue = activeLeads.reduce((sum, l) => sum + (Number(l.dealValue) || 0), 0);
  const thisMonth = new Date().getMonth();
  const leadsThisMonth = leads.filter(l => new Date(l.createdAt).getMonth() === thisMonth).length;
  const conversionRate = leads.length > 0
    ? Math.round((closedLeads.length / leads.length) * 100) : 0;
  const openTasks = leads.reduce((n, l) => n + (l.tasks || []).filter(t => !t.done).length, 0);

  // Lead detail view
  if (focusLead) {
    return <LeadDetail lead={focusLead} onBack={() => setFocusLeadId(null)}
             onUpdate={(patch) => onUpdate(focusLead.id, patch)}
             onDelete={() => { if (confirm('Delete this lead?')) { onDelete(focusLead.id); setFocusLeadId(null); } }}
             onAddActivity={(a) => onAddActivity(focusLead.id, a)}
             onAddTask={(t) => onAddTask(focusLead.id, t)}
             onToggleTask={(id) => onToggleTask(focusLead.id, id)} />;
  }

  // Add lead view
  if (view === 'add') {
    return <LeadAddForm onCancel={() => setView('dashboard')}
                        onSave={(lead) => { const id = onAdd(lead); setFocusLeadId(id); setView('dashboard'); }} />;
  }

  // Drip queue — computed from all leads
  const dripQueue = useMemo(() => computeDripQueue(leads), [leads]);

  // Mark a drip step done — logs an activity with the stepKey, so it won't reappear
  const completeDripStep = (action) => {
    onAddActivity(action.leadId, {
      type: 'drip',
      body: `[${action.campaignName}] ${action.step.title} \u2014 ${action.step.channel.toUpperCase()}`,
      dripKey: action.stepKey,
    });
    haptic('success');
  };

  // CSV export
  const exportCsv = () => {
    if (leads.length === 0) return;
    const headers = ['name','phone','email','type','stage','source','address','interests','dealValue','createdAt'];
    const rows = [headers.join(',')];
    for (const l of leads) {
      rows.push(headers.map(h => {
        const v = (l[h] ?? '').toString().replace(/"/g, '""');
        return `"${v}"`;
      }).join(','));
    }
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `lewis-team-leads-${new Date().toISOString().slice(0,10)}.csv`;
    a.click(); URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Header + Add button */}
      <div className="flex items-center justify-between mb-4">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">CRM</p>
        <div className="flex gap-2">
          <AdminBtn onClick={() => setView('add')} variant="gold">+ New lead</AdminBtn>
          <AdminBtn onClick={exportCsv} variant="ghost">Export CSV</AdminBtn>
        </div>
      </div>

      {/* Dashboard stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <CrmStat label="Active" value={activeLeads.length} gold />
        <CrmStat label="Closed" value={closedLeads.length} />
        <CrmStat label="Total" value={leads.length} />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-5">
        <CrmStat label="Pipeline $" value={`$${Math.round(pipelineValue / 1000).toLocaleString()}K`} small />
        <CrmStat label="This month" value={leadsThisMonth} small />
        <CrmStat label="Open tasks" value={openTasks} small />
      </div>

      {/* Today's Outreach — drip queue */}
      {dripQueue.length > 0 && (
        <div className="rounded-2xl mb-5 overflow-hidden"
             style={{ backgroundColor: C.ink, color: C.cream, border: `2px solid ${C.gold}` }}>
          <div className="px-4 py-3 flex items-center justify-between"
               style={{ borderBottom: `1px solid rgba(200,152,90,0.3)` }}>
            <div className="flex items-center gap-2">
              <Megaphone size={14} style={{ color: C.gold }} />
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold">
                Today's Outreach
              </p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                  style={{ backgroundColor: C.gold, color: C.ink }}>
              {dripQueue.length}
            </span>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(245,239,230,0.08)' }}>
            {dripQueue.slice(0, 5).map(action => (
              <DripActionRow key={`${action.leadId}-${action.stepKey}`}
                action={action}
                onOpen={() => setFocusLeadId(action.leadId)}
                onComplete={() => completeDripStep(action)} />
            ))}
          </div>
          {dripQueue.length > 5 && (
            <p className="text-[11px] text-center py-2 opacity-70">
              + {dripQueue.length - 5} more pending
            </p>
          )}
        </div>
      )}

      {/* Search + Filters */}
      <div className="mb-3">
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search name, phone, email, address, notes..."
          style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, color: C.charcoal }}
          className="w-full px-3 py-2.5 rounded-lg text-sm outline-none mb-2" />
        <div className="grid grid-cols-3 gap-1.5">
          <select value={filterStage} onChange={e => setFilterStage(e.target.value)}
            style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, color: C.charcoal }}
            className="px-2 py-1.5 rounded text-[11px] outline-none">
            <option value="all">All stages</option>
            {CRM_STAGES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <select value={filterType} onChange={e => setFilterType(e.target.value)}
            style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, color: C.charcoal }}
            className="px-2 py-1.5 rounded text-[11px] outline-none">
            <option value="all">All types</option>
            {CRM_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
          <select value={filterSource} onChange={e => setFilterSource(e.target.value)}
            style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, color: C.charcoal }}
            className="px-2 py-1.5 rounded text-[11px] outline-none">
            <option value="all">All sources</option>
            {CRM_SOURCES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </div>
      </div>

      {/* Lead list */}
      <p className="text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: C.muted }}>
        {filtered.length} {filtered.length === 1 ? 'lead' : 'leads'}
      </p>
      <div className="space-y-2">
        {filtered.map(lead => (
          <LeadCard key={lead.id} lead={lead} onOpen={() => setFocusLeadId(lead.id)} />
        ))}
        {leads.length === 0 && (
          <div className="rounded-lg p-6 text-center"
               style={{ backgroundColor: C.paper, border: `1px dashed ${C.line}`, color: C.muted }}>
            <p className="text-sm mb-2">No leads yet.</p>
            <p className="text-xs mb-3">
              Leads are auto-captured when anyone submits a contact form in the app.
              Or tap + New lead to add one manually.
            </p>
            <AdminBtn onClick={() => setView('add')} variant="gold">+ Add first lead</AdminBtn>
          </div>
        )}
        {leads.length > 0 && filtered.length === 0 && (
          <p className="text-sm text-center py-6" style={{ color: C.muted }}>
            No leads match your filters.
          </p>
        )}
      </div>

      {leads.length > 0 && (
        <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${C.line}` }}>
          <AdminBtn onClick={() => { if (confirm('Clear ALL leads? This cannot be undone.')) onReset(); }}
                    variant="danger">
            Clear all leads
          </AdminBtn>
        </div>
      )}
    </div>
  );
}

function DripActionRow({ action, onOpen, onComplete }) {
  const { step, body, leadName, leadPhone, leadEmail, dueIn } = action;
  const channelIcon = step.channel === 'call' ? Phone :
                     step.channel === 'text' ? MessageSquare :
                     step.channel === 'email' ? Mail :
                     Clipboard;
  const CI = channelIcon;

  // Build action href based on channel + lead contact
  const actionHref =
    step.channel === 'call' && leadPhone ? `tel:${leadPhone}` :
    step.channel === 'text' && leadPhone ? `sms:${leadPhone}?&body=${encodeURIComponent(body)}` :
    step.channel === 'email' && leadEmail ? `mailto:${leadEmail}?subject=${encodeURIComponent(step.title)}&body=${encodeURIComponent(body)}` :
    null;

  const dueLabel = dueIn === 0 ? 'Today'
    : dueIn < 0 ? `${Math.abs(dueIn)}d overdue`
    : `In ${dueIn}d`;

  return (
    <div className="p-3">
      <div className="flex items-start gap-3 mb-2">
        <div className="w-8 h-8 rounded-full grid place-items-center flex-shrink-0"
             style={{ backgroundColor: dueIn < 0 ? C.ruby : C.gold, color: C.ink }}>
          <CI size={14} strokeWidth={2.4} />
        </div>
        <button onClick={onOpen} className="flex-1 min-w-0 text-left">
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold truncate">{leadName}</p>
            <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: dueIn < 0 ? C.ruby : 'rgba(200,152,90,0.3)',
                           color: dueIn < 0 ? C.cream : C.gold }}>
              {dueLabel}
            </span>
          </div>
          <p className="text-[10px] opacity-60 uppercase tracking-wider mt-0.5">
            {step.title} &middot; {action.campaignName}
          </p>
        </button>
      </div>
      <p className="text-xs leading-relaxed mb-2 italic opacity-90 line-clamp-2">
        "{body}"
      </p>
      <div className="flex gap-1.5">
        {actionHref ? (
          <a href={actionHref} target={step.channel === 'email' ? undefined : undefined}
             onClick={() => { /* don't auto-complete; user may want to redo */ }}
             style={{ backgroundColor: C.gold, color: C.ink }}
             className="flex-1 py-2 rounded-md text-xs font-semibold text-center flex items-center justify-center gap-1 active:scale-[0.98]">
            <CI size={11} /> {step.channel.toUpperCase()}
          </a>
        ) : (
          <span className="flex-1 py-2 rounded-md text-xs font-medium text-center opacity-60"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
            Manual action
          </span>
        )}
        <button onClick={onComplete}
          style={{ backgroundColor: C.success, color: C.cream }}
          className="px-3 py-2 rounded-md text-xs font-semibold flex items-center gap-1 active:scale-[0.98]">
          <CheckCircle2 size={12} /> Done
        </button>
      </div>
    </div>
  );
}

function CrmStat({ label, value, gold, small }) {
  return (
    <div className="rounded-lg p-3 text-center"
         style={{ backgroundColor: gold ? C.ink : C.paper, border: `1px solid ${gold ? C.gold : C.line}`,
                  color: gold ? C.cream : C.ink }}>
      <p className={`digital-readout ${small ? 'text-lg' : 'text-2xl'} leading-none`}
         style={{ color: gold ? C.gold : C.ink }}>
        {value}
      </p>
      <p className="text-[9px] uppercase tracking-wider mt-1"
         style={{ color: gold ? C.cream : C.muted }}>{label}</p>
    </div>
  );
}

function LeadCard({ lead, onOpen }) {
  const stage = CRM_STAGES.find(s => s.id === lead.stage) || CRM_STAGES[0];
  const type = CRM_TYPES.find(t => t.id === lead.type) || CRM_TYPES[CRM_TYPES.length - 1];
  const openTasks = (lead.tasks || []).filter(t => !t.done).length;
  const lastActivity = (lead.activities || [])[0];

  return (
    <button onClick={onOpen}
      style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
      className="w-full rounded-lg p-3 text-left active:scale-[0.99] transition">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full grid place-items-center flex-shrink-0 text-sm font-bold"
             style={{ backgroundColor: stage.color, color: '#fff' }}>
          {(lead.name || '?').charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold truncate" style={{ color: C.ink }}>
              {lead.name || '(no name)'}
            </p>
            <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: stage.color, color: '#fff' }}>
              {stage.label}
            </span>
          </div>
          <p className="text-[11px] truncate" style={{ color: C.muted }}>
            {type.label} &middot; {lead.phone || lead.email || 'no contact'}
          </p>
          {lastActivity && (
            <p className="text-[11px] mt-1 truncate italic" style={{ color: C.charcoal }}>
              {lastActivity.body}
            </p>
          )}
        </div>
        <div className="text-right flex-shrink-0">
          {openTasks > 0 && (
            <span className="inline-block text-[9px] font-bold px-1.5 py-0.5 rounded-full mb-1"
                  style={{ backgroundColor: C.gold, color: C.ink }}>
              {openTasks} task{openTasks > 1 ? 's' : ''}
            </span>
          )}
          <p className="text-[10px]" style={{ color: C.muted }}>
            {new Date(lead.updatedAt || lead.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </button>
  );
}

function LeadAddForm({ onSave, onCancel }) {
  const [f, setF] = useState({
    name: '', phone: '', email: '',
    type: 'buyer', stage: 'new', source: 'other',
    address: '', interests: '', notes: '', dealValue: 0,
  });
  const valid = f.name || f.phone || f.email;
  return (
    <div>
      <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight mb-3">New lead</p>
      <AdminInput label="Name" value={f.name} onChange={v => setF({ ...f, name: v })} />
      <AdminInput label="Phone" type="tel" value={f.phone} onChange={v => setF({ ...f, phone: v })} />
      <AdminInput label="Email" type="email" value={f.email} onChange={v => setF({ ...f, email: v })} />
      <AdminSelect label="Type" value={f.type} onChange={v => setF({ ...f, type: v })}
        options={CRM_TYPES.map(t => ({ value: t.id, label: t.label }))} />
      <AdminSelect label="Stage" value={f.stage} onChange={v => setF({ ...f, stage: v })}
        options={CRM_STAGES.map(s => ({ value: s.id, label: s.label }))} />
      <AdminSelect label="Source" value={f.source} onChange={v => setF({ ...f, source: v })}
        options={CRM_SOURCES.map(s => ({ value: s.id, label: s.label }))} />
      <AdminInput label="Property address (for sellers)" value={f.address}
                  onChange={v => setF({ ...f, address: v })} />
      <AdminTextArea label="What they want" rows={2} value={f.interests}
                     onChange={v => setF({ ...f, interests: v })}
                     placeholder="e.g. 3BR/2BA in Winter Haven under $300K, ready to buy in 30 days" />
      <AdminInput label="Expected deal value ($)" type="number" value={f.dealValue}
                  onChange={v => setF({ ...f, dealValue: Number(v) || 0 })} />
      <AdminTextArea label="Notes" rows={3} value={f.notes}
                     onChange={v => setF({ ...f, notes: v })} />
      <div className="flex gap-2 mt-3">
        <AdminBtn onClick={() => valid && onSave(f)} variant="gold">Save lead</AdminBtn>
        <AdminBtn onClick={onCancel} variant="ghost">Cancel</AdminBtn>
      </div>
    </div>
  );
}

function LeadDetail({ lead, onBack, onUpdate, onDelete, onAddActivity, onAddTask, onToggleTask }) {
  const stage = CRM_STAGES.find(s => s.id === lead.stage) || CRM_STAGES[0];
  const [tab, setTab] = useState('overview');
  const [edit, setEdit] = useState(false);
  const [draft, setDraft] = useState(lead);
  useEffect(() => { setDraft(lead); }, [lead.id]);

  const saveEdits = () => { onUpdate(draft); setEdit(false); };

  const [newNote, setNewNote] = useState('');
  const [newNoteType, setNewNoteType] = useState('note');
  const [newTask, setNewTask] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');

  const logActivity = () => {
    if (!newNote.trim()) return;
    onAddActivity({ type: newNoteType, body: newNote });
    setNewNote('');
  };
  const pushTask = () => {
    if (!newTask.trim()) return;
    onAddTask({ title: newTask, dueDate: newTaskDate });
    setNewTask(''); setNewTaskDate('');
  };

  const openTasks = (lead.tasks || []).filter(t => !t.done);
  const doneTasks = (lead.tasks || []).filter(t => t.done);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={onBack} className="text-xs flex items-center gap-1" style={{ color: C.muted }}>
          <ArrowLeft size={12} /> Back to CRM
        </button>
        <AdminBtn onClick={onDelete} variant="danger">Delete lead</AdminBtn>
      </div>

      {/* Identity + stage pill */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.ink, color: C.cream, border: `1px solid ${stage.color}` }}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            <p style={serif} className="text-2xl leading-tight">{lead.name || '(no name)'}</p>
            <p className="text-xs opacity-80 mt-0.5">
              {(CRM_TYPES.find(t => t.id === lead.type) || {}).label || 'Other'} &middot;{' '}
              {(CRM_SOURCES.find(s => s.id === lead.source) || {}).label || 'Source unknown'}
            </p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded whitespace-nowrap"
                style={{ backgroundColor: stage.color, color: '#fff' }}>
            {stage.label}
          </span>
        </div>
        <div className="flex gap-1.5 mt-3">
          {lead.phone && (
            <a href={`tel:${lead.phone}`}
               style={{ backgroundColor: C.gold, color: C.ink }}
               className="flex-1 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-1 active:scale-[0.98]">
              <Phone size={12} /> Call
            </a>
          )}
          {lead.phone && (
            <a href={`sms:${lead.phone}`}
               style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: C.cream, border: `1px solid rgba(255,255,255,0.2)` }}
               className="flex-1 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-1 active:scale-[0.98]">
              <MessageSquare size={12} /> Text
            </a>
          )}
          {lead.email && (
            <a href={`mailto:${lead.email}`}
               style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: C.cream, border: `1px solid rgba(255,255,255,0.2)` }}
               className="flex-1 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-1 active:scale-[0.98]">
              <Mail size={12} /> Email
            </a>
          )}
        </div>
      </div>

      {/* Quick stage changer */}
      <div className="flex gap-2 mb-4">
        <select value={lead.stage} onChange={e => onUpdate({ stage: e.target.value })}
          style={{ backgroundColor: C.cream, border: `1px solid ${C.gold}`, color: C.ink }}
          className="flex-1 px-3 py-2 rounded-lg text-sm font-semibold outline-none">
          {CRM_STAGES.map(s => <option key={s.id} value={s.id}>Move to: {s.label}</option>)}
        </select>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-3 overflow-x-auto">
        {['overview', 'activity', 'tasks', 'edit'].map(t => {
          const active = tab === t;
          return (
            <button key={t} onClick={() => setTab(t)}
              style={{
                backgroundColor: active ? C.ink : C.paper,
                color: active ? C.cream : C.ink,
                border: `1px solid ${active ? C.ink : C.line}`,
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold capitalize">
              {t}
              {t === 'tasks' && openTasks.length > 0 && (
                <span className="ml-1 px-1 rounded"
                      style={{ backgroundColor: C.gold, color: C.ink, fontSize: 9 }}>
                  {openTasks.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Overview */}
      {tab === 'overview' && (
        <div className="space-y-3">
          <InfoRow label="Phone" value={lead.phone || '—'} href={lead.phone ? `tel:${lead.phone}` : null} />
          <InfoRow label="Email" value={lead.email || '—'} href={lead.email ? `mailto:${lead.email}` : null} />
          <InfoRow label="Address" value={lead.address || '—'} />
          <InfoRow label="Interests" value={lead.interests || '—'} block />
          <InfoRow label="Notes" value={lead.notes || '—'} block />
          <InfoRow label="Expected value"
                   value={lead.dealValue ? `$${Number(lead.dealValue).toLocaleString()}` : '—'} />
          <InfoRow label="Created" value={new Date(lead.createdAt).toLocaleString()} />
          <InfoRow label="Updated" value={new Date(lead.updatedAt || lead.createdAt).toLocaleString()} />
        </div>
      )}

      {/* Activity log */}
      {tab === 'activity' && (
        <div>
          <div className="rounded-lg p-3 mb-3"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <AdminSelect label="Activity type" value={newNoteType} onChange={setNewNoteType}
              options={[
                { value: 'note', label: 'Note' },
                { value: 'call', label: 'Call' },
                { value: 'text', label: 'Text' },
                { value: 'email', label: 'Email' },
                { value: 'meeting', label: 'Meeting' },
                { value: 'showing', label: 'Showing' },
              ]} />
            <AdminTextArea label="What happened?" rows={2} value={newNote} onChange={setNewNote}
              placeholder="Left voicemail, sent listings, scheduled tour for Saturday..." />
            <AdminBtn onClick={logActivity} variant="gold">+ Log activity</AdminBtn>
          </div>

          <div className="space-y-2">
            {(lead.activities || []).map(a => (
              <div key={a.id} className="rounded-lg p-3"
                   style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold"
                        style={{ color: C.gold }}>
                    {a.type}
                  </span>
                  <span className="text-[10px]" style={{ color: C.muted }}>
                    {new Date(a.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm" style={{ color: C.charcoal }}>{a.body}</p>
              </div>
            ))}
            {(lead.activities || []).length === 0 && (
              <p className="text-sm text-center py-4" style={{ color: C.muted }}>No activity yet.</p>
            )}
          </div>
        </div>
      )}

      {/* Tasks */}
      {tab === 'tasks' && (
        <div>
          <div className="rounded-lg p-3 mb-3"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <AdminInput label="Task" value={newTask} onChange={setNewTask}
              placeholder="Follow up on financing, send comps..." />
            <AdminInput label="Due date" type="date" value={newTaskDate} onChange={setNewTaskDate} />
            <AdminBtn onClick={pushTask} variant="gold">+ Add task</AdminBtn>
          </div>
          <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: C.gold }}>Open</p>
          <div className="space-y-1 mb-4">
            {openTasks.map(t => <TaskRow key={t.id} task={t} onToggle={() => onToggleTask(t.id)} />)}
            {openTasks.length === 0 && <p className="text-xs" style={{ color: C.muted }}>No open tasks.</p>}
          </div>
          {doneTasks.length > 0 && (
            <>
              <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: C.muted }}>Done</p>
              <div className="space-y-1">
                {doneTasks.map(t => <TaskRow key={t.id} task={t} onToggle={() => onToggleTask(t.id)} />)}
              </div>
            </>
          )}
        </div>
      )}

      {/* Edit fields */}
      {tab === 'edit' && (
        <div>
          <AdminInput label="Name" value={draft.name} onChange={v => setDraft({ ...draft, name: v })} />
          <AdminInput label="Phone" type="tel" value={draft.phone}
                      onChange={v => setDraft({ ...draft, phone: v })} />
          <AdminInput label="Email" type="email" value={draft.email}
                      onChange={v => setDraft({ ...draft, email: v })} />
          <AdminSelect label="Type" value={draft.type} onChange={v => setDraft({ ...draft, type: v })}
            options={CRM_TYPES.map(t => ({ value: t.id, label: t.label }))} />
          <AdminSelect label="Source" value={draft.source} onChange={v => setDraft({ ...draft, source: v })}
            options={CRM_SOURCES.map(s => ({ value: s.id, label: s.label }))} />
          <AdminInput label="Property address" value={draft.address}
                      onChange={v => setDraft({ ...draft, address: v })} />
          <AdminTextArea label="Interests" rows={2} value={draft.interests}
                         onChange={v => setDraft({ ...draft, interests: v })} />
          <AdminInput label="Expected deal value ($)" type="number" value={draft.dealValue}
                      onChange={v => setDraft({ ...draft, dealValue: Number(v) || 0 })} />
          <AdminInput label="Expected close date" type="date" value={draft.closeDate}
                      onChange={v => setDraft({ ...draft, closeDate: v })} />

          {/* Life-event fields for drip */}
          <p className="text-[10px] uppercase tracking-[0.2em] mt-4 mb-2" style={{ color: C.gold }}>
            Relationship dates (power the drip campaigns)
          </p>
          <AdminInput label="Birthday" type="date" value={draft.birthday || ''}
                      onChange={v => setDraft({ ...draft, birthday: v })} />
          <AdminInput label="Home anniversary / move-in date" type="date" value={draft.moveInDate || ''}
                      onChange={v => setDraft({ ...draft, moveInDate: v })} />
          <AdminInput label="Spouse / partner name" value={draft.spouseName || ''}
                      onChange={v => setDraft({ ...draft, spouseName: v })} />
          <AdminInput label="Spouse birthday" type="date" value={draft.spouseBirthday || ''}
                      onChange={v => setDraft({ ...draft, spouseBirthday: v })} />
          <AdminSelect label="Preferred contact"
                       value={draft.preferredContact || 'text'}
                       onChange={v => setDraft({ ...draft, preferredContact: v })}
                       options={[
                         { value: 'text', label: 'Text' },
                         { value: 'call', label: 'Call' },
                         { value: 'email', label: 'Email' },
                       ]} />

          <AdminTextArea label="Notes" rows={4} value={draft.notes}
                         onChange={v => setDraft({ ...draft, notes: v })} />
          <div className="flex gap-2 mt-3">
            <AdminBtn onClick={saveEdits} variant="gold">Save changes</AdminBtn>
            <AdminBtn onClick={() => { setDraft(lead); setEdit(false); }} variant="ghost">Reset</AdminBtn>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoRow({ label, value, href, block }) {
  const content = href ? (
    <a href={href} className="underline decoration-dotted" style={{ color: C.ink }}>{value}</a>
  ) : (
    <span style={{ color: C.charcoal }}>{value}</span>
  );
  return (
    <div className={block ? '' : 'flex items-start justify-between gap-3'}>
      <p className="text-[10px] uppercase tracking-[0.18em]"
         style={{ color: C.muted, minWidth: block ? undefined : 90 }}>{label}</p>
      <p className={`text-sm ${block ? 'mt-1' : 'text-right'} flex-1`}>{content}</p>
    </div>
  );
}

function TaskRow({ task, onToggle }) {
  const overdue = !task.done && task.dueDate && new Date(task.dueDate) < new Date();
  return (
    <button onClick={onToggle}
      style={{
        backgroundColor: C.paper,
        border: `1px solid ${task.done ? C.success : (overdue ? C.ruby : C.line)}`,
        opacity: task.done ? 0.6 : 1,
      }}
      className="w-full p-3 rounded-lg flex items-center gap-3 text-left transition active:scale-[0.99]">
      {task.done
        ? <CheckCircle2 size={16} style={{ color: C.success, flexShrink: 0 }} />
        : <Circle size={16} style={{ color: overdue ? C.ruby : C.muted, flexShrink: 0 }} />}
      <div className="flex-1 min-w-0">
        <p className="text-sm" style={{
          color: C.charcoal, textDecoration: task.done ? 'line-through' : 'none'
        }}>{task.title}</p>
        {task.dueDate && (
          <p className="text-[10px]" style={{ color: overdue ? C.ruby : C.muted }}>
            Due {new Date(task.dueDate).toLocaleDateString()}
            {overdue && ' (overdue)'}
          </p>
        )}
      </div>
    </button>
  );
}

function PhotoPicker({ label, value, onChange, hint }) {
  const fileRef = useRef(null);
  const onPick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Image too large. Pick one under 2MB (try a compressed JPG).');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div className="mb-3">
      <label className="block text-[11px] uppercase tracking-[0.16em] mb-1.5" style={{ color: C.muted }}>
        {label}
      </label>
      <div className="flex items-center gap-3">
        {value ? (
          <img src={value} alt="" className="w-20 h-20 rounded-lg object-cover"
               style={{ border: `1px solid ${C.line}` }} />
        ) : (
          <div className="w-20 h-20 rounded-lg grid place-items-center"
               style={{ backgroundColor: C.cream, border: `1px dashed ${C.line}`, color: C.muted }}>
            <HomeIcon size={24} />
          </div>
        )}
        <div className="flex-1">
          <input ref={fileRef} type="file" accept="image/*" onChange={onPick} className="hidden" />
          <div className="flex gap-2">
            <AdminBtn onClick={() => fileRef.current?.click()} variant="primary">
              <Plus size={12} className="inline mr-1" />
              {value ? 'Replace' : 'Pick photo'}
            </AdminBtn>
            {value && (
              <AdminBtn onClick={() => onChange('')} variant="danger">Remove</AdminBtn>
            )}
          </div>
          {hint && <p className="text-[10px] mt-1" style={{ color: C.muted }}>{hint}</p>}
        </div>
      </div>
    </div>
  );
}

function ListingsEditor({ items, onChange, onReset }) {
  const [editing, setEditing] = useState(null);
  const blank = { id: '', status: 'Available', price: '', beds: 3, baths: 2, sqft: 1500,
                  address: '', city: '', highlights: [], photo: '' };
  const [draft, setDraft] = useState(blank);

  const startNew = () => { setDraft({ ...blank, id: `l_${Date.now()}` }); setEditing('new'); };
  const startEdit = (i) => { setDraft({ ...items[i] }); setEditing(i); };
  const cancel = () => { setEditing(null); setDraft(blank); };

  const save = () => {
    const next = [...items];
    if (editing === 'new') {
      next.push(draft);
    } else {
      next[editing] = draft;
    }
    onChange(next);
    cancel();
  };
  const del = (i) => {
    if (!confirm('Delete this listing?')) return;
    onChange(items.filter((_, idx) => idx !== i));
  };

  if (editing !== null) {
    return (
      <div>
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight mb-3">
          {editing === 'new' ? 'New listing' : 'Edit listing'}
        </p>
        <PhotoPicker label="Listing photo" value={draft.photo}
                     onChange={v => setDraft({ ...draft, photo: v })}
                     hint="Upload the primary hero photo. Max 2MB. Stored on this device." />
        <AdminInput label="Address" value={draft.address}
                    onChange={v => setDraft({ ...draft, address: v })} />
        <AdminInput label="City" value={draft.city}
                    onChange={v => setDraft({ ...draft, city: v })}
                    placeholder="Winter Haven, FL 33881" />
        <AdminInput label="Price" value={draft.price}
                    onChange={v => setDraft({ ...draft, price: v })}
                    placeholder="$319,900" />
        <div className="grid grid-cols-3 gap-2">
          <AdminInput label="Beds" type="number" value={draft.beds}
                      onChange={v => setDraft({ ...draft, beds: Number(v) || 0 })} />
          <AdminInput label="Baths" type="number" value={draft.baths}
                      onChange={v => setDraft({ ...draft, baths: Number(v) || 0 })} />
          <AdminInput label="Sq Ft" type="number" value={draft.sqft}
                      onChange={v => setDraft({ ...draft, sqft: Number(v) || 0 })} />
        </div>
        <AdminSelect label="Status" value={draft.status}
                     onChange={v => setDraft({ ...draft, status: v })}
                     options={[
                       { value: 'Available', label: 'Available' },
                       { value: 'Featured', label: 'Featured' },
                       { value: 'New Construction', label: 'New Construction' },
                       { value: 'Price Reduced', label: 'Price Reduced' },
                     ]} />
        <AdminTextArea label="Highlights (one per line)"
                       rows={5}
                       value={(draft.highlights || []).join('\n')}
                       onChange={v => setDraft({ ...draft, highlights: v.split('\n').filter(Boolean) })} />

        <div className="flex gap-2 mt-4">
          <AdminBtn onClick={save} variant="gold">Save listing</AdminBtn>
          <AdminBtn onClick={cancel} variant="ghost">Cancel</AdminBtn>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">
          Listings <span className="text-sm" style={{ color: C.muted }}>({items.length})</span>
        </p>
        <div className="flex gap-2">
          <AdminBtn onClick={startNew} variant="gold">+ New</AdminBtn>
          <AdminBtn onClick={onReset} variant="ghost">Reset to defaults</AdminBtn>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((l, i) => (
          <div key={l.id || i} className="rounded-lg p-3 flex items-center gap-3"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: C.ink }}>
                {l.address}
              </p>
              <p className="text-xs truncate" style={{ color: C.muted }}>
                {l.city} · {l.price} · {l.beds}BR/{l.baths}BA
              </p>
            </div>
            <AdminBtn onClick={() => startEdit(i)} variant="ghost">Edit</AdminBtn>
            <AdminBtn onClick={() => del(i)} variant="danger">Del</AdminBtn>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-center py-6" style={{ color: C.muted }}>No listings yet. Tap + New to add one.</p>
        )}
      </div>
    </div>
  );
}

function LiveEditor({ config, onChange, onReset }) {
  const [local, setLocal] = useState(config);
  useEffect(() => { setLocal(config); }, [config]);

  const field = (key, value) => setLocal({ ...local, [key]: value });
  const savedHint = JSON.stringify(local) === JSON.stringify(config) ? 'Saved' : 'Unsaved changes';
  const save = () => onChange(local);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">Live show</p>
        <div className="flex gap-2">
          <AdminBtn onClick={save} variant="gold">Save</AdminBtn>
          <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
        </div>
      </div>
      <p className="text-[10px] mb-3" style={{ color: savedHint === 'Saved' ? C.success : C.gold }}>
        {savedHint}
      </p>

      <AdminSelect label="Status" value={local.status}
                   onChange={v => field('status', v)}
                   options={[
                     { value: 'offair', label: 'Off air' },
                     { value: 'upcoming', label: 'Upcoming / Next show' },
                     { value: 'live', label: 'LIVE NOW' },
                   ]} />
      <AdminInput label="Show name" value={local.showName}
                  onChange={v => field('showName', v)} />
      <AdminInput label="Show tagline" value={local.showTagline}
                  onChange={v => field('showTagline', v)} />
      <AdminTextArea label="Show description" rows={3}
                     value={local.showDescription}
                     onChange={v => field('showDescription', v)} />
      <AdminInput label="Live embed URL (YouTube iframe URL)"
                  value={local.liveEmbedUrl}
                  onChange={v => field('liveEmbedUrl', v)}
                  placeholder="https://www.youtube.com/embed/live_stream?channel=UC..." />
      <AdminInput label="Live chat URL (YouTube chat iframe)"
                  value={local.liveChatUrl}
                  onChange={v => field('liveChatUrl', v)}
                  placeholder="https://www.youtube.com/live_chat?v=VIDEO_ID&embed_domain=..." />
      <AdminInput label="Zoom join URL"
                  value={local.zoomJoinUrl}
                  onChange={v => field('zoomJoinUrl', v)}
                  placeholder="https://zoom.us/j/1234567890?pwd=..." />
      <AdminInput label="Call-in phone"
                  value={local.callInPhone}
                  onChange={v => field('callInPhone', v)} />
      <AdminTextArea label="Upcoming shows (JSON)" rows={6}
                     value={JSON.stringify(local.upcoming ?? [], null, 2)}
                     onChange={v => {
                       try { field('upcoming', JSON.parse(v)); } catch {}
                     }} />
    </div>
  );
}

function MomentsEditor({ items, onChange, onReset }) {
  const update = (i, field, value) => {
    const next = [...items];
    next[i] = { ...next[i], [field]: value };
    onChange(next);
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">Brand moments</p>
        <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
      </div>
      {items.map((m, i) => (
        <div key={m.id} className="rounded-lg p-3 mb-3"
             style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
          <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: C.gold }}>
            Card {i + 1}
          </p>
          <AdminInput label="Headline" value={m.headline}
                      onChange={v => update(i, 'headline', v)} />
          <AdminInput label="Subline" value={m.subline}
                      onChange={v => update(i, 'subline', v)} />
          <AdminTextArea label="Share caption" rows={2}
                         value={m.shareText}
                         onChange={v => update(i, 'shareText', v)} />
        </div>
      ))}
    </div>
  );
}

function SponsorsEditor({ items, onChange, onReset }) {
  const update = (i, field, value) => {
    const next = [...items];
    next[i] = { ...next[i], [field]: value };
    onChange(next);
  };
  const add = () => onChange([...items, {
    id: `s_${Date.now()}`, name: '', tagline: '', category: 'Sponsor slot', cta: 'Learn more', url: '',
  }]);
  const del = (i) => {
    if (!confirm('Remove this sponsor?')) return;
    onChange(items.filter((_, idx) => idx !== i));
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">Sponsors</p>
        <div className="flex gap-2">
          <AdminBtn onClick={add} variant="gold">+ New</AdminBtn>
          <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
        </div>
      </div>
      {items.map((s, i) => (
        <div key={s.id} className="rounded-lg p-3 mb-3"
             style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gold }}>
              Sponsor {i + 1}
            </p>
            <AdminBtn onClick={() => del(i)} variant="danger">Del</AdminBtn>
          </div>
          <AdminInput label="Name" value={s.name}
                      onChange={v => update(i, 'name', v)} />
          <AdminInput label="Tagline" value={s.tagline}
                      onChange={v => update(i, 'tagline', v)} />
          <AdminInput label="Category" value={s.category}
                      onChange={v => update(i, 'category', v)} />
          <AdminInput label="CTA text" value={s.cta}
                      onChange={v => update(i, 'cta', v)} />
          <AdminInput label="URL" value={s.url}
                      onChange={v => update(i, 'url', v)} />
        </div>
      ))}
    </div>
  );
}

function StepListEditor({ items, onChange, accent = C.gold }) {
  const [editingIdx, setEditingIdx] = useState(null);
  const blank = { id: '', title: '', subtitle: '', summary: '', tip: '',
                  whatToExpect: [], documents: [] };
  const [draft, setDraft] = useState(blank);

  const startEdit = (i) => { setDraft({ ...items[i] }); setEditingIdx(i); };
  const startNew = () => { setDraft({ ...blank, id: `s_${Date.now()}` }); setEditingIdx('new'); };
  const cancel = () => { setEditingIdx(null); setDraft(blank); };

  const save = () => {
    const next = [...items];
    if (editingIdx === 'new') next.push(draft);
    else next[editingIdx] = { ...items[editingIdx], ...draft };
    onChange(next);
    cancel();
  };
  const del = (i) => {
    if (!confirm('Delete this step?')) return;
    onChange(items.filter((_, idx) => idx !== i));
  };
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  if (editingIdx !== null) {
    return (
      <div>
        <p style={{ ...serif, color: C.ink }} className="text-lg leading-tight mb-3">
          {editingIdx === 'new' ? 'New step' : 'Edit step'}
        </p>
        <AdminInput label="Title" value={draft.title}
                    onChange={v => setDraft({ ...draft, title: v })} />
        <AdminInput label="Subtitle (Step X · timing)" value={draft.subtitle}
                    onChange={v => setDraft({ ...draft, subtitle: v })} />
        <AdminTextArea label="Summary (one sentence)" rows={2}
                       value={draft.summary}
                       onChange={v => setDraft({ ...draft, summary: v })} />
        <AdminTextArea label="What to expect (one per line)" rows={4}
                       value={(draft.whatToExpect || []).join('\n')}
                       onChange={v => setDraft({ ...draft, whatToExpect: v.split('\n').filter(Boolean) })} />
        <AdminTextArea label="Documents needed (one per line)" rows={3}
                       value={(draft.documents || []).join('\n')}
                       onChange={v => setDraft({ ...draft, documents: v.split('\n').filter(Boolean) })} />
        <AdminTextArea label="Team tip" rows={2}
                       value={draft.tip}
                       onChange={v => setDraft({ ...draft, tip: v })} />
        <div className="flex gap-2 mt-4">
          <AdminBtn onClick={save} variant="gold">Save step</AdminBtn>
          <AdminBtn onClick={cancel} variant="ghost">Cancel</AdminBtn>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>
          {items.length} steps
        </p>
        <AdminBtn onClick={startNew} variant="gold">+ New step</AdminBtn>
      </div>
      <div className="space-y-2">
        {items.map((s, i) => (
          <div key={s.id || i} className="rounded-lg p-3 flex items-center gap-3"
               style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
            <span className="digital-mono text-sm" style={{ color: C.gold, minWidth: 20 }}>{i + 1}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: C.ink }}>{s.title}</p>
              <p className="text-[11px] truncate" style={{ color: C.muted }}>{s.subtitle}</p>
            </div>
            <button onClick={() => move(i, -1)} disabled={i === 0}
              style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.line}`, opacity: i === 0 ? 0.3 : 1 }}
              className="w-7 h-7 rounded text-xs">↑</button>
            <button onClick={() => move(i, 1)} disabled={i === items.length - 1}
              style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.line}`, opacity: i === items.length - 1 ? 0.3 : 1 }}
              className="w-7 h-7 rounded text-xs">↓</button>
            <AdminBtn onClick={() => startEdit(i)} variant="ghost">Edit</AdminBtn>
            <AdminBtn onClick={() => del(i)} variant="danger">Del</AdminBtn>
          </div>
        ))}
      </div>
    </div>
  );
}

function JourneysEditor({ buyer, setBuyer, resetBuyer,
                         seller, setSeller, resetSeller,
                         investor, setInvestor, resetInvestor }) {
  const [track, setTrack] = useState('buyer');
  const current =
    track === 'buyer' ? { items: buyer, set: setBuyer, reset: resetBuyer, label: 'Buyer' } :
    track === 'seller' ? { items: seller, set: setSeller, reset: resetSeller, label: 'Seller' } :
    { items: investor, set: setInvestor, reset: resetInvestor, label: 'Investor' };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">Journeys</p>
        <AdminBtn onClick={current.reset} variant="ghost">Reset {current.label}</AdminBtn>
      </div>
      <div className="flex gap-2 mb-4">
        {['buyer', 'seller', 'investor'].map(t => {
          const active = track === t;
          return (
            <button key={t} onClick={() => setTrack(t)}
              style={{
                backgroundColor: active ? C.ink : C.paper,
                color: active ? C.cream : C.ink,
                border: `1px solid ${active ? C.ink : C.line}`,
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold capitalize">
              {t}
            </button>
          );
        })}
      </div>
      <StepListEditor items={current.items} onChange={current.set} />
    </div>
  );
}

function ProgramsEditor({ items, onChange, onReset }) {
  const update = (i, key, value) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: value };
    onChange(next);
  };
  const add = () => onChange([...items, {
    id: `prog_${Date.now()}`, pill: 'New', title: 'New program', subtitle: '',
    bullets: [], cta: 'Learn more', ctaType: 'question',
  }]);
  const del = (i) => {
    if (!confirm('Delete this program?')) return;
    onChange(items.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">Programs</p>
        <div className="flex gap-2">
          <AdminBtn onClick={add} variant="gold">+ New</AdminBtn>
          <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
        </div>
      </div>
      {items.map((p, i) => (
        <div key={p.id} className="rounded-lg p-3 mb-3"
             style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gold }}>
              Program {i + 1}
            </p>
            <AdminBtn onClick={() => del(i)} variant="danger">Del</AdminBtn>
          </div>
          <AdminInput label="Title" value={p.title} onChange={v => update(i, 'title', v)} />
          <AdminInput label="Subtitle" value={p.subtitle} onChange={v => update(i, 'subtitle', v)} />
          <AdminInput label="Pill (short badge)" value={p.pill} onChange={v => update(i, 'pill', v)}
                      hint="e.g. 'Up to $35K', '6% Flex Cash'" />
          <AdminTextArea label="Bullets (one per line)" rows={4}
                         value={(p.bullets || []).join('\n')}
                         onChange={v => update(i, 'bullets', v.split('\n').filter(Boolean))} />
          <AdminInput label="CTA button text" value={p.cta} onChange={v => update(i, 'cta', v)} />
          <AdminSelect label="CTA action" value={p.ctaType}
            onChange={v => update(i, 'ctaType', v)}
            options={[
              { value: 'question', label: 'Ask a question' },
              { value: 'preapproval', label: 'Request pre-approval help' },
              { value: 'showing', label: 'Schedule a showing' },
            ]} />
        </div>
      ))}
    </div>
  );
}

function ContentEditor({ testimonials, setTestimonials, resetTestimonials,
                        wins, setWins, resetWins,
                        workshops, setWorkshops, resetWorkshops }) {
  const [subsec, setSubsec] = useState('testimonials');

  return (
    <div>
      <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight mb-3">Content</p>
      <div className="flex gap-2 mb-4">
        {['testimonials', 'wins', 'workshops'].map(s => {
          const active = subsec === s;
          return (
            <button key={s} onClick={() => setSubsec(s)}
              style={{
                backgroundColor: active ? C.ink : C.paper,
                color: active ? C.cream : C.ink,
                border: `1px solid ${active ? C.ink : C.line}`,
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold capitalize">
              {s}
            </button>
          );
        })}
      </div>

      {subsec === 'testimonials' && (
        <TestimonialsEditor items={testimonials} onChange={setTestimonials} onReset={resetTestimonials} />
      )}
      {subsec === 'wins' && (
        <WinsEditor items={wins} onChange={setWins} onReset={resetWins} />
      )}
      {subsec === 'workshops' && (
        <WorkshopsEditor items={workshops} onChange={setWorkshops} onReset={resetWorkshops} />
      )}
    </div>
  );
}

function TestimonialsEditor({ items, onChange, onReset }) {
  const update = (i, key, value) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: value };
    onChange(next);
  };
  const add = () => onChange([...items, { id: `t_${Date.now()}`, quote: '', author: '', stars: 5 }]);
  const del = (i) => {
    if (!confirm('Delete this testimonial?')) return;
    onChange(items.filter((_, idx) => idx !== i));
  };
  return (
    <div>
      <div className="flex gap-2 mb-3">
        <AdminBtn onClick={add} variant="gold">+ New</AdminBtn>
        <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
      </div>
      {items.map((t, i) => (
        <div key={t.id} className="rounded-lg p-3 mb-3"
             style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gold }}>
              Quote {i + 1}
            </p>
            <AdminBtn onClick={() => del(i)} variant="danger">Del</AdminBtn>
          </div>
          <AdminTextArea label="Quote" rows={3} value={t.quote} onChange={v => update(i, 'quote', v)} />
          <AdminInput label="Author / role" value={t.author} onChange={v => update(i, 'author', v)} />
        </div>
      ))}
    </div>
  );
}

function WinsEditor({ items, onChange, onReset }) {
  const update = (i, key, value) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: value };
    onChange(next);
  };
  const add = () => onChange([...items, {
    id: `w_${Date.now()}`, badge: 'New win', quote: '', attribution: '',
    photo: '/brand/hero-just-leased.jpg',
  }]);
  const del = (i) => {
    if (!confirm('Delete this win?')) return;
    onChange(items.filter((_, idx) => idx !== i));
  };
  return (
    <div>
      <div className="flex gap-2 mb-3">
        <AdminBtn onClick={add} variant="gold">+ New</AdminBtn>
        <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
      </div>
      {items.map((w, i) => (
        <div key={w.id} className="rounded-lg p-3 mb-3"
             style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gold }}>
              Win {i + 1}
            </p>
            <AdminBtn onClick={() => del(i)} variant="danger">Del</AdminBtn>
          </div>
          <PhotoPicker label="Photo" value={w.photo?.startsWith('data:') ? w.photo : ''}
                       onChange={v => update(i, 'photo', v || '/brand/hero-just-leased.jpg')}
                       hint="Upload a closing photo. Leave blank to use default." />
          <AdminInput label="Badge" value={w.badge} onChange={v => update(i, 'badge', v)}
                      hint="e.g. 'First-Time Buyers', 'Out-of-State Move'" />
          <AdminTextArea label="Story / quote" rows={3}
                         value={w.quote} onChange={v => update(i, 'quote', v)} />
          <AdminInput label="Attribution" value={w.attribution}
                      onChange={v => update(i, 'attribution', v)}
                      hint="e.g. 'NY → FL relocation · Just Leased'" />
        </div>
      ))}
    </div>
  );
}

function WorkshopsEditor({ items, onChange, onReset }) {
  const update = (i, key, value) => {
    const next = [...items];
    next[i] = { ...next[i], [key]: value };
    onChange(next);
  };
  const add = () => onChange([...items, {
    id: `ws_${Date.now()}`, title: 'New workshop', detail: '', venue: '', rsvp: 'RSVP',
  }]);
  const del = (i) => {
    if (!confirm('Delete this workshop?')) return;
    onChange(items.filter((_, idx) => idx !== i));
  };
  return (
    <div>
      <div className="flex gap-2 mb-3">
        <AdminBtn onClick={add} variant="gold">+ New</AdminBtn>
        <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
      </div>
      {items.map((w, i) => (
        <div key={w.id} className="rounded-lg p-3 mb-3"
             style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] uppercase tracking-wider" style={{ color: C.gold }}>
              Workshop {i + 1}
            </p>
            <AdminBtn onClick={() => del(i)} variant="danger">Del</AdminBtn>
          </div>
          <AdminInput label="Title" value={w.title} onChange={v => update(i, 'title', v)} />
          <AdminTextArea label="Detail" rows={2} value={w.detail}
                         onChange={v => update(i, 'detail', v)} />
          <AdminInput label="Venue" value={w.venue} onChange={v => update(i, 'venue', v)} />
          <AdminInput label="RSVP label" value={w.rsvp} onChange={v => update(i, 'rsvp', v)} />
        </div>
      ))}
    </div>
  );
}

function TeamEditor({ team, onChange, onReset }) {
  const T = team || {};
  const set = (key, value) => onChange({ ...T, [key]: value });
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight">Team bios</p>
        <AdminBtn onClick={onReset} variant="ghost">Reset</AdminBtn>
      </div>

      <div className="rounded-lg p-3 mb-4"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: C.gold }}>
          Agent 1 — primary
        </p>
        <PhotoPicker label="Photo (optional upload)" value={T.photo1?.startsWith('data:') ? T.photo1 : ''}
                     onChange={v => set('photo1', v || AGENT.photoUrl)} />
        <AdminInput label="Name" value={T.name1} onChange={v => set('name1', v)} />
        <AdminInput label="Title" value={T.title1} onChange={v => set('title1', v)} />
        <AdminInput label="License #" value={T.license1} onChange={v => set('license1', v)} />
        <AdminInput label="Phone" value={T.phone1} onChange={v => set('phone1', v)} />
        <AdminInput label="Email" value={T.email1} onChange={v => set('email1', v)} />
        <AdminTextArea label="Bio" rows={3} value={T.bio1} onChange={v => set('bio1', v)} />
      </div>

      <div className="rounded-lg p-3"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: C.gold }}>
          Agent 2 — co-agent
        </p>
        <PhotoPicker label="Photo (optional upload)" value={T.photo2?.startsWith('data:') ? T.photo2 : ''}
                     onChange={v => set('photo2', v || AGENT.coAgent.photoUrl)} />
        <AdminInput label="Name" value={T.name2} onChange={v => set('name2', v)} />
        <AdminInput label="Title" value={T.title2} onChange={v => set('title2', v)} />
        <AdminInput label="License #" value={T.license2} onChange={v => set('license2', v)} />
        <AdminInput label="Phone" value={T.phone2} onChange={v => set('phone2', v)} />
        <AdminInput label="Email" value={T.email2} onChange={v => set('email2', v)} />
        <AdminTextArea label="Bio" rows={3} value={T.bio2} onChange={v => set('bio2', v)} />
      </div>
    </div>
  );
}

function CloudSyncPanel({ all, setAll, flash }) {
  const existing = getCloudCfg();
  const [url, setUrl] = useState(existing?.url || '');
  const [anonKey, setAnonKey] = useState(existing?.anonKey || '');
  const [status, setStatus] = useState(existing ? 'connected' : 'not_connected');
  const [busy, setBusy] = useState(false);

  const keys = [
    'listings', 'live', 'moments', 'sponsors',
    'buyerSteps', 'sellerSteps', 'investorSteps',
    'programs', 'testimonials', 'wins', 'workshops',
    'crm', 'team',
  ];
  // Map storage key -> state key
  const allMap = {
    listings: { get: () => all.listings, set: setAll.setListings },
    live:      { get: () => all.liveConfig, set: setAll.setLiveConfig },
    moments:   { get: () => all.moments, set: setAll.setMoments },
    sponsors:  { get: () => all.sponsors, set: setAll.setSponsors },
    buyerSteps:{ get: () => all.buyerSteps, set: setAll.setBuyerSteps },
    sellerSteps:{get: () => all.sellerSteps, set: setAll.setSellerSteps },
    investorSteps:{get: () => all.investorSteps, set: setAll.setInvestorSteps },
    programs:  { get: () => all.programs, set: setAll.setPrograms },
    testimonials:{get: () => all.testimonials, set: setAll.setTestimonials },
    wins:      { get: () => all.wins, set: setAll.setWins },
    workshops: { get: () => all.workshops, set: setAll.setWorkshops },
    crm:       { get: () => all.crm, set: setAll.setCrm },
    team:      { get: () => all.team, set: setAll.setTeam },
  };

  const saveCfg = () => {
    if (!url.trim() || !anonKey.trim()) {
      flash('URL and key required');
      return;
    }
    setCloudCfg({ url: url.trim(), anonKey: anonKey.trim() });
    flash('Saved. Reload app to pull.');
    setStatus('connected');
  };
  const removeCfg = () => {
    if (!confirm('Disconnect cloud sync? Your local data stays intact.')) return;
    clearCloudCfg();
    setUrl(''); setAnonKey('');
    setStatus('not_connected');
    flash('Disconnected.');
  };

  const test = async () => {
    setBusy(true);
    setCloudCfg({ url: url.trim(), anonKey: anonKey.trim() });
    try {
      await cloudTestConnection();
      setStatus('connected');
      flash('Connection OK \u2713');
    } catch (e) {
      setStatus('error');
      flash('Connection failed \u2014 check URL/key + SQL');
    }
    setBusy(false);
  };

  const pushAll = async () => {
    if (!confirm('Push every section from this device to the cloud? Overwrites cloud copies.')) return;
    setBusy(true);
    try {
      for (const k of keys) {
        await cloudWriteContent(k, allMap[k].get());
      }
      flash('Pushed to cloud \u2713');
    } catch (e) {
      flash('Push failed: ' + e.message);
    }
    setBusy(false);
  };

  const pullAll = async () => {
    if (!confirm('Pull every section from the cloud onto this device? Overwrites local copies.')) return;
    setBusy(true);
    try {
      for (const k of keys) {
        const v = await cloudReadContent(k);
        if (v !== null && v !== undefined) {
          allMap[k].set(v);
        }
      }
      flash('Pulled from cloud \u2713');
    } catch (e) {
      flash('Pull failed: ' + e.message);
    }
    setBusy(false);
  };

  const statusColor = status === 'connected' ? C.success : status === 'error' ? C.ruby : C.muted;
  const statusLabel = status === 'connected' ? 'Connected' :
                      status === 'error' ? 'Connection error' : 'Not connected';

  return (
    <div className="rounded-lg p-4 mb-3"
         style={{ backgroundColor: C.paper, border: `2px solid ${C.gold}` }}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold" style={{ color: C.ink }}>
          <span className="inline-flex items-center gap-1">
            <Globe size={13} style={{ color: C.gold }} /> Cloud sync (Supabase)
          </span>
        </p>
        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: statusColor, color: C.cream }}>
          {statusLabel}
        </span>
      </div>
      <p className="text-xs mb-3" style={{ color: C.muted }}>
        Syncs every admin edit to Supabase. Stacy, your website, and all your devices see the same data. Public visitors see the latest content instantly.
      </p>

      <AdminInput label="Supabase Project URL" value={url}
                  onChange={setUrl}
                  placeholder="https://xxxxx.supabase.co" />
      <AdminInput label="anon public key" value={anonKey}
                  onChange={setAnonKey}
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  hint="Settings \u2192 API in Supabase dashboard. The 'anon' key is safe to expose." />

      <div className="flex flex-wrap gap-2 mt-2">
        <AdminBtn onClick={saveCfg} variant="primary">Save</AdminBtn>
        <AdminBtn onClick={test} variant="gold">
          {busy ? 'Testing\u2026' : 'Test connection'}
        </AdminBtn>
        {existing && (
          <>
            <AdminBtn onClick={pushAll} variant="ghost">Push local \u2192 cloud</AdminBtn>
            <AdminBtn onClick={pullAll} variant="ghost">Pull cloud \u2192 local</AdminBtn>
            <AdminBtn onClick={removeCfg} variant="danger">Disconnect</AdminBtn>
          </>
        )}
      </div>
      <p className="text-[10px] mt-3" style={{ color: C.muted }}>
        First-time setup? See <code className="digital-mono">CRM-BACKEND-SETUP.md</code> for the SQL to run in Supabase.
      </p>
    </div>
  );
}

function DataPanel({ all, setAll, resetAll, onLock, getPin, setPin, clearPin }) {
  const [msg, setMsg] = useState('');
  const [remoteUrl, setRemoteUrl] = useState(() => {
    try { return window.localStorage.getItem('lt_remote_url') || ''; } catch { return ''; }
  });

  const buildPayload = () => ({ ...all, exportedAt: new Date().toISOString() });

  const exportAll = () => {
    const payload = buildPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lewis-team-content-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    flash('Exported \u2713');
  };

  const importAll = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        applyPayload(data);
        flash('Imported \u2713');
      } catch {
        flash('Invalid file');
      }
    };
    reader.readAsText(file);
  };

  const applyPayload = (data) => {
    if (data.listings) setAll.setListings(data.listings);
    if (data.liveConfig) setAll.setLiveConfig(data.liveConfig);
    if (data.moments) setAll.setMoments(data.moments);
    if (data.sponsors) setAll.setSponsors(data.sponsors);
    if (data.buyerSteps) setAll.setBuyerSteps(data.buyerSteps);
    if (data.sellerSteps) setAll.setSellerSteps(data.sellerSteps);
    if (data.investorSteps) setAll.setInvestorSteps(data.investorSteps);
    if (data.programs) setAll.setPrograms(data.programs);
    if (data.testimonials) setAll.setTestimonials(data.testimonials);
    if (data.wins) setAll.setWins(data.wins);
    if (data.workshops) setAll.setWorkshops(data.workshops);
    if (data.team) setAll.setTeam(data.team);
  };

  const flash = (txt) => { setMsg(txt); setTimeout(() => setMsg(''), 2200); };

  const generateShareLink = async () => {
    try {
      const payload = JSON.stringify(buildPayload());
      const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(payload))));
      const url = `${window.location.origin}${window.location.pathname}#sync=${encoded}`;
      if (url.length > 32000) {
        flash('Too much content for URL. Use export file.');
        return;
      }
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        flash('Share link copied \u2713');
      } else {
        prompt('Copy this link:', url);
      }
    } catch {
      flash('Failed to build link');
    }
  };

  const saveRemoteUrl = () => {
    try {
      if (remoteUrl) {
        window.localStorage.setItem('lt_remote_url', remoteUrl);
        flash('Remote URL saved \u2713');
      } else {
        window.localStorage.removeItem('lt_remote_url');
        flash('Remote URL cleared');
      }
    } catch { flash('Failed'); }
  };

  const pullRemoteNow = async () => {
    if (!remoteUrl) { flash('Set a URL first'); return; }
    try {
      const res = await fetch(remoteUrl, { cache: 'no-store' });
      const data = await res.json();
      applyPayload(data);
      flash('Pulled from remote \u2713');
    } catch {
      flash('Fetch failed');
    }
  };

  const changePin = () => {
    const next = prompt('Set a new PIN (4+ digits, empty to remove):');
    if (next === null) return;
    if (next === '') { clearPin(); flash('PIN removed'); return; }
    if (!/^\d{4,}$/.test(next)) { flash('Invalid PIN'); return; }
    setPin(next);
    flash('PIN updated \u2713');
  };

  return (
    <div>
      <p style={{ ...serif, color: C.ink }} className="text-xl leading-tight mb-4">
        Data &amp; sync
      </p>

      {/* Supabase Cloud Sync — the real cross-device backend */}
      <CloudSyncPanel all={all} setAll={setAll} flash={flash} />

      {/* Share via URL — quick cross-device one-off */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-sm font-semibold mb-1" style={{ color: C.ink }}>
          <span className="inline-flex items-center gap-1">
            <Share2 size={13} style={{ color: C.gold }} /> Share via link (one-off)
          </span>
        </p>
        <p className="text-xs mb-3" style={{ color: C.muted }}>
          Copies a URL that contains your whole config. Quick way to send one batch of edits without cloud sync.
        </p>
        <AdminBtn onClick={generateShareLink} variant="gold">
          Copy share link
        </AdminBtn>
      </div>

      {/* Remote JSON sync */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-sm font-semibold mb-1" style={{ color: C.ink }}>
          <span className="inline-flex items-center gap-1">
            <Globe size={13} style={{ color: C.gold }} /> Remote JSON sync
          </span>
        </p>
        <p className="text-xs mb-3" style={{ color: C.muted }}>
          Point the app at a public JSON URL (jsonbin.io, GitHub Gist raw, any hosted JSON). On app load, content is fetched from that URL \u2014 Stacy and every visitor see the same data.
        </p>
        <AdminInput label="Remote JSON URL" value={remoteUrl}
                    onChange={setRemoteUrl}
                    placeholder="https://api.jsonbin.io/v3/b/XXXX/latest" />
        <div className="flex gap-2 mt-2">
          <AdminBtn onClick={saveRemoteUrl} variant="primary">Save URL</AdminBtn>
          <AdminBtn onClick={pullRemoteNow} variant="gold">Pull now</AdminBtn>
        </div>
        <p className="text-[10px] mt-2" style={{ color: C.muted }}>
          Tip: create a free bin at jsonbin.io, paste the "Public URL" here, and upload your exported JSON as the bin contents.
        </p>
      </div>

      {/* File export */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-sm font-semibold mb-1" style={{ color: C.ink }}>
          <span className="inline-flex items-center gap-1">
            <Download size={13} style={{ color: C.gold }} /> Export JSON file
          </span>
        </p>
        <p className="text-xs mb-3" style={{ color: C.muted }}>
          Download a JSON backup of everything.
        </p>
        <AdminBtn onClick={exportAll} variant="primary">Download JSON</AdminBtn>
      </div>

      {/* File import */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-sm font-semibold mb-1" style={{ color: C.ink }}>Import JSON file</p>
        <p className="text-xs mb-3" style={{ color: C.muted }}>
          Upload a previously-exported JSON. Overwrites matching sections.
        </p>
        <label style={{ backgroundColor: C.ink, color: C.cream }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer">
          <Plus size={12} /> Choose file
          <input type="file" accept="application/json" onChange={importAll} className="hidden" />
        </label>
      </div>

      {/* PIN info */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}>
        <p className="text-sm font-semibold mb-1" style={{ color: C.ink }}>
          <span className="inline-flex items-center gap-1">
            <Key size={13} style={{ color: C.gold }} /> Admin PIN
          </span>
        </p>
        <p className="text-xs" style={{ color: C.muted }}>
          PIN is locked to <strong className="digital-mono" style={{ color: C.ink }}>{ADMIN_PIN}</strong>. To change, a developer needs to edit <code className="digital-mono">ADMIN_PIN</code> in the code.
        </p>
      </div>

      {/* Reset */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.paper, border: `1px solid ${C.ruby}` }}>
        <p className="text-sm font-semibold mb-1" style={{ color: C.ruby }}>Reset all content</p>
        <p className="text-xs mb-3" style={{ color: C.muted }}>
          Erase every edit. Restores the originals shipped with the app.
        </p>
        <AdminBtn onClick={() => { if (confirm('Reset ALL content to defaults?')) resetAll(); }}
                  variant="danger">
          Reset to defaults
        </AdminBtn>
      </div>

      {/* Lock */}
      <div className="rounded-lg p-4 mb-3"
           style={{ backgroundColor: C.ink, color: C.cream }}>
        <p className="text-sm font-semibold mb-1">Lock admin mode</p>
        <p className="text-xs mb-3 opacity-80">
          Hides the Admin button. Unlock by tapping the LT logo 5 times or visiting <code className="digital-mono">?admin=1</code>.
        </p>
        <AdminBtn onClick={onLock} variant="ghost">Lock admin</AdminBtn>
      </div>

      {msg && (
        <p className="text-sm text-center" style={{ color: C.success }}>{msg}</p>
      )}
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
    <ModalShell title="Real estate glossary" sub="Plain-English definitions." onClose={onClose}>
      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search terms..."
        style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.charcoal }}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none mb-3" />
      <div className="space-y-4 max-h-[60vh] overflow-y-auto">
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
    </ModalShell>
  );
}

function ModalShell({ title, sub, onClose, footer, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ backgroundColor: 'rgba(15,42,63,0.55)' }}
      onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
        style={{ backgroundColor: C.cream, maxHeight: '92vh' }}
        className="w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col">
        <div className="p-5 flex items-start gap-3"
             style={{ borderBottom: `1px solid ${C.line}` }}>
          <div className="flex-1">
            <p style={serif} className="text-xl leading-tight">{title}</p>
            {sub && <p className="text-xs mt-1" style={{ color: C.muted }}>{sub}</p>}
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full grid place-items-center"
            style={{ backgroundColor: C.paper }}>
            <X size={16} />
          </button>
        </div>
        <div className="p-5 space-y-3 overflow-y-auto">{children}</div>
        {footer && (
          <div className="p-5" style={{ borderTop: `1px solid ${C.line}` }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

function SubmitBtn({ onClick, label }) {
  return (
    <button onClick={onClick}
      style={{ backgroundColor: C.ink, color: C.cream }}
      className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition">
      {label} <Send size={15} />
    </button>
  );
}

function LightField({ label, value, onChange, placeholder, type = 'text' }) {
  const isNumeric = type === 'number' || type === 'tel';
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.18em] mb-2" style={{ color: C.muted }}>
        {label}
      </label>
      <input type={type} value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={isNumeric ? 'decimal' : undefined}
        style={{
          backgroundColor: C.paper,
          border: `1px solid ${isNumeric ? C.gold : C.line}`,
          color: isNumeric ? C.ink : C.charcoal,
          boxShadow: isNumeric ? `inset 0 0 8px rgba(200,152,90,0.08)` : 'none',
        }}
        className={`w-full px-3.5 py-2.5 rounded-lg text-sm outline-none no-spin ${
          isNumeric ? 'digital-readout text-base tracking-wide' : ''
        }`} />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: C.muted }}>{label}</label>
      <textarea value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, color: C.charcoal }}
        className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none" />
    </div>
  );
}

function BackBtn({ onBack, label }) {
  return (
    <button onClick={onBack} className="flex items-center gap-1 text-xs"
      style={{ color: C.muted }}>
      <ArrowLeft size={14} /> {label}
    </button>
  );
}
