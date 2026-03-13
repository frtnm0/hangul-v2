import type { Dataset } from './types';
import { sinoNumbersItems } from './numbersSino';
import { nativeNumbersItems } from './numbersNative';
import { commonColors, commonFruits, commonFoods, basicVocab } from './vocabulary';

export * from './types';
export * from './hangul';

export const datasets: Dataset[] = [
    {
        id: 'sino-numbers',
        title: 'Sino-Korean Numbers',
        description: 'Numbers 1-100 (Used for dates, money, minutes, phone numbers)',
        items: sinoNumbersItems,
    },
    {
        id: 'native-numbers',
        title: 'Native Korean Numbers',
        description: 'Numbers 1-100 (Used for counting objects, age, hours)',
        items: nativeNumbersItems,
    },
    {
        id: 'colors',
        title: 'Common Colors',
        description: 'Basic color terminology',
        items: commonColors,
    },
    {
        id: 'fruits-foods',
        title: 'Fruits & Foods',
        description: 'Common fruits, foods, and drinks',
        items: [...commonFruits, ...commonFoods],
    },
    {
        id: 'basic-vocab',
        title: 'Basic Vocabulary',
        description: 'Essential beginner vocabulary including greetings',
        items: basicVocab,
    }
];
