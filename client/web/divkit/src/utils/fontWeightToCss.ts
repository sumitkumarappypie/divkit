import type { FontWeight } from '../types/text';

export function fontWeightToCss(fontWeight?: FontWeight | undefined): number | undefined {
    if (
        fontWeight === 'light' ||
        fontWeight === 'medium' ||
        fontWeight === 'bold' ||
        fontWeight === 'regular' ||
        (fontWeight as string) === 'semi_bold'
    ) {
        if (fontWeight === 'medium') {
            return 500;
        } else if (fontWeight === 'bold') {
            return 700;
        } else if (fontWeight === 'light') {
            return 300;
        } else if ((fontWeight as string) === 'semi_bold') {
            return 600;
        }

        return 400;
    }
}
