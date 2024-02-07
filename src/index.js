import InterfaceComponent from './interface.vue';

export default {
	id: 'file-size',
	name: 'FileSize',
	icon: 'box',
	description: 'File size custom interface for Directus',
	component: InterfaceComponent,
	options: null,
	types: ['integer', 'bigInteger'],
};
