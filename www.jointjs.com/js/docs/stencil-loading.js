(function() {

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: $('#paper-holder-loading'),
        width: 1000,
        height: 1000,
        gridSize: 1,
        model: graph,

        validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
            //var X1 = (magnetT && magnetT.getAttribute('type') === 'out');
            //var X2 = (magnetS && magnetS.getAttribute('type') === 'no');
            return true;
        }
    });

    var stencil = new joint.ui.Stencil({
        graph: graph,
        paper: paper,
        width: 1000,
        height: 1000
    });



    $('#stencil-holder-loading').append(stencil.render().el);

    var r = new joint.shapes.basic.Rect({
        position: { x: 0, y: 0 }, size: { width: 50, height: 30 },
        attrs: { rect: { fill: '#2ECC71', magnet: true, type: 'in'}, text: { text: 'rect', fill: 'black' } }
    });

    var c = new joint.shapes.basic.Circle({
        position: { x: 150, y: 150 }, size: { width: 100, height: 100 },
        attrs: { circle: { fill: '#9B59B6', magnet: true, type: 'out'}, text: { text: 'circle', fill: 'white' }}
    });

var cx = new joint.shapes.basic.Circle({
    position: { x: 10, y: 150 }, size: { width: 100, height: 100 },
    attrs: { circle: { fill: '#2ECC71', magnet: true, type: 'no'}, text: { text: 'circle', fill: 'white' }}
});



var c1 = new joint.shapes.devs.Model({
    position: { x: 80, y: 80 },
    size: { width: 50, height: 50 },
    inPorts: ['in', 'in2'],
    outPorts: ['out 1', 'out2'],
    attrs: {
        '.label': { text: 'Model', fill: 'black', 'font-size': 14, 'font-weight': 'normal'},
        rect: { fill: '#2ECC71', rx:1000 , ry:1000, 'stroke-width': 10 ,stroke: '#E74C3C' , 'stroke-dasharray': '1,1'},

        '.inPorts circle': { fill: '#16A085', type: 'input' },
        '.outPorts circle': { fill: 'red', type: 'output', 'stroke-width': 0}
    }
});


c1.attr('[port="in"]/fill', 'blue');
c1.attr('[port="out 1"]/fill', 'red');
c1.attr('[port="in"]/type', 'in-put');
c1.attr('[port="in2"]/type', 'XY');
c1.attr('[port="in2"]/magnet', 'passive');
c1.attr('[port="out2"]/type', 'XY');
c1.attr('[port="in"]/magnet', 'passive');
c1.attr('[port="out 1"]/type', 'out-put');
c1.attr('[port="out 2"]/type', 'SS');


var a1 = new joint.shapes.devs.Atomic({
    position: { x: 30, y: 30 },
    inPorts: ['port XY'],
    outPorts: ['x','y']
});

var Image7f31245a = new joint.shapes.basic.Image({
	position: { x: 70, y: 10 },
	size: { width: 100, height: 100 },
	attrs: {
    text: { text: 'cosplay' },
    image: { 'xlink:href': 'http://img-9gag-lol.9cache.com/photo/a1ZPj9R_700b.jpg',
    width: 20, height: 30},
    magnet: true, type: 'EClass' }
});


//var Comp5e481248 = new joint.shapes.basic.Path({
//position: { x: 0, y: 0 }, size: { width: 100, height: 100 },
//attrs: {path: { d: 'M 100 100 L 300 100 L 200 50 z','stroke-width': 1 ,stroke: '#0A190F' , 'stroke-dasharray': '10,2', fill: '#2D2BF4',magnet: true, type: 'EClass'}, text: { text: 'Ola ke ase', fill: 'black', 'font-size': 14, 'font-weight': 'normal'}}
//});

//var d5e481248 = 'M28.631,12.359c-0.268-0.826-1.036-1.382-1.903-1.382h-0.015l-7.15,0.056l-2.155-6.816c-0.262-0.831-1.035-1.397-1.906-1.397s-1.645,0.566-1.906,1.397l-2.157,6.816l-7.15-0.056H4.273c-0.868,0-1.636,0.556-1.904,1.382c-0.27,0.831,0.029,1.737,0.74,2.246l5.815,4.158l-2.26,6.783c-0.276,0.828,0.017,1.739,0.723,2.25c0.351,0.256,0.763,0.384,1.175,0.384c0.418,0,0.834-0.132,1.189-0.392l5.751-4.247l5.751,4.247c0.354,0.26,0.771,0.392,1.189,0.392c0.412,0,0.826-0.128,1.177-0.384c0.704-0.513,0.997-1.424,0.721-2.25l-2.263-6.783l5.815-4.158C28.603,14.097,28.901,13.19,28.631,12.359zM19.712,17.996l2.729,8.184l-6.94-5.125L8.56,26.18l2.729-8.184l-7.019-5.018l8.627,0.066L15.5,4.82l2.603,8.225l8.627-0.066L19.712,17.996z';
//var Comp5e481248 = (new path({ position: { x: 0, y:0},attrs: { text: { text: 'Ola ke ase'}, path: { magnet: true, type: 'EClass' ,  d:  d5e481248}, 'stroke-width': 1 ,stroke: '#0A190F' , 'stroke-dasharray': '10,2' }});

var Rect5e481248 = new joint.shapes.basic.Rect({
position: { x: 0, y:0 },
size: { width:100, height: 100 },
attrs: { rect: { width: 100, height: 100, fill: '#2D2BF4', rx: 0, ry: 0, 'stroke-width': 1 ,stroke: '#0A190F' , 'stroke-dasharray': '10,2',magnet: true, type: 'EClass'},  text: {text: 'Ola ke ase', fill: 'black', 'font-size': 14, 'font-weight': 'normal'}}
});

    var circle = joint.shapes.basic.Circle;
    var o5 = (new circle({ position: { x: 70, y: 70 }, size: { width: 100, height: 100 }, attrs: { text: { text: 'circle' }, circle: { magnet: true }, type: 'out'}}));
    stencil.load([r, o5, c, Rect5e481248]);

}())
