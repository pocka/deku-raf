import { h } from 'deku'

import createApp from './'


!function (){
	const Component = ({ props }) => h('div', {
		class: props.class
	})

	const app = createApp(document.getElementById('view'))

	const render = () => {
		app(h(Component))
	}

	render()
}()

!function (){
	const app = createApp(document.body)

	app(h('div'))
}()

!function (){
	const app = createApp(document.body, action => {
		console.dir(action)
	})

	app(h('div'))
}()

!function (){
	const app = createApp(document.body)

	app(h('div'), {})
}()
