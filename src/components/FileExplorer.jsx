import { FiFile } from 'react-icons/fi'; // Import from react-icons/fi
import PropTypes from 'prop-types';

const FileExplorer = ({ files, currentFile, onFileSelect }) => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-sm font-semibold mb-4">Files</h2>
      <div className="space-y-2">
        {files.map((file) => (
          <button
            key={file.name}
            onClick={() => onFileSelect(file)}
            className={`flex items-center space-x-2 w-full px-2 py-1 rounded text-left ${
              currentFile.name === file.name
                ? 'bg-blue-600'
                : 'hover:bg-gray-800'
            }`}
          >
            <FiFile size={16} /> {/* Updated icon */}
            <span className="text-sm">{file.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

FileExplorer.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentFile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
  onFileSelect: PropTypes.func.isRequired,
};

export default FileExplorer;
