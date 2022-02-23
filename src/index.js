import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Game = lazy(() => import('./Game.js'));

// ========================================
ReactDOM.render(
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <section>
                <Game />
            </section>
        </Suspense>
    </div>,
    document.getElementById('root')
)
