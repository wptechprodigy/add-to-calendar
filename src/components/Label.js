import React from 'react'

function Label({ children, name}) {
  return (
		<label
			className='block text-gray-700 text-sm font-bold mb-2'
			htmlFor={name}>
			{children}
		</label>
	);
}

export default Label

