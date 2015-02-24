// require.js looks for the following global when initializing
var require = {
    waitSeconds: 200,
    baseUrl: '..',
    paths: {
        text: 'bower_components/requirejs_text/text',
        jquery: 'bower_components/jquery/dist/jquery',
        lodash: 'bower_components/lodash/lodash',
        semantic: 'node_modules/react-semantify/amd',
        react: 'bower_components/react/react-with-addons',
        'react-router': 'bower_components/react_router/build/global/ReactRouter',
        'react-router-shim': 'react-router-shim',
        JSXTransformer: 'bower_components/jsx_requirejs_plugin/js/JSXTransformer',
        jsx: 'bower_components/jsx_requirejs_plugin/js/jsx',
        reflux: 'bower_components/reflux/dist/reflux',
        flux: 'flux',
        lib: 'lib'
    },
    shim: {
        'react-router-shim': {
            exports: 'React'
        },
        'react-router': {
            deps: ['react-router-shim'],
            exports: 'ReactRouter'
        }
    },
    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
};
