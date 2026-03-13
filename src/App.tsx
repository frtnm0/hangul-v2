import { useState } from 'react'
import { HomeView, HangulChartView, FlashcardView } from './views'
import { datasets } from './data'

export type ViewState =
  | { type: 'home' }
  | { type: 'hangul' }
  | { type: 'flashcard', datasetId: string };

function App() {
  const [viewState, setViewState] = useState<ViewState>({ type: 'home' });

  const goHome = () => setViewState({ type: 'home' });
  const goHangul = () => setViewState({ type: 'hangul' });
  const goFlashcard = (id: string) => setViewState({ type: 'flashcard', datasetId: id });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30">
      {viewState.type === 'home' && (
        <HomeView
          onSelectHangul={goHangul}
          onSelectDataset={goFlashcard}
        />
      )}

      {viewState.type === 'hangul' && (
        <HangulChartView onBack={goHome} />
      )}

      {viewState.type === 'flashcard' && (() => {
        const dataset = datasets.find(d => d.id === viewState.datasetId);
        if (!dataset) return <HomeView onSelectHangul={goHangul} onSelectDataset={goFlashcard} />;

        return (
          <FlashcardView
            title={dataset.title}
            items={dataset.items}
            onBack={goHome}
          />
        );
      })()}
    </div>
  )
}

export default App
