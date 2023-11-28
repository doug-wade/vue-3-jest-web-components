import ComponentOne from '../src/ComponentOne.vue';
import { mount } from '@vue/test-utils';
import { it, describe, expect } from '@jest/globals';

describe('ComponentOne', () => {
    it('should render a my-example-component', () => {
        const wrapper = mount(ComponentOne);

        expect(wrapper.find('my-example-component').exists()).toBeTruthy();
    })
})