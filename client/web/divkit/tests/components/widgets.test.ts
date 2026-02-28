/**
 * @vitest-environment jsdom
 */

import {
    describe,
    expect,
    test
} from 'vitest';

import type { DivCheckboxData } from '../../src/types/checkbox';
import type { DivRadioData, RadioOption } from '../../src/types/radio';
import type { DivProgressData } from '../../src/types/progress';

describe('checkbox', () => {
    describe('type definition shape', () => {
        test('should require type field set to checkbox', () => {
            const data: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'my_var'
            };

            expect(data.type).toBe('checkbox');
        });

        test('should require is_checked_variable', () => {
            const data: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'checked_state'
            };

            expect(data.is_checked_variable).toBe('checked_state');
        });

        test('should accept optional color properties', () => {
            const data: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'my_var',
                on_color: '#00ff00',
                off_color: '#cccccc',
                check_mark_color: '#ffffff'
            };

            expect(data.on_color).toBe('#00ff00');
            expect(data.off_color).toBe('#cccccc');
            expect(data.check_mark_color).toBe('#ffffff');
        });

        test('should accept optional is_enabled as BooleanInt', () => {
            const dataTrue: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'my_var',
                is_enabled: 1
            };
            const dataFalse: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'my_var',
                is_enabled: 0
            };
            const dataBoolTrue: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'my_var',
                is_enabled: true
            };
            const dataBoolFalse: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'my_var',
                is_enabled: false
            };

            expect(dataTrue.is_enabled).toBe(1);
            expect(dataFalse.is_enabled).toBe(0);
            expect(dataBoolTrue.is_enabled).toBe(true);
            expect(dataBoolFalse.is_enabled).toBe(false);
        });

        test('should inherit DivBaseData properties', () => {
            const data: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'my_var',
                id: 'checkbox_1',
                alpha: 0.5,
                visibility: 'visible',
                accessibility: {
                    description: 'Toggle option',
                    type: 'checkbox'
                }
            };

            expect(data.id).toBe('checkbox_1');
            expect(data.alpha).toBe(0.5);
            expect(data.visibility).toBe('visible');
            expect(data.accessibility?.description).toBe('Toggle option');
        });

        test('should work with minimal required fields only', () => {
            const data: DivCheckboxData = {
                type: 'checkbox',
                is_checked_variable: 'var_name'
            };

            expect(data.is_enabled).toBeUndefined();
            expect(data.on_color).toBeUndefined();
            expect(data.off_color).toBeUndefined();
            expect(data.check_mark_color).toBeUndefined();
        });
    });

    describe('component import', () => {
        test('should be importable as a Svelte component', async () => {
            const mod = await import('../../src/components/checkbox/Checkbox.svelte');

            expect(mod).toBeDefined();
            expect(mod.default).toBeDefined();
        });
    });
});

describe('radio', () => {
    describe('RadioOption type shape', () => {
        test('should require value and accept optional text', () => {
            const option: RadioOption = {
                value: 'option_a'
            };

            expect(option.value).toBe('option_a');
            expect(option.text).toBeUndefined();
        });

        test('should accept text property', () => {
            const option: RadioOption = {
                value: 'option_b',
                text: 'Option B'
            };

            expect(option.value).toBe('option_b');
            expect(option.text).toBe('Option B');
        });
    });

    describe('type definition shape', () => {
        test('should require type field set to radio', () => {
            const data: DivRadioData = {
                type: 'radio',
                options: [{ value: 'a' }],
                value_variable: 'selected'
            };

            expect(data.type).toBe('radio');
        });

        test('should require options array and value_variable', () => {
            const options: RadioOption[] = [
                { value: 'opt1', text: 'First' },
                { value: 'opt2', text: 'Second' },
                { value: 'opt3' }
            ];
            const data: DivRadioData = {
                type: 'radio',
                options,
                value_variable: 'selected_option'
            };

            expect(data.options).toHaveLength(3);
            expect(data.value_variable).toBe('selected_option');
            expect(data.options[0].text).toBe('First');
            expect(data.options[2].text).toBeUndefined();
        });

        test('should accept optional orientation', () => {
            const verticalData: DivRadioData = {
                type: 'radio',
                options: [{ value: 'a' }],
                value_variable: 'var',
                orientation: 'vertical'
            };
            const horizontalData: DivRadioData = {
                type: 'radio',
                options: [{ value: 'a' }],
                value_variable: 'var',
                orientation: 'horizontal'
            };

            expect(verticalData.orientation).toBe('vertical');
            expect(horizontalData.orientation).toBe('horizontal');
        });

        test('should accept optional item_spacing', () => {
            const data: DivRadioData = {
                type: 'radio',
                options: [{ value: 'a' }],
                value_variable: 'var',
                item_spacing: 16
            };

            expect(data.item_spacing).toBe(16);
        });

        test('should accept optional selected_color', () => {
            const data: DivRadioData = {
                type: 'radio',
                options: [{ value: 'a' }],
                value_variable: 'var',
                selected_color: '#ff0000'
            };

            expect(data.selected_color).toBe('#ff0000');
        });

        test('should accept optional is_enabled as BooleanInt', () => {
            const data: DivRadioData = {
                type: 'radio',
                options: [{ value: 'a' }],
                value_variable: 'var',
                is_enabled: 1
            };

            expect(data.is_enabled).toBe(1);
        });

        test('should inherit DivBaseData properties', () => {
            const data: DivRadioData = {
                type: 'radio',
                options: [{ value: 'a' }],
                value_variable: 'var',
                id: 'radio_group_1',
                alpha: 1,
                visibility: 'visible',
                accessibility: {
                    description: 'Choose an option',
                    type: 'radio'
                }
            };

            expect(data.id).toBe('radio_group_1');
            expect(data.accessibility?.description).toBe('Choose an option');
        });

        test('should work with minimal required fields only', () => {
            const data: DivRadioData = {
                type: 'radio',
                options: [{ value: 'x' }],
                value_variable: 'v'
            };

            expect(data.orientation).toBeUndefined();
            expect(data.item_spacing).toBeUndefined();
            expect(data.selected_color).toBeUndefined();
            expect(data.is_enabled).toBeUndefined();
        });
    });

    describe('component import', () => {
        test('should be importable as a Svelte component', async () => {
            const mod = await import('../../src/components/radio/Radio.svelte');

            expect(mod).toBeDefined();
            expect(mod.default).toBeDefined();
        });
    });
});

describe('progress', () => {
    describe('type definition shape', () => {
        test('should require type field set to progress', () => {
            const data: DivProgressData = {
                type: 'progress'
            };

            expect(data.type).toBe('progress');
        });

        test('should accept optional style as linear or circular', () => {
            const linearData: DivProgressData = {
                type: 'progress',
                style: 'linear'
            };
            const circularData: DivProgressData = {
                type: 'progress',
                style: 'circular'
            };

            expect(linearData.style).toBe('linear');
            expect(circularData.style).toBe('circular');
        });

        test('should accept optional value as number', () => {
            const data: DivProgressData = {
                type: 'progress',
                value: 0.75
            };

            expect(data.value).toBe(0.75);
        });

        test('should accept optional is_indeterminate as BooleanInt', () => {
            const data: DivProgressData = {
                type: 'progress',
                is_indeterminate: 1
            };

            expect(data.is_indeterminate).toBe(1);
        });

        test('should accept optional color properties', () => {
            const data: DivProgressData = {
                type: 'progress',
                active_color: '#00ff00',
                inactive_color: '#e0e0e0'
            };

            expect(data.active_color).toBe('#00ff00');
            expect(data.inactive_color).toBe('#e0e0e0');
        });

        test('should accept optional track_thickness', () => {
            const data: DivProgressData = {
                type: 'progress',
                track_thickness: 8
            };

            expect(data.track_thickness).toBe(8);
        });

        test('should accept all optional properties together', () => {
            const data: DivProgressData = {
                type: 'progress',
                style: 'circular',
                value: 0.5,
                is_indeterminate: false,
                active_color: '#129386',
                inactive_color: 'rgba(0, 0, 0, .1)',
                track_thickness: 6
            };

            expect(data.style).toBe('circular');
            expect(data.value).toBe(0.5);
            expect(data.is_indeterminate).toBe(false);
            expect(data.active_color).toBe('#129386');
            expect(data.inactive_color).toBe('rgba(0, 0, 0, .1)');
            expect(data.track_thickness).toBe(6);
        });

        test('should inherit DivBaseData properties', () => {
            const data: DivProgressData = {
                type: 'progress',
                id: 'loading_bar',
                alpha: 0.8,
                visibility: 'visible',
                accessibility: {
                    description: 'Loading progress'
                }
            };

            expect(data.id).toBe('loading_bar');
            expect(data.alpha).toBe(0.8);
            expect(data.accessibility?.description).toBe('Loading progress');
        });

        test('should work with minimal required fields only', () => {
            const data: DivProgressData = {
                type: 'progress'
            };

            expect(data.style).toBeUndefined();
            expect(data.value).toBeUndefined();
            expect(data.is_indeterminate).toBeUndefined();
            expect(data.active_color).toBeUndefined();
            expect(data.inactive_color).toBeUndefined();
            expect(data.track_thickness).toBeUndefined();
        });
    });

    describe('component import', () => {
        test('should be importable as a Svelte component', async () => {
            const mod = await import('../../src/components/progress/Progress.svelte');

            expect(mod).toBeDefined();
            expect(mod.default).toBeDefined();
        });
    });
});
