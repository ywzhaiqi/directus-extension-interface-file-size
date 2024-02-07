import InterfaceComponent from './interface.vue';

export default {
	id: 'file-size',
	name: 'FileSize',
	icon: 'box',
	description: 'File size custom interface for Directus',
	component: InterfaceComponent,
	options: [
		{
			field: 'is1024bytes',
			name: 'Use 1024 bytes',
			type: 'boolean',
			meta: {
				width: 'full',
				interface: 'v-checkbox',
				options: {
          label: 'Use 1024 bytes = 1 KB',
        },
				note: 'default 1000 bytes = 1 KB',
			},
			schema: {
				default_value: false,
			},
		},
	],
	types: ['integer', 'bigInteger'],
};
