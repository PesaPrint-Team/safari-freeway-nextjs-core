export const COMPANY = {
  brand: 'Auto Freeway',
  vehicleBrand: '',
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
  'East African EV portfolio spanning shuttle, cargo, reefer, utility, and city transport segments',
  'LFP battery platforms designed for dependable fleet economics, safety, and durability',
  'OEM, dealer, and local CKD assembly strategy built around uptime and aftersales support',
  'Vehicle platforms tailored to operators, manufacturers, couriers, and ride-hailing fleets'
] as const;

export const FLEET = [
  {
    name: 'Safari Chui High Roof',
    type: '17-Seater Shuttle',
    range: '300–360 km',
    battery: '65.17 kWh LFP',
    fastCharge: '40 kW DC',
    useCase: 'Airport transfers, staff transport, hotel shuttles, SACCO routes',
    image: '/fleet/chui-side.jpg'
  },
  {
    name: 'Safari Chui Wide Body',
    type: '17-Seater City Shuttle',
    range: '250 km',
    battery: '41.9 kWh LFP',
    fastCharge: '40 kW DC',
    useCase: 'CBD routes, estates, school runs, urban transport',
    image: '/fleet/chui-front.jpg'
  },
  {
    name: 'Safari Duma',
    type: '14-Seater / Cargo / Reefer Van',
    range: '225–250 km',
    battery: '41.9 kWh LFP',
    fastCharge: '40 kW DC',
    useCase: 'Last-mile delivery, parcel logistics, cold-chain distribution',
    image: '/brand/cover-fleet.jpg'
  },
  {
    name: 'Safari Ndovu',
    type: 'Electric Chassis Truck',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'Bus bodies, school buses, cargo builds, fleet conversions',
    image: '/fleet/box-truck.jpg'
  },
  {
    name: 'Safari Kiboko',
    type: 'Refrigerated Light Truck',
    range: '340 km',
    battery: '81.1 kWh LFP',
    fastCharge: '80 kW DC',
    useCase: 'Cold-chain, food distribution, pharma delivery',
    image: '/fleet/box-truck.jpg'
  },
  {
    name: 'Safari Swara',
    type: 'Passenger Tricycle',
    range: '110 km',
    battery: '60–72V compatible',
    fastCharge: '6–8 hrs AC',
    useCase: 'Short-hop urban passenger transport, estate taxis, feeder routes',
    image: '/fleet/charging-shuttle.jpg'
  }
] as const;

export const VISUALS = [
  {
    title: 'Cover Fleet',
    subtitle: 'Van and truck platforms for passenger and cargo operations',
    image: '/brand/cover-fleet.jpg'
  },
  {
    title: 'Charging Shuttle',
    subtitle: 'Profile photo showing the Safari Freeway shuttle at charge',
    image: '/fleet/charging-shuttle.jpg'
  },
  {
    title: 'Box Truck Platform',
    subtitle: 'Profile image for the heavier-duty commercial platform',
    image: '/fleet/box-truck.jpg'
  },
  {
    title: 'Safari Chui Showcase',
    subtitle: 'Flagship passenger transport platform for high-demand routes',
    image: '/fleet/chui-side.jpg'
  }
] as const;

export const BUSIGO_COMPARE = [
  ['Positioning', 'Premium electric fleet platform', 'Conventional booking-led perception'],
  ['Operating cost story', 'Fuel savings + maintenance reduction', 'Limited EV economics narrative'],
  ['Fleet breadth', 'Shuttle, cargo, reefer, utility', 'Narrower public perception'],
  ['Executive tools', 'ROI + dashboard + enterprise lead flow', 'Basic booking expectation'],
  ['Brand optics', 'Elite / future-forward / corporate', 'Functional transport brand']
] as const;
