import React from 'react';
import ReactDOM from 'react-dom/client';
import {Greeting} from './components/Greeting/Greeting.tsx';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
      <Greeting/>
    </DevSupport>
  </React.StrictMode>
);