import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function DateTime({children, name, selected, setValue}) {
  const handleChange = (date) => setValue(date);

	return (
    <div className='mb-4'>
			<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={name}>
				{children}
			</label>
			<DatePicker
        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={name}
				selected={selected}
				onChange={handleChange}
				showTimeSelect
				dateFormat='MMMM d, yyyy h:mm aa'
			/>
		</div>
	);
}

export default DateTime;
