import React, { createElement } from 'react'

const Element = (name, ...args) => {
    switch (true) {
        case args.length < 1:
        case React.isValidElement(args[0]):
        case typeof args[0] !== 'object':
        case args[0].constructor === undefined:
        case args[0].constructor.name !== 'Object':
            return createElement(name, {}, ...args)
        default:
            return createElement(name, ...args)
    }


}

const tagNames = ['button', 'header', 'div', 'h1', 'img', 'main', 'p'];
const entries = tagNames.map(
    key => [key, (...args) => Element(key, ...args)]
)

const Tags = Object.fromEntries(entries)

export { Tags as default, Element };
