export function decodeHtml(str) {
	const map = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": "\"",
		"&#039;": "'",
		"&ldquo;": "“",
		"&rdquo;": "”",
		"&pi;": "Π"
	};
	return str.replace(
		/&amp;|&lt;|&gt;|&quot;|&#039;|&ldquo;|&rdquo;|&pi;/g,
		(m) => map[m]
	);
}

export default {};