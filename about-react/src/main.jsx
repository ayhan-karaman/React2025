import { createRoot } from "react-dom/client";

const rootElement = document.querySelector('#root');

function App() {
    return <div>Hello React</div>
}
createRoot(rootElement).render(
    <App />
)