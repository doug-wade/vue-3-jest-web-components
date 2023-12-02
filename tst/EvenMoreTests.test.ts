import ComponentTwo from '../src/ComponentTwo.vue';
import { mount } from '@vue/test-utils';
import { it, describe, expect } from '@jest/globals';

describe('EvenMoreTests', () => {
    it('should render a my-other-component', () => {
        const wrapper = mount(ComponentTwo);

        expect(wrapper.find('my-other-component').exists()).toBeTruthy();
    })
})