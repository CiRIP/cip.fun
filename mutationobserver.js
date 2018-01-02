'use strict';

addEventListener('DOMContentLoaded', function (e) {
	var observer = new MutationObserver(function (records) {
		var reload = false;

		records.forEach(function (record) {
			if (record.type === 'attributes' && record.target.matches && record.target.matches('body, #skew, #title, #right, #fun') && record.attributeName === 'style') {
				console.log('style attr changed on \n\t\t\t\t\t\t\t\t\t\t ' + (record.target.id || record.target.tagName));
				reload = true;
			}
			if (record.type === 'characterData') {
				if (record.target.parentNode.tagName.toLowerCase() === 'style') {
					console.log('style contents changed');
					reload = true;
				}
			}
			record.removedNodes.forEach(function (node) {
				if (node.id === 'overlay') {
					console.log('overlay removed');
					reload = true;
				}
			});
			record.addedNodes.forEach(function (node) {
				if (node.matches && node.matches('style:not([data-href]), link[rel="stylesheet"]')) {
					console.log('style added', node);
					reload = true;
				}
			});
			if (reload) window.location.reload(true);
		});
	});

	observer.observe(document.documentElement, {
		attributes: true,
		childList: true,
		subtree: true,
		attributeOldValue: true,
		characterData: true
	});
});

addEventListener('contextmenu', function (e) {
	return e.preventDefault();
});

addEventListener('keydown', function (e) {
	if (e.keyCode === 123 /* F12: Chrome, Edge dev tools */ || e.shiftKey && e.ctrlKey && (e.keyCode === 73 /* + I: Chrome, FF dev tools */ || e.keyCode === 67 /* + C: Chrome, FF inspect el */ || e.keyCode === 74 /* + J: Chrome, FF console */ || e.keyCode === 75 /* + K: FF web console */ || e.keyCode === 83 /* + S: FF debugger */ || e.keyCode === 69 /* + E: FF network */ || e.keyCode === 77 /* + M: FF responsive design mode */) || e.shiftKey && (e.keyCode === 118 /* + F5: Firefox style editor */ || e.keyCode === 116 /* + F5: Firefox performance */) || e.ctrlKey && e.keyCode === 85 /* + U: Chrome, FF view source */) {
			e.preventDefault();
		}
}, false);
