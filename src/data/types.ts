export interface FlashcardItem {
    id: string;
    korean: string;
    romanization: string;
    meaning: string;
    example: string;
    exampleMeaning: string;
    breakdown?: string;
    breakdownMeaning?: string;
    wordType?: string;
    audioFile?: string;
}

export interface HangulItem {
    id: string;
    character: string;
    romanization: string;
    type: 'consonant' | 'vowel' | 'double-consonant' | 'combined-vowel';
    description?: string;
}

export interface Dataset {
    id: string;
    title: string;
    description: string;
    items: FlashcardItem[];
}
