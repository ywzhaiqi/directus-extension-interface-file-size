<template>
	<div class="file-size">
		<v-input
			v-model="valueShort"
			type="number"
			placeholder="大小"
			:min="0"
			v-tooltip="actionTooltip"
			@update:model-value="handleChange"
			>
		</v-input>

		<v-select
			class="file-size__unit"
			v-model="unit"
			:items="unitItems"
			/>
	</div>
</template>

<script>
import { ref, watch } from 'vue';
import { formatBytes, sizeUnits, unformatBytes } from './utils'

export default {
	props: {
		value: {
			type: Number,
			default: null,
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
		const valueShort = ref(0)
		const unit = ref('MB');
		const unitItems = sizeUnits.map(unit => ({ text: unit, value: unit }))

		watch(() => props.value, () => {
			const [iNum, iUnit] = formatBytes(props.value || 0);
			valueShort.value = iNum;
			unit.value = iUnit;
		}, { immediate: true })

		watch(unit, handleChange);

		return { valueShort, unit, unitItems, handleChange };

		function handleChange() {
			const realValue = unformatBytes(valueShort.value, unit.value);
			emit('input', realValue);
		}
	},
};
</script>

<style scoped>
.file-size {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.file-size__unit {
	width: 60px;
}
</style>