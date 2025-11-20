export function validateEmail(email) {
	return /\S+@\S+\.\S+/.test(email);
}

export function triggerToast(toast, message, type = 'success') {
	const background =
		{
			success: 'variant-filled-success',
			error: 'variant-filled-error'
		}[type] ?? 'variant-filled-success';

	toast.trigger({ message, background, timeout: 2500 });
}
