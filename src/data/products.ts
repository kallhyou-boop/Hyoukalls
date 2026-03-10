export interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  badge?: 'Best Seller' | 'Popular' | 'Fast Delivery';
}

export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  plans: Plan[];
}

export interface Category {
  id: string;
  name: string;
  iconName: 'Smartphone' | 'Cloud' | 'Server' | 'CreditCard';
  description: string;
  brands: Brand[];
}

export const categories: Category[] = [
  {
    id: 'premium-apps',
    name: 'Premium Apps',
    iconName: 'Smartphone',
    description: 'Netflix, ChatGPT, Spotify, Viu',
    brands: [
      {
        id: 'netflix',
        name: 'Netflix',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        plans: [
          { id: 'n1', name: 'Netflix 1P Shared', price: 'Rp 35.000', description: '1 Profile, 4K UHD, 30 Days.', badge: 'Best Seller' },
          { id: 'n2', name: 'Netflix 2P Shared', price: 'Rp 65.000', description: '2 Profiles, 4K UHD, 30 Days.' },
          { id: 'n3', name: 'Netflix Private', price: 'Rp 160.000', description: 'Full Account, 5 Profiles, 30 Days.', badge: 'Popular' },
        ]
      },
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
        plans: [
          { id: 'c1', name: 'ChatGPT Plus Shared', price: 'Rp 50.000', description: 'GPT-4 Access, Shared Account, 30 Days.', badge: 'Popular' },
          { id: 'c2', name: 'ChatGPT Plus Private', price: 'Rp 320.000', description: 'Full Private Account, 30 Days.' },
        ]
      },
      {
        id: 'spotify',
        name: 'Spotify',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
        plans: [
          { id: 's1', name: 'Spotify Individual', price: 'Rp 20.000', description: '30 Days, No Ads, Offline Mode.', badge: 'Fast Delivery' },
          { id: 's2', name: 'Spotify Family Plan', price: 'Rp 35.000', description: '30 Days, Premium Family.' },
        ]
      },
      {
        id: 'viu',
        name: 'Viu',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Viu_logo.svg',
        plans: [
          { id: 'v1', name: 'Viu Premium 30 Days', price: 'Rp 15.000', description: 'No Ads, All Content Access.', badge: 'Fast Delivery' },
        ]
      }
    ]
  },
  {
    id: 'cloud-accounts',
    name: 'Cloud Accounts',
    iconName: 'Cloud',
    description: 'DigitalOcean, AWS Accounts',
    brands: [
      {
        id: 'digitalocean',
        name: 'DigitalOcean',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg',
        plans: [
          { id: 'do1', name: 'DO $200 Credit', price: 'Rp 150.000', description: 'Valid for 60 Days, New Account.', badge: 'Popular' },
        ]
      },
      {
        id: 'aws',
        name: 'AWS',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        plans: [
          { id: 'aws1', name: 'AWS $100 Credit', price: 'Rp 250.000', description: 'Ready to use account.' },
        ]
      }
    ]
  },
  {
    id: 'server-services',
    name: 'Server Services',
    iconName: 'Server',
    description: 'VPS Linux, RDP Windows',
    brands: [
      {
        id: 'vps',
        name: 'VPS Linux',
        logoUrl: 'https://cdn-icons-png.flaticon.com/512/2333/2333250.png',
        plans: [
          { id: 'vps1', name: 'VPS 2GB RAM', price: 'Rp 75.000', description: '2 vCPU, 40GB SSD.', badge: 'Fast Delivery' },
          { id: 'vps2', name: 'VPS 4GB RAM', price: 'Rp 135.000', description: '2 vCPU, 80GB SSD.' },
        ]
      },
      {
        id: 'rdp',
        name: 'RDP Windows',
        logoUrl: 'https://cdn-icons-png.flaticon.com/512/733/733621.png',
        plans: [
          { id: 'rdp1', name: 'RDP 4GB RAM', price: 'Rp 95.000', description: 'Windows Server 2022.', badge: 'Best Seller' },
          { id: 'rdp2', name: 'RDP 8GB RAM', price: 'Rp 175.000', description: 'Windows Server 2022.' },
        ]
      }
    ]
  },
  {
    id: 'virtual-payment',
    name: 'Virtual Payment',
    iconName: 'CreditCard',
    description: 'VCC Reloadable, PayPal',
    brands: [
      {
        id: 'vcc',
        name: 'VCC',
        logoUrl: 'https://cdn-icons-png.flaticon.com/512/633/633611.png',
        plans: [
          { id: 'vcc1', name: 'VCC Reloadable', price: 'Rp 150.000', description: 'Balance $10, Valid 1 Year.', badge: 'Popular' },
        ]
      }
    ]
  }
];
