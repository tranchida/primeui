Package.describe({
  name: 'tranchida:primeui',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'add PrimeFaces PrimeUI 2.0 minified js and css to meteor project',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:tranchida/primeui.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.use('mizzao:jquery-ui', 'client');
  api.addFiles('primeui-2.0-min.css', 'client');
  api.addFiles('primeui-2.0-min.js', 'client');
});

