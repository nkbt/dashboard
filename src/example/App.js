import React from 'react';
import Dashboard from '..';

const projects = [
  'in-flux/component-router',
  'nkbt/react-component-template',
  'nkbt/react-collapse',
  'nkbt/react-swap',
  'nkbt/react-debounce-input',
  'nkbt/react-copy-to-clipboard',
  'nkbt/react-interval',
  'nkbt/react-text-filter',
  'nkbt/react-page-click',
  'nkbt/react-normalized-select',
  'nkbt/minicat',
  'nkbt/css-modules-component-template',
  'nkbt/css-modules-component-template-test',
  'nkbt/flux-common-store',
  'nkbt/esnext-quickstart',
  'nkbt/ng-modular',
  'packetloop/angular-webpack'
];

const App = React.createClass({
  render() {
    return (
      <div>
        <Dashboard projects={projects} />
      </div>
    );
  }
});


export default App;
