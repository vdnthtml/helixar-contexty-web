export interface Specimen {
  id: string;
  name: string;
  classification: string;
  status: 'active' | 'stabilizing' | 'classified';
  imageFile: string;
  description: string;
}

export const specimens: Specimen[] = [
  {
    id: 'HLX-001',
    name: 'The Distributor',
    classification: 'Content Automation OS',
    status: 'active',
    imageFile: '/images/Artistic_Image.jpg',
    description: 'Autonomous LinkedIn, X, and SEO content system. Runs in the founder\'s voice without the founder.',
  },
  {
    id: 'HLX-002',
    name: 'The Infiltrator',
    classification: 'Outbound Acquisition Agent',
    status: 'stabilizing',
    imageFile: '/images/Peter_Tarka_AD_3D_London.jpg',
    description: 'Identifies ICP prospects, sequences DMs and emails, handles replies, books meetings.',
  },
  {
    id: 'HLX-003',
    name: '[REDACTED]',
    classification: 'CLASSIFIED',
    status: 'classified',
    imageFile: '/images/God_Quote_Image.jpg',
    description: 'Access restricted. Clearance required.',
  },
];
