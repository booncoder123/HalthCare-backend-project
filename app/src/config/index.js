import dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env.development" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config();
}

if (process.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URI,
  aws: {
    acesskeyId: process.env.ACCESS_KEY_ID,
    secretAcessKeyId: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    bucketName: process.env.BUCKET_NAME,
  },
  google: {
    apiKey: process.env.GOOGLE_API_KEY,
    credential: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    databaseName: process.env.FIREBASE_DATABASE_NAME,
    type: process.env.FIREBASE_TYPE,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL,
    clientId: process.env.CLIENT_ID,
    authUri: process.env.AUTH_URI,
    tokenUri: process.env.TOKEN_URI,
    authProvider: process.env.AUTH_PROVIDER_X509_CERT_URL,
    clientUrl: process.env.CLIENT_X509_CERT_URL,
  },
};
