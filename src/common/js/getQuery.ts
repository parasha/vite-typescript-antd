
// url query 参数格式化
export function getQuery(): any{
	const urlStr = location.search;
	const myRequest = new Object();
	if (urlStr.indexOf("?") != -1) {
		const tempStr = urlStr.substr(urlStr.indexOf("?") + 1);
		const strArr = tempStr.split("&");
		for (let i = 0; i < strArr.length; i++) {
			myRequest[strArr[i].split("=")[0]] = strArr[i].split("=")[1];
		}
	}
	return myRequest;
}