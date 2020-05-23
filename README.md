# parcel-plugin-concat

A [Parcel](https://parceljs.org/) plugin to concatenate multiple js files into a single bundle js.

## Install

```sh
yarn add --dev parcel-plugin-concat
```

## Usage

If you have more than one entry files Parcel can consume them like this:

```sh
parcel index.js another.js
```

or:

```sh
parcel src/**/*.js
```

However, the output files are not merged but still separated as individual files under `dist/` unless [you manually create a single entry file that requires all the individual assets](https://github.com/parcel-bundler/parcel/issues/2037).

This plugin lets you simply concatenate all the multiple entries before processing so that you can get a single output file. The name of output file adheres to the Parcel comand options `-o` and `--out-file`, but otherwise it's by default `bundle.js`.

## License

[MIT](LICENSE)
