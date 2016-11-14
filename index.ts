import { createApp } from 'deku'

type Render = (vnode: deku.VirtualElement, context?: any) => void

type Dispatch = (action: any) => void

export default function (el: HTMLElement, dispatch?: Dispatch): Render {

	const app = createApp(el, dispatch)

	let thunk: any;

	return function (vnode: deku.VirtualElement, context?: any): void {
		if (!thunk){
			requestAnimationFrame(() => {
				thunk()

				thunk = undefined
			})
		}

		thunk = () => app(vnode)
	}
}
