import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_LIST_BOOK, GET_BOOK } from '../../GraphQL/Query/Book';
import { UPDATE_BOOK } from '../../GraphQL/Mutation/Book';

export default function AddBook() {
	const { id } = useParams();
	const history = useHistory();
	const [updateBoock] = useMutation(UPDATE_BOOK);
	const { data = {}, loading } = useQuery(GET_BOOK, {
		variables: {
			id: id,
		},
	});

	const [state, setState] = useState({
		title: '',
		description: '',
	});

	useEffect(() => {
		const book = data ? data.getBook : null;
		if (book) {
			setState({
				title: book.title,
				description: book.description,
			});
		}
	}, [data]);

	const onServer = (e) => {
		e.preventDefault();
		updateBoock({
			variables: { id: id, ...state },
			refetchQueries: [{ query: GET_LIST_BOOK }],
		});
		history.push('/books');
	};

	return state ? (
		<div className='container' style={{ marginTop: '20%' }}>
			<div className='row'>
				<div className='col-md-12'>
					<h1 className='text-center'>Create book</h1>
					<form action='' method='POST' onSubmit={onServer}>
						<div className='form-group'>
							<label htmlFor='title'>
								Title <span className='require'>*</span>
							</label>
							<input
								type='text'
								className='form-control'
								value={state.title}
								onChange={(e) =>
									setState({
										...state,
										title: e.target.value,
									})
								}
								name='title'
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='description'>
								Description{' '}
								<span className='require'>*</span>
							</label>
							<textarea
								rows='5'
								value={state.description}
								onChange={(e) =>
									setState({
										...state,
										description: e.target.value,
									})
								}
								className='form-control'
								name='description'
							></textarea>
						</div>

						<div className='form-group'>
							<button
								type='submit'
								className='btn btn-primary  btn-lg btn-block'
							>
								Create
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	) : (
		<div>{loading && <p>Loading...</p>}</div>
	);
}
