function capitalizeWord(word: string) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeSentence(sentence: string) {
	return sentence?.toLowerCase()?.split(' ')?.map(capitalizeWord)?.join(' ');
}

export { capitalizeSentence, capitalizeWord };
