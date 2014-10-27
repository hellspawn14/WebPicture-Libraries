(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-holder-styling'),
        width: 400,
        height: 300,
        gridSize: 1,
        model: graph
    });

    var selection = new Backbone.Collection;
    var selectionView = new joint.ui.SelectionView({ paper: paper, graph: graph, model: selection });
    
    paper.on('blank:pointerdown', selectionView.startSelecting);

    paper.on('cell:pointerup', function(cellView, evt) {
        if ((evt.ctrlKey || evt.metaKey) && !(cellView.model instanceof joint.dia.Link)) {
            selection.add(cellView.model);
            selectionView.createSelectionBox(cellView);
        }
    });

    selectionView.on('selection-box:pointerdown', function(evt) {
        if (evt.ctrlKey || evt.metaKey) {
            var cell = selection.get($(evt.target).data('model'));
            selection.reset(selection.without(cell));
            selectionView.destroySelectionBox(paper.findViewByModel(cell));
        }
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

    // Select elements right away to show the effect of custom styling immediately.
    selection.add([r, c]);
    selectionView.createSelectionBox(r.findView(paper));
    selectionView.createSelectionBox(c.findView(paper));

}())
