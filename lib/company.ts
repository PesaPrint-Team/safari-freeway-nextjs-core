export const COMPANY = {
  brand: 'Safari Freeway',
  legalName: 'Auto Freeway Limited',
  email: 'info@autofreeway.co.ke',
  phoneDisplay: '+254 726 025 019',
  phoneIntl: '254726025019',
  city: 'Nairobi, Kenya',
  website: 'https://www.safarifreeway.com'
} as const;

export const NAV_ITEMS = [
  ['Fleet', 'fleet'],
  ['Solutions', 'solutions'],
  ['ROI', 'roi'],
  ['Dashboard', 'dashboard'],
  ['Finance', 'finance'],
  ['Book Demo', 'book-demo']
] as const;

export const STATS = [
  { label: 'Real-world range', value: 'Up to 340 km' },
  { label: 'Battery warranty', value: '5 years' },
  { label: 'Fast charging', value: 'Up to 80 kW DC' },
  { label: 'Built for', value: 'East African roads' }
] as const;

export const TRUST = [
  'Electric commercial fleet portfolio tailored to East African transport and logistics operators',
  'LFP battery platforms designed for lower running costs and fleet durability',
  'Dealer, OEM, and local assembly strategy built for uptime and support',
  'Fleet-ready models for shuttle, cargo, refrigerated, and utility operations'
] as const;

export const FLEET = [
  {
    name: 'Safari Chui High Roof',
    type: '17-Seater Shuttle',
    range: '300–360 km',
    battery: '65.17 kWh LFP',
    fastCharge: '40 kW DC',
    useCase: 'Airport transfers, staff transport, hotel shuttles, SACCO routes'
  },
  {
    name: 'Safari Chui Wide Body',
    type: '17-Seater City Shuttle',
    range: '250 km',
    battery: '41.9 kWh LFP',
    fastCharge: '40 kW DC',
    useCase: 'CBD routes, estates, school runs, urban transport'
  },
  {
    name: 'Safari Cheetar',
    type: 'Cargo / Reefer Van',
    range: '225–250 km',
    battery: '41.9 kWh LFP',
    fastCharge: '40 kW DC',
    useCase: 'Last-mile delivery, parcel logistics, cold-chain distribution'
  },
  {
    name: 'Safari Ndovu',
    type: 'Electric Chassis Truck',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'Bus bodies, school buses, cargo builds, fleet conversions'
  },
  {
    name: 'Safari Kiboko',
    type: 'Refrigerated Light Truck',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'Cold-chain, food distribution, pharma delivery'
  },
  {
    name: 'Safari Swara',
    type: 'Passenger Tricycle',
    range: '110 km',
    battery: '60–72V compatible',
    fastCharge: '6–8 hrs AC',
    useCase: 'Short-hop urban passenger transport, estate taxis, feeder routes'
  }
] as const;

export const VISUALS = [
  {
    title: 'Safari Chui Shuttle',
    subtitle: 'Airport, hotel, staff, and route shuttle operations',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Electric Cargo Van',
    subtitle: 'Last-mile logistics and urban delivery fleets',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Box Truck Platform',
    subtitle: 'Commercial hauling and protected cargo movement',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Cold Chain Fleet',
    subtitle: 'Temperature-controlled urban distribution',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80'
  }
] as const;

export const BUSIGO_COMPARE = [
  ['Positioning', 'Premium electric fleet platform', 'Conventional booking-led perception'],
  ['Operating cost story', 'Fuel savings + maintenance reduction', 'Limited EV economics narrative'],
  ['Fleet breadth', 'Shuttle, cargo, reefer, utility', 'Narrower public perception'],
  ['Executive tools', 'ROI + dashboard + enterprise lead flow', 'Basic booking expectation'],
  ['Brand optics', 'Elite / future-forward / corporate', 'Functional transport brand']
] as const;
