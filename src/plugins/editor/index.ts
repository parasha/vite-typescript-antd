import "./index.css";

const INLINE_ELEMENT_LIST = [
	"b",
	"big",
	"i",
	"small",
	"tt",
	"abbr",
	"acronym",
	"cite",
	"code",
	"dfn",
	"em",
	"kbd",
	"strong",
	"samp",
	"var",
	"a",
	"bdo",
	"br",
	"img",
	"map",
	"object",
	"q",
	"script",
	"span",
	"sub",
	"sup",
	"button",
	"input",
	"label",
	"select",
	"textarea",
];

// 一个截流函数
function throttle(fn: Function, time = 500): Function {
	let timeout: any = null;

	return function () {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			fn(...arguments);
		}, time);
	};
}

const formatDoms = throttle((rootDom: HTMLElement) => {
	const nodesList = rootDom.childNodes;
	console.log("throttle format doms: ", nodesList);
	nodesList.forEach((node: ChildNode) => {
		const name = node.nodeName.toLocaleLowerCase();
	});
}, 500);

function flatNodeList(nodeList: NodeListOf<ChildNode>) {
	// node 节点嵌套、soan + br、div + br
	return [];
}

class Editor {
	private el: HTMLElement;

	constructor(el: HTMLElement) {
		this.el = el;
		el.id = "mo-editor";
		el.contentEditable = "true";
		// 绑定事件
		this.bindEvent();
	}

	bindEvent(): void {
		this.el.addEventListener("input", () => {
			console.log("input event");
			formatDoms(this.el);
		});
	}
}

export default Editor;
