import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const counter = ref(0)
		const onClick = () => counter.value++
		return () => (
			<div onClick={onClick}>{counter.value}</div>
		)
	}
})
