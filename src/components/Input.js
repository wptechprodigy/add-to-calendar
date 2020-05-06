import React from 'react';

function Input({ children, name, type, value, placeholder, setValue }) {
	const handleChange = (event) => setValue(event.target.value);

	return (
		<div className='mb-4'>
			<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={name}>
				{children}
			</label>
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
