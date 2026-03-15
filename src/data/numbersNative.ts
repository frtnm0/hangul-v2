import type { FlashcardItem } from './types';

const nativeUnits: Record<number, { k: string, r: string }> = {
    1: { k: '하나', r: 'ha-na' }, 2: { k: '둘', r: 'dul' }, 3: { k: '셋', r: 'set' },
    4: { k: '넷', r: 'net' }, 5: { k: '다섯', r: 'da-seot' }, 6: { k: '여섯', r: 'yeo-seot' },
    7: { k: '일곱', r: 'il-gop' }, 8: { k: '여덟', r: 'yeo-deol' }, 9: { k: '아홉', r: 'a-hop' }
};

const nativeTens: Record<number, { k: string, r: string }> = {
    1: { k: '열', r: 'yeol' }, 2: { k: '스물', r: 'seu-mul' }, 3: { k: '서른', r: 'seo-reun' },
    4: { k: '마흔', r: 'ma-heun' }, 5: { k: '쉰', r: 'swin' }, 6: { k: '예순', r: 'ye-sun' },
    7: { k: '일흔', r: 'il-heun' }, 8: { k: '여든', r: 'yeo-deun' }, 9: { k: '아흔', r: 'a-heun' }
};

export const nativeNumbersItems: FlashcardItem[] = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    if (num === 100) {
        return { 
            id: `native-100`, 
            korean: '백', 
            romanization: 'baek', 
            meaning: '100 (Sino)',
            example: '백 개 있어요',
            exampleMeaning: 'There are 100 items',
            audioFile: `/audio/native/100.mp3`
        };
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
        meaning: num.toString(),
        example: `${korean} 개 있어요`,
        exampleMeaning: `There are ${num} items`,
        audioFile: `/audio/native/${num}.mp3`
    };
});
