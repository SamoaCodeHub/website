export async function submitContactForm(formSpree, payload) {
	const response = await fetch(formSpree, {
		method: 'POST',
		headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
		body: JSON.stringify(payload)
	});

	if (!response.ok) {
		const data = await response.json().catch(() => ({}));
		throw new Error(data?.errors?.map((e) => e.message).join(', ') || 'Form submission failed');
	}
}
