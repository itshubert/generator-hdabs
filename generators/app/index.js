'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
    //Configurations will be loaded here.
    //Ask for user input
    prompting: function () {
        var done = this.async();
        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Project Name',
            //Defaults to the project's folder name if the input is skipped
            default: this.appname
        }, function (answers) {
            this.props = answers;
            this.log(answers.name);
            done();
        }.bind(this));
    },
    //Writing Logic here
    writing: {
        //Copy the configuration files
        config: function () {
            mkdirp.sync('assets/src/sass');
            mkdirp.sync('assets/src/images');
            mkdirp.sync('assets/src/fonts');
            mkdirp.sync('assets/src/js/theme');
            mkdirp.sync('assets/src/js/app');
            mkdirp.sync('assets/src/js/app/controllers');
            mkdirp.sync('assets/src/js/app/directives');
            mkdirp.sync('assets/src/js/app/services');
            mkdirp.sync('assets/src/js/app/templates');
            mkdirp.sync('assets/build/js');
            mkdirp.sync('assets/build/css');
            mkdirp.sync('assets/build/fonts');
            mkdirp.sync('assets/build/images');
            this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), { name: this.props.name });
            this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), { name: this.props.name });
            this.fs.copy(this.templatePath('_config.rb'), this.destinationPath('config.rb'));
            this.fs.copy(this.templatePath('_gulpfile.js'), this.destinationPath('gulpfile.js'));
            this.fs.copy(this.templatePath("assets/src/**/*"), this.destinationPath('assets/src'));
            //this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
        },

        //Copy application files
        app: function () {
            ///// Angular app
            this.fs.copy(this.templatePath('_assets/_src/_js/_app/_app.js'), this.destinationPath('assets/src/js/app/app.js'));
        }
    },
    install: function () {
        this.installDependencies();
    }
});
