import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
	const auth = useAuth();
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1>Feedback</h1>
			</main>
			<button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
			<button onClick={(e) => auth.signout()}>Signout</button>
			<div>{auth?.user?.email}</div>
			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
