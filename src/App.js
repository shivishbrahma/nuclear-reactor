import Typewriter from './Typewriter/Typewriter';
import ActivityCalendar from './ActivityCalendar/ActivityCalendar';
import { createCalendarTheme } from './ActivityCalendar/utils';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MarkdownEditor from './MarkdownEditor/MarkdownEditor';
import ToDoApp from './ToDoApp/ToDoApp';

const DEFAULT_THEME = createCalendarTheme('#ca3cff'),
	calendarData = [
		{
			count: 0,
			date: '2022-01-01',
			level: 0,
		},
		{
			count: 0,
			date: '2022-01-02',
			level: 0,
		},
		{
			count: 0,
			date: '2022-01-03',
			level: 0,
		},
		{
			count: 0,
			date: '2022-01-04',
			level: 0,
		},
		{
			count: 0,
			date: '2022-01-05',
			level: 0,
		},
		{
			count: 1,
			date: '2022-01-06',
			level: 1,
		},
		{
			count: 1,
			date: '2022-01-07',
			level: 1,
		},
		{
			count: 10,
			date: '2022-01-08',
			level: 4,
		},
		{
			count: 9,
			date: '2022-01-09',
			level: 4,
		},
		{
			count: 2,
			date: '2022-01-10',
			level: 1,
		},
		{
			count: 5,
			date: '2022-01-11',
			level: 2,
		},
		{
			count: 1,
			date: '2022-01-12',
			level: 1,
		},
		{
			count: 1,
			date: '2022-01-13',
			level: 1,
		},
		{
			count: 0,
			date: '2022-01-14',
			level: 0,
		},
		{
			count: 6,
			date: '2022-01-15',
			level: 3,
		},
		{
			count: 4,
			date: '2022-01-16',
			level: 2,
		},
		{
			count: 0,
			date: '2022-01-17',
			level: 0,
		},
		{
			count: 7,
			date: '2022-01-18',
			level: 3,
		},
		{
			count: 1,
			date: '2022-01-19',
			level: 1,
		},
		{
			count: 6,
			date: '2022-01-20',
			level: 3,
		},
		{
			count: 6,
			date: '2022-01-21',
			level: 3,
		},
		{
			count: 0,
			date: '2022-01-22',
			level: 0,
		},
		{
			count: 2,
			date: '2022-01-23',
			level: 1,
		},
		{
			count: 0,
			date: '2022-01-24',
			level: 0,
		},
		{
			count: 0,
			date: '2022-01-25',
			level: 0,
		},
		{
			count: 4,
			date: '2022-01-26',
			level: 2,
		},
		{
			count: 0,
			date: '2022-01-27',
			level: 0,
		},
		{
			count: 0,
			date: '2022-01-28',
			level: 0,
		},
		{
			count: 5,
			date: '2022-01-29',
			level: 2,
		},
		{
			count: 1,
			date: '2022-01-30',
			level: 1,
		},
		{
			count: 5,
			date: '2022-01-31',
			level: 2,
		},
		{
			count: 0,
			date: '2022-02-01',
			level: 0,
		},
		{
			count: 4,
			date: '2022-02-02',
			level: 2,
		},
		{
			count: 1,
			date: '2022-02-03',
			level: 1,
		},
		{
			count: 4,
			date: '2022-02-04',
			level: 2,
		},
		{
			count: 4,
			date: '2022-02-05',
			level: 2,
		},
		{
			count: 3,
			date: '2022-02-06',
			level: 2,
		},
		{
			count: 1,
			date: '2022-02-07',
			level: 1,
		},
		{
			count: 3,
			date: '2022-02-08',
			level: 2,
		},
		{
			count: 3,
			date: '2022-02-09',
			level: 2,
		},
		{
			count: 0,
			date: '2022-02-10',
			level: 0,
		},
		{
			count: 3,
			date: '2022-02-11',
			level: 2,
		},
		{
			count: 0,
			date: '2022-02-12',
			level: 0,
		},
		{
			count: 5,
			date: '2022-02-13',
			level: 2,
		},
		{
			count: 0,
			date: '2022-02-14',
			level: 0,
		},
		{
			count: 1,
			date: '2022-02-15',
			level: 1,
		},
		{
			count: 6,
			date: '2022-02-16',
			level: 3,
		},
		{
			count: 2,
			date: '2022-02-17',
			level: 1,
		},
		{
			count: 4,
			date: '2022-02-18',
			level: 2,
		},
		{
			count: 5,
			date: '2022-02-19',
			level: 2,
		},
		{
			count: 1,
			date: '2022-02-20',
			level: 1,
		},
		{
			count: 3,
			date: '2022-02-21',
			level: 2,
		},
		{
			count: 0,
			date: '2022-02-22',
			level: 0,
		},
		{
			count: 2,
			date: '2022-02-23',
			level: 1,
		},
		{
			count: 3,
			date: '2022-02-24',
			level: 2,
		},
		{
			count: 6,
			date: '2022-02-25',
			level: 3,
		},
		{
			count: 0,
			date: '2022-02-26',
			level: 0,
		},
		{
			count: 7,
			date: '2022-02-27',
			level: 3,
		},
		{
			count: 0,
			date: '2022-02-28',
			level: 0,
		},
		{
			count: 0,
			date: '2022-03-01',
			level: 0,
		},
		{
			count: 0,
			date: '2022-03-02',
			level: 0,
		},
		{
			count: 4,
			date: '2022-03-03',
			level: 2,
		},
		{
			count: 0,
			date: '2022-03-04',
			level: 0,
		},
		{
			count: 3,
			date: '2022-03-05',
			level: 2,
		},
		{
			count: 2,
			date: '2022-03-06',
			level: 1,
		},
		{
			count: 0,
			date: '2022-03-07',
			level: 0,
		},
		{
			count: 0,
			date: '2022-03-08',
			level: 0,
		},
		{
			count: 0,
			date: '2022-03-09',
			level: 0,
		},
		{
			count: 4,
			date: '2022-03-10',
			level: 2,
		},
		{
			count: 0,
			date: '2022-03-11',
			level: 0,
		},
		{
			count: 5,
			date: '2022-03-12',
			level: 2,
		},
		{
			count: 3,
			date: '2022-03-13',
			level: 2,
		},
		{
			count: 0,
			date: '2022-03-14',
			level: 0,
		},
		{
			count: 1,
			date: '2022-03-15',
			level: 1,
		},
		{
			count: 5,
			date: '2022-03-16',
			level: 2,
		},
		{
			count: 1,
			date: '2022-03-17',
			level: 1,
		},
		{
			count: 0,
			date: '2022-03-18',
			level: 0,
		},
		{
			count: 7,
			date: '2022-03-19',
			level: 3,
		},
		{
			count: 2,
			date: '2022-03-20',
			level: 1,
		},
		{
			count: 0,
			date: '2022-03-21',
			level: 0,
		},
		{
			count: 0,
			date: '2022-03-22',
			level: 0,
		},
		{
			count: 1,
			date: '2022-03-23',
			level: 1,
		},
		{
			count: 3,
			date: '2022-03-24',
			level: 2,
		},
		{
			count: 0,
			date: '2022-03-25',
			level: 0,
		},
		{
			count: 1,
			date: '2022-03-26',
			level: 1,
		},
		{
			count: 1,
			date: '2022-03-27',
			level: 1,
		},
		{
			count: 4,
			date: '2022-03-28',
			level: 2,
		},
		{
			count: 1,
			date: '2022-03-29',
			level: 1,
		},
		{
			count: 0,
			date: '2022-03-30',
			level: 0,
		},
		{
			count: 0,
			date: '2022-03-31',
			level: 0,
		},
		{
			count: 2,
			date: '2022-04-01',
			level: 1,
		},
		{
			count: 4,
			date: '2022-04-02',
			level: 2,
		},
		{
			count: 0,
			date: '2022-04-03',
			level: 0,
		},
		{
			count: 4,
			date: '2022-04-04',
			level: 2,
		},
		{
			count: 8,
			date: '2022-04-05',
			level: 4,
		},
		{
			count: 6,
			date: '2022-04-06',
			level: 3,
		},
		{
			count: 5,
			date: '2022-04-07',
			level: 2,
		},
		{
			count: 4,
			date: '2022-04-08',
			level: 2,
		},
		{
			count: 4,
			date: '2022-04-09',
			level: 2,
		},
		{
			count: 0,
			date: '2022-04-10',
			level: 0,
		},
		{
			count: 0,
			date: '2022-04-11',
			level: 0,
		},
		{
			count: 0,
			date: '2022-04-12',
			level: 0,
		},
		{
			count: 0,
			date: '2022-04-13',
			level: 0,
		},
		{
			count: 0,
			date: '2022-04-14',
			level: 0,
		},
		{
			count: 3,
			date: '2022-04-15',
			level: 2,
		},
		{
			count: 0,
			date: '2022-04-16',
			level: 0,
		},
		{
			count: 0,
			date: '2022-04-17',
			level: 0,
		},
		{
			count: 1,
			date: '2022-04-18',
			level: 1,
		},
		{
			count: 0,
			date: '2022-04-19',
			level: 0,
		},
		{
			count: 7,
			date: '2022-04-20',
			level: 3,
		},
		{
			count: 3,
			date: '2022-04-21',
			level: 2,
		},
		{
			count: 1,
			date: '2022-04-22',
			level: 1,
		},
		{
			count: 6,
			date: '2022-04-23',
			level: 3,
		},
		{
			count: 2,
			date: '2022-04-24',
			level: 1,
		},
		{
			count: 4,
			date: '2022-04-25',
			level: 2,
		},
		{
			count: 5,
			date: '2022-04-26',
			level: 2,
		},
		{
			count: 6,
			date: '2022-04-27',
			level: 3,
		},
		{
			count: 1,
			date: '2022-04-28',
			level: 1,
		},
		{
			count: 0,
			date: '2022-04-29',
			level: 0,
		},
		{
			count: 0,
			date: '2022-04-30',
			level: 0,
		},
		{
			count: 5,
			date: '2022-05-01',
			level: 2,
		},
		{
			count: 4,
			date: '2022-05-02',
			level: 2,
		},
		{
			count: 0,
			date: '2022-05-03',
			level: 0,
		},
		{
			count: 2,
			date: '2022-05-04',
			level: 1,
		},
		{
			count: 0,
			date: '2022-05-05',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-06',
			level: 0,
		},
		{
			count: 2,
			date: '2022-05-07',
			level: 1,
		},
		{
			count: 0,
			date: '2022-05-08',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-09',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-10',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-11',
			level: 0,
		},
		{
			count: 7,
			date: '2022-05-12',
			level: 3,
		},
		{
			count: 4,
			date: '2022-05-13',
			level: 2,
		},
		{
			count: 4,
			date: '2022-05-14',
			level: 2,
		},
		{
			count: 3,
			date: '2022-05-15',
			level: 2,
		},
		{
			count: 2,
			date: '2022-05-16',
			level: 1,
		},
		{
			count: 0,
			date: '2022-05-17',
			level: 0,
		},
		{
			count: 1,
			date: '2022-05-18',
			level: 1,
		},
		{
			count: 3,
			date: '2022-05-19',
			level: 2,
		},
		{
			count: 1,
			date: '2022-05-20',
			level: 1,
		},
		{
			count: 0,
			date: '2022-05-21',
			level: 0,
		},
		{
			count: 3,
			date: '2022-05-22',
			level: 2,
		},
		{
			count: 8,
			date: '2022-05-23',
			level: 4,
		},
		{
			count: 7,
			date: '2022-05-24',
			level: 3,
		},
		{
			count: 0,
			date: '2022-05-25',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-26',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-27',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-28',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-29',
			level: 0,
		},
		{
			count: 0,
			date: '2022-05-30',
			level: 0,
		},
		{
			count: 2,
			date: '2022-05-31',
			level: 1,
		},
		{
			count: 0,
			date: '2022-06-01',
			level: 0,
		},
		{
			count: 0,
			date: '2022-06-02',
			level: 0,
		},
		{
			count: 6,
			date: '2022-06-03',
			level: 3,
		},
		{
			count: 1,
			date: '2022-06-04',
			level: 1,
		},
		{
			count: 4,
			date: '2022-06-05',
			level: 2,
		},
		{
			count: 0,
			date: '2022-06-06',
			level: 0,
		},
		{
			count: 0,
			date: '2022-06-07',
			level: 0,
		},
		{
			count: 3,
			date: '2022-06-08',
			level: 2,
		},
		{
			count: 4,
			date: '2022-06-09',
			level: 2,
		},
		{
			count: 0,
			date: '2022-06-10',
			level: 0,
		},
		{
			count: 3,
			date: '2022-06-11',
			level: 2,
		},
		{
			count: 2,
			date: '2022-06-12',
			level: 1,
		},
		{
			count: 1,
			date: '2022-06-13',
			level: 1,
		},
		{
			count: 0,
			date: '2022-06-14',
			level: 0,
		},
		{
			count: 1,
			date: '2022-06-15',
			level: 1,
		},
		{
			count: 0,
			date: '2022-06-16',
			level: 0,
		},
		{
			count: 2,
			date: '2022-06-17',
			level: 1,
		},
		{
			count: 0,
			date: '2022-06-18',
			level: 0,
		},
		{
			count: 0,
			date: '2022-06-19',
			level: 0,
		},
		{
			count: 4,
			date: '2022-06-20',
			level: 2,
		},
		{
			count: 3,
			date: '2022-06-21',
			level: 2,
		},
		{
			count: 0,
			date: '2022-06-22',
			level: 0,
		},
		{
			count: 6,
			date: '2022-06-23',
			level: 3,
		},
		{
			count: 8,
			date: '2022-06-24',
			level: 4,
		},
		{
			count: 0,
			date: '2022-06-25',
			level: 0,
		},
		{
			count: 0,
			date: '2022-06-26',
			level: 0,
		},
		{
			count: 0,
			date: '2022-06-27',
			level: 0,
		},
		{
			count: 0,
			date: '2022-06-28',
			level: 0,
		},
		{
			count: 1,
			date: '2022-06-29',
			level: 1,
		},
		{
			count: 0,
			date: '2022-06-30',
			level: 0,
		},
		{
			count: 5,
			date: '2022-07-01',
			level: 2,
		},
		{
			count: 0,
			date: '2022-07-02',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-03',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-04',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-05',
			level: 0,
		},
		{
			count: 4,
			date: '2022-07-06',
			level: 2,
		},
		{
			count: 0,
			date: '2022-07-07',
			level: 0,
		},
		{
			count: 3,
			date: '2022-07-08',
			level: 2,
		},
		{
			count: 0,
			date: '2022-07-09',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-10',
			level: 0,
		},
		{
			count: 6,
			date: '2022-07-11',
			level: 3,
		},
		{
			count: 0,
			date: '2022-07-12',
			level: 0,
		},
		{
			count: 2,
			date: '2022-07-13',
			level: 1,
		},
		{
			count: 3,
			date: '2022-07-14',
			level: 2,
		},
		{
			count: 6,
			date: '2022-07-15',
			level: 3,
		},
		{
			count: 0,
			date: '2022-07-16',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-17',
			level: 0,
		},
		{
			count: 1,
			date: '2022-07-18',
			level: 1,
		},
		{
			count: 8,
			date: '2022-07-19',
			level: 4,
		},
		{
			count: 4,
			date: '2022-07-20',
			level: 2,
		},
		{
			count: 0,
			date: '2022-07-21',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-22',
			level: 0,
		},
		{
			count: 9,
			date: '2022-07-23',
			level: 4,
		},
		{
			count: 0,
			date: '2022-07-24',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-25',
			level: 0,
		},
		{
			count: 0,
			date: '2022-07-26',
			level: 0,
		},
		{
			count: 5,
			date: '2022-07-27',
			level: 2,
		},
		{
			count: 2,
			date: '2022-07-28',
			level: 1,
		},
		{
			count: 4,
			date: '2022-07-29',
			level: 2,
		},
		{
			count: 4,
			date: '2022-07-30',
			level: 2,
		},
		{
			count: 4,
			date: '2022-07-31',
			level: 2,
		},
		{
			count: 3,
			date: '2022-08-01',
			level: 2,
		},
		{
			count: 2,
			date: '2022-08-02',
			level: 1,
		},
		{
			count: 5,
			date: '2022-08-03',
			level: 2,
		},
		{
			count: 2,
			date: '2022-08-04',
			level: 1,
		},
		{
			count: 4,
			date: '2022-08-05',
			level: 2,
		},
		{
			count: 3,
			date: '2022-08-06',
			level: 2,
		},
		{
			count: 5,
			date: '2022-08-07',
			level: 2,
		},
		{
			count: 6,
			date: '2022-08-08',
			level: 3,
		},
		{
			count: 3,
			date: '2022-08-09',
			level: 2,
		},
		{
			count: 0,
			date: '2022-08-10',
			level: 0,
		},
		{
			count: 4,
			date: '2022-08-11',
			level: 2,
		},
		{
			count: 0,
			date: '2022-08-12',
			level: 0,
		},
		{
			count: 7,
			date: '2022-08-13',
			level: 3,
		},
		{
			count: 3,
			date: '2022-08-14',
			level: 2,
		},
		{
			count: 0,
			date: '2022-08-15',
			level: 0,
		},
		{
			count: 2,
			date: '2022-08-16',
			level: 1,
		},
		{
			count: 5,
			date: '2022-08-17',
			level: 2,
		},
		{
			count: 6,
			date: '2022-08-18',
			level: 3,
		},
		{
			count: 0,
			date: '2022-08-19',
			level: 0,
		},
		{
			count: 2,
			date: '2022-08-20',
			level: 1,
		},
		{
			count: 5,
			date: '2022-08-21',
			level: 2,
		},
		{
			count: 4,
			date: '2022-08-22',
			level: 2,
		},
		{
			count: 0,
			date: '2022-08-23',
			level: 0,
		},
		{
			count: 0,
			date: '2022-08-24',
			level: 0,
		},
		{
			count: 3,
			date: '2022-08-25',
			level: 2,
		},
		{
			count: 7,
			date: '2022-08-26',
			level: 3,
		},
		{
			count: 3,
			date: '2022-08-27',
			level: 2,
		},
		{
			count: 7,
			date: '2022-08-28',
			level: 3,
		},
		{
			count: 0,
			date: '2022-08-29',
			level: 0,
		},
		{
			count: 2,
			date: '2022-08-30',
			level: 1,
		},
		{
			count: 8,
			date: '2022-08-31',
			level: 4,
		},
		{
			count: 2,
			date: '2022-09-01',
			level: 1,
		},
		{
			count: 2,
			date: '2022-09-02',
			level: 1,
		},
		{
			count: 5,
			date: '2022-09-03',
			level: 2,
		},
		{
			count: 1,
			date: '2022-09-04',
			level: 1,
		},
		{
			count: 0,
			date: '2022-09-05',
			level: 0,
		},
		{
			count: 0,
			date: '2022-09-06',
			level: 0,
		},
		{
			count: 3,
			date: '2022-09-07',
			level: 2,
		},
		{
			count: 0,
			date: '2022-09-08',
			level: 0,
		},
		{
			count: 0,
			date: '2022-09-09',
			level: 0,
		},
		{
			count: 0,
			date: '2022-09-10',
			level: 0,
		},
		{
			count: 4,
			date: '2022-09-11',
			level: 2,
		},
		{
			count: 2,
			date: '2022-09-12',
			level: 1,
		},
		{
			count: 5,
			date: '2022-09-13',
			level: 2,
		},
		{
			count: 6,
			date: '2022-09-14',
			level: 3,
		},
		{
			count: 0,
			date: '2022-09-15',
			level: 0,
		},
		{
			count: 0,
			date: '2022-09-16',
			level: 0,
		},
		{
			count: 5,
			date: '2022-09-17',
			level: 2,
		},
		{
			count: 0,
			date: '2022-09-18',
			level: 0,
		},
		{
			count: 0,
			date: '2022-09-19',
			level: 0,
		},
		{
			count: 0,
			date: '2022-09-20',
			level: 0,
		},
		{
			count: 2,
			date: '2022-09-21',
			level: 1,
		},
		{
			count: 0,
			date: '2022-09-22',
			level: 0,
		},
		{
			count: 3,
			date: '2022-09-23',
			level: 2,
		},
		{
			count: 0,
			date: '2022-09-24',
			level: 0,
		},
		{
			count: 6,
			date: '2022-09-25',
			level: 3,
		},
		{
			count: 0,
			date: '2022-09-26',
			level: 0,
		},
		{
			count: 0,
			date: '2022-09-27',
			level: 0,
		},
		{
			count: 3,
			date: '2022-09-28',
			level: 2,
		},
		{
			count: 3,
			date: '2022-09-29',
			level: 2,
		},
		{
			count: 0,
			date: '2022-09-30',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-01',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-02',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-03',
			level: 0,
		},
		{
			count: 3,
			date: '2022-10-04',
			level: 2,
		},
		{
			count: 0,
			date: '2022-10-05',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-06',
			level: 0,
		},
		{
			count: 9,
			date: '2022-10-07',
			level: 4,
		},
		{
			count: 7,
			date: '2022-10-08',
			level: 3,
		},
		{
			count: 0,
			date: '2022-10-09',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-10',
			level: 0,
		},
		{
			count: 1,
			date: '2022-10-11',
			level: 1,
		},
		{
			count: 6,
			date: '2022-10-12',
			level: 3,
		},
		{
			count: 0,
			date: '2022-10-13',
			level: 0,
		},
		{
			count: 1,
			date: '2022-10-14',
			level: 1,
		},
		{
			count: 0,
			date: '2022-10-15',
			level: 0,
		},
		{
			count: 1,
			date: '2022-10-16',
			level: 1,
		},
		{
			count: 9,
			date: '2022-10-17',
			level: 4,
		},
		{
			count: 7,
			date: '2022-10-18',
			level: 3,
		},
		{
			count: 0,
			date: '2022-10-19',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-20',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-21',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-22',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-23',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-24',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-25',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-26',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-27',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-28',
			level: 0,
		},
		{
			count: 0,
			date: '2022-10-29',
			level: 0,
		},
		{
			count: 1,
			date: '2022-10-30',
			level: 1,
		},
		{
			count: 0,
			date: '2022-10-31',
			level: 0,
		},
		{
			count: 1,
			date: '2022-11-01',
			level: 1,
		},
		{
			count: 3,
			date: '2022-11-02',
			level: 2,
		},
		{
			count: 6,
			date: '2022-11-03',
			level: 3,
		},
		{
			count: 4,
			date: '2022-11-04',
			level: 2,
		},
		{
			count: 0,
			date: '2022-11-05',
			level: 0,
		},
		{
			count: 0,
			date: '2022-11-06',
			level: 0,
		},
		{
			count: 3,
			date: '2022-11-07',
			level: 2,
		},
		{
			count: 3,
			date: '2022-11-08',
			level: 2,
		},
		{
			count: 0,
			date: '2022-11-09',
			level: 0,
		},
		{
			count: 1,
			date: '2022-11-10',
			level: 1,
		},
		{
			count: 6,
			date: '2022-11-11',
			level: 3,
		},
		{
			count: 0,
			date: '2022-11-12',
			level: 0,
		},
		{
			count: 3,
			date: '2022-11-13',
			level: 2,
		},
		{
			count: 1,
			date: '2022-11-14',
			level: 1,
		},
		{
			count: 3,
			date: '2022-11-15',
			level: 2,
		},
		{
			count: 0,
			date: '2022-11-16',
			level: 0,
		},
		{
			count: 0,
			date: '2022-11-17',
			level: 0,
		},
		{
			count: 0,
			date: '2022-11-18',
			level: 0,
		},
		{
			count: 2,
			date: '2022-11-19',
			level: 1,
		},
		{
			count: 3,
			date: '2022-11-20',
			level: 2,
		},
		{
			count: 1,
			date: '2022-11-21',
			level: 1,
		},
		{
			count: 5,
			date: '2022-11-22',
			level: 2,
		},
		{
			count: 0,
			date: '2022-11-23',
			level: 0,
		},
		{
			count: 0,
			date: '2022-11-24',
			level: 0,
		},
		{
			count: 2,
			date: '2022-11-25',
			level: 1,
		},
		{
			count: 2,
			date: '2022-11-26',
			level: 1,
		},
		{
			count: 1,
			date: '2022-11-27',
			level: 1,
		},
		{
			count: 0,
			date: '2022-11-28',
			level: 0,
		},
		{
			count: 4,
			date: '2022-11-29',
			level: 2,
		},
		{
			count: 6,
			date: '2022-11-30',
			level: 3,
		},
		{
			count: 0,
			date: '2022-12-01',
			level: 0,
		},
		{
			count: 1,
			date: '2022-12-02',
			level: 1,
		},
		{
			count: 1,
			date: '2022-12-03',
			level: 1,
		},
		{
			count: 0,
			date: '2022-12-04',
			level: 0,
		},
		{
			count: 2,
			date: '2022-12-05',
			level: 1,
		},
		{
			count: 2,
			date: '2022-12-06',
			level: 1,
		},
		{
			count: 0,
			date: '2022-12-07',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-08',
			level: 0,
		},
		{
			count: 1,
			date: '2022-12-09',
			level: 1,
		},
		{
			count: 0,
			date: '2022-12-10',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-11',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-12',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-13',
			level: 0,
		},
		{
			count: 6,
			date: '2022-12-14',
			level: 3,
		},
		{
			count: 0,
			date: '2022-12-15',
			level: 0,
		},
		{
			count: 2,
			date: '2022-12-16',
			level: 1,
		},
		{
			count: 0,
			date: '2022-12-17',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-18',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-19',
			level: 0,
		},
		{
			count: 1,
			date: '2022-12-20',
			level: 1,
		},
		{
			count: 4,
			date: '2022-12-21',
			level: 2,
		},
		{
			count: 0,
			date: '2022-12-22',
			level: 0,
		},
		{
			count: 3,
			date: '2022-12-23',
			level: 2,
		},
		{
			count: 4,
			date: '2022-12-24',
			level: 2,
		},
		{
			count: 1,
			date: '2022-12-25',
			level: 1,
		},
		{
			count: 1,
			date: '2022-12-26',
			level: 1,
		},
		{
			count: 8,
			date: '2022-12-27',
			level: 4,
		},
		{
			count: 2,
			date: '2022-12-28',
			level: 1,
		},
		{
			count: 0,
			date: '2022-12-29',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-30',
			level: 0,
		},
		{
			count: 0,
			date: '2022-12-31',
			level: 0,
		},
	],
	markdownContent = `Heading
=======

Sub-heading
-----------

# Alternative heading #

Paragraphs are separated 
by a blank line.

Two spaces at the end of a line  
produce a line break.

Text attributes _italic_, **bold**, \`monospace\`.

Horizontal rule:

---

Bullet lists nested within numbered list:

  1. fruits
     * apple
     * banana
  2. vegetables
     - carrot
     - broccoli

A [link](http://example.com).

![Image](Icon-pictures.png "icon")

> Markdown uses email-style
characters for blockquoting.
>
> Multiple paragraphs need to be prepended individually.

Most inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.
     
    `;
function App() {
	return (
		<div className="App">
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/typewriter"
						exact
						element={<Typewriter text={['Typewriter Effect', 'A React Component']} />}
					/>
					<Route
						path="/activity-calendar"
						exact
						element={<ActivityCalendar data={calendarData} theme={DEFAULT_THEME} />}
					/>
					<Route path="/markdown-editor" exact element={<MarkdownEditor content={markdownContent} />} />
					<Route path="/todo-app" exact element={<ToDoApp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
