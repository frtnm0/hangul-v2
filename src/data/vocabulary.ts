import type { FlashcardItem } from './types';

export const commonColors: FlashcardItem[] = [
    { id: 'col1', korean: '빨간색', romanization: 'ppalgansaek', meaning: 'Red' },
    { id: 'col2', korean: '주황색', romanization: 'juhwangsaek', meaning: 'Orange' },
    { id: 'col3', korean: '노란색', romanization: 'noransaek', meaning: 'Yellow' },
    { id: 'col4', korean: '초록색', romanization: 'choroksaek', meaning: 'Green' },
    { id: 'col5', korean: '파란색', romanization: 'paransaek', meaning: 'Blue' },
    { id: 'col6', korean: '보라색', romanization: 'borasaek', meaning: 'Purple' },
    { id: 'col7', korean: '검은색', romanization: 'geomeunsaek', meaning: 'Black' },
    { id: 'col8', korean: '하얀색', romanization: 'hayansaek', meaning: 'White' },
    { id: 'col9', korean: '회색', romanization: 'hoesaek', meaning: 'Gray' },
    { id: 'col10', korean: '갈색', romanization: 'galsaek', meaning: 'Brown' },
];

export const commonFruits: FlashcardItem[] = [
    { id: 'fr1', korean: '사과', romanization: 'sagwa', meaning: 'Apple' },
    { id: 'fr2', korean: '바나나', romanization: 'banana', meaning: 'Banana' },
    { id: 'fr3', korean: '포도', romanization: 'podo', meaning: 'Grape' },
    { id: 'fr4', korean: '딸기', romanization: 'ttalgi', meaning: 'Strawberry' },
    { id: 'fr5', korean: '수박', romanization: 'subak', meaning: 'Watermelon' },
    { id: 'fr6', korean: '오렌지', romanization: 'orenji', meaning: 'Orange (fruit)' },
    { id: 'fr7', korean: '복숭아', romanization: 'boksunga', meaning: 'Peach' },
    { id: 'fr8', korean: '배', romanization: 'bae', meaning: 'Pear / Boat / Stomach' },
];

export const commonFoods: FlashcardItem[] = [
    { id: 'fd1', korean: '밥', romanization: 'bap', meaning: 'Rice / Meal' },
    { id: 'fd2', korean: '물', romanization: 'mul', meaning: 'Water' },
    { id: 'fd3', korean: '빵', romanization: 'ppang', meaning: 'Bread' },
    { id: 'fd4', korean: '고기', romanization: 'gogi', meaning: 'Meat' },
    { id: 'fd5', korean: '김치', romanization: 'gimchi', meaning: 'Kimchi' },
    { id: 'fd6', korean: '라면', romanization: 'ramyeon', meaning: 'Ramen' },
    { id: 'fd7', korean: '우유', romanization: 'uyu', meaning: 'Milk' },
    { id: 'fd8', korean: '커피', romanization: 'keopi', meaning: 'Coffee' },
];

export const basicVocab: FlashcardItem[] = [
    ...commonColors,
    ...commonFruits,
    ...commonFoods,
    { id: 'v1', korean: '안녕하세요', romanization: 'annyeonghaseyo', meaning: 'Hello' },
    { id: 'v2', korean: '감사합니다', romanization: 'gamsahamnida', meaning: 'Thank you' },
    { id: 'v3', korean: '네', romanization: 'ne', meaning: 'Yes' },
    { id: 'v4', korean: '아니요', romanization: 'aniyo', meaning: 'No' },
    { id: 'v5', korean: '제발', romanization: 'jebal', meaning: 'Please' },
    { id: 'v6', korean: '미안합니다', romanization: 'mianhamnida', meaning: 'Sorry' },
    { id: 'v7', korean: '이름', romanization: 'ireum', meaning: 'Name' },
    { id: 'v8', korean: '사람', romanization: 'saram', meaning: 'Person' },
    { id: 'v9', korean: '친구', romanization: 'chingu', meaning: 'Friend' },
    { id: 'v10', korean: '학교', romanization: 'hakgyo', meaning: 'School' },
];
