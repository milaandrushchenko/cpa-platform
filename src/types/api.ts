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

export type ContactMethod = 'telegram' | 'whatsapp' | 'email';

export interface SubmitFormPayload {
  name?: string;
  method: ContactMethod;
  contact: string;
}

export interface SubmitFormResponse {
  message: string;
  data: SubmitFormPayload;
}
