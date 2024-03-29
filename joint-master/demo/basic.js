var graph = new joint.dia.Graph;

var paper = new joint.dia.Paper({

    el: $('#paper'),
    width: 650,
    height: 400,
    gridSize: 20,
    model: graph
});

var rb = new joint.shapes.basic.Rect({
    position: { x: 50, y: 50 },
    size: { width: 100, height: 40 },
    attrs: { text: { text: 'basic.Rect' } }
});
graph.addCell(rb);

var tb = new joint.shapes.basic.Text({
    position: { x: 170, y: 50 },
    size: { width: 100, height: 30 },
    attrs: { text: { text: 'basic.Text' } }
});
graph.addCell(tb);

var cb = new joint.shapes.basic.Circle({
    position: { x: 300, y: 70 },
    size: { width: 100, height: 40 },
    attrs: { text: { text: 'basic.Circle' } }
});
graph.addCell(cb);


var Image7f31245a = new joint.shapes.basic.Image({
    position: { x: 50, y: 150 },
    size: { width: 100, height: 100 },
    attrs: { text: { text: 'null' }, image: { 'xlink:href': 'http://img-9gag-lol.9cache.com/photo/a1ZPj9R_700b.jpg', width: 100, height: 100} }
});

var pb = new joint.shapes.basic.Path({
    position: { x: 50, y: 150 },
    size: { width: 40, height: 40 },
    attrs: {
        fill: '#2D2BF4',
        path: { d: 'M25.979,12.896 19.312,12.896 19.312,6.229 12.647,6.229 12.647,12.896 5.979,12.896 5.979,19.562 12.647,19.562 12.647,26.229 19.312,26.229 19.312,19.562 25.979,19.562z' },
        text: { text: 'basic.Path' }
    }
});
graph.addCell(pb);

var rh = new joint.shapes.basic.Rhombus({
    position: { x: 50, y: 250 },
    size: { width: 70, height: 70 },
    attrs: { text: { text: 'basic.Rhombus', 'font-size': 8 } }
});
graph.addCell(rh);

var tbl = new joint.shapes.basic.TextBlock({
    position: { x: 400, y: 180 },
    size: { width: 180, height: 100 },
    content: "Lorem ipsum dolor sit amet,\n consectetur adipiscing elit. Nulla vel porttitor est."
});
graph.addCell(tbl);

// An example of a custom element.
// -------------------------------

var MyElementWithPorts = joint.shapes.basic.Generic.extend({

   defaults: joint.util.deepSupplement({
       markup: [
           '<g class="rotatable">',
           '<g class="scalable">',
           '<rect/>',
           '</g>',
           '<g class="inPorts">',
           '<g class="port1"><circle/><text/></g>',
           '<g class="port2"><circle/><text/></g>',
           '</g>',
           '<g class="outPorts">',
           '<g class="port3"><circle/><text/></g>',
           '<g class="port4"><circle/><text/></g>',
           '</g>',
           '</g>'
       ].join(''),

       type: 'basic.Generic',
       attrs: {
           '.': { magnet: false },
           rect: {
               width: 150, height: 250,
               stroke: 'black'
           },
           circle: {
               r: 5,
               magnet: true,
               stroke: 'black'
           },
           text: {
               fill: 'black',
               'pointer-events': 'none'
           },
           '.label': { text: 'Model', dx: 5, dy: 5 },
           '.inPorts text': { dx:-15, 'text-anchor': 'end' },
           '.outPorts text':{ dx: 15 },
           '.inPorts circle': { fill: 'PaleGreen' },
           '.outPorts circle': { fill: 'Tomato' }
       }

   }, joint.shapes.basic.Generic.prototype.defaults)
});

var d = new MyElementWithPorts({
    position: { x: 250, y: 150 },
    size: { width: 80, height: 80 },
    attrs: {
        '.port1 text': { text: 'port1' },
        '.port2 text': { text: 'port2' },
        '.port3 text': { text: 'port3' },
        '.port4 text': { text: 'port4' },
        '.port1': { ref: 'rect', 'ref-y': .2 },
        '.port2': { ref: 'rect', 'ref-y': .4 },
        '.port3': { ref: 'rect', 'ref-y': .2, 'ref-dx': 0 },
        '.port4': { ref: 'rect', 'ref-y': .4, 'ref-dx': 0 }
    }
});

var d1 = new MyElementWithPorts({
    position: { x: 250, y: 150 },
    size: { width: 80, height: 80 },
    attrs: {
        '.port1 text': { text: 'port1' },
        '.port2 text': { text: 'port2' },
        '.port3 text': { text: 'port3' },
        '.port4 text': { text: 'port4' },
        '.port1': { ref: 'rect', 'ref-y': .2 },
        '.port2': { ref: 'rect', 'ref-y': .4 },
        '.port3': { ref: 'rect', 'ref-y': .2, 'ref-dx': 0 },
        '.port4': { ref: 'rect', 'ref-y': .4, 'ref-dx': 0 }
    }
});
graph.addCell(d);
graph.addCell(d1);


// An example showing auto-resize of the joint.shapes.basic.Rect element based on the size of the text in it:

rb.on('change:attrs', function(element) {

    var text = rb.attr('text/text');
    var fontSize = parseInt(rb.attr('text/font-size'), 10);

    var svgDocument = V('svg').node;
    var textElement = V('<text><tspan></tspan></text>').node;
    var textSpan = textElement.firstChild;
    var textNode = document.createTextNode('');

    textSpan.appendChild(textNode);
    svgDocument.appendChild(textElement);
    document.body.appendChild(svgDocument);

    var lines = text.split('\n');
    var width = 0;

    // Find the longest line width.
    _.each(lines, function(line) {

        textNode.data = line;
        var lineWidth = textSpan.getComputedTextLength();

        width = Math.max(width, lineWidth);
    });

    var height = lines.length * (fontSize * 1.2);

    V(svgDocument).remove();

    element.resize(width + 10, height);
});
