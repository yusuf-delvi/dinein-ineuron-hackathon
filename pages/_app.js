import '../styles/globals.css';
import Layout from '../components/Layout';

import { AuthUserProvider } from '../context/AuthUserContext';

function MyApp({ Component, pageProps }) {
	return (
		<AuthUserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthUserProvider>
	);
}

export default MyApp;
