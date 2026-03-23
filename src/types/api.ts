export interface BenefitsResponse {
  title: string;
  description: string;
  benefits: string[];
}

export interface MultiplyItem {
  title: string;
  steps: Record<string, string>;
}

export type MultiplyResponse = MultiplyItem[];

export interface TasksResponseRaw {
  description?: string;
  'description:'?: string;
  tiles: TaskTile[];
}

export interface TaskTile {
  title: string;
  text: string;
}

export interface TasksResponse {
  description: string;
  tiles: TaskTile[];
}

export const contactMethods = ['telegram', 'whatsapp', 'email'] as const;
export type ContactMethod = (typeof contactMethods)[number];

export interface ContactFormPayload {
  name?: string;
  method: ContactMethod;
  contact: string;
}

export interface ContactFormResponse {
  message: string;
  data?: ContactFormPayload;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormPayload, string>
>;
