import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rentcredit.app',
  appName: 'RentCredit',
  webDir: 'mobile-dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#8B5CF6"
    },
    StatusBar: {
      style: "light",
      backgroundColor: "#8B5CF6"
    }
  }
};

export default config;
