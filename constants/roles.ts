export const ROLES = {
  ADMIN: {
    id: '019500fb-45f0-a7cb-b4fe-1e481005bc47',
    key: 'admin',
    name: 'Administrator'
  },
  MEMBER: {
    id: '019500fb-87b4-e9d4-1c41-f889355d26c0',
    key: 'member',
    name: 'Member'
  }
} as const;

// Helper array for mapping through available roles
export const AVAILABLE_ROLES = Object.values(ROLES);

// Type for role keys
export type RoleKey = keyof typeof ROLES;

// Interface for role structure
export interface Role {
  id: string;
  key: string;
  name: string;
}
