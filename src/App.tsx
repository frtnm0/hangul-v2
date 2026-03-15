import { useState } from 'react'
import { HomeView, HangulChartView, FlashcardView, LearningPathView } from './views'
import { datasets } from './data'

export type ViewState =
  | { type: 'home' }
  | { type: 'hangul' }
  | { type: 'learning-path' }
  | { type: 'flashcard', datasetId: string, limit: number }
  | { type: 'mixed', datasetIds: string[], limit: number };

function App() {
  const [viewState, setViewState] = useState<ViewState>({ type: 'home' });

  const goHome = () => setViewState({ type: 'home' });
  const goHangul = () => setViewState({ type: 'hangul' });
  const goLearningPath = () => setViewState({ type: 'learning-path' });
  const goFlashcard = (id: string, limit: number) => setViewState({ type: 'flashcard', datasetId: id, limit });
  const goMixed = (ids: string[], limit: number) => setViewState({ type: 'mixed', datasetIds: ids, limit });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30">
      {viewState.type === 'home' && (
        <HomeView
          onSelectHangul={goHangul}
          onSelectLearningPath={goLearningPath}
          onSelectDataset={goFlashcard}
          onSelectMixed={goMixed}
        />
      )}

      {viewState.type === 'hangul' && (
        <HangulChartView onBack={goHome} />
      )}

      {viewState.type === 'learning-path' && (
        <LearningPathView onBack={goHome} />
      )}

      {(viewState.type === 'flashcard' || viewState.type === 'mixed') && (() => {
        let title = '';
        let items: any[] = [];
        let initialRandom = false;
        let initialShowRomanization = false;

        if (viewState.type === 'flashcard') {
          const dataset = datasets.find(d => d.id === viewState.datasetId);
          if (!dataset) return (
            <HomeView 
              onSelectHangul={goHangul} 
              onSelectLearningPath={goLearningPath} 
              onSelectDataset={goFlashcard} 
              onSelectMixed={goMixed} 
            />
          );
          title = dataset.title;
          items = dataset.items;
          if (viewState.limit > 0) {
            items = items.slice(0, viewState.limit);
          }
        } else {
          title = 'Mixed Session';
          items = datasets
            .filter(d => viewState.datasetIds.includes(d.id))
            .flatMap(d => {
              const res = d.items;
              return viewState.limit > 0 ? res.slice(0, viewState.limit) : res;
            });
          initialRandom = true;
          initialShowRomanization = false;
        }

        return (
          <FlashcardView
            title={title}
            items={items}
            initialRandom={initialRandom}
            initialShowRomanization={initialShowRomanization}
            onBack={goHome}
          />
        );
      })()}
    </div>
  );
}

export default App
