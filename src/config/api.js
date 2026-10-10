// API Configuration for Polegrid
export const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  "https://backend.polegrid.com";

export const ENDPOINTS = {
  LANDLORD_REGISTER: `${API_BASE_URL}/api/landlord/register`,
  ORGANIZATION_REGISTER: `${API_BASE_URL}/api/organization/register`,
  CONTACT_CREATE: `${API_BASE_URL}/api/contact/create`,
  LANDLORDS_LIST: `${API_BASE_URL}/api/landlords`,
  ORGANIZATIONS_LIST: `${API_BASE_URL}/api/organizations`,
};
