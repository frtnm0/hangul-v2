import type { HangulItem } from './types';

export const consonants: HangulItem[] = [
    { id: 'c1', character: 'ㄱ', romanization: 'g/k', type: 'consonant' },
    { id: 'c2', character: 'ㄴ', romanization: 'n', type: 'consonant' },
    { id: 'c3', character: 'ㄷ', romanization: 'd/t', type: 'consonant' },
    { id: 'c4', character: 'ㄹ', romanization: 'r/l', type: 'consonant' },
    { id: 'c5', character: 'ㅁ', romanization: 'm', type: 'consonant' },
    { id: 'c6', character: 'ㅂ', romanization: 'b/p', type: 'consonant' },
    { id: 'c7', character: 'ㅅ', romanization: 's', type: 'consonant' },
    { id: 'c8', character: 'ㅇ', romanization: 'ng', type: 'consonant', description: 'Silent at start of syllable' },
    { id: 'c9', character: 'ㅈ', romanization: 'j', type: 'consonant' },
    { id: 'c10', character: 'ㅊ', romanization: 'ch', type: 'consonant' },
    { id: 'c11', character: 'ㅋ', romanization: 'k', type: 'consonant' },
    { id: 'c12', character: 'ㅌ', romanization: 't', type: 'consonant' },
    { id: 'c13', character: 'ㅍ', romanization: 'p', type: 'consonant' },
    { id: 'c14', character: 'ㅎ', romanization: 'h', type: 'consonant' },
];

export const doubleConsonants: HangulItem[] = [
    { id: 'dc1', character: 'ㄲ', romanization: 'kk', type: 'double-consonant' },
    { id: 'dc2', character: 'ㄸ', romanization: 'tt', type: 'double-consonant' },
    { id: 'dc3', character: 'ㅃ', romanization: 'pp', type: 'double-consonant' },
    { id: 'dc4', character: 'ㅆ', romanization: 'ss', type: 'double-consonant' },
    { id: 'dc5', character: 'ㅉ', romanization: 'jj', type: 'double-consonant' },
];

export const vowels: HangulItem[] = [
    { id: 'v1', character: 'ㅏ', romanization: 'a', type: 'vowel' },
    { id: 'v2', character: 'ㅑ', romanization: 'ya', type: 'vowel' },
    { id: 'v3', character: 'ㅓ', romanization: 'eo', type: 'vowel' },
    { id: 'v4', character: 'ㅕ', romanization: 'yeo', type: 'vowel' },
    { id: 'v5', character: 'ㅗ', romanization: 'o', type: 'vowel' },
    { id: 'v6', character: 'ㅛ', romanization: 'yo', type: 'vowel' },
    { id: 'v7', character: 'ㅜ', romanization: 'u', type: 'vowel' },
    { id: 'v8', character: 'ㅠ', romanization: 'yu', type: 'vowel' },
    { id: 'v9', character: 'ㅡ', romanization: 'eu', type: 'vowel' },
    { id: 'v10', character: 'ㅣ', romanization: 'i', type: 'vowel' },
];

export const combinedVowels: HangulItem[] = [
    { id: 'cv1', character: 'ㅐ', romanization: 'ae', type: 'combined-vowel' },
    { id: 'cv2', character: 'ㅒ', romanization: 'yae', type: 'combined-vowel' },
    { id: 'cv3', character: 'ㅔ', romanization: 'e', type: 'combined-vowel' },
    { id: 'cv4', character: 'ㅖ', romanization: 'ye', type: 'combined-vowel' },
    { id: 'cv5', character: 'ㅘ', romanization: 'wa', type: 'combined-vowel' },
    { id: 'cv6', character: 'ㅙ', romanization: 'wae', type: 'combined-vowel' },
    { id: 'cv7', character: 'ㅚ', romanization: 'oe', type: 'combined-vowel' },
    { id: 'cv8', character: 'ㅝ', romanization: 'wo', type: 'combined-vowel' },
    { id: 'cv9', character: 'ㅞ', romanization: 'we', type: 'combined-vowel' },
    { id: 'cv10', character: 'ㅟ', romanization: 'wi', type: 'combined-vowel' },
    { id: 'cv11', character: 'ㅢ', romanization: 'ui', type: 'combined-vowel' },
];

export const allHangul = [...consonants, ...doubleConsonants, ...vowels, ...combinedVowels];
