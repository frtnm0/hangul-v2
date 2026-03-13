import type { FlashcardItem } from './types';

const nativeUnits: Record<number, { k: string, r: string }> = {
    1: { k: '하나', r: 'hana' }, 2: { k: '둘', r: 'dul' }, 3: { k: '셋', r: 'set' },
    4: { k: '넷', r: 'net' }, 5: { k: '다섯', r: 'daseot' }, 6: { k: '여섯', r: 'yeoseot' },
    7: { k: '일곱', r: 'ilgop' }, 8: { k: '여덟', r: 'yeodeol' }, 9: { k: '아홉', r: 'ahop' }
};

const nativeTens: Record<number, { k: string, r: string }> = {
    1: { k: '열', r: 'yeol' }, 2: { k: '스물', r: 'seumul' }, 3: { k: '서른', r: 'seoreun' },
    4: { k: '마흔', r: 'maheun' }, 5: { k: '쉰', r: 'swin' }, 6: { k: '예순', r: 'yesun' },
    7: { k: '일흔', r: 'ilheun' }, 8: { k: '여든', r: 'yeodeun' }, 9: { k: '아흔', r: 'aheun' }
};

export const nativeNumbersItems: FlashcardItem[] = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    if (num === 100) {
        return { id: `native-100`, korean: '백', romanization: 'baek', meaning: '100 (Sino)' };
    }

    const tens = Math.floor(num / 10);
    const units = num % 10;

    let korean = '';
    let rom = '';

    if (tens > 0) {
        korean += nativeTens[tens].k;
        rom += nativeTens[tens].r;
    }

    if (units > 0) {
        korean += nativeUnits[units].k;
        rom += (tens > 0 ? '-' : '') + nativeUnits[units].r;
    }

    return {
        id: `native-${num}`,
        korean,
        romanization: rom,
        meaning: num.toString()
    };
});
