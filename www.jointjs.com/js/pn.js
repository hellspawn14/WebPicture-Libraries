var graph = new joint.dia.Graph;
var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 800,
    height: 350,
    gridSize: 10,
    perpendicularLinks: true,
    model: graph
});

var pn = joint.shapes.pn;

var pReady = new pn.Place({ position: { x: 140, y: 50 }, attrs: { '.label': { text: 'ready' }  }, tokens: 1 });
var pIdle = new pn.Place({ position: { x: 140, y: 260 }, attrs: { '.label': { text: 'idle' } }, tokens: 2 });
var buffer = new pn.Place({ position: { x: 350, y: 160 }, attrs: { '.label': { text: 'buffer' }  }, tokens: 12 });
var cAccepted = new pn.Place({ position: { x: 550, y: 50 }, attrs: { '.label': { text: 'accepted' }  }, tokens: 1 });
var cReady = new pn.Place({ position: { x: 560, y: 260 }, attrs: { '.label': { text: 'ready' }  }, tokens: 3 });

var pProduce = new pn.Transition({ position: { x: 50, y: 160 }, attrs: { '.label': { text: 'produce' }  } });
var pSend = new pn.Transition({ position: { x: 270, y: 160 }, attrs: { '.label': { text: 'send' }  } });
var cAccept = new pn.Transition({ position: { x: 470, y: 160 }, attrs: { '.label': { text: 'accept' }  } });
var cConsume = new pn.Transition({ position: { x: 680, y: 160 }, attrs: { '.label': { text: 'consume' }  } });

function link(a, b) {

    return new pn.Link({
        source: { id: a.id, selector: '.root' },
        target: { id: b.id, selector: '.root' }
    });
}

graph.addCell([ pReady, pIdle, buffer, cAccepted, cReady, pProduce, pSend, cAccept, cConsume ]);

graph.addCell([
    link(pProduce, pReady),
    link(pReady, pSend),
    link(pSend, pIdle),
    link(pIdle, pProduce),
    link(pSend, buffer),
    link(buffer, cAccept),
    link(cAccept, cAccepted),
    link(cAccepted, cConsume),
    link(cConsume, cReady),
    link(cReady, cAccept)
]);


function fireTransition(t, sec) {

    var inbound = graph.getConnectedLinks(t, { inbound: true });
    var outbound = graph.getConnectedLinks(t, { outbound: true });

    var placesBefore = _.map(inbound, function(link) { return graph.getCell(link.get('source').id); });
    var placesAfter = _.map(outbound, function(link) { return graph.getCell(link.get('target').id); });

    var isFirable = true;
    _.each(placesBefore, function(p) { if (p.get('tokens') == 0) isFirable = false; });

    if (isFirable) {

        _.each(placesBefore, function(p) {
            // Let the execution finish before adjusting the value of tokens. So that we can loop over all transitions
            // and call fireTransition() on the original number of tokens.
            _.defer(function() { p.set('tokens', p.get('tokens') - 1); });
	    var link = _.find(inbound, function(l) { return l.get('source').id === p.id; });
	    paper.findViewByModel(link).sendToken(V('circle', { r: 5, fill: 'red' }).node, sec * 1000);
	    
        });

        _.each(placesAfter, function(p) {
	    var link = _.find(outbound, function(l) { return l.get('target').id === p.id; });
	    paper.findViewByModel(link).sendToken(V('circle', { r: 5, fill: 'red' }).node, sec * 1000, function() {
                p.set('tokens', p.get('tokens') + 1);
	    });
	    
        });
    }
}

function simulate() {
    var transitions = [pProduce, pSend, cAccept, cConsume];
    _.each(transitions, function(t) { if (Math.random() < 0.7) fireTransition(t, 1); });
    
    return setInterval(function() {
        _.each(transitions, function(t) { if (Math.random() < 0.7) fireTransition(t, 1); });
    }, 2000);
}

function stopSimulation(simulationId) {
    clearInterval(simulationId);
}

var simulationId = simulate();



