import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

// Language
import Markdown from "./languages/markdown";
// import Latex from "./languages/latex";

// SCSS
import "./scss/App.scss";

function App() {
	const config = {
		tools: [],
		languages: ["markdown", "latex"],
		settings: {
			markdown: Markdown,
			// latex: Latex,
		},
	};
	const properties = {
		language: "markdown",
		code: "Hello World",
	};
	properties.code = config.settings[properties.language].defValue;
	const [props, setProps] = useState(properties);

	useEffect(() => {
		document.title = `Compiler Irene - (${properties.language})`;
	});
	return (
		<>
			<div className="App container-fluid">
				<div className="row">
					<Editor props={props} config={config} setProps={setProps} />
					<Preview props={props} config={config} setProps={setProps} />
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
