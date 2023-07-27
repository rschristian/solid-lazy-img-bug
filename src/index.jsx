/* @refresh reload */
import { render } from 'solid-js/web'
import solidLogo from './assets/solid.svg'

function App() {
    return (
        <div>
            <div style={{ height: '200vh' }}>Spacer</div>
            <img loading="lazy" src={solidLogo} height={150} width={150} />
        </div>
    )
}

render(() => <App />, document.getElementById('root'))
