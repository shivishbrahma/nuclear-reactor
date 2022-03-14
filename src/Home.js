import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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
        }
	];
	return (
		<section>
			<h1>Nuclear Reactor Home</h1>
			<ul>
				{components.map((component) => (
					<li key={component.name}>
						<Link to={component.link}>{component.name}</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
