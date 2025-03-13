[React Microfrontend app](https://www.clickittech.com/developer/microfrontends/#:~:text=For%20example%2C%20a%20typical%20website,be%20divided%20into%20specialized%20teams)

There are 3 modules:

1. Host - Put everything together in the host module.
   Add both Pages and Layout Modules as remotes in the webpack.config.js file of the Host Module.
2. Layout - contains header, footer
3. Pages - contains navigation pages eg. products, to do list

Requirements that drive architecture choices:

1. Zero coupling between child projects (no import of functions, objects, classes. No shared state. Shared libraries through MF is ok)
2. Near zero coupling between host and child apps (container shouldn't assume that a child is using a particular framework. Any necessary communication should be done with callbacks and custom events)
3. CSS from one project shouldn't affect another
   Version control (monorepo vs separate) shouldn't have any impact on the overall project
4. host should be able to decide to always use the latest version of a child app (doesn't require redeploy of host)
   host can specify exactly what version of a child it wants to use (requires a redeploy to change)
