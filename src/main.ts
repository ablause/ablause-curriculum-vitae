import App from './App.svelte';

const app = new App({
	target: document.getElementById('page'),
	props: {
		name: 'Alexandre Blause'
	}
});

export default app;