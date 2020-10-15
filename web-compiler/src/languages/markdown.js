import Language from "../models/language";

import markdownIt from "markdown-it";
import markdownEmoji from "markdown-it-emoji";
import hljs from "highlight.js/lib/core";

const defVal = ``;

const config = {
	html: true,
	linkify: true,
	// breaks: true,
	typographer: true,
	quotes: "“”‘’",
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(lang, str).value;
			} catch (err) {
				console.error(err);
			}
		}

		return ""; // use external default escaping
	},
};

const Markdown = new Language("markdown", defVal, markdownIt, config);
Markdown.renderer.use(markdownEmoji);
Markdown.render = (code) => this.renderer.render(code);
