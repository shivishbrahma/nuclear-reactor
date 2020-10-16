import React from "react";
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

export default function Editor({ props, config, setProps }) {
	const handleChange = (e) => setProps({ ...props, code: e.target.value });

	// const updateCode = (newCode) => setprops({ code: newCode });

	// const options = {
	// 	lineNumbers: true,
	// };

	return (
		<div className="editorWrap col-6">
			<div className="titleBar">
				<span className="title">Editor</span>
			</div>
			<textarea
				className="w-100"
				name="editor"
				id="editor"
				value={props.code}
				onChange={handleChange}
			></textarea>

			{/* <CodeMirror
				value={props.code}
				onChange={updateCode}
				options={options}
			/> */}
		</div>
	);
}
