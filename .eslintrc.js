module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	plugins: ["react", "react-hooks", "@typescript-eslint", "import", "jsx-a11y"],
	extends: [
		"airbnb",
		"prettier",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:jsx-a11y/recommended"
	],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"quotes": ["error", "double"],
		"react/function-component-definition": "off",
		"default-param-last": "off",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				ts: "never",
				tsx: "never",
				js: "never"
			}
		]
	},
	"env": {
		"jest": true
	}
};
