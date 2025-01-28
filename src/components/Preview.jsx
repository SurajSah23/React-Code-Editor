import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Preview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                color: #333;
              }
              #root {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              ${code}
              ReactDOM.render(
                <App />,
                document.getElementById('root')
              );
            </script>
          </body>
        </html>
      `;

      iframeRef.current.srcdoc = html;
    }
  }, [code]);

  return (
    <div
      className="w-full h-full bg-gray-100 border border-gray-300 rounded-md shadow-md
      sm:p-2 md:p-4"
    >
      <iframe
        ref={iframeRef}
        title="preview"
        className="w-full h-full rounded-md border-none"
        sandbox="allow-scripts"
        style={{
          minHeight: '200px', // Default height for mobile
          height: '100%',
        }}
      />
    </div>
  );
};

Preview.propTypes = {
  code: PropTypes.string.isRequired,
};

export default Preview;
