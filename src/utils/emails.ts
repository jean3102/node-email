export const isObjectNotEmpty = (obj: {}): boolean => {
	return Object.keys(obj).length > 0;
};

export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const isValidHtml = (html: string): boolean => {
	const htmlRegex = /<([a-z][a-z0-9]*)\b[^>]*>(.*?)<\/\1>/i;
	return htmlRegex.test(html);
};
