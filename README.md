# Welcome

Welcome to the technical documentation site for the Celo project! You can check out the live site at https://docs.celo.org.

## Getting Started

This documentation site is built using [Docusaurus v2](https://github.com/facebook/docusaurus).

You can run the site locally by cloning this repository, installing dependencies and starting docusaurus.

```sh
git clone https://github.com/celo-org/docs.git
cd docs
yarn
yarn start
```

Edit files in the `/docs` directory to make updates to the documentation pages. Pages will be automatically updated when you are running the development server.

## Files

- `.gitignore` - This specifies which files Git should ignore when committing and pushing to remote repositories.
- `docusaurus.config.js` - This is the configuration file for Docusaurus. You can manage the links in the header and footer, and site metadata here. A more in-depth introduction to this configuration file is available on the [Docusaurus website](https://docusaurus.io/docs/configuration) and full documentation for the API is [here](https://docusaurus.io/docs/docusaurus.config.js).
- `package.json` - This specifies the dependencies for the website and the commands that you can run with yarn.
- `sidebars.js` - This specifies the sidebars for your documentation. The full documentation for this file is available on the [Docusaurus website](https://docusaurus.io/docs/sidebar).
- `yarn.lock` - This specifies the full dependencies for the website including the dependencies of the dependencies listed in `package.json`. Do not edit this file directly. Edit `package.json` instead, then run `yarn` as described above.

The .md files in the docs directory are the docs. See the [Docusaurus website](https://docusaurus.io/docs/docs-introduction) for the full documentation on how to create docs and to manage the metadata.

## Contributing

We welcome contributions from the community. Please review our [contribution guidelines](docs/community/contributing.md) for more information.

You can find many of the other main Celo project repositories at https://github.com/celo-org.

### Internationalization

We are managing translations using [Crowdin](https://crowdin.com/). You can find the [Celo Docs Crowdin project here](https://crowdin.com/project/celo-docs). From here, click on the language that you would like to help translate the docs into.

Due to inconsistencies with managing the source code in 2 places (Github and Crowdin), only the English source code is stored in this repo. The translation sources are stored on Crowdin and are fetched when the site is built.

Some files are marked as high priority. In the following image you can see the up arrow on the right side of the file line, indicating the file is a higher priority than others. Please focus on files marked as high priority.

![](https://github.com/critesjosh/images/blob/main/docs_translations/high_priority_files.png?raw=true)

If you have any questions, please post in the [project discussions tab here](https://crowdin.com/project/celo-docs/discussions).

## Contact

Join us on [Discord](https://chat.celo.org) or file an issue.

## Code of Conduct

Please review the [code of conduct](/docs/community/code-of-conduct.md) before contributing.
