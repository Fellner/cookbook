import React, {Component, PropTypes} from 'react';

export default class Base extends Component {
  static propTypes = {
    assets: PropTypes.object,
    html: PropTypes.string
  };

  render() {
    let {html, assets} = this.props;

    return (
      <html>
        <head>
          <title>Barbara Fellner</title>
          <meta charSet="UTF-8" />
          <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Hi, I'm Barbara, a Frontend Developer from Austria. " />
          {assets.styles.map(style =>
            <link key={style} rel="stylesheet" href={style} />
          )}
          <link rel="icon" type="image/png" sizes="24x23" href="/favicon.png" />
          <meta name="theme-color" content="#e42166" />
          <meta name="background-color" content="#e42166" />
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: html}} />

          <script src="//www.google-analytics.com/analytics.js" />
          {assets.scripts.map(script =>
            <script key={script} src={script} />
          )}


        </body>
      </html>
    );
  }
}
