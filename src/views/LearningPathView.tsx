import { Header } from '../components/Header';
import { Compass, BookOpen, MessageSquare, ListTodo, Zap, CheckCircle2 } from 'lucide-react';

interface StepProps {
    number: number;
    title: string;
    description: string;
    items: string[];
    example?: { korean: string; english: string };
    icon: React.ReactNode;
}

function PathStep({ number, title, description, items, example, icon }: StepProps) {
    return (
        <div className="relative pl-12 pb-12 group last:pb-0">
            {/* Timeline Line */}
            <div className="absolute left-[21px] top-10 bottom-0 w-0.5 bg-zinc-800 group-last:hidden" />
            
            {/* Timeline Dot/Icon */}
            <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-blue-400 z-10 group-hover:border-blue-500/50 transition-colors shadow-lg">
                {icon}
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 group-hover:border-zinc-700/50 transition-all hover:shadow-xl hover:shadow-blue-500/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md uppercase tracking-wider">Step {number}</span>
                        <h3 className="text-xl font-bold text-zinc-100">{title}</h3>
                    </div>
                </div>
                
                <p className="text-zinc-400 mb-4 leading-relaxed">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {items.map((item, i) => (
                        <span key={i} className="text-xs font-medium bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-700/30">
                            {item}
                        </span>
                    ))}
                </div>

                {example && (
                    <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
                        <div>
                            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Example</p>
                            <p className={`${example.korean.length > 4 ? 'text-xl' : 'text-2xl'} font-bold font-korean text-[#ff8c00]`}>{example.korean}</p>
                        </div>
                        <p className="text-zinc-400 italic text-sm">{example.english}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

interface LearningPathViewProps {
    onBack: () => void;
}

export function LearningPathView({ onBack }: LearningPathViewProps) {
    const steps = [
        {
            title: "Hangul Foundations",
            description: "Master the alphabet. Consonants, vowels, and how they combine into blocks. Your goal is to read without romanization.",
            items: ["Consonants", "Vowels", "Double Vowels", "Block Formation"],
            icon: <BookOpen className="w-5 h-5" />,
            example: { korean: "한글", english: "Hangul" }
        },
        {
            title: "Pronunciation & Batchim",
            description: "Learn how sounds change when letters are at the bottom (Batchim) or when words link together.",
            items: ["Batchim", "Sound Changes", "Linking (연음)"],
            icon: <Zap className="w-5 h-5" />,
            example: { korean: "한국", english: "Han-guk" }
        },
        {
            title: "Core Vocabulary",
            description: "Focus on the 80/20 method: Learn the 100-300 most common words to understand 80% of daily speech.",
            items: ["High-frequency nouns", "Basic Verbs", "Action words"],
            icon: <ListTodo className="w-5 h-5" />,
            example: { korean: "사람", english: "Person" }
        },
        {
            title: "Sentence Structure",
            description: "Understand the core logic of Korean: Subject + Object + Verb. It's the opposite of English!",
            icon: <Compass className="w-5 h-5" />,
            items: ["SOV Order", "Word Positioning"],
            example: { korean: "저는 밥을 먹어요", english: "I eat rice." }
        },
        {
            title: "The Power of Particles",
            description: "The 'glue' of Korean sentences. They tell you who is doing what and where.",
            items: ["Topic (은/는)", "Subject (이/가)", "Object (을/를)", "Location (에/에서)"],
            icon: <Layers className="w-5 h-5" />,
        },
        {
            title: "Verb Conjugation",
            description: "Learn how to change verbs for politeness. This unlocks basic communication with others.",
            items: ["Present Polite", "아요/어요", "하다 -> 해요"],
            icon: <MessageSquare className="w-5 h-5" />,
            example: { korean: "가다 -> 가요", english: "Go -> I go" }
        },
        {
            title: "Number Systems",
            description: "Master both Native and Sino systems and understand which one to use for dates, age, or money.",
            items: ["Sino-Korean", "Native Korean", "Counters"],
            icon: <CheckCircle2 className="w-5 h-5" />,
            example: { korean: "하나, 둘, 셋", english: "One, Two, Three" }
        },
        {
            title: "Essential Expressions",
            description: "Polished phrases to survive and thrive in basic Korean social situations.",
            items: ["Greetings", "Apologies", "Yes/No/Maybe", "Existence (있어요/없어요)"],
            icon: <Zap className="w-5 h-5" />,
            example: { korean: "감사합니다", english: "Thank you" }
        }
    ];

    return (
        <div className="flex-1 flex flex-col h-full min-h-0">
            <Header title="Beginner Learning Path" onBack={onBack} />
            <div className="flex-1 overflow-y-auto px-4 py-8 pb-32">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-10">
                        <h2 className="text-xl font-bold text-blue-400 mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5" />
                            The 80/20 Secret
                        </h2>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            Don't memorize word lists in isolation! The biggest mistake beginners make is studying grammar without context. 
                            <span className="text-white font-bold px-1">Always learn words + sentences together.</span> 
                            Focus on the top 1000 core words to hit conversational fluency fast.
                        </p>
                    </div>

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <PathStep 
                                key={index}
                                number={index + 1}
                                title={step.title}
                                description={step.description}
                                items={step.items}
                                example={step.example}
                                icon={step.icon}
                            />
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-center">
                        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-zinc-100 mb-2">Ready to start?</h3>
                        <p className="text-zinc-400 mb-6">Master these steps one by one to build a rock-solid foundation in Korean.</p>
                        <button 
                            onClick={onBack}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                        >
                            Return to Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { Layers } from 'lucide-react';
