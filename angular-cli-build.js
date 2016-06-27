'use strict';
// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

// var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const compileSass = require('broccoli-sass');
const mergeTrees = require('broccoli-merge-trees');
const _ = require('lodash');
const glob = require('glob');

module.exports = function(defaults) {

  let sass = mergeTrees(_.map(glob.sync('src/**/*.scss'), function(sassFile) {
        sassFile = sassFile.replace('src/', '');
        return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
    }));

    let appTree = new Angular2App(defaults, {
        sassCompiler: {
            includePaths: [
            'src/style'
            ]
        },
        vendorNpmFiles: [
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'zone.js/dist/**/*.+(js|js.map)',
        'es6-shim/es6-shim.js',
        'reflect-metadata/**/*.+(js|js.map)',
        'rxjs/**/*.+(js|js.map)',
        '@angular/**/*.+(js|js.map)',
        '@angular2-material/**/*'
        ]
  });
  return mergeTrees([appTree, sass], { overwrite: true });   
};