import React from "react";
import PropTypes from "prop-types";
// import CodeMirror from "react-codemirror";
import CodeMirror from "codemirror";

export default function Editor({ settings, setSettings }) {
	const handleChange = (e) => setSettings({ code: e.target.value });

	const updateCode = (newCode) => setSettings({ code: newCode });

	const options = {
		lineNumbers: true,
	};

	return (
		<div className="editorWrap">
			<textarea
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
