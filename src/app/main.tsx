import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import '../shared/styles/main.css';
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')!).render(<App />);
