/* eslint-disable */
import { DOMRegistry } from 'react-dom-components';
import React from 'react';
import ReactDOM from 'react-dom';
import authorWatch from './watch';
import SearchPageDOM from "./components/Page/SearchPageDOM";
import ConsonantPage from "./components/Page/ConsonantPage";
import CollectionPageDOM from "./components/Page/CollectionPageDOM";
import ConsonantPageDOM from "./components/Page/ConsonantPageDOM";

const searchPage = new SearchPageDOM();
const collectionPage = new CollectionPageDOM();
const consonantPage = new ConsonantPageDOM();

const initReact = (element) => {
    const registry = new DOMRegistry(element);
    registry.register({
        searchPage,
        collectionPage,
        consonantPage,
    });
    authorWatch(registry);
};

// Initialize React
initReact(document);

// Add to DXF Registry
window.dexter = {};
window.dexter.dxf = { apps: [] };
window.dexter.dxf.registerApp = (app) => {
    window.dexter.dxf.apps.push(app);
};

window.dexter.dxf.registerApp(initReact);


class WrapperCardCollectionComponent {
    constructor(config, element) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!");
        
        console.log(config);
        ReactDOM.render((<React.Fragment>
            <ConsonantPage config={config} />
        </React.Fragment>), element);
    }
}

window.WrapperCardCollectionComponent = WrapperCardCollectionComponent;




