// require.js looks for the following global when initializing
var require = {
    waitSeconds: 200,
    baseUrl: '..',
    paths: {
        text: 'bower_components/requirejs-text/text',
        jquery: 'bower_components/jquery/jquery',
        lodash: 'bower_components/lodash/dist/lodash',
        'semantic-ui': 'bower_components/semantic-ui/dist/semantics',
        react: 'bower_components/react/react-with-addons',
        'react-router': 'bower_components/react-router/dist/react-router',
        'react-router-shim': 'react-router-shim',
        JSXTransformer: 'bower_components/jsx-requirejs-plugin/js/JSXTransformer',
        jsx: 'bower_components/jsx-requirejs-plugin/js/jsx',
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
        harmony: true
    }
};
