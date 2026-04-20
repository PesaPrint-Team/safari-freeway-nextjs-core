export type LeadType = 'consumer' | 'fleet' | 'partner' | 'test-drive';

export type LeadPayload = {
  leadType: LeadType;
  submittedAt: string;
  source: string;
  fullName?: string;
  email?: string;
  phone?: string;
  model?: string;
  location?: string;
  timeline?: string;
  buyerKind?: string;
  notes?: string;
  company?: string;
  contactPerson?: string;
  fleetSize?: string;
  useCase?: string;
  city?: string;
};

export function buildLeadPayload(type: LeadType, fields: Record<string, string>): LeadPayload {
  return {
    leadType: type,
    submittedAt: new Date().toISOString(),
    source: 'safari-freeway-website',
    ...fields,
  };
}

export function validateRequired(fields: Record<string, string>, requiredKeys: string[]) {
  return requiredKeys.every((key) => String(fields[key] || '').trim().length > 0);
}
