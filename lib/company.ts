export const COMPANY = {
  brand: 'Auto Freeway',
  vehicleBrand: 'Safari Freeway',
  legalName: 'Auto Freeway Limited',
  tagline: 'The Road Ahead is Electric',
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
  { label: 'Range envelope', value: '110-360 km' },
  { label: 'Battery warranty', value: '5 years' },
  { label: 'Fast charging', value: 'Up to 80 kW DC' },
  { label: 'Built for', value: 'East African roads' }
] as const;

export const TRUST = [
  'Full East African EV range: shuttles, cargo vans, refrigerated trucks, chassis trucks, and tricycles',
  'LFP batteries from GOTION High-Tech and EVE with a 5-year warranty',
  'Backed by global OEMs and local Kenyan CKD assembly for parts and service',
  'Vehicles for transport operators, logistics firms, couriers, and ride-hailing fleets'
] as const;

export const FLEET = [
  {
    name: 'Safari Duma',
    type: '14-Seater / Cargo / Reefer Van',
    range: '225–250 km',
    battery: '41.9 kWh LFP',
    fastCharge: '40 kW DC',
    useCase: 'Last-mile delivery, parcel logistics, cold-chain distribution',
    image: '/fleet/duma.jpg'
  },
  {
    name: 'Safari Ndovu',
    type: 'Electric Chassis Truck',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'Bus bodies, school buses, cargo builds, fleet conversions',
    image: '/fleet/ndovu.jpg'
  },
  {
    name: 'Safari Kiboko',
    type: 'Refrigerated Light Truck',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'Cold-chain, food distribution, pharma delivery',
    image: '/fleet/kiboko.png'
  },
  {
    name: 'Safari Mamba',
    type: 'Commercial workhorse',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'Courier fleet, mobile workshop, or chilled-goods shuttle',
    image: '/fleet/mamba.png'
  },
  {
    name: 'Safari Nyati',
    type: 'Light commercial truck',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'e-commerce courier fleet, chilled-goods shuttle',
    image: '/fleet/nyati.png'
  }
] as const;

export const VISUALS = [
  {
    title: 'Van and truck range',
    subtitle: 'Passenger and cargo vehicles for commercial operators',
    image: '/brand/cover-fleet.jpg'
  },
  {
    title: 'Safari Chui at charge',
    subtitle: 'Shuttle on an AC charging cycle',
    image: '/fleet/charging-shuttle.jpg'
  },
  {
    title: 'Safari Mamba box truck',
    subtitle: 'Light commercial box body, 5-ton GVW',
    image: '/fleet/box-truck.jpg'
  },
  {
    title: 'Safari Ndovu',
    subtitle: 'Safari Ndovu is a fully electric chassis truck built to adapt.',
    image: '/fleet/ndovu.jpg'
  }
] as const;

export const BUSIGO_COMPARE = [
  ['Positioning', 'Electric fleet platform', 'Booking-first mindset'],
  ['Operating cost', 'Fuel and maintenance savings', 'No EV cost story'],
  ['Fleet range', 'Shuttle, cargo, reefer, utility, tricycle', 'Mostly passenger buses'],
  ['Operator tools', 'ROI, dashboard, enterprise sales flow', 'Basic bookings only'],
  ['Brand', 'Commercial, modern, investor-ready', 'Everyday transport']
] as const;
