const {
    isShorthandProperty,
    isValidDeclaration,
    getShorthandComputedProperties,
    expandShorthandProperty,
    getShorthandsForProperty,
} = require('css-property-parser');

console.log(expandShorthandProperty(
    'background',
    '#ccc padding-box url(xxx.png) 20px 30px no-repeat',
));

