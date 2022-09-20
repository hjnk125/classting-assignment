export const decodeHtml = (str: string) =>
	str.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, "\"")
		.replace(/&#039;/g, "'")
		.replace(/&ldquo;/g, "“")
		.replace(/&rdquo;/g, "”")
		.replace(/&pi;/g, "Π");

export default {};