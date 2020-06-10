import React from 'react';
import Label from '../components/Label';

function Input({ children, name, type, value, placeholder, setValue }) {
	const handleChange = (event) => setValue(event.target.value);

	return (
		<div className='mb-4'>
			<Label name={name}>{children}</Label>
			<input
				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
				id={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Input;
