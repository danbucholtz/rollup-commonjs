var rollup = require('rollup');
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

rollup.rollup({
  entry: './dist/index.js',
  plugins: [
    nodeResolve({
      module: true,
      jsnext: true,
      browser: true
    }),
    commonjs()
  ]
}).then( function ( bundle ) {
  // Generate bundle + sourcemap
  return bundle.write({
    format: 'iife',
    moduleName: "mybundle",
    dest: './dist/bundle.js'
  });
}).then(function() {
  console.log('Bundling complete');
}).catch(function(err){
  console.log("ERROR: ", err.message);
  process.exit(1);
})