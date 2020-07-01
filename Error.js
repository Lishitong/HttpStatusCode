const ErrorConfig = {
	400: {
		en: 'Bad Request',
		cn:
			'1、语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求2、请求参数有误',
		status: 400,
	},
	401: {
		en: 'Unauthorized',
		cn: '当前请求需要用户验证',
		status: 401,
	},
	402: {
		en: 'Payment Required',
		cn:
			'此响应码保留以便将来使用，创造此响应码的最初目的是用于数字支付系统，然而现在并未使用',
		status: 402,
	},
	403: {
		en: 'Forbidden',
		cn: '服务器已经理解请求，但是拒绝执行它',
		status: 403,
	},
	404: {
		en: 'Not Found',
		cn: '请求失败，请求所希望得到的资源未被在服务器上发现',
		status: 404,
	},
	405: {
		en: 'Method Not Allowed',
		cn: '请求行中指定的请求方法不能被用于请求相应的资源',
		status: 405,
	},
	406: {
		en: 'Not Acceptable',
		cn: '请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体',
		status: 406,
	},
	407: {
		en: 'Proxy Authentication Required',
		cn: '与401响应类似，只不过客户端必须在代理服务器上进行身份验证',
		status: 407,
	},
	408: {
		en: 'Request Timeout',
		cn: '请求超时',
		status: 408,
	},
	409: {
		en: 'Conflict',
		cn: '由于和被请求的资源的当前状态之间存在冲突，请求无法完成',
		status: 409,
	},
	410: {
		en: 'Gone',
		cn: '被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址',
		status: 410,
	},
	411: {
		en: 'Length Required',
		cn: '服务器拒绝在没有定义 Content-Length 头的情况下接受请求',
		status: 411,
	},
	412: {
		en: 'Precondition Failed',
		cn: '服务器在验证在请求头字段中给出先决条件时，没能满足其中的一个或多个',
		status: 412,
	},
	413: {
		en: 'Payload Too Large',
		cn:
			'服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围',
		status: 413,
	},
	414: {
		en: 'URI Too Long',
		cn:
			'请求的URI 长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务',
		status: 414,
	},
	415: {
		en: 'Unsupported Media Type',
		cn:
			'对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝',
		status: 415,
	},
	416: {
		en: 'Range Not Satisfiable',
		cn:
			'如果请求中包含了 Range 请求头，并且 Range 中指定的任何数据范围都与当前资源的可用范围不重合，同时请求中又没有定义 If-Range 请求头，那么服务器就应当返回416状态码',
		status: 416,
	},
	417: {
		en: 'Expectation Failed',
		cn: '此响应代码意味着服务器无法满足 Expect 请求标头字段指示的期望值',
		status: 417,
	},
	418: {
		en: 'Im a teapot',
		cn: '服务器拒绝尝试用 “茶壶冲泡咖啡”',
		status: 418,
	},
	421: {
		en: 'Misdirected Request',
		cn:
			'该请求针对的是无法产生响应的服务器。 这可以由服务器发送，该服务器未配置为针对包含在请求 URI 中的方案和权限的组合产生响应',
		status: 421,
	},
	422: {
		en: 'Unprocessable Entity',
		cn: '请求格式良好，但由于语义错误而无法遵循',
		status: 422,
	},
	423: {
		en: 'Locked',
		cn: '正在访问的资源被锁定',
		status: 423,
	},
	424: {
		en: 'Failed Dependency',
		cn: '由于先前的请求失败，所以此次请求失败',
		status: 424,
	},
	425: {
		en: 'Too Early',
		cn: '服务器不愿意冒着风险去处理可能重播的请求',
		status: 425,
	},
	426: {
		en: 'Upgrade Required',
		cn:
			'服务器拒绝使用当前协议执行请求，但可能在客户机升级到其他协议后愿意这样做。 服务器在 426 响应中发送 Upgrade 头以指示所需的协议',
		status: 426,
	},
	428: {
		en: 'Precondition Required',
		cn:
			'原始服务器要求该请求是有条件的。 旨在防止“丢失更新”问题，即客户端获取资源状态，修改该状态并将其返回服务器，同时第三方修改服务器上的状态，从而导致冲突',
		status: 428,
	},
	429: {
		en: 'Too Many Requests',
		cn: '用户在给定的时间内发送了太多请求（“限制请求速率”）',
		status: 429,
	},
	431: {
		en: 'Request Header Fields Too Large',
		cn:
			'服务器不愿意处理请求，因为它的 请求头字段太大（ Request Header Fields Too Large）。 请求可以在减小请求头字段的大小后重新提交',
		status: 431,
	},
	451: {
		en: 'Unavailable For Legal Reasons',
		cn: '用户请求非法资源，例如：由政府审查的网页',
		status: 451,
	},
	500: {
		en: 'Internal Server Error',
		cn: '内部服务器错误,服务器遇到了不知道如何处理的情况',
		status: 500,
	},
	501: {
		en: 'Not Implemented',
		cn: '此请求方法不被服务器支持且无法被处理',
		status: 501,
	},
	502: {
		en: 'Bad Gateway',
		cn:
			'此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应',
		status: 502,
	},
	503: {
		en: 'Service Unavailable',
		cn: '服务器没有准备好处理请求。 常见原因是服务器因维护或重载而停机',
		status: 503,
	},
	504: {
		en: 'Gateway Timeout',
		cn: '服务器不能及时得到响应',
		status: 504,
	},
	505: {
		en: 'HTTP Version Not Supported',
		cn: '服务器不支持请求中所使用的HTTP协议版本',
		status: 505,
	},
	506: {
		en: 'Variant Also Negotiates',
		cn: '服务器有一个内部配置错误：对请求的透明内容协商导致循环引用',
		status: 506,
	},
	507: {
		en: 'Insufficient Storage',
		cn:
			'服务器有内部配置错误：所选的变体资源被配置为参与透明内容协商本身，因此不是协商过程中的适当端点',
		status: 507,
	},
	508: {
		en: 'Loop Detected',
		cn: '服务器在处理请求时检测到无限循环',
		status: 508,
	},
	509: {
		en: 'Not Extended',
		cn: '客户端需要对请求进一步扩展，服务器才能实现它',
		status: 509,
	},
	510: {
		en: 'Network Authentication Required',
		cn: '客户端需要进行身份验证才能获得网络访问权限',
		status: 510,
	},
}

export { ErrorConfig }
