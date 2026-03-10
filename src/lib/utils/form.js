export function validateEmail(email) {
	return /\S+@\S+\.\S+/.test(email);
}

export function triggerToast(toast, message, type = 'success') {
	const background =
		{
			success: 'bg-green-600 text-white',
			error: 'bg-red-600 text-white'
		}[type] ?? 'bg-green-600 text-white';

	toast.trigger({ message, background, timeout: 2500 });
}
