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

    $('#btn-open-png').on('click', function() {

        var windowFeatures = 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';
        var windowName = _.uniqueId('png_output');
        var imageWindow = window.open('', windowName, windowFeatures);

        paper.toPNG(function(dataURL) {
	    imageWindow.document.write('<img src="' + dataURL + '"/>');
        }, { padding: 10 });
    });

    $('#btn-open-jpg').on('click', function() {

        var windowFeatures = 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';
        var windowName = _.uniqueId('jpg_output');
        var imageWindow = window.open('', windowName, windowFeatures);

        paper.toJPEG(function(dataURL) {
	    imageWindow.document.write('<img src="' + dataURL + '"/>');
        }, { padding: 10, quality: .7 });
    });
    
}())