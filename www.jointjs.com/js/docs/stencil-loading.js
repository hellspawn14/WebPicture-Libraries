(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-holder-loading'),
        width: 300,
        height: 200,
        gridSize: 1,
        model: graph
    });

    var stencil = new joint.ui.Stencil({ 
        graph: graph, 
        paper: paper,
        width: 200,
        height: 200
    });
    $('#stencil-holder-loading').append(stencil.render().el);

    var r = new joint.shapes.basic.Rect({ 
        position: { x: 10, y: 10 }, size: { width: 50, height: 30 },
        attrs: { rect: { fill: '#2ECC71' }, text: { text: 'rect', fill: 'black' } }
    });
    var c = new joint.shapes.basic.Circle({ 
        position: { x: 70, y: 10 }, size: { width: 50, height: 30 },
        attrs: { circle: { fill: '#9B59B6' }, text: { text: 'circle', fill: 'white' } }
    });

    stencil.load([r, c]);
    
}())