const fetchData = async () => {
	try {
		// The below fetch works, just running off local server while building
		// const response = await fetch('https://wrastlin-be.vercel.app');
		const response = await fetch('http://localhost:8000/');
		console.log('RESPONSE: ', response);
		if (!response.ok) {
			throw new Error(
				'OOOOOHHHH YEEEEAAAAHHHH!!! The server IS down!! Snap into a Slim-Jim and try again!'
			);
		}
		const json = await response.json();
		return json;
	} catch (error) {
		console.log('ERROR!!!', error);
	}
};

export default fetchData;
