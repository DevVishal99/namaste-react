const parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement(
        'div',
        { id: 'child' },
        [React.createElement(
            'h1',
            {},
            'This is h1 Heading'),
        React.createElement(
            'h2',
            {},
            
            'This is an h2 Heading')]),
    React.createElement(
        'div',
        { id: 'child2' },
        [React.createElement(
            'h1',
            {},
            'This is h1 Heading'),
        React.createElement(
            'h2',
            {},
            'This is an h2 Heading')])]
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
