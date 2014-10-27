(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-holder'),
        width: 400,
        height: 300,
        gridSize: 1,
        model: graph
    });

    var r = new joint.shapes.basic.Rect({ 
        position: { x: 50, y: 50 }, size: { width: 70, height: 40 },
        attrs: { rect: { fill: '#2ECC71' }, text: { text: 'rect', fill: 'black' } }
    });
    
    var c = new joint.shapes.basic.Circle({ 
        position: { x: 220, y: 150 }, size: { width: 80, height: 40 },
        attrs: { circle: { fill: '#9B59B6' }, text: { text: 'circle', fill: 'white' } }
    });

    graph.addCells([r, c]);

    $('#btn-print').on('click', function() { paper.print(); });

}())