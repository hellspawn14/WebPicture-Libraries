(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-holder-halo'),
        width: 400,
        height: 300,
        gridSize: 1,
        model: graph
    });

    paper.on('cell:pointerup', function(cellView) {
        // We don't want a Halo for links.
        if (cellView.model instanceof joint.dia.Link) return;

        var halo = new joint.ui.Halo({ graph: graph, paper: paper, cellView: cellView });
        halo.render();
        initializeHaloTooltips(halo);
    });

    var r = new joint.shapes.basic.Rect({ 
        position: { x: 150, y: 120 }, size: { width: 70, height: 40 },
        attrs: { rect: { fill: '#2ECC71' }, text: { text: 'rect', fill: 'black' } }
    });
    
    graph.addCell(r);

    // Show Halo immediately for the rectangle so that it is visible to the reader straight away.

    var halo = new joint.ui.Halo({ graph: graph, paper: paper, cellView: paper.findViewByModel(r) }).render();

    initializeHaloTooltips(halo);

    function initializeHaloTooltips(halo) {

        new joint.ui.Tooltip({
            className: 'tooltip small',
            target: halo.$('.remove'),
            content: 'Click to remove the object',
            direction: 'right',
            right: halo.$('.remove'),
            padding: 15
        });
        new joint.ui.Tooltip({
            className: 'tooltip small',
            target: halo.$('.fork'),
            content: 'Click and drag to clone and connect the object in one go',
            direction: 'left',
            left: halo.$('.fork'),
            padding: 15
        });
        new joint.ui.Tooltip({
            className: 'tooltip small',
            target: halo.$('.clone'),
            content: 'Click and drag to clone the object',
            direction: 'bottom',
            bottom: halo.$('.clone'),
            padding: 15
        });
        new joint.ui.Tooltip({
            className: 'tooltip small',
            target: halo.$('.unlink'),
            content: 'Click to break all connections to other objects',
            direction: 'right',
            right: halo.$('.unlink'),
            padding: 15
        });
        new joint.ui.Tooltip({
            className: 'tooltip small',
            target: halo.$('.link'),
            content: 'Click and drag to connect the object',
            direction: 'left',
            left: halo.$('.link'),
            padding: 15
        });
        new joint.ui.Tooltip({
            className: 'tooltip small',
            target: halo.$('.rotate'),
            content: 'Click and drag to rotate the object',
            direction: 'right',
            right: halo.$('.rotate'),
            padding: 15
        });
        new joint.ui.Tooltip({
            className: 'tooltip small',
            target: halo.$('.resize'),
            content: 'Click and drag to resize the object',
            direction: 'left',
            left: halo.$('.resize'),
            padding: 15
        });
    }
}())