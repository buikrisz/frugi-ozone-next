export type ApiKey = {
  SERVICE_ID: string;
  SERVICE_REQUEST_TEMPLATE_ID: string;
  CALLBACK_TEMPLATE_ID: string;
  PUBLIC_KEY: string;
};

const apiKey: ApiKey = {
  SERVICE_ID: `test`,
  SERVICE_REQUEST_TEMPLATE_ID: `test`,
  CALLBACK_TEMPLATE_ID: `test`,
  PUBLIC_KEY: `test`,
};

const apiKey_real: ApiKey = {
  SERVICE_ID: `service_8gjzh6o`,
  SERVICE_REQUEST_TEMPLATE_ID: `template_106dldp`,
  CALLBACK_TEMPLATE_ID: `template_g5ltmmp`,
  PUBLIC_KEY: `QN6YecSf6sY7G240z`,
};

export default apiKey;
