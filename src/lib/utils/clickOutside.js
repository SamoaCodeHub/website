export function clickOutside(node) {
	const shouldIgnore = (event) => {
		return event.target.closest('[data-no-close]') !== null;
	};

	const handleClick = (event) => {
		if (shouldIgnore(event)) return;

		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('outclick', { detail: node }));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
