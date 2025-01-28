import { useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor';
import Preview from './components/Preview';
import FileExplorer from './components/FileExplorer';
import PackageManager from './components/PackageManager';
import { FaCode } from 'react-icons/fa';

const initialFiles = [
  {
    name: 'App.js',
    content: `function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello React!</h1>
      <p>Start editing to see your changes.</p>
    </div>
  );
}`,
    language: 'javascript',
  },
];

function App() {
  const [files, setFiles] = useState(initialFiles);
  const [currentFile, setCurrentFile] = useState(files[0]);
  const [packages, setPackages] = useState([]);

  const handleFileChange = (newContent) => {
    if (newContent === undefined) return;

    const updatedFiles = files.map((file) =>
      file.name === currentFile.name
        ? { ...file, content: newContent }
        : file
    );
    setFiles(updatedFiles);
    setCurrentFile({ ...currentFile, content: newContent });
  };

  const handleAddPackage = (pkg) => {
    setPackages([...packages, pkg]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <header className="flex items-center justify-between px-4 py-3 bg-blue-600 shadow-md">
        <div className="flex items-center space-x-3">
          <FaCode className="text-white" size={24} />
          <h1 className="text-lg sm:text-2xl font-semibold text-white">
            React Code Editor
          </h1>
        </div>
        <div className="hidden sm:block text-white text-sm sm:text-base">
          Custom React Workspace
        </div>
      </header>
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row w-full md:w-auto bg-gray-800 border-r border-gray-700 md:min-w-[200px] lg:min-w-[300px]">
          <FileExplorer
            files={files}
            currentFile={currentFile}
            onFileSelect={setCurrentFile}
          />
          <PackageManager packages={packages} onAddPackage={handleAddPackage} />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col">
          <Split
            className="split flex flex-col h-full"
            direction="vertical"
            sizes={[70, 30]}
            minSize={100}
            gutterSize={6}
          >
            <div className="h-full p-2 sm:p-4 bg-gray-50">
              <Editor currentFile={currentFile} onChange={handleFileChange} />
            </div>
            <div className="h-full bg-gray-100 overflow-auto shadow-inner p-2">
              <Preview code={currentFile.content} />
            </div>
          </Split>
        </div>
      </div>
      <footer className="bg-gray-800 py-2 px-2 sm:px-4 text-center text-xs sm:text-sm text-gray-400">
        <span>React Code Editor © 2025 | Built with ❤️ by Developers</span>
      </footer>
    </div>
  );
}

export default App;
