# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/dividab/tsconfig-paths/compare/1.2.0...master)

## [1.2.0](https://github.com/dividab/tsconfig-paths/compare/1.1.0...1.2.0) - 2020-03-29

### Added

- Include typescript source from `src/` in published npm package.

## [1.1.0](https://github.com/dividab/tsconfig-paths/compare/1.0.0...1.1.0) - 2019-10-02

### Added

- Upgrade peer deps. The graphql package now has built-in types so no peer dependency is required for the @types/graphql package.

## [1.0.0](https://github.com/dividab/tsconfig-paths/compare/0.2.0...master) - 2019-07-22

### Changed

- Use codecov.

## [0.3.0](https://github.com/dividab/tsconfig-paths/compare/0.2.0...0.3.0) - 2018-08-26

### Changed

- Add `@types/graphql` as a peer dependency since we refer to those types in our public API.

## [0.2.0](https://github.com/dividab/tsconfig-paths/compare/0.1.0...0.2.0) - 2018-08-17

### Changed

- Make graphql a peerDependency and devDependency as recommended [here](https://medium.com/@leeb/graphql-js-preparing-for-v14-0-0-839f823c144e). See [#1](https://github.com/dividab/graphql-add-remove-fields/issues/1).

## 0.1.0 - 2018-08-16

### Added

- Initial version.
