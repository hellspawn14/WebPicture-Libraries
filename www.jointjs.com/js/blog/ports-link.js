(function() {

var graph = new joint.dia.Graph;
var paper = new joint.dia.Paper({ el: $('#paper-link'), width: 650, height: 200, gridSize: 1, model: graph });

var m1 = new joint.shapes.devs.Model({
    position: { x: 50, y: 50 },
    size: { width: 90, height: 90 },
    inPorts: ['in1','in2'],
    outPorts: ['out'],
    attrs: {
        '.label': { text: 'Ola ke ase', 'ref-x': .4, 'ref-y': .2 },
        rect: { fill: '#2ECC71' },
        '.inPorts circle': { fill: '#16A085' },
        '.outPorts circle': { fill: '#E74C3C' }
    }
});
graph.addCell(m1);

var m2 = m1.clone();
m2.translate(300, 0);
graph.addCell(m2);

graph.on('change:source change:target', function(link) {
    var sourcePort = link.get('source').port;
    var sourceId = link.get('source').id;
    var targetPort = link.get('target').port;
    var targetId = link.get('target').id;

    var m = [
        'The port <b>' + sourcePort,
        '</b> of element with ID <b>' + sourceId,
        '</b> is connected to port <b>' + targetPort,
        '</b> of elemnt with ID <b>' + targetId + '</b>'
    ].join('');

    out(m);
});

function out(m) {
    $('#paper-link-out').html(m);
}

}())
