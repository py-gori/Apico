<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->

  <meta name="application-name" content="%REACT_APP_NAME%">
  <meta name="description" content="%REACT_APP_DESCRIPTION%">

  <meta property="og:url" content="%PUBLIC_URL%">
  <meta property="og:type" content="website">
  <meta property="og:title" content="%REACT_APP_NAME%">
  <meta property="og:image" content="%PUBLIC_URL%/img/screenshots/reduction-admin.jpg">
  <meta property="og:description" content="%REACT_APP_DESCRIPTION%">
  <meta property="og:site_name" content="%REACT_APP_NAME%">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:url" content="%PUBLIC_URL%">
  <meta name="twitter:title" content="%REACT_APP_NAME%">
  <meta name="twitter:description" content="%REACT_APP_DESCRIPTION%">
  <meta name="twitter:image" content="%PUBLIC_URL%/img/screenshots/reduction-admin.jpg">

  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
  <link rel="apple-touch-icon" sizes="57x57" href="%PUBLIC_URL%/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="%PUBLIC_URL%/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="%PUBLIC_URL%/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="%PUBLIC_URL%/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="%PUBLIC_URL%/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="%PUBLIC_URL%/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="%PUBLIC_URL%/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-icon-180x180.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="%PUBLIC_URL%/android-icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="%PUBLIC_URL%/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
  <title>%REACT_APP_NAME%</title>

  <!-- Start Single Page Apps for GitHub Pages -->
  <script type="text/javascript">
    (function (l) {
      if (l.search) {
        var q = {};
        l.search.slice(1).split('&').forEach(function (v) {
          var a = v.split('=');
          q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
        });
        if (q.p !== undefined) {
          window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + (q.p || '') +
            (q.q ? ('?' + q.q) : '') +
            l.hash
          );
        }
      }
    }(window.location))
  </script>
  <!-- End Single Page Apps for GitHub Pages -->
</head>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>