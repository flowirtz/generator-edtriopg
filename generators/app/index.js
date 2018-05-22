'use strict';
const Generator = require('yeoman-generator');
// X const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the Edtr.io plugin generator!`));
    // ${chalk.red('red text hehe')}

    const prompts = [
      {
        type: 'input',
        name: 'pluginName',
        message: "What's the name of your plugin?",
        default: 'Vokabeltest'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    let pluginNameUncapitalized = this.props.pluginName;
    const pluginName =
      pluginNameUncapitalized.charAt(0).toUpperCase() + pluginNameUncapitalized.slice(1);
    const dirName = pluginName;

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`${dirName}/package.json`),
      { pluginName }
    );

    this.fs.copyTpl(
      this.templatePath('TemplatePlugin.jsx'),
      this.destinationPath(`${dirName}/${pluginName}Plugin.jsx`),
      { pluginName }
    );

    this.fs.copy(
      this.templatePath('styles.scss'),
      this.destinationPath(`${dirName}/styles.scss`)
    );
  }

  /* Xinstall() {
    this.installDependencies();
  } */
};
