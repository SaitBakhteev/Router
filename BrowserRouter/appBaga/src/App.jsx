import { useState } from 'react';
import ClassicApp from './Threepages.jsx';
import ModernApp from './ModernRouter';

export default function App() {
  const [mode, setMode] = useState('classic');

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setMode('classic')}>Классический</button>
      <button onClick={() => setMode('modern')} style={{ marginLeft: 10 }}>Современный</button>
      <hr />
      
      {/* Тут переключаются приложения */}
      {mode === 'classic' ? <ClassicApp /> : <ModernApp />}
    </div>
  );
}