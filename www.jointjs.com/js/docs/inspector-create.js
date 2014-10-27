(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-holder-create'),
        width: 400,
        height: 450,
        gridSize: 1,
        model: graph
    });

    var inspector;

    function createInspector(cellView) {
        
        // No need to re-render inspector if the cellView didn't change.
        if (!inspector || inspector.options.cellView !== cellView) {
            
            if (inspector) {
                // Apply all unsaved changes on the cell before we remove the old inspector.
                inspector.updateCell();
                // Clean up the old inspector if there was one.
                inspector.remove();
            }

            inspector = new joint.ui.Inspector({
                inputs: {
                    myproperty: { type: 'number', defaultValue: 5, group: 'mydata', index: 1 },
                    attrs: {
                        text: { 
                            text: { type: 'textarea', group: 'text', label: 'Text', index: 1 },
                            'font-size': { type: 'range', min: 5, max: 30, group: 'text', label: 'Font size', index: 2 }
                        }
                    },
                    position: {
                        x: { type: 'number', index: 1, group: 'position' },
                        y: { type: 'number', index: 2, group: 'position' }
                    }
                },
                groups: {
                    mydata: { label: 'My Data', index: 1 },
                    text: { label: 'Text', index: 2 },
                    position: { label: 'Position', index: 3 }
                },
                cellView: cellView
            });
            $('#inspector-holder-create').html(inspector.render().el);
        }
    }

    paper.on('cell:pointerdown', function(cellView) {
        createInspector(cellView);
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

    // Show Inspector immediately for the rectangle so that it is visible to the reader straight away.
    
    createInspector(paper.findViewByModel(r));
    
}())