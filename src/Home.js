import React from 'react';

export default function Home({ setLocationHash }) {
	const components = [
		{
			name: 'Typewriter',
			link: '/typewriter',
		},
		{
			name: 'ActivityCalendar',
			link: '/activity-calendar',
		},
		{
			name: 'MarkdownEditor',
			link: '/markdown-editor',
		},
		{
			name: 'TodoApp',
			link: '/todo-app',
		},
	];

	function handleLinkClick(e) {
		e.preventDefault();
        window.location.href=process.env.PUBLIC_URL + '/#' + e.target.getAttribute('href');
		setLocationHash(e.target.getAttribute('href'));
	}

	return (
		<section>
			<h1>Nuclear Reactor Home</h1>
			<ul>
				{components.map((component) => (
					<li key={component.name}>
						<a href={component.link} onClick={(e) => handleLinkClick(e)}>
							{component.name}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
