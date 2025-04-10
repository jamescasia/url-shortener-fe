import React from 'react';
import './styles.css';
import UrlShortenerForm from './components/UrlShortenerForm';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="wave-background">
      <svg
  className="wave"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
>
  <path
    fill="#61a5ff"
    d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,176C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
/>
</svg>

        <div className="content">
          <UrlShortenerForm />
        </div>
      </div>
    </div>
  );
};

export default App;
