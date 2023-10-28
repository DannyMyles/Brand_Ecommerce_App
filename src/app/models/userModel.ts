export interface User {
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  fullName?: string;
  gender?: string;
  enableCampaign?: boolean;
  blacklisted?: boolean;
  isAdmin?: boolean;
}