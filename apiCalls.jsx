const fetchData = async () => {
	try {
		const response = await fetch('http://localhost:8000/');
		const json = await response.json();
		return json;
	} catch (error) {
		console.log('ERROR!!!', error);
	}
};

export default fetchData;
