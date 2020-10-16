import Language from "../models/language";

import renderMathInElement from "katex/dist/contrib/auto-render";

import katex from "katex";

const defVal = `Simple equations`;

const config = {};

const Latex = new Language("latex", defVal, katex, config);

Latex.render = (code) => {
	const rendererObj = Latex.renderer;
	console.log(renderMathInElement(document.getElementById("preview")));
	return rendererObj.renderToString(code, Latex.config);
};

export default Latex;
