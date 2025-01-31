import React from "react";
import { de } from "date-fns/locale";

// remote modules can also be used with import() which lazy loads them as usual

const App = () => {
    console.log("wtf1");
    return (
        <article>
            <header>
                <h1>wtf</h1>
            </header>
            <p>This component is from a remote container:</p>
            <React.Suspense fallback={<p>Lazy loading component...</p>}>
                <p>
                    And this component is from this remote container too, but
                    lazy loaded:
                </p>
            </React.Suspense>
        </article>
    );
};
export default App;
