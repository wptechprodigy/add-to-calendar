import React from 'react';
import Form from './components/Form';

function App() {
	return (
		<div className='flex flex-col bg-teal-100 justify-center items-center min-h-screen max-w-full'>
			<h1 className='text-3xl my-10 mx-4 md:mx-10'>InstaLive Add to Calendar Test</h1>
			<Form />
		</div>
	);
}

export default App;
