type BaseAPIResponse = {
	message: string;
};

type BAseAPIErrorResponse = BaseAPIResponse & {
	errors: {
		[key: string]: string[];
	};
};
