import React from 'react';
import ToDoCard from './ToDoCard';
import './ToDoApp.css';
import ToDoForm from './ToDoForm';
import { FaPlusCircle } from 'react-icons/fa';

export default function ToDoApp() {
	const [todos, setTodos] = React.useState([]);
	const [showForm, setShowForm] = React.useState(false);
	const [searchText, setSearchText] = React.useState('');
	const [currentTodo, setCurrentTodo] = React.useState({});
	const [hideTodos, setHideTodos] = React.useState(true);

	const maxDisplayTodos = 5;

	React.useEffect(() => {
		setTodos([
			{
				title: 'Learn React',
				description: 'Learn React and its ecosystem',
				status: 0,
				hide: false,
				id: 1,
			},
			{
				title: 'Create a React Component',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis esse aut similique reprehenderit fuga cupiditate porro. Nostrum, ipsam perferendis! Fuga nisi nostrum odit nulla quia, sint harum eligendi recusandae dolore!',
				status: 0,
				hide: false,
				id: 2,
			},
			{
				title: 'Create a React Component',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis esse aut similique reprehenderit fuga cupiditate porro. Nostrum, ipsam perferendis! Fuga nisi nostrum odit nulla quia, sint harum eligendi recusandae dolore!',
				status: 0,
				hide: false,
				id: 3,
			},
			{
				title: 'Create a React Component',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis esse aut similique reprehenderit fuga cupiditate porro. Nostrum, ipsam perferendis! Fuga nisi nostrum odit nulla quia, sint harum eligendi recusandae dolore!',
				status: 0,
				hide: false,
				id: 4,
			},
			{
				title: 'Create a React Component',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis esse aut similique reprehenderit fuga cupiditate porro. Nostrum, ipsam perferendis! Fuga nisi nostrum odit nulla quia, sint harum eligendi recusandae dolore!',
				status: 0,
				hide: false,
				id: 5,
			},
			{
				title: 'Create a React Component',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis esse aut similique reprehenderit fuga cupiditate porro. Nostrum, ipsam perferendis! Fuga nisi nostrum odit nulla quia, sint harum eligendi recusandae dolore!',
				status: 0,
				hide: false,
				id: 14,
			},
			{
				title: 'Create a React Component',
				description:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis esse aut similique reprehenderit fuga cupiditate porro. Nostrum, ipsam perferendis! Fuga nisi nostrum odit nulla quia, sint harum eligendi recusandae dolore!',
				status: 0,
				hide: false,
				id: 15,
			},
		]);
	}, []);

	function handleChangeStatus(id) {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.status = todo.status === 2 ? 0 : todo.status + 1;
			}
			return todo;
		});
		setTodos(newTodos);
	}

	function handleSearchChange(evt) {
		setSearchText(evt.target.value);

		const newTodos = todos.map((todo) => {
			todo.hide = !(
				todo.title.toLowerCase().includes(evt.target.value.toLowerCase()) ||
				todo.description.toLowerCase().includes(evt.target.value.toLowerCase())
			);
			return todo;
		});
		setTodos(newTodos);
	}

	function handleEditTodo(id) {
		setShowForm(true);
		const todo = todos.find((todo) => todo.id === id);
		setCurrentTodo(todo);
	}

	function handleAddTodo(todo) {
		if (todo.id === undefined) {
			const newTodo = {
				title: todo.title,
				description: todo.description,
				status: 0,
				hide: false,
				id: Date.now() % 1000000,
			};
			setTodos([...todos, newTodo]);
		} else {
			const newTodos = todos.map((todo_) => {
				if (todo.id === todo_.id) {
					todo_.title = todo.title;
					todo_.description = todo.description;
					todo_.status = todo.status;
				}
				return todo_;
			});
			setTodos(newTodos);
		}
		setCurrentTodo({});
		setShowForm(false);
	}

	function handleDeleteTodo(id) {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}

	function handleHideTodos() {
		const newHideTodos = !hideTodos;
		setHideTodos(newHideTodos);
		if (newHideTodos) {
			const newTodos = todos.map((todo, index) => {
				if (index >= maxDisplayTodos) todo.hide = false;
				return todo;
			});
			setTodos(newTodos);
		} else {
			const newTodos = todos.map((todo, index) => {
				if (index >= maxDisplayTodos) todo.hide = true;
				return todo;
			});
			setTodos(newTodos);
		}
	}

	return (
		<section className="ToDoApp">
			<h1>ToDo App</h1>
			<div className="ToDoApp__Search">
				<input
					type="text"
					value={searchText}
					onChange={(evt) => handleSearchChange(evt)}
					placeholder="Search"
				/>
				<button className="ToDoApp__create_btn" onClick={() => setShowForm(true)}>
					<FaPlusCircle />
				</button>
			</div>

			{showForm && (
				<ToDoForm
					handleAddTodo={handleAddTodo}
					{...currentTodo}
					closeForm={() => {
						setCurrentTodo({});
						setShowForm(false);
					}}
				/>
			)}

			<div className="ToDoList">
				{(todos || []).map((todo, index) => (
					<ToDoCard
						key={index}
						{...todo}
						handleChangeStatus={handleChangeStatus}
						handleEditTodo={handleEditTodo}
						handleDeleteTodo={handleDeleteTodo}
					/>
				))}
				{(!todos || todos.length === 0) && (
					<div className="ToDoList__empty">
						<p>No todos found</p>
					</div>
				)}
				{todos.length > maxDisplayTodos && (
					<button className="ToDoList__action" type="button" onClick={() => handleHideTodos()}>
						{hideTodos ? 'HIDE' : 'SHOW'}
					</button>
				)}
			</div>
		</section>
	);
}
