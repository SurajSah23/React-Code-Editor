import MonacoEditor from '@monaco-editor/react';
import PropTypes from 'prop-types';  // Add PropTypes for validation

const Editor = ({ currentFile, onChange }) => {
  return (
    <MonacoEditor
      height="100%"
      language={currentFile.language}
      value={currentFile.content}
      theme="vs-dark"
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: 'on',
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
};

// PropTypes validation for the props
Editor.propTypes = {
  currentFile: PropTypes.shape({
    language: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
