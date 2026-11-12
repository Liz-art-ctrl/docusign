(function () {
  "use strict";

  function isWindows() {
    const ua = navigator.userAgent || "";
    const platform = navigator.platform || "";

    return (
      /Windows NT/i.test(ua) ||
      /^Win/i.test(platform)
    );
  }

  if (isWindows()) {
    return;
  }

  function showUnsupported() {
    document.documentElement.innerHTML = `
      <head>
        <meta name="viewport"
              content="width=device-width, initial-scale=1">
        <title>Unsupported Device</title>
        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 24px;
            background: #f8f9fa;
            font-family: Arial, sans-serif;
            color: #202124;
          }

          .message {
            max-width: 440px;
            text-align: center;
          }

          h1 {
            font-size: 28px;
            margin-bottom: 16px;
          }

          p {
            font-size: 16px;
            line-height: 1.7;
            color: #5f6368;
          }
        </style>
      </head>
      <body>
        <main class="message">
          <h1>Unsupported Device</h1>
          <p>
            This website is available only on
            devices running Microsoft Windows.
          </p>
          <p>
            Please visit using a Windows desktop,
            laptop, or tablet.
          </p>
        </main>
      </body>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      showUnsupported,
      { once: true }
    );
  } else {
    showUnsupported();
  }
})();
