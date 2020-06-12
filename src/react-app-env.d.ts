/// <reference types="react-scripts" />
declare global {
    interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};
