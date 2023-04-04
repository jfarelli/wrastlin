import { useState, useEffect } from 'react';

const useWrestlerSelect = (wrestlers) => {
	const [matchUp, setMatchUp] = useState(() => getRandomWrestlers(wrestlers));

	function getRandomWrestlers(wrestlers) {
		if (!wrestlers) {
			throw new Error(
				'It takes TWO to tango! Make sure you select TWO wrestlers!'
			);
		}

		const randomize = wrestlers.slice().sort(() => 0.5 - Math.random());

		return [randomize[0], randomize[1]];
	}

	useEffect(() => {
		setMatchUp(getRandomWrestlers(wrestlers));
	}, [wrestlers]);

	return [matchUp];
};

export default useWrestlerSelect;
