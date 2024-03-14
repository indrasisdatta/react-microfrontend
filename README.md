[React Microfrontend app](https://www.clickittech.com/developer/microfrontends/#:~:text=For%20example%2C%20a%20typical%20website,be%20divided%20into%20specialized%20teams)

There are 3 modules:

1. Host - Put everything together in the host module.
   Add both Pages and Layout Modules as remotes in the webpack.config.js file of the Host Module.
2. Layout - contains header, footer
3. Pages - contains navigation pages eg. products, to do list
