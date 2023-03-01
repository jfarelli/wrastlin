const fetchData = async () => {
	try {
		// const response = await fetch('https://wrastlin-be.vercel.app');
		const response = await fetch('http://localhost:8000/');
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
