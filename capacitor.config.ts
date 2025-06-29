import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rentcredit.app',
  appName: 'RentCredit',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
