import firebase from 'firebase/app';
import 'firebase/auth';

// If the application hasn't already been initialised - do so
if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
		authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	});
}

export default firebase;
