import { useState, useEffect, useContext, createContext } from 'react';
import firebase from './firebase';

// Create an auth context
const authContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
	return useContext(authContext);
};

// Auth hook
function useProvideAuth() {
	// Set User state
	const [user, setUser] = useState(null);

	console.log(user);

	// Sign in with Github with Firebase SDK  - https://firebase.google.com/docs/auth/web/github-auth
	const signinWithGithub = () => {
		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GithubAuthProvider())
			.then((response) => {
				setUser(response.user);
				return response.user;
			});
	};

	// Sign out with Firebase SDK - https://firebase.google.com/docs/auth/web/github-auth
	const signout = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(false);
			});
	};

	// Get the currently signed-in user.
	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(false);
			}
		});
		return () => unsubscribe();
	}, []);

	return {
		user,
		signinWithGithub,
		signout,
	};
}
