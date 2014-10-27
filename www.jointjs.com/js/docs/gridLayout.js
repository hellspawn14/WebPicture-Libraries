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
    var r2 = r.clone();
    r2.translate(30, 5);
    var r3 = r.clone();
    r3.translate(20, 50);
    var r4 = r.clone();
    r4.translate(100, 80);
    var c2 = c.clone();
    c2.translate(0, -100);

    graph.addCells([r, c, r2, r3, r4, c2]);


    $('#btn-layout').on('click', function() {

        joint.layout.GridLayout.layout(graph, {
            columns: 3,
            columnWidth: 100,
            rowHeight: 70
        });
    });
}())