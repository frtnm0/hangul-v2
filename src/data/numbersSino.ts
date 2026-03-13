import type { FlashcardItem } from './types';

const sinoBases: Record<number, string> = {
    1: '일', 2: '이', 3: '삼', 4: '사', 5: '오',
    6: '육', 7: '칠', 8: '팔', 9: '구', 10: '십'
};

const sinoRomBases: Record<number, string> = {
    1: 'il', 2: 'i', 3: 'sam', 4: 'sa', 5: 'o',
    6: 'yuk', 7: 'chil', 8: 'pal', 9: 'gu', 10: 'sip'
};

export const sinoNumbersItems: FlashcardItem[] = Array.from({ length: 100 }, (_, i) => {
    const num = i + 1;
    let korean = '';
    let rom = '';

    if (num === 100) {
        return { id: `sino-100`, korean: '백', romanization: 'baek', meaning: '100' };
    }

    if (num <= 10) {
        korean = sinoBases[num];
        rom = sinoRomBases[num];
    } else {
        const tens = Math.floor(num / 10);
        const units = num % 10;

        if (tens === 1) {
            korean = '십' + (units > 0 ? sinoBases[units] : '');
            rom = 'sip' + (units > 0 ? '-' + sinoRomBases[units] : '');
        } else {
            korean = sinoBases[tens] + '십' + (units > 0 ? sinoBases[units] : '');
            rom = sinoRomBases[tens] + '-sip' + (units > 0 ? '-' + sinoRomBases[units] : '');
        }
    }

    return {
        id: `sino-${num}`,
        korean,
        romanization: rom,
        meaning: num.toString(),
        audioFile: `/audio/sino/${num}.mp3`
    };
});
