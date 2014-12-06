(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-mark-available'),
        width: 650, height: 200, gridSize: 1,
        model: graph,
        defaultLink: new joint.dia.Link({
            attrs: { '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' } }
        }),
        validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
            // Prevent linking from input ports.
            //alert(cellViewS.);
            if (magnetS && magnetS.getAttribute('type') === 'input') return false;
            // Prevent linking from output ports to input ports within one element.
            if (cellViewS === cellViewT) return false;
            // Prevent linking to input ports.
            //alert(cellViewS.getAttribute('type'));
            return magnetT && magnetT.getAttribute('type') === 'input';
        },
        // Enable marking available cells & magnets
        markAvailable: true
    });

    var m1 = new joint.shapes.devs.Model({
        position: { x: 50, y: 50 },
        size: { width: 90, height: 90 },
        inPorts: ['in1','in2', 'in3','in4','in5'],
        outPorts: ['out', 'out2s', 'o1', 'o2', 'o3', 'o4','p5'],
        attrs: {
            '.label': { text: 'Ola ke ase', 'ref-x': .4, 'ref-y': .2 },
            rect: { fill: '#2ECC71', rx:1000 , ry:1000},
            '.inPorts circle': { fill: '#16A085', magnet: 'passive', type: 'input' },
            '.outPorts circle': { fill: '#E74C3C', type: 'output' }
        }
    }).addTo(graph);



    var m2 = m1.clone().translate(300, 0).attr('.label/text', 'Model 2').addTo(graph);


    var link = new joint.shapes.devs.Link({
         source: {
           id: m1.id,
           port: 'out'
         },
         target: {
           id: m2.id,
           port: 'in'
         }
       });

})()
