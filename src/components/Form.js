import React, { useState } from 'react';
import '@culturehq/add-to-calendar/dist/styles.css';
import AddToCalendar from '@culturehq/add-to-calendar';
import Input from './Input';
import DateTime from './DateTime';

function Form() {
	let defaultDate = new Date();

	const [name, setName] = useState('My Awesome Event');
	const [details, setDetails] = useState(
		'This awesome event is going to be really awesome!',
	);
	const [location, setLocation] = useState('Decagon, Lekki - Lagos.');
	const [startsAt, setStartsAt] = useState(defaultDate);
	const [endsAt, setEndsAt] = useState(defaultDate);

	return (
		<>
			<section className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-5/6 md:w-4/6 lg:w-3/5 xl:w-1/3'>
				<Input
					name='event'
					type='text'
					value={name}
					setValue={setName}
					placeholder='Event title'>
					Event
				</Input>
				<Input
					name='details'
					type='text'
					value={details}
					setValue={setDetails}
					placeholder='Event details'>
					Details
				</Input>
				<Input
					name='location'
					type='text'
					value={location}
					setValue={setLocation}
					placeholder='Event location'>
					Location
				</Input>
				<div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
					<DateTime name='starts-at' selected={startsAt} setValue={setStartsAt}>
						Starts At
					</DateTime>
					<DateTime name='ends-at' selected={endsAt} setValue={setEndsAt}>
						Ends At
					</DateTime>
				</div>
				<div className='chq-atc--wrap text-xl font-semibold'>
					<AddToCalendar event={{ name, details, location, startsAt, endsAt }} />
				</div>
			</section>
			<p className='text-center text-gray-500 text-xs mb-10'>
				&copy;2020 InstaLive Add to Calendar Test.
			</p>
		</>
	);
}

export default Form;
