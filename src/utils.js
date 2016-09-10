export function overrideCSS(internalStyles, externalStyles) {
	let newCSS = {};

	for (let entry in internalStyles) {
			if (Object.keys(externalStyles).indexOf(entry) != -1) {
				newCSS[entry] = `${internalStyles[entry]} ${externalStyles[entry]}`;
			}else{
				newCSS[entry] = internalStyles[entry];
			}
	}

	return newCSS;
}