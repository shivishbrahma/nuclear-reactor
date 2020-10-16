import React from "react";
// import PropTypes from "prop-types";

export default function Preview({ props, config }) {
	return (
		<div className="previewWrap col-6">
			<div className="titleBar">
				<span className="title">Preview</span>
			</div>
			<div
				className={props.language + " w-100"}
				dangerouslySetInnerHTML={{
					__html: config.settings[props.language].render(props.code),
				}}
				id="preview"
			></div>
		</div>
	);
}
