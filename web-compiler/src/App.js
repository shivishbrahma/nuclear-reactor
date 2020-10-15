import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./Preview";

import MarkdownIt from "markdown-it";
import MarkdownEmoji from "markdown-it-emoji";
// import Twemoji from "twemoji";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// SCSS
import "./scss/App.scss";

function App() {
	const markdown = MarkdownIt({
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
	}).use(MarkdownEmoji);
	// markdown.renderer.rules.emoji = function (token, idx) {
	// 	return Twemoji.parse(token[idx].content);
	// };
	const config = {
		tools: [],
		languages: ["markdown", "latex"],
		renderer: {
			markdown: (code) => markdown.render(code),
		},
		default: {
			markdown: `# Hello World \n## Hi Kolkata`,
		},
	};
	const settings = {
		language: "markdown",
		code: "Hello World",
	};
	settings.code = config.default[settings.language];
	const [prop, setProp] = useState(settings);
	return (
		<>
			<div className="App container-fluid">
				<div className="row">
					<Editor settings={prop} config={config} setSettings={setProp} />
					<Preview settings={prop} config={config} setSettings={setProp} />
				</div>
			</div>

			<footer className="text-center">
				<p>
					Copyright &copy; {new Date().getFullYear()} | Powered by Nerdy Answer
				</p>
			</footer>
		</>
	);
}

export default App;
