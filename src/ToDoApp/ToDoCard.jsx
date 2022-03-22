import React from 'react';
// Icons for Todo Card
import {
	FaCheckCircle,
	FaClock,
	FaExclamationCircle,
	FaEye,
	FaEyeSlash,
	FaPencilAlt,
	FaTimesCircle,
} from 'react-icons/fa';

export default function ToDoCard({
	id,
	title,
	description,
	status,
	hide,
	handleEditTodo,
	handleDeleteTodo,
	handleChangeStatus,
	...otherProps
}) {
	const [showDescription, setShowDescription] = React.useState(false);

	// Checking if the card is to be hidden
	if (hide) return null;

	return (
		<div className="ToDoCard" {...otherProps}>
			<div className="ToDoCard__left">
				<span
					onClick={() => {
						handleChangeStatus(id);
					}}
				>
					{status === 0 && <FaExclamationCircle title="Pending" className="ToDoCard__icon grey_text" />}
					{status === 1 && <FaClock title="Working" className="ToDoCard__icon blue_text" />}
					{status === 2 && <FaCheckCircle title="Done" className="ToDoCard__icon green_text" />}
				</span>
			</div>
			<div className="ToDoCard__center">
				<h2>{title}</h2>
				{showDescription && <p>{description}</p>}
			</div>
			<div className="ToDoCard__right">
				<FaTimesCircle
					className="ToDoCard__icon red_text"
					onClick={() => {
						handleDeleteTodo(id);
					}}
				/>
				<span
					onClick={() => {
						setShowDescription(!showDescription);
					}}
				>
					{showDescription && <FaEye title="Show Description" className="ToDoCard__icon" />}
					{!showDescription && <FaEyeSlash title="Hide Description" className="ToDoCard__icon" />}
				</span>

				<FaPencilAlt
					className="ToDoCard__icon"
					onClick={() => {
						handleEditTodo(id);
					}}
				/>
			</div>
		</div>
	);
}
