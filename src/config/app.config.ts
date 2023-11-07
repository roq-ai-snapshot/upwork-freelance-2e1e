interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Freelancer'],
  customerRoles: ['Guest Client'],
  tenantRoles: ['Freelancer', 'Client', 'Agency Owner', 'Agency Member', 'Invoicing'],
  tenantName: 'Company',
  applicationName: 'upwork freelancer app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read freelancer profiles',
    'View project descriptions and budgets',
    'Check agency member details',
  ],
  ownerAbilities: [
    'Manage own freelancer profile',
    'View project descriptions from clients',
    'Apply for client projects',
    'Edit personal user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2319e80f-e074-49dc-b569-c70c06061d00',
};
