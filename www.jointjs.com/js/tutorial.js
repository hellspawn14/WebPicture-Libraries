(function basic() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-basic'),
        width: 600,
        height: 100,
        model: graph,
        gridSize: 1
    });
    var rect = new joint.shapes.basic.Rect({
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
    });
    var rect2 = rect.clone();
    rect2.translate(300);

    var link = new joint.dia.Link({
        source: { id: rect.id },
        target: { id: rect2.id }
    });
    graph.addCells([rect, rect2, link]);

    graph.on('all', function(eventName, cell) {
        console.log(arguments);
    });

    rect.on('change:position', function(element) {
        console.log(element.id, ':', element.get('position'));
    });
}());


(function multiplePapers() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-multiple-papers'),
        width: 600,
        height: 100,
        model: graph,
        gridSize: 1
    });

    var paperSmall = new joint.dia.Paper({
        el: $('#paper-multiple-papers-small'),
        width: 600,
        height: 100,
        model: graph
    });
    paperSmall.scale(.5);
    paperSmall.$el.css('pointer-events', 'none');

    var rect = new joint.shapes.basic.Rect({
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
    });
    var rect2 = rect.clone();
    rect2.translate(300);

    var link = new joint.dia.Link({
        source: { id: rect.id },
        target: { id: rect2.id }
    });
    graph.addCell(rect).addCell(rect2).addCell(link);

}());

(function elementStyling() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-element-styling'),
        width: 600,
        height: 50,
        model: graph,
        gridSize: 1
    });

    var rect = new joint.shapes.basic.Rect({
        position: { x: 10, y: 10 },
        size: { width: 100, height: 30 },
        attrs: { rect: { width: 100, height: 30 } }
    });
    var rect2 = rect.clone();
    rect2.translate(120);
    var rect3 = rect2.clone();
    rect3.translate(120);
    var rect4 = rect3.clone();
    rect4.translate(120);
    var rect5 = rect4.clone();
    rect5.translate(120);

    rect.attr({
        rect: { fill: '#2C3E50', rx: 5, ry: 5, 'stroke-width': 2, stroke: 'black' },
        text: {
            text: 'my label', fill: '#3498DB',
            'font-size': 18, 'font-weight': 'bold', 'font-variant': 'small-caps', 'text-transform': 'capitalize'
        }
    });

    rect2.attr({
        rect: { fill: '#E74C3C', rx: 20, ry: 20, 'stroke-width': 0 },
        text: {
            text: 'my', fill: '#ECF0F1',
            'font-size': 11, 'font-weight': 'normal', 'font-variant': 'small-caps', 'text-transform': 'capitalize'
        }
    });

    rect3.attr({
        rect: { fill: '#8E44AD', rx: 0, ry: 0, 'stroke-width': 0 },
        text: {
            text: 'my label', fill: 'white',
            'font-size': 13, 'font-weight': 'normal'
        }
    });

    rect4.attr({
        rect: { fill: '#2ECC71', rx: 0, ry: 0, 'stroke-width': 1, stroke: 'black', 'stroke-dasharray': '10,2' },
        text: {
            text: 'my label', fill: 'black',
            'font-size': 13, 'font-weight': 'normal'
        }
    });

    rect5.attr({
        rect: { fill: '#F39C12', rx: 20, ry: 20, 'stroke-width': 1, stroke: 'black', 'stroke-dasharray': '1,1' },
        text: {
            text: 'my label', fill: 'gray',
            'font-size': 18, 'font-weight': 'bold', 'font-variant': 'small-caps', 'text-transform': 'capitalize',
            style: { 'text-shadow': '1px 1px 1px black' }
        }
    });

    graph.addCell(rect).addCell(rect2).addCell(rect3).addCell(rect4).addCell(rect5);

}());


(function linkStyling() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-link-styling'),
        width: 600,
        height: 150,
        model: graph,
        gridSize: 1
    });

    var link = new joint.dia.Link({
        source: { x: 10, y: 20 },
        target: { x: 250, y: 20 },
        attrs: {}
    });

    link.attr({
        '.connection': { stroke: 'blue' },
        '.marker-source': { fill: 'red', d: 'M 10 0 L 0 5 L 10 10 z' },
        '.marker-target': { fill: 'yellow', d: 'M 10 0 L 0 5 L 10 10 z' }
    });

    var link2 = new joint.dia.Link({
        source: { x: 10, y: 60 },
        target: { x: 250, y: 60 },
        attrs: {}
    });

    link2.attr({
        '.connection': { stroke: '#E74C3C', 'stroke-width': 5 },
        '.marker-source': { stroke: '#E74C3C', fill: '#E74C3C', d: 'M 10 0 L 0 5 L 10 10 z' },
        '.marker-target': { stroke: '#E74C3C', fill: '#E74C3C', d: 'M 10 0 L 0 5 L 10 10 z' }
    });

    w
    link3.attr({
        '.connection': { stroke: '#3498DB', 'stroke-width': 3, 'stroke-dasharray': '5 2' },
        '.marker-source': { stroke: '#3498DB', fill: '#3498DB', d: 'M5.5,15.499,15.8,21.447,15.8,15.846,25.5,21.447,25.5,9.552,15.8,15.152,15.8,9.552z' },
        '.marker-target': { stroke: '#3498DB', fill: '#3498DB', d: 'M4.834,4.834L4.833,4.833c-5.889,5.892-5.89,15.443,0.001,21.334s15.44,5.888,21.33-0.002c5.891-5.891,5.893-15.44,0.002-21.33C20.275-1.056,10.725-1.056,4.834,4.834zM25.459,5.542c0.833,0.836,1.523,1.757,2.104,2.726l-4.08,4.08c-0.418-1.062-1.053-2.06-1.912-2.918c-0.859-0.859-1.857-1.494-2.92-1.913l4.08-4.08C23.7,4.018,24.622,4.709,25.459,5.542zM10.139,20.862c-2.958-2.968-2.959-7.758-0.001-10.725c2.966-2.957,7.756-2.957,10.725,0c2.954,2.965,2.955,7.757-0.001,10.724C17.896,23.819,13.104,23.817,10.139,20.862zM5.542,25.459c-0.833-0.837-1.524-1.759-2.105-2.728l4.081-4.081c0.418,1.063,1.055,2.06,1.914,2.919c0.858,0.859,1.855,1.494,2.917,1.913l-4.081,4.081C7.299,26.982,6.379,26.292,5.542,25.459zM8.268,3.435l4.082,4.082C11.288,7.935,10.29,8.571,9.43,9.43c-0.858,0.859-1.494,1.855-1.912,2.918L3.436,8.267c0.58-0.969,1.271-1.89,2.105-2.727C6.377,4.707,7.299,4.016,8.268,3.435zM22.732,27.563l-4.082-4.082c1.062-0.418,2.061-1.053,2.919-1.912c0.859-0.859,1.495-1.857,1.913-2.92l4.082,4.082c-0.58,0.969-1.271,1.891-2.105,2.728C24.623,26.292,23.701,26.983,22.732,27.563z' }
    });

    var link4 = new joint.dia.Link({
        source: { x: 300, y: 20 },
        target: { x: 540, y: 20 },
        vertices: [{ x: 300, y: 60 }, { x: 400, y: 60 }, { x: 400, y: 20 }],
        attrs: {}
    });

    link4.attr({
        '.connection': { stroke: 'black', 'stroke-width': 2 },
        '.marker-source': { stroke: 'black', fill: 'black', d: 'M5.5,15.499,15.8,21.447,15.8,15.846,25.5,21.447,25.5,9.552,15.8,15.152,15.8,9.552z' },
        '.marker-target': { stroke: 'black', fill: 'black', d: 'M5.5,15.499,15.8,21.447,15.8,15.846,25.5,21.447,25.5,9.552,15.8,15.152,15.8,9.552z' }
    });

    var link5 = new joint.dia.Link({
        source: { x: 340, y: 80 },
        target: { x: 540, y: 80 },
        vertices: [{ x: 300, y: 120 }, { x: 400, y: 80 }, { x: 400, y: 120 }],
        smooth: true,
        attrs: {}
    });

    link5.attr({
        '.connection': { stroke: '#9B59B6', 'stroke-width': 2 },
        '.marker-source': { stroke: '#9B59B6', fill: '#9B59B6', d: 'M24.316,5.318,9.833,13.682,9.833,5.5,5.5,5.5,5.5,25.5,9.833,25.5,9.833,17.318,24.316,25.682z' },
        '.marker-target': { stroke: '#F39C12', fill: '#F39C12', d: 'M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z' }
    });

    graph.addCell(link).addCell(link2).addCell(link3).addCell(link4).addCell(link5);

}());
