export function decodeHtml(str) {
	const map = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": "\"",
		"&#039;": "'",
		"&ldquo;": "“",
		"&rdquo;": "”",
	};
	return str.replace(
		/&amp;|&lt;|&gt;|&quot;|&#039;|&ldquo;|&rdquo;/g,
		(m) => map[m]
	);
}

export default {};