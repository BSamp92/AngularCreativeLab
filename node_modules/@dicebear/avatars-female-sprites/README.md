# Female sprite collection for DiceBear Avatars

![license](https://img.shields.io/github/license/dicebear/avatars-female-sprites.svg)
[![npm](https://img.shields.io/npm/v/@dicebear/avatars-female-sprites.svg)](https://www.npmjs.com/package/@dicebear/avatars-female-sprites)

<p>
    <img src="https://avatars.dicebear.com/v2/female/1.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/2.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/3.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/4.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/5.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/6.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/7.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/8.svg" width="60" />
    <img src="https://avatars.dicebear.com/v2/female/9.svg" width="60" />
</p>

## Usage

### HTTP-API (recommended)

Our free HTTP-API is the easiest way to use this sprite collection. Just use the following URL as image source.

    https://avatars.dicebear.com/v2/female/:seed.svg

The value of `:seed` can be anything you like - but **don't** use any sensitive or personal data here!

### CDN

You also can use this sprite collection with a CDN.

Add the following line to the end of the document body.

```html
<script type="text/javascript" src="https://unpkg.com/@dicebear/avatars@2.0.0/dist/avatars.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@dicebear/avatars-female-sprites@1.0.0/dist/sprites.min.js"></script>
```

Now you are ready to create your first Avatar.

```js
var avatars = new Avatars(Avatars.sprites.female);
var svg = avatars.create('custom-seed');
```

### NPM

Choose NPM if you want to use Avatars server-side or with webpack.

Install the Avatars and this sprite collection with the following command.

    npm install --save @dicebear/avatars @dicebear/avatars-female-sprites

Now you are ready to create your first Avatar.

```js
const Avatars = require('@dicebear/avatars').default;
const SpriteCollection = require('@dicebear/avatars-female-sprites').default;

let avatars = new Avatars(Sprites);
let svg = avatars.create('custom-seed');
```

Or with ES6-Modules:

```js
import Avatars from '@dicebear/avatars';
import SpriteCollection from '@dicebear/avatars-female-sprites';

let avatars = new Avatars(SpriteCollection);
let svg = avatars.create('custom-seed');
```

## Further informations

You can find the DiceBear Avatars documentation at [avatars.dicebear.com](https://avatars.dicebear.com)

---

_Inspired by [8biticon](https://github.com/matveyco/8biticon) (Copyright 2012 Plastic Jam - [MIT Licensed](https://github.com/matveyco/8biticon/blob/dfe624da950fb2f8c43e1151c380d333c2b12225/old_python/LICENSE))_
