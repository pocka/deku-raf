# deku-raf

[![Build Status](https://travis-ci.org/pocka/deku-raf.svg?branch=master)](https://travis-ci.org/pocka/deku-raf)

Force deku(v2) to use [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) (raf).


This ensures calling render function once per frame.

## Install
```
npm install --save deku-raf
```

## Usage

### Simple
```jsx
/** @jsx element */
import { element } from 'deku'

import createApp from 'deku-raf'

const Component = ({ props }) => <div class={ props.class }></div>

const app = createApp(document.getElementById('view'))

const render = () => {
	app(<Component/>)
}

render()
```

### Redux + deku + deku-raf
```jsx
/** @jsx element */
import { element } from 'deku'

import createApp from 'deku-raf'

import store from './store'

import View from './view'

const app = createApp(document.getElementById('view'), store.dispatch)

const render = () => {
	app(<View state={ store.getState() }/>)
}

store.subscribe(render)

render()
```

Also, you can use it in TypeScript (make sure `npm install --save @types/deku`)
```typescript
import { element } from 'deku'

import createApp from 'deku-raf'

import store from './store'

import view from './view'

const app: (el: deku.VirtualElement, context?: any) => void = createApp(document.getElementById('view'), store.dispatch)

function render(): void {
	app(element(view, store.getState()))
}

store.subscribe(render)

render()
```
