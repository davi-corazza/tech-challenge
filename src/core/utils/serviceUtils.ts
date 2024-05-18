const defaultReturnStatement = (
	response: any,
	responseName: string,
	promise: Promise<any>,
	errorObject?: any
) => {
	return promise
		.then((result) => {
			response.json({
				status: 200,
				[responseName]: result,
			});
		})
		.catch((err) => {
			console.error(err);
			response.json(
				errorObject
					? errorObject
					: {
							status: 500,
							error: err,
					  }
			);
		});
};

const formatObjectResponse = (includedObject, objectName: string) => {
	let result = [];
	includedObject.map((object) => {
		result.push(object[objectName][0]);
	});

	return result;
};

export { defaultReturnStatement, formatObjectResponse };
