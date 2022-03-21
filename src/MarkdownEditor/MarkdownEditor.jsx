import React from 'react';
import markdownIt from 'markdown-it';
import { ImEnlarge2, ImShrink2 } from 'react-icons/im';
import './MarkdownEditor.css';

export default function MarkdownEditor({ content: contentProps }) {
	const [content, setContent] = React.useState(contentProps);
	const [editorMaximized, setEditorMaximized] = React.useState(false);
	const [previewMaximized, setPreviewMaximized] = React.useState(false);
	function handleChange(evt) {
		setContent(evt.target.value);
	}
	function toMarkdown(content) {
		const md = markdownIt({
			html: true,
			linkify: true,
			typographer: true,
		});
		return md.render(content);
	}
	function handleEditorMaximize() {
		if (!previewMaximized) setEditorMaximized(!editorMaximized);
		else setPreviewMaximized(false);
	}
	function handlePreviewMaximize() {
		if (!editorMaximized) setPreviewMaximized(!previewMaximized);
		else setEditorMaximized(false);
	}
	return (
		<div className="MarkdownEditor">
			{previewMaximized ? (
				<></>
			) : (
				<div className="MarkdownEditor__Editor">
					<div className="titleBar">
						Editor
						<div style={{ marginLeft: 'auto' }} onClick={handleEditorMaximize}>
							{editorMaximized ? <ImShrink2 /> : <ImEnlarge2 />}
						</div>
					</div>
					<textarea
						className="MarkdownEditor__Editor__Textarea"
						value={content}
						onChange={(evt) => handleChange(evt)}
					/>
				</div>
			)}

			{editorMaximized ? (
				<></>
			) : (
				<div className="MarkdownEditor__Preview">
					<div className="titleBar">
						Preview
						<div style={{ marginLeft: 'auto' }} onClick={handlePreviewMaximize}>
							{previewMaximized ? <ImShrink2 /> : <ImEnlarge2 />}
						</div>
					</div>
					<div
						className="MarkdownEditor__Preview__Content"
						dangerouslySetInnerHTML={{ __html: toMarkdown(content) }}
					></div>
				</div>
			)}
		</div>
	);
}
