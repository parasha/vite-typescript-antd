import { defineComponent } from "vue";

export default defineComponent({
  name: 'model-input',
	props: {
		title: String,
	},
	setup(props, context) {

		const updateTitle = (e) => {
      console.log('update:', e.target.value);
			context.emit("update:title", e.target.value);
		};

		return () => (
			<input type="text" style={{border: '1px solid #e3e3e3'}} value={props.title} onChange={updateTitle} />
		);
	},
});
