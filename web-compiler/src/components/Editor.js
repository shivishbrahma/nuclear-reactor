import React, { Component } from "react";
// import PropTypes from "prop-types";
// import CodeMirror from "react-codemirror";
// import CodeMirror from "codemirror";
// import hljs from "highlight.js/lib/highlight";
// import javascript from "highlight.js/lib/languages/javascript";

// hljs.registerLanguage("javascript", javascript);

// class Highlight extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.nodeRef = React.createRef();
// 	}

// 	componentDidMount() {
// 		this.highlight();
// 	}

// 	componentDidUpdate() {
// 		this.highlight();
// 	}

// 	highlight = () => {
// 		if (this.nodeRef) {
// 			const nodes = this.nodeRef.current.querySelectorAll("pre");
// 			nodes.forEach((node) => {
// 				hljs.highlightBlock(node);
// 			});
// 		}
// 	};

// 	render() {
// 		const { content } = this.props;
// 		return (
// 			<div ref={this.nodeRef} dangerouslySetInnerHTML={{ __html: content }} />
// 		);
// 	}
// }

export default function Editor({ settings, config, setSettings }) {
	const handleChange = (e) =>
		setSettings({ ...settings, code: e.target.value });

	const updateCode = (newCode) => setSettings({ code: newCode });

	const options = {
		lineNumbers: true,
	};

	return (
		<div className="editorWrap col-6">
			<div className="titleBar">
				<span className="title">Editor</span>
			</div>
			<textarea
				className="w-100"
				name="editor"
				id="editor"
				value={settings.code}
				onChange={handleChange}
			></textarea>

			{/* <CodeMirror
				value={settings.code}
				onChange={updateCode}
				options={options}
			/> */}
		</div>
	);
}
