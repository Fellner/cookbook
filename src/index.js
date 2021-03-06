import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {createHistory, createMemoryHistory} from 'history';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';
import {Router, RoutingContext, match} from 'react-router';
import {EnvUtils} from 'utils';
import Analytics from 'ga-browser';
import routes from './routes';

/**
 * Client render (browser context)
 */
if (EnvUtils.isClient()) {
  require('./installServiceWorker.js');

  // `useStandardScroll` attempts to imitate native browser scroll behavior by
  // recording updates to the window scroll position, then restoring the
  // previous scroll position upon a POP transition. PUSH and REPLACE
  // transitions apparently scroll to top (which is desired).
  const history = useStandardScroll(createHistory)();
  const root = document.getElementById('root');

  // Google Analytics
  let analytics = Analytics();
  analytics('create', 'UA-39940228-2', 'auto');
  history.listen(location => {
    analytics('send', 'pageview', {page: location.pathname});
  });

  ReactDOM.render(<Router history={history} routes={routes} />, root);

  // Don't use service worker. The complete website is too huge by now.
  // require('installServiceWorker');
}

// Exported static site renderer (node.js context)
export default (locals, callback) => {
  const Base = require('./Base').default;

  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({routes, location}, (error, redirectLocation, renderProps) => {
    let html = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);

    // Currently only one chunk is emitted for the JavaScript and CSS code.
    // This could be swapped out for something more sophisticated
    // in the future, if necessary.
    let hash = locals.webpackStats.compilation.hash;
    let assets = {
      scripts: ['/main-' + hash + '.js'],
      styles: ['/main-' + hash + '.css']
    };

    html = ReactDOMServer.renderToString(<Base html={html} assets={assets} />);

    callback(null, '<!DOCTYPE html>' + html);
  });
};
