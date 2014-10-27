(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-holder-customize'),
        width: 400,
        height: 300,
        gridSize: 1,
        model: graph
    });

    var r = new joint.shapes.basic.Rect({ 
        position: { x: 50, y: 50 }, size: { width: 70, height: 40 },
        attrs: { rect: { fill: '#2ECC71' }, text: { text: 'rect', fill: 'black' } }
    });

    graph.addCell(r);

    paper.on('cell:pointerup', function(cellView) {
        // We don't want a Halo for links.
        if (cellView.model instanceof joint.dia.Link) return;

        var halo = new joint.ui.Halo({ graph: graph, paper: paper, cellView: cellView });
	customizeHalo(halo);
        halo.render();
    });


    // Show Halo immediately for the rectangle so that it is visible to the reader straight away.

    var halo = new joint.ui.Halo({ graph: graph, paper: paper, cellView: paper.findViewByModel(r) }).render();
    customizeHalo(halo);
}())


function customizeHalo(halo) {

    halo.addHandle({ name: 'myaction', position: 's', icon: '/images/myaction.png' });
    halo.changeHandle('clone', { position: 'se' });
    halo.removeHandle('resize');

    halo.on('action:myaction:pointerdown', function(evt) {
	evt.stopPropagation();
	alert('My custom action.');
    });
}
