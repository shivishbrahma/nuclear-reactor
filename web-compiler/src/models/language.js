class Language {
	constructor(
		language = "text",
		defValue = "Hello World",
		renderer,
		config = {}
	) {
		this.language = language;
		this.defValue = defValue;
		this.config = config;
		this.renderer = renderer(config);
	}
	render(code) {}
}

module.exports = Language;
