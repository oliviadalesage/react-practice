import { useState } from 'react';
import Button from 'carbon-react/lib/components/button';
import CarbonProvider from 'carbon-react/lib/components/carbon-provider';
import GlobalStyle from 'carbon-react/lib/style/global-style';

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <CarbonProvider>
      <GlobalStyle />
      <main className="app">
        <h1>React practice</h1>
        <p>Ready for our next coding session.</p>
        <Button
          buttonType="primary"
          onClick={() => setClicks((current) => current + 1)}
        >
          Click me
        </Button>
        <p role="status">Button clicks: {clicks}</p>
      </main>
    </CarbonProvider>
  );
}

export default App;
