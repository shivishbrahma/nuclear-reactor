import React from "react";
// import PropTypes from "prop-types";

export default function Preview({ settings, config }) {
	console.log(settings.code);
	return (
		<div className="previewWrap col-6">
			<div className="titleBar">
				<span className="title">Preview</span>
			</div>
			<div
				className={settings.language + " w-100"}
				dangerouslySetInnerHTML={{
					__html: config.renderer[settings.language](settings.code),
				}}
				id="preview"
			></div>
		</div>
	);
}
