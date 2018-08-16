# graphql-add-remove-fields

[![npm version][version-image]][version-url]
[![travis build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![code style: prettier][prettier-image]][prettier-url]
[![MIT license][license-image]][license-url]

Add or remove fields in graphql queries

## Introduction

This package will recursively add or remove a specific field name in all selection sets within the query.

One example usage is adding the `__typename` field to all selection sets in all outgoing queries and using this together with a normalized cahcing strategy such as [gql-cache](https://www.npmjs.com/package/gql-cache) to generate a unique ID for each normalized object.

## How to install

```
npm install graphql-add-remove-fields --save
```

## How to use

Here is a small example:

```js
// TODO!
```

[version-image]: https://img.shields.io/npm/v/graphql-add-remove-fields.svg?style=flat
[version-url]: https://www.npmjs.com/package/graphql-add-remove-fields
[travis-image]: https://travis-ci.org/dividab/graphql-add-remove-fields.svg?branch=master&style=flat
[travis-url]: https://travis-ci.org/dividab/graphql-add-remove-fields
[coveralls-image]: https://coveralls.io/repos/github/dividab/graphql-add-remove-fields/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dividab/graphql-add-remove-fields?branch=master
[license-image]: https://img.shields.io/github/license/dividab/graphql-add-remove-fields.svg?style=flat
[license-url]: https://opensource.org/licenses/MIT
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat
[prettier-url]: https://github.com/prettier/prettier
