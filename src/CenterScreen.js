import React from 'react';

export default function CenterScreen({ children, ...otherProps }) {
	return (
		<main className="CenterScreen" {...otherProps}>
			{children}
		</main>
	);
}
