var graph = new joint.dia.Graph;

var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 800,
    height: 600,
    gridSize: 1,
    model: graph
});

var connect = function(source, sourcePort, target, targetPort) {
    var link = new joint.shapes.devs.Link({
        source: { id: source.id, selector: source.getPortSelector(sourcePort) },
        target: { id: target.id, selector: target.getPortSelector(targetPort) }
    });
    link.attr({
        '.connection': { stroke: '#3498DB', 'stroke-width': 3, 'stroke-dasharray': '5 2' },
        '.marker-source': { stroke: '#3498DB', fill: '#3498DB', d: 'M5.5,15.499,15.8,21.447,15.8,15.846,25.5,21.447,25.5,9.552,15.8,15.152,15.8,9.552z' },
        '.marker-target': { stroke: '#3498DB', fill: '#3498DB', d: 'M4.834,4.834L4.833,4.833c-5.889,5.892-5.89,15.443,0.001,21.334s15.44,5.888,21.33-0.002c5.891-5.891,5.893-15.44,0.002-21.33C20.275-1.056,10.725-1.056,4.834,4.834zM25.459,5.542c0.833,0.836,1.523,1.757,2.104,2.726l-4.08,4.08c-0.418-1.062-1.053-2.06-1.912-2.918c-0.859-0.859-1.857-1.494-2.92-1.913l4.08-4.08C23.7,4.018,24.622,4.709,25.459,5.542zM10.139,20.862c-2.958-2.968-2.959-7.758-0.001-10.725c2.966-2.957,7.756-2.957,10.725,0c2.954,2.965,2.955,7.757-0.001,10.724C17.896,23.819,13.104,23.817,10.139,20.862zM5.542,25.459c-0.833-0.837-1.524-1.759-2.105-2.728l4.081-4.081c0.418,1.063,1.055,2.06,1.914,2.919c0.858,0.859,1.855,1.494,2.917,1.913l-4.081,4.081C7.299,26.982,6.379,26.292,5.542,25.459zM8.268,3.435l4.082,4.082C11.288,7.935,10.29,8.571,9.43,9.43c-0.858,0.859-1.494,1.855-1.912,2.918L3.436,8.267c0.58-0.969,1.271-1.89,2.105-2.727C6.377,4.707,7.299,4.016,8.268,3.435zM22.732,27.563l-4.082-4.082c1.062-0.418,2.061-1.053,2.919-1.912c0.859-0.859,1.495-1.857,1.913-2.92l4.082,4.082c-0.58,0.969-1.271,1.891-2.105,2.728C24.623,26.292,23.701,26.983,22.732,27.563z' }
    });
    graph.addCell(link);
};

var c1 = new joint.shapes.devs.Model({
    position: { x: 260, y: 150 },
    size: { width: 300, height: 300 },
    inPorts: ['in'],
    outPorts: ['out 1','out 2'],
    rect: { fill: '#2ECC71', rx:1000 , ry:1000},

});

var c1 = new joint.shapes.devs.Model({
    position: { x: 160, y: 150 },
    size: { width: 300, height: 300 },
    inPorts: ['in'],
    outPorts: ['out 1','out 2'],
    attrs: {
        '.label': { text: 'Model', fill: 'black', 'font-size': 14, 'font-weight': 'normal'},
        rect: { fill: '#2ECC71', rx:1000 , ry:1000, 'stroke-width': 10 ,stroke: '#E74C3C' , 'stroke-dasharray': '1,1'},

        '.inPorts circle': { fill: '#16A085', magnet: 'passive', type: 'input' },
        '.outPorts circle': { fill: '#E74C3C', type: 'output' }
    }
});

c1.attr('[port="in"]/fill', 'blue');
c1.attr('[port="out 1"]/fill', 'black');

var a1 = new joint.shapes.devs.Atomic({
    position: { x: 360, y: 360 },
    inPorts: ['port XY'],
    outPorts: ['x','y']
});

var a2 = new joint.shapes.devs.Atomic({
    position: { x: 50, y: 260 },
    size: {width: 30, height: 50},
    inPorts: ['a','b'],
    outPorts: ['out']
});

var a3 = new joint.shapes.devs.Atomic({
    position: { x: 650, y: 150 },
    size: { width: 100, height: 300 },
    inPorts: ['a','b'],
    outPorts: ['x','y']
});


graph.addCell(c1).addCell(a1).addCell(a2).addCell(a3);

c1.embed(a1);

connect(a2,'out',c1,'in');
connect(c1,'in',a1,'port XY');
connect(a1,'x',c1,'out 1');
connect(a1,'y',c1,'out 2');
connect(c1,'out 1',a3,'a');
connect(c1,'out 2',a3,'b');
