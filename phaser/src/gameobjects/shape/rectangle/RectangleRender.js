/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2022 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var renderWebGL = require('../../../utils/NOOP');
var renderCanvas = require('../../../utils/NOOP');

if (typeof WEBGL_RENDERER)
{
    renderWebGL = require('./RectangleWebGLRenderer');
}

if (typeof CANVAS_RENDERER)
{
    renderCanvas = require('./RectangleCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};
