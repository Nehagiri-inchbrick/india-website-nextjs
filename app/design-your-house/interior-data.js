export const JUMP_LINKS = [
  { href: '#studio', label: 'Style studio' },
  { href: '#rooms', label: 'Room ideas' },
  { href: '#moodboard', label: 'Moodboard' },
  { href: '#packages', label: 'Packages' },
  { href: '#process', label: 'How it works', hot: true },
];

export const STYLES = [
  {
    id: 'modern-luxe',
    name: 'Modern Luxe',
    tag: 'Marble · Brass · Mood lighting',
    desc: 'Sculpted furniture, layered textures, and quiet luxury palettes for urban apartments and penthouses.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    swatches: ['#1a1a1a', '#c29a63', '#f5f0e8', '#8b7355'],
    highlights: ['Statement foyer', 'Custom wardrobes', 'Hotel-style bath'],
  },
  {
    id: 'japandi',
    name: 'Japandi Calm',
    tag: 'Warm minimal · Natural oak',
    desc: 'Japanese restraint meets Scandinavian warmth — breathable layouts, linen, stone, and soft daylight.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
    swatches: ['#e8e2d9', '#b8a99a', '#5c5346', '#2f3a32'],
    highlights: ['Low-profile seating', 'Hidden storage', 'Zen corners'],
  },
  {
    id: 'heritage',
    name: 'Modern Indian',
    tag: 'Jaali · Teak · Handloom',
    desc: 'Contemporary homes with artisan craft — brass inlay, carved panels, and jewel-tone accents without clutter.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    swatches: ['#7c2d12', '#c29a63', '#1e3a2f', '#fdf6ec'],
    highlights: ['Pooja integration', 'Courtyard seating', 'Heritage textiles'],
  },
  {
    id: 'art-deco',
    name: 'Art Deco Revival',
    tag: 'Geometry · Velvet · Brass',
    desc: 'Bold symmetry, fluted details, and dramatic lighting for dining and entertainment zones.',
    image: 'https://images.unsplash.com/photo-1618220179426-227c13a17f65?auto=format&fit=crop&w=1400&q=80',
    swatches: ['#0f2339', '#d4af37', '#722f37', '#f8f4ef'],
    highlights: ['Feature bar unit', 'Fluted panels', 'Statement mirrors'],
  },
  {
    id: 'coastal',
    name: 'Coastal Breeze',
    tag: 'Sand · Rattan · Open air',
    desc: 'Light-filled second homes and sea-facing flats with relaxed furniture and washed neutral tones.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
    swatches: ['#eef6f9', '#94a3b8', '#cbd5e1', '#0ea5e9'],
    highlights: ['Indoor-outdoor flow', 'Woven accents', 'Soft blues'],
  },
  {
    id: 'maximal',
    name: 'Curated Maximal',
    tag: 'Gallery walls · Color blocks',
    desc: 'Personality-first interiors — collected art, saturated hues, and bespoke joinery for creative families.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80',
    swatches: ['#c9242b', '#0f2339', '#fbbf24', '#6366f1'],
    highlights: ['Art-led living', 'Bold kitchens', 'Playful kids zones'],
  },
];

export const ROOMS = [
  {
    name: 'Living & lounge',
    copy: 'Layered seating, acoustic panels, and lighting scenes for movie nights and guests.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    icon: 'fa-couch',
  },
  {
    name: 'Master suite',
    copy: 'Walk-in wardrobes, upholstered headboards, and spa-grade ensuite layouts.',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80',
    icon: 'fa-bed',
  },
  {
    name: 'Kitchen & dining',
    copy: 'Modular systems, quartz counters, and banquettes sized for Indian entertaining.',
    img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
    icon: 'fa-utensils',
  },
  {
    name: 'Work & study',
    copy: 'Ergonomic desks, hidden cable routes, and acoustic pods for hybrid work.',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
    icon: 'fa-laptop-house',
  },
  {
    name: 'Kids & flex',
    copy: 'Grow-with-me furniture, chalk walls, and convertible guest rooms.',
    img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80',
    icon: 'fa-child-reaching',
  },
];

export const MOODBOARD = [
  { img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=800&q=80', span: 'wide' },
  { img: 'https://images.unsplash.com/photo-1631889992176-722e4ed0423e?auto=format&fit=crop&w=600&q=80', span: 'tall' },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80', span: 'sq' },
  { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80', span: 'sq' },
  { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', span: 'wide' },
  { img: 'https://images.unsplash.com/photo-1618220179426-227c13a17f65?auto=format&fit=crop&w=600&q=80', span: 'tall' },
];

export const PACKAGES = [
  {
    name: 'Essential styling',
    price: 'From ₹ 4.5L',
    note: '2BHK · 6–8 weeks',
    features: ['Concept board & 3D views', 'Furniture & decor sourcing', 'Single-site styling day'],
    accent: false,
  },
  {
    name: 'Full home interior',
    price: 'From ₹ 12L',
    note: '3BHK · turnkey',
    features: ['Modular kitchen & wardrobes', 'False ceiling & lighting plan', 'Project management on site'],
    accent: true,
  },
  {
    name: 'Luxury signature',
    price: 'Custom quote',
    note: 'Villa · designer-led',
    features: ['Bespoke joinery & imports', 'Art curation & soft furnishings', 'Dedicated design lead'],
    accent: false,
  },
];

export const PROCESS = [
  { step: '01', title: 'Discover', copy: 'Site visit, lifestyle questionnaire, and budget alignment.' },
  { step: '02', title: 'Design', copy: 'Moodboards, 3D renders, material library, and sign-off.' },
  { step: '03', title: 'Build', copy: 'Modular factory + on-site civil, MEP, and QC checkpoints.' },
  { step: '04', title: 'Handover', copy: 'Styling day, snag list closure, and care guide.' },
];
