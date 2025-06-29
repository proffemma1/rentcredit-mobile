import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rentcredit.app',
  appName: 'RentCredit',
  webDir: 'build',  // Fixed: was 'mobile-dist'
  server: {
    androidScheme: 'https'
  }
};

export default config;
