<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# deepHasOwnProp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether an object contains a nested key path.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-deep-has-own-property
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var deepHasOwnProp = require( '@stdlib/assert-deep-has-own-property' );
```

#### deepHasOwnProp( value, path\[, options] )

Returns a `boolean` indicating if a `value` has a specified `path`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepHasOwnProp( obj, 'a.b.c' );
// returns true

bool = deepHasOwnProp( obj, 'a.b.c.d.e' );
// returns false
```

If a key path includes an `array`, specify the numeric index.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var arr = [
    {
        'a': [
            {
                'b': [
                    { 'c': 'd' },
                    { 'e': 'f' }
                ]
            }
        ]
    }
];

var bool = deepHasOwnProp( arr, '0.a.0.b.0.c' );
// returns true

bool = deepHasOwnProp( arr, '0.a.1.b.0.c' );
// returns false

bool = deepHasOwnProp( arr, '0.a.0.b.1.c' );
// returns false
```

The key path may be specified as either a delimited `string` or a key `array`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepHasOwnProp( obj, [ 'a', 'b', 'c' ] );
// returns true
```

The function accepts the following `options`:

-   **sep**: key path separator. Default: `'.'`.

By default, the function assumes `.` separated key values. To specify an alternative separator, set the `sep` option.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = deepHasOwnProp( obj, 'a/b/c', {
    'sep': '/'
});
// returns true
```

#### deepHasOwnProp.factory( path\[, options] )

Returns a `function` which tests whether a `value` contains a nested key `path`.

```javascript
var has = deepHasOwnProp.factory( 'a/b/c', {
    'sep': '/'
});
```

#### has( value )

Returns a `boolean` indicating whether a `value` contains a nested key `path`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var has = deepHasOwnProp.factory( 'a.b.c' );

var obj = { 'a': { 'b': { 'c': 'd' } } };

var bool = has( obj );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Only **own** properties are tested. Paths matching inherited properties are not considered.

    ```javascript
    function Foo() {
        this.a = 'b';
        return this;
    }
    Foo.prototype.c = 'd';

    var foo = new Foo();

    var bool = deepHasOwnProp( foo, 'a' );
    // returns true

    bool = deepHasOwnProp( foo, 'c' );
    // returns false
    ```

-   When provided `null` or `undefined`, the function result is always `false`.

    ```javascript
    var bool = deepHasOwnProp( null, 'a.b.c' );
    // returns false

    bool = deepHasOwnProp( void 0, 'a.b.c' );
    // returns false
    ```

-   Property values other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var obj = {
        'a': 'b'
    };

    var bool = deepHasOwnProp( obj, 'a.length' );
    // returns true
    ```

-   Key path `array` elements are coerced to `strings`.

    ```javascript
    var obj = {
        'null': false
    };
    var bool = deepHasOwnProp( obj, [ null ] );
    // returns true

    obj = {
        '[object Object]': false
    };
    bool = deepHasOwnProp( obj, [ {} ] );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
var deepHasOwnProp = require( '@stdlib/assert-deep-has-own-property' );

var bool = deepHasOwnProp( { 'a': { 'b': { 'c': 'd' } } }, 'a.b.c' );
// returns true

bool = deepHasOwnProp( { 'a': { 'b': { 'c': 'd' } } }, [ 'a', 'b', 'c' ] );
// returns true

bool = deepHasOwnProp( { 'a': { 'b': { 'c': 'd' } } }, 'a/b/c', {
    'sep': '/'
});
// returns true

bool = deepHasOwnProp( { 'a': { 'b': { 'c': 'd' } } }, 'a.b.c.d' );
// returns false

bool = deepHasOwnProp( { 'a': [ { 'b': { 'c': 'd' } } ] }, [ 'a', '0', 'b', 'c', 'd' ] );
// returns false

bool = deepHasOwnProp( { 'a': { 'b': { 'c': 'd' } } }, 'a/b/c/d/e', {
    'sep': '/'
});
// returns false

// Create a customized function:
var has = deepHasOwnProp.factory( 'a_b_c', {
    'sep': '_'
});

bool = has( { 'a': { 'b': { 'c': 'd' } } } );
// returns true

bool = has( { 'a': [ { 'b': { 'c': 'd' } } ] } );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-deep-has-property`][@stdlib/assert/deep-has-property]</span><span class="delimiter">: </span><span class="description">test whether an object contains a nested key path, either own or inherited.</span>
-   <span class="package-name">[`@stdlib/assert-has-own-property`][@stdlib/assert/has-own-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property.</span>
-   <span class="package-name">[`@stdlib/utils-deep-get`][@stdlib/utils/deep-get]</span><span class="delimiter">: </span><span class="description">get a nested property value.</span>
-   <span class="package-name">[`@stdlib/utils-deep-pluck`][@stdlib/utils/deep-pluck]</span><span class="delimiter">: </span><span class="description">extract a nested property value from each element of an object array.</span>
-   <span class="package-name">[`@stdlib/utils-deep-set`][@stdlib/utils/deep-set]</span><span class="delimiter">: </span><span class="description">set a nested property value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-deep-has-own-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-deep-has-own-property

[test-image]: https://github.com/stdlib-js/assert-deep-has-own-property/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-deep-has-own-property/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-deep-has-own-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-deep-has-own-property?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-deep-has-own-property.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-deep-has-own-property/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-deep-has-own-property/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-deep-has-own-property/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-deep-has-own-property/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-deep-has-own-property/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-deep-has-own-property/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-deep-has-own-property/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-deep-has-own-property/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-deep-has-own-property/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/deep-has-property]: https://github.com/stdlib-js/assert-deep-has-property

[@stdlib/assert/has-own-property]: https://github.com/stdlib-js/assert-has-own-property

[@stdlib/utils/deep-get]: https://github.com/stdlib-js/utils-deep-get

[@stdlib/utils/deep-pluck]: https://github.com/stdlib-js/utils-deep-pluck

[@stdlib/utils/deep-set]: https://github.com/stdlib-js/utils-deep-set

<!-- </related-links> -->

</section>

<!-- /.links -->
