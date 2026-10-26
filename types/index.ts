// Shared TypeScript types and interfaces
export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  createdAt: string;
}
