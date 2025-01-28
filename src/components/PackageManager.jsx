import { useState } from 'react';
import PropTypes from 'prop-types';

const PackageManager = ({ packages, onAddPackage }) => {
  const [newPackage, setNewPackage] = useState('');
  const [version, setVersion] = useState('latest');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPackage) {
      onAddPackage({ name: newPackage, version });
      setNewPackage('');
      setVersion('latest');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Package Manager</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Package Name</label>
          <input
            type="text"
            value={newPackage}
            onChange={(e) => setNewPackage(e.target.value)}
            placeholder="Enter package name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Version</label>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            placeholder="Enter version (default: latest)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 shadow-md"
        >
          Add Package
        </button>
      </form>
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Added Packages</h3>
        <ul className="space-y-2">
          {packages.map((pkg) => (
            <li
              key={pkg.name}
              className="flex items-center justify-between px-4 py-2 bg-gray-200 rounded-lg shadow-md"
            >
              <span className="font-medium text-gray-700">
                {pkg.name} <span className="text-gray-500">@{pkg.version}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PackageManager.propTypes = {
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddPackage: PropTypes.func.isRequired,
};

export default PackageManager;
