import React from 'react';
import { FaTimes } from 'react-icons/fa';

function ToDoForm({
	title: titleProps,
	description: descriptionProps,
	status: statusProps,
	handleAddTodo,
	closeForm,
	id,
}) {
	const [title, setTitle] = React.useState(titleProps);
	const [description, setDescription] = React.useState(descriptionProps);
	const [status, setStatus] = React.useState(statusProps);

	function handleTitleChange(e) {
		setTitle(e.target.value);
	}

	function handleDescriptionChange(e) {
		setDescription(e.target.value);
	}

	function handleStatusChange(e) {
		setStatus(parseInt(e.target.value));
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		if (title === '' || description === '') {
			alert('Please fill in all fields');
			return;
		}
		if (id >= 0) handleAddTodo({ title, description, status, id: id });
		else handleAddTodo({ title, description, status });
		setTitle('');
		setDescription('');
		setStatus(0);
	}

	function handleCloseForm() {
		setTitle('');
		setDescription('');
		setStatus(0);
		closeForm();
	}

	return (
		<form className="ToDoForm" onSubmit={(e) => handleFormSubmit(e)}>
			<FaTimes className="close-btn" onClick={() => handleCloseForm()} />
			<h2>ToDo Form</h2>
			<div className="ToDoForm__field">
				<label htmlFor="title">Title</label>
				<input type="text" id="title" value={title} onChange={(e) => handleTitleChange(e)} />
			</div>
			<div className="ToDoForm__field">
				<label htmlFor="description">Description</label>
				<textarea
					type="text"
					id="description"
					value={description}
					onChange={(e) => handleDescriptionChange(e)}
				/>
			</div>
			<div className="ToDoForm__field">
				<label htmlFor="status">Status</label>
				<select id="status" value={status} onChange={(e) => handleStatusChange(e)}>
					<option value="0">Pending</option>
					<option value="1">Working</option>
					<option value="2">Done</option>
				</select>
			</div>
			<div className="ToDoForm__action">
				<button type="submit">{id === -1 ? 'Add' : 'Update'}</button>
			</div>
		</form>
	);
}

ToDoForm.defaultProps = {
	title: '',
	description: '',
	status: 0,
	id: -1,
};

export default ToDoForm;
