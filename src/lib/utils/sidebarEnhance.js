import { get } from 'svelte/store';
import { toggleSidebar } from './sidebarLogic';

export function sidebarEnhance(node) {
	let previousOverflow = '';
	let focusableElements = [];
	let firstFocusable;
	let lastFocusable;
	let openerButton = null;

	function lockScroll() {
		previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
	}

	function unlockScroll() {
		document.body.style.overflow = previousOverflow;
	}

	function setupFocusTrap() {
		// find elements inside sidebar
		focusableElements = Array.from(
			node.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
		);

		firstFocusable = focusableElements[0];
		lastFocusable = focusableElements[focusableElements.length - 1];

		// Focus the first focusable element
		if (firstFocusable) firstFocusable.focus();
	}

	function restoreOpenerFocus() {
		if (openerButton) openerButton.focus();
	}

	function handleKeydown(e) {
		if (!get(toggleSidebar)) return;

		// ESC closes sidebar
		if (e.key === 'Escape') {
			toggleSidebar.set(false);
		}

		// Focus trapping
		if (e.key === 'Tab') {
			if (e.shiftKey) {
				// Shift+Tab from first element → jump to last
				if (document.activeElement === firstFocusable) {
					e.preventDefault();
					lastFocusable.focus();
				}
			} else {
				// Tab from last element → jump to first
				if (document.activeElement === lastFocusable) {
					e.preventDefault();
					firstFocusable.focus();
				}
			}
		}
	}

	// Watch the store value to activate/deactivate features
	const unsubscribe = toggleSidebar.subscribe((isOpen) => {
		if (isOpen) {
			openerButton = document.querySelector('[data-sidebar-toggle]');
			lockScroll();
			setupFocusTrap();
			document.addEventListener('keydown', handleKeydown);
		} else {
			unlockScroll();
			restoreOpenerFocus();
			document.removeEventListener('keydown', handleKeydown);
		}
	});

	return {
		destroy() {
			unlockScroll();
			document.removeEventListener('keydown', handleKeydown);
			unsubscribe();
		}
	};
}
