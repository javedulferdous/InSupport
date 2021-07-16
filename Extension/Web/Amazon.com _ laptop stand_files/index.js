(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.logo_tag_bg_blue = function() {
	this.initialize(img.logo_tag_bg_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,85);


(lib.phone_160x600 = function() {
	this.initialize(img.phone_160x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,355);


(lib.teacher1_160x600 = function() {
	this.initialize(img.teacher1_160x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,660);


(lib.teacher2_160x600 = function() {
	this.initialize(img.teacher2_160x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,660);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.gradient_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFB100","#FF575D","#FFFFFF"],[0.298,0.329,0.667,0.706],-70.5,0,70.6,0).s().p("ArBB8IAAj3IWDAAIAAD3g");
	this.shape.setTransform(211.725,12.35,3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,423.5,24.7);


(lib.F3_phone_gph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.phone_160x600();
	this.instance.setTransform(-124.5,163.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,163.3,237,354.99999999999994);


(lib.F3_disclaimer_txt = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIACgBIADABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(137.875,313.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAoQAFgIACgLQACgKAAgLQAAgKgCgLQgCgKgFgIIAGAAQAEAHADALQACALAAAKQAAALgCALQgDAKgEAIg");
	this.shape_1.setTransform(135.9,311.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IANAAQALAAAHAIQAGAIAAAOQAAAPgGAJQgHAHgLABgAgMAZIAHAAQAIAAAEgHQAFgGAAgMQAAgLgFgHQgEgGgIAAIgHAAg");
	this.shape_2.setTransform(132.75,311.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAgIgVgxIAAAxIgHAAIAAg+IAHAAIAWAwIAAgwIAGAAIAAA+g");
	this.shape_3.setTransform(128.05,311.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAIQAFgFABgDIgCgCIgBgDIABgDIADgBQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABAEQAAAEgCADQgDAFgEACg");
	this.shape_4.setTransform(123.3,314.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAgIgFgSIgTAAIgFASIgHAAIATg+IAGAAIASA+gAAIAIIgIgeIgIAeIAQAAg");
	this.shape_5.setTransform(120.5,311.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAgIAAg+IAOAAQAJAAAFAEQAFAGAAAKQAAAJgFAEQgFAFgJAAIgHAAIAAAYgAgJACIAHAAQAFAAAEgDQADgDAAgGQAAgIgDgDQgEgDgFAAIgHAAg");
	this.shape_6.setTransform(116.375,311.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAIQAFgFAAgDIgBgCIgBgDIABgDIACgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABAEQAAAEgCADQgDAFgEACg");
	this.shape_7.setTransform(111.75,314.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAgIgFgSIgTAAIgFASIgHAAIATg+IAFAAIATA+gAAIAIIgIgeIgIAeIAQAAg");
	this.shape_8.setTransform(108.95,311.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAgIAAgxIgPAlIgFAAIgQgmIAAAyIgGAAIAAg+IAHAAIARArIASgrIAHAAIAAA+g");
	this.shape_9.setTransform(103.725,311.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEACgEABQgFAAgDgFg");
	this.shape_10.setTransform(97.775,311.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAhIAAhAIAFAAIABADQAEgEAGAAQAHAAAEAGQAEAHAAALQAAAHgCAEQgCAGgEADQgDADgFAAQgFAAgEgEIAAAWgAgJgXIAAAcQAEAEAFAAQAEAAADgFQADgEAAgIQAAgJgDgFQgDgFgEAAQgFAAgEAEg");
	this.shape_11.setTransform(94.575,312.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_12.setTransform(90.625,311.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIASQgFgHAAgLQAAgKAFgHQAFgGAHAAQAFAAAFACIgCAFIgHgBQgFAAgDAEQgEAFAAAIQAAAIAEAFQADAFAFAAQAEAAADgBIACAFQgEACgGAAQgHAAgFgGg");
	this.shape_13.setTransform(87.325,311.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKAXIgKgSIgJASIgGAAIAMgXIgMgWIAIAAIAHARIAJgRIAHAAIgNAWIAOAXg");
	this.shape_14.setTransform(83.9,311.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_15.setTransform(80.325,311.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AACAoQgEgIgDgKQgDgLAAgLQAAgKADgLQADgLAEgHIAHAAQgFAIgDAKQgCALAAAKQAAALACAKQADALAFAIg");
	this.shape_16.setTransform(77.575,311.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_17.setTransform(72.625,310.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAIQAEgFAAgEIgBgBIgBgDIABgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFQAAADgCADQgCAEgDADg");
	this.shape_18.setTransform(70.075,308.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKAhIAAgXQgFAFgFAAQgHAAgEgGQgEgHAAgKQAAgIACgGQACgFADgDQAEgDAEABQAGAAAEAEIABgDIAFAAIAABAgAgGgWQgDAFAAAJQAAAIADAEQADAFAEAAQAFAAAEgFIAAgbQgEgEgFAAQgEAAgDAFg");
	this.shape_19.setTransform(67.475,312.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_20.setTransform(63.725,311.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_21.setTransform(60.825,311.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_22.setTransform(55.825,311.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAeIAAADIgFAAIAAhCIAGAAIAAAYQAFgEAFAAQAHAAAEAGQAEAHAAAKQAAAHgCAGQgCAFgEADQgDADgFAAQgFAAgFgEgAgJgDIAAAbQAEAEAFAAQAEAAADgFQADgFAAgIQAAgJgDgEQgDgFgEAAQgFAAgEAFg");
	this.shape_23.setTransform(52.125,310.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAgIABgFIAEABIADgBIADgFIADgKIgOgsIAHAAIAJAkIAKgkIAHAAIgPAxIgDAKQgBADgDABQgCACgDAAQgEAAgCgBg");
	this.shape_24.setTransform(46.675,312.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_25.setTransform(43.025,311.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUAYIAAgfQAAgKgHAAQgEAAgGAFIABAFIAAAfIgGAAIAAgfQAAgKgIAAQgEAAgFAFIAAAkIgGAAIAAguIAFAAIAAAFQAHgGAGAAQAHAAACAHQAHgHAGAAQAGAAADAEQACAEAAAIIAAAfg");
	this.shape_26.setTransform(38.25,311.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_27.setTransform(31.475,310.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_28.setTransform(28.525,311.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_29.setTransform(25.075,311.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIASQgFgHAAgLQAAgKAFgHQAFgGAHAAQAFAAAFACIgCAFIgHgBQgFAAgDAEQgEAFAAAIQAAAIAEAFQADAFAFAAQAEAAADgBIACAFQgEACgGAAQgHAAgFgGg");
	this.shape_30.setTransform(21.925,311.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEACgEABQgFAAgDgFg");
	this.shape_31.setTransform(17.275,311.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_32.setTransform(15.175,310.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_33.setTransform(12.325,310.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_34.setTransform(8.575,311.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_35.setTransform(5.675,311.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAYQgGgJAAgPQAAgJADgIQACgGAGgFQAFgDAGAAQAGAAAFADIgCAGQgEgDgFAAQgGAAgFAHQgEAHAAALQAAAMAEAHQAFAHAGAAQAFAAAFgCIABAFQgFAEgHAAQgJAAgGgJg");
	this.shape_36.setTransform(2.325,311.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACAAIADAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_37.setTransform(128.075,304.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAgIABgFIAEABIADgBIADgFIADgKIgOgtIAHAAIAJAlIAKglIAHAAIgPAyIgDAKQgBADgDABQgCACgDABQgEAAgCgCg");
	this.shape_38.setTransform(125.625,303.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_39.setTransform(123.125,301.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAFAAIABAFQAEgGAGAAQAHABAEAGQAEAHAAALQAAAHgCAEQgCAGgEADQgDADgFAAQgFAAgEgEIAAAWgAgJgXIAAAcQAEAEAFAAQAEAAADgFQADgEAAgIQAAgJgDgFQgDgFgEAAQgFAAgEAEg");
	this.shape_40.setTransform(120.475,303.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAFAAIABAFQAEgGAGAAQAHABAEAGQAEAHAAALQAAAHgCAEQgCAGgEADQgDADgFAAQgFAAgEgEIAAAWgAgJgXIAAAcQAEAEAFAAQAEAAADgFQADgEAAgIQAAgJgDgFQgDgFgEAAQgFAAgEAEg");
	this.shape_41.setTransform(116.525,303.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_42.setTransform(112.525,302.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_43.setTransform(107.625,302.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgEAHQAEgEAAgEIgBgBIgBgDIABgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFQAAADgCADQgCAEgDADg");
	this.shape_44.setTransform(105.475,299.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_45.setTransform(103.875,302.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEACgEABQgFAAgDgFg");
	this.shape_46.setTransform(100.975,301.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_47.setTransform(98.025,302.125);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_48.setTransform(94.675,302.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_49.setTransform(91.775,302.075);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_50.setTransform(87.575,302.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_51.setTransform(84.175,302.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAJAiIAAggQAAgJgIAAIgEABIgFAEIAAAkIgGAAIAAhDIAGAAIAAAaQAGgGAGAAQAFAAAEAEQACAEABAHIAAAgg");
	this.shape_52.setTransform(80.35,301.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEACgEABQgFAAgDgFg");
	this.shape_53.setTransform(76.975,301.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgMASQgEgHAAgLQAAgLAEgGQAFgGAHAAQAIAAAEAGQAFAHAAAKQAAALgFAHQgEAGgIAAQgHAAgFgGgAgGgNQgDAFAAAIQAAAIADAFQACAFAEAAQAFAAADgFQACgFAAgIQAAgIgCgFQgDgFgFAAQgEAAgCAFg");
	this.shape_54.setTransform(73.65,302.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSAcQgEgEAAgHQAAgGADgFQACgEAHgDQgEgFgCgEQgBgDAAgFQAAgGADgEQAEgDAGAAQAFAAAEADQAEAEAAAFIgCAHIgDAFIgHAGIAKANIAHgNIAGAAIgJARIAMAQIgHAAIgIgKQgFALgKAAQgHgBgEgEgAgOAJQgCAEAAADQAAAFADADQACADAEAAQAHAAAEgKIgLgQQgFAFgCADgAgJgXQgCACAAADIABAHIAFAHIAGgHQACgEAAgEQAAgDgCgCQgBgCgEAAQgDAAgCADg");
	this.shape_55.setTransform(67.975,301.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_56.setTransform(62.225,302.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEACgEABQgFAAgDgFg");
	this.shape_57.setTransform(59.375,301.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAUAYIAAgfQAAgKgHAAQgFAAgFAFIAAAFIAAAfIgFAAIAAgfQAAgKgHAAQgFAAgFAFIAAAkIgHAAIAAguIAGAAIABAFQAGgGAGAAQAHAAACAHQAGgHAHAAQAGAAADAEQACAEAAAIIAAAfg");
	this.shape_58.setTransform(54.95,302.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAHQAEgEAAgEIgBgBIgBgDIABgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAFQAAADgCADQgCAEgDADg");
	this.shape_59.setTransform(51.175,299.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAKAhIAAgXQgFAFgFAAQgHAAgEgGQgEgHAAgKQAAgIACgGQACgFADgDQAEgCAEgBQAGABAEAEIABgEIAFAAIAABBgAgGgWQgDAFAAAJQAAAIADAEQADAFAEAAQAFAAAEgFIAAgbQgEgEgFAAQgEAAgDAFg");
	this.shape_60.setTransform(48.575,303.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_61.setTransform(44.825,302.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_62.setTransform(41.925,302.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgQAgIABgFIAEABIADgBIADgFIADgKIgOgtIAHAAIAJAlIAKglIAHAAIgPAyIgDAKQgBADgDABQgCACgDABQgEAAgCgCg");
	this.shape_63.setTransform(37.025,303.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEACgEABQgFAAgDgFg");
	this.shape_64.setTransform(33.925,301.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_65.setTransform(31.825,301.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_66.setTransform(30.275,301.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_67.setTransform(28.725,301.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAeIAAADIgFAAIAAhCIAGAAIAAAYQAFgEAFAAQAHAAAEAGQAEAHAAAKQAAAHgCAGQgCAFgEADQgDADgFAAQgFAAgFgEgAgJgDIAAAbQAEAEAFAAQAEAAADgFQADgFAAgIQAAgJgDgEQgDgFgEAAQgFAAgEAFg");
	this.shape_68.setTransform(26.075,301.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_69.setTransform(23.225,301.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgMAfIABgGQAFADAFAAQAFAAADgEQADgCAAgIIAAgFQgFAEgFABQgFAAgDgEQgEgDgBgFQgCgEAAgHQAAgLAEgHQAEgGAHAAQAGAAAEAEIABgDIAFAAIAAAuQAAAKgEAEQgFAGgHAAQgGAAgGgDgAgGgWQgDAEAAAJQAAAIADAEQADAEAEAAQAFAAAEgEIAAgaQgEgFgFAAQgEAAgDAGg");
	this.shape_70.setTransform(20.375,303.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_71.setTransform(17.725,301.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_72.setTransform(16.175,301.075);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgOAgIAAg+IAdAAIAAAGIgXAAIAAAWIATAAIAAAFIgTAAIAAAWIAXAAIAAAHg");
	this.shape_73.setTransform(13.675,301.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACAAIADAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_74.setTransform(9.325,304.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgSAgIAAg+IANAAQALgBAHAJQAGAIAAAOQAAAPgGAJQgHAHgLABgAgMAZIAHAAQAIAAAEgHQAFgGAAgMQAAgLgFgHQgEgGgIAAIgHAAg");
	this.shape_75.setTransform(6.4,301.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQAcIACgFQAGADAGAAQAFAAADgDQAEgDAAgFQAAgEgDgEQgCgCgFgCIgCgCQgMgEAAgLQAAgJAFgEQAFgFAHABQAGgBAGAEIgCAGQgFgDgFAAQgEAAgDADQgDADAAAEQAAAFADACQACADAEADIACAAQANAFAAAMQAAAHgFAFQgFAGgIAAQgIgBgHgEg");
	this.shape_76.setTransform(2.075,301.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACAAIADAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_77.setTransform(136.925,294.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_78.setTransform(134.175,291.325);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAIQABACAEAAIAGgBIABAFQgEACgEABQgFgBgDgDg");
	this.shape_79.setTransform(130.925,291.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_80.setTransform(128.825,291.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgLASQgFgHAAgLQAAgLAFgGQAEgGAHAAQAIAAAFAGQAEAHAAAKQAAALgEAHQgFAGgIAAQgHAAgEgGgAgHgNQgDAFAAAIQAAAIADAFQADAFAEAAQAFAAADgFQACgFAAgIQAAgIgCgFQgDgFgFAAQgEAAgDAFg");
	this.shape_81.setTransform(124.45,292.325);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_82.setTransform(120.625,292.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_83.setTransform(116.725,291.325);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_84.setTransform(114.075,291.375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgCAgIgSg+IAIAAIAMA0IAOg0IAHAAIgRA+g");
	this.shape_85.setTransform(111.125,291.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACAAIADAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_86.setTransform(106.675,294.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_87.setTransform(104.075,292.325);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_88.setTransform(101.325,292.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAIQABACAEAAIAGgBIABAFQgEACgEABQgFgBgDgDg");
	this.shape_89.setTransform(98.425,291.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAJAXIgJgSIgJASIgHAAIAOgXIgNgWIAIAAIAHARIAJgRIAHAAIgNAWIAOAXg");
	this.shape_90.setTransform(95.35,292.325);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_91.setTransform(91.775,292.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_92.setTransform(86.725,292.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_93.setTransform(83.375,292.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_94.setTransform(79.675,292.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgGAiIAAgoIgHAAIAAgFIAHAAIAAgFQAAgIADgFQADgEAGAAQAEAAAEACIgCAFIgFgBQgHAAAAALIAAAFIALAAIAAAFIgLAAIAAAog");
	this.shape_95.setTransform(76.725,291.225);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_96.setTransform(71.675,291.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAJAYIAAgfQAAgKgIAAIgEABIgFAEIAAAkIgHAAIAAguIAGAAIABAFQAGgGAFAAQAHAAACAEQADAEABAIIAAAfg");
	this.shape_97.setTransform(67.8,292.275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_98.setTransform(63.875,292.325);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_99.setTransform(58.975,292.325);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_100.setTransform(55.625,292.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAKAXIgKgSIgJASIgHAAIANgXIgMgWIAIAAIAHARIAJgRIAHAAIgNAWIAOAXg");
	this.shape_101.setTransform(52.05,292.325);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_102.setTransform(48.425,292.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgDAgIAAg4IgPAAIAAgGIAlAAIAAAGIgQAAIAAA4g");
	this.shape_103.setTransform(44.75,291.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACAAIADAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_104.setTransform(40.425,294.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_105.setTransform(38.975,291.275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_106.setTransform(37.425,291.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_107.setTransform(35.875,291.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgKAeIAAADIgFAAIAAhCIAGAAIAAAYQAFgEAFAAQAHAAAEAGQAEAHAAAKQAAAHgCAGQgCAFgEADQgDADgFAAQgFAAgFgEgAgJgDIAAAbQAEAEAFAAQAEAAADgFQADgFAAgIQAAgJgDgEQgDgFgEAAQgFAAgEAFg");
	this.shape_108.setTransform(33.225,291.325);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_109.setTransform(27.925,292.325);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_110.setTransform(24.825,292.325);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_111.setTransform(21.475,292.325);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_112.setTransform(18.875,291.275);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_113.setTransform(17.025,292.275);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_114.setTransform(13.625,292.325);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgPAiIAAhCIAFAAIABAFQAEgGAGAAQAHABAEAGQAEAHAAALQAAAHgCAEQgCAGgEADQgDADgFAAQgFAAgEgEIAAAXgAgJgXIAAAcQAEAEAFAAQAEAAADgFQADgEAAgIQAAgJgDgFQgDgFgEAAQgFAAgEAEg");
	this.shape_115.setTransform(9.925,293.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_116.setTransform(5.925,292.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgPAiIAAhCIAFAAIABAFQAEgGAGAAQAHABAEAGQAEAHAAALQAAAHgCAEQgCAGgEADQgDADgFAAQgFAAgEgEIAAAXgAgJgXIAAAcQAEAEAFAAQAEAAADgFQADgEAAgIQAAgJgDgFQgDgFgEAAQgFAAgEAEg");
	this.shape_117.setTransform(2.375,293.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_118.setTransform(110.475,281.525);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAJAYIAAgfQAAgKgIAAIgEABIgFAEIAAAkIgHAAIAAguIAGAAIABAFQAGgGAFAAQAHAAACAEQAEAEAAAIIAAAfg");
	this.shape_119.setTransform(106.6,282.475);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_120.setTransform(102.675,282.525);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgQAgIABgFIAEAAIADgBIADgEIADgKIgOgtIAHAAIAJAmIAKgmIAHAAIgPAyIgDAJQgBAEgDACQgCACgDAAQgEgBgCgBg");
	this.shape_121.setTransform(97.625,283.55);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_122.setTransform(93.975,282.525);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgPAiIAAhCIAFAAIABAFQAEgGAGAAQAHABAEAGQAEAHAAALQAAAHgCAEQgCAGgEADQgDADgFAAQgFAAgEgEIAAAXgAgJgXIAAAcQAEAEAFAAQAEAAADgFQADgEAAgIQAAgJgDgFQgDgFgEAAQgFAAgEAEg");
	this.shape_123.setTransform(90.425,283.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgLASQgFgHAAgLQAAgLAFgGQAEgGAHAAQAIAAAEAGQAFAHAAAKQAAALgFAHQgEAGgIAAQgHAAgEgGgAgHgNQgCAFAAAIQAAAIACAFQADAFAEAAQAFAAADgFQADgFgBgIQABgIgDgFQgDgFgFAAQgEAAgDAFg");
	this.shape_124.setTransform(86.35,282.525);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgIIAAgaIgGAAIAAgFIAGAAIABgOIAFAAIAAAOIAMAAIAAAFIgMAAIAAAZIABAIQABACAEAAIAGgBIABAFQgEADgEgBQgFAAgDgDg");
	this.shape_125.setTransform(83.025,281.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgLAUQgDgEAAgIIAAgfIAGAAIAAAfQAAAKAIAAIAEgBIAFgEIAAgkIAGAAIAAAuIgFAAIgBgFQgFAGgGAAQgGAAgDgEg");
	this.shape_126.setTransform(79.675,282.575);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_127.setTransform(75.825,282.525);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_128.setTransform(70.925,282.525);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgEAHQAEgEAAgEIgBgBIgBgDIABgCQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABAEQAAADgCADQgCAEgDADg");
	this.shape_129.setTransform(68.775,279.45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAKAiIAAgYQgFAFgFAAQgHAAgEgGQgEgHAAgKQAAgIACgGQACgFADgDQAEgCAEgBQAGABAEAEIABgEIAFAAIAABCgAgGgWQgDAFAAAJQAAAIADAEQADAFAEAAQAFAAAEgFIAAgbQgEgEgFAAQgEAAgDAFg");
	this.shape_130.setTransform(66.175,283.45);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_131.setTransform(62.425,282.525);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAKAgIgLgZIgJAAIAAAZIgHAAIAAg/IAOAAQAJAAAEAGQAGAFAAAJQAAAHgDAEQgDAEgGACIAOAagAgKABIAHAAQAFAAAEgDQACgDAAgGQAAgHgCgDQgEgDgFAAIgHAAg");
	this.shape_132.setTransform(58.65,281.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIADABQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_133.setTransform(54.025,284.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgIASQgFgHAAgLQAAgKAFgHQAFgGAHAAQAFAAAFACIgCAFIgHgBQgFAAgDAEQgEAFAAAIQAAAIAEAFQADAFAFAAQAEAAADgBIACAFQgEACgGAAQgHAAgFgGg");
	this.shape_134.setTransform(51.875,282.525);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_135.setTransform(48.575,282.525);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_136.setTransform(46.325,281.575);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_137.setTransform(43.475,281.525);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_138.setTransform(38.375,282.525);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_139.setTransform(35.275,282.525);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_140.setTransform(31.925,282.525);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_141.setTransform(29.325,281.475);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_142.setTransform(26.675,282.525);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_143.setTransform(23.775,282.475);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_144.setTransform(21.475,281.575);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAIAXIgIgjIgHAjIgGAAIgMgtIAHAAIAIAlIAIgkIAFAAIAIAkIAIglIAHAAIgMAtg");
	this.shape_145.setTransform(18.025,282.525);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AALAbQgCgEAAgJIAAgCQAAgIACgEQADgEAGAAQAFAAAEAEQADAEAAAIIAAACQAAAJgDAEQgEAFgFAAQgGAAgDgFgAAPAMIAAACQgBANAGAAQAGAAAAgNIAAgCQAAgMgGAAQgGAAABAMgAgSAfIAfg9IAFAAIgeA9gAgcAAQgDgDAAgJIAAgCQAAgIADgFQADgEAGAAQAFAAADAEQADAFAAAIIAAACQAAAJgDADQgDAFgFAAQgGAAgDgFgAgZgOIAAACQgBAMAHAAQAFAAAAgMIAAgCQAAgMgFAAQgHAAABAMg");
	this.shape_146.setTransform(10.3,281.75);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgPAcIADgGQAFADAFAAQAFAAADgDQADgEAAgGQAAgGgDgEQgFgCgFAAIgHAAIABgfIAVAAIAAAHIgPAAIgBATIAEAAQAIAAAEAEQAEAFABAIQAAAJgGAFQgFAFgGAAQgIAAgGgDg");
	this.shape_147.setTransform(5.1,281.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgNAgIAAgEIABgMIADgIQABgDAGgEIAIgJQACgEAAgDQAAgEgCgDQgDgDgDAAQgFAAgFAEIgEgEIAHgEIAHgCQAHAAADAEQAFAFAAAHIgBAGIgFAGIgIAIQgEAFgCADQgBAFgBAHIAWAAIAAAHg");
	this.shape_148.setTransform(1.85,281.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_149.setTransform(126.775,272.725);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_150.setTransform(123.425,272.725);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_151.setTransform(119.525,271.725);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgLAUQgDgEAAgIIAAgfIAGAAIAAAfQAAAKAIAAIAEgBIAFgEIAAgkIAGAAIAAAuIgFAAIgBgFQgFAGgGAAQgGAAgDgEg");
	this.shape_152.setTransform(115.625,272.775);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_153.setTransform(112.925,271.675);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgIASQgFgHAAgLQAAgKAFgHQAFgGAHAAQAFAAAFACIgCAFIgHgBQgFAAgDAEQgEAFAAAIQAAAIAEAFQADAFAFAAQAEAAADgBIACAFQgEACgGAAQgHAAgFgGg");
	this.shape_154.setTransform(110.675,272.725);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAJAYIAAgfQAAgKgHAAIgFABIgFAEIAAAkIgGAAIAAguIAFAAIAAAFQAHgGAGAAQAGAAADAEQACAEAAAIIAAAfg");
	this.shape_155.setTransform(107,272.675);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgCAfIAAg+IAFAAIAAA+g");
	this.shape_156.setTransform(104.125,271.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIADABQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_157.setTransform(100.975,274.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_158.setTransform(99.225,272.675);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_159.setTransform(95.825,272.725);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgIIAAgZIgGAAIAAgGIAGAAIABgOIAFAAIAAAOIAMAAIAAAGIgMAAIAAAYIABAIQABACAEABIAGgCIABAFQgEADgEgBQgFAAgDgDg");
	this.shape_160.setTransform(92.625,272.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_161.setTransform(90.225,272.675);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_162.setTransform(86.775,272.725);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgIIAAgZIgGAAIAAgGIAGAAIABgOIAFAAIAAAOIAMAAIAAAGIgMAAIAAAYIABAIQABACAEABIAGgCIABAFQgEADgEgBQgFAAgDgDg");
	this.shape_163.setTransform(83.725,272.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgQAcIACgGQAGAEAGAAQAFAAADgDQAEgDAAgGQAAgDgDgEQgCgCgFgCIgCgBQgMgFAAgLQAAgJAFgEQAFgEAHgBQAGABAGADIgCAGQgFgDgFAAQgEAAgDACQgDADAAAFQAAAFADACQACADAEACIACABQANAEAAAMQAAAIgFAGQgFAEgIAAQgIABgHgFg");
	this.shape_164.setTransform(80.475,271.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_165.setTransform(75.025,271.725);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_166.setTransform(71.275,272.725);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgDAbQgDgEAAgIIAAgZIgGAAIAAgGIAGAAIABgOIAFAAIAAAOIAMAAIAAAGIgMAAIAAAYIABAIQABACAEABIAGgCIABAFQgEADgEgBQgFAAgDgDg");
	this.shape_167.setTransform(68.075,272.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_168.setTransform(65.975,271.775);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAUAYIAAgfQAAgKgHAAQgEAAgGAFIABAFIAAAfIgGAAIAAgfQAAgKgIAAQgEAAgFAFIAAAkIgGAAIAAguIAFAAIAAAFQAHgGAGAAQAHAAACAHQAHgHAGAAQAGAAADAEQACAEAAAIIAAAfg");
	this.shape_169.setTransform(62.1,272.675);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_170.setTransform(58.225,271.775);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_171.setTransform(56.675,271.675);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAJAYIAAgfQAAgKgHAAIgFABIgFAEIAAAkIgGAAIAAguIAFAAIAAAFQAHgGAGAAQAGAAADAEQACAEAAAIIAAAfg");
	this.shape_172.setTransform(53.9,272.675);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgMAaQgFgFAAgLIAAgpIAHAAIAAApQAAAHACAFQADADAFABQAFgBADgDQADgFAAgHIAAgpIAHAAIAAApQAAALgFAFQgFAGgIAAQgIAAgEgGg");
	this.shape_173.setTransform(49.65,271.95);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgCAfIAAg3IgQAAIAAgHIAlAAIAAAHIgPAAIAAA3g");
	this.shape_174.setTransform(43.8,271.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgSAcQgEgEAAgHQAAgGADgFQACgEAHgDQgEgFgCgEQgBgDAAgEQAAgGADgFQAEgDAGgBQAFABAEADQAEAEAAAFIgCAGIgDAGIgHAGIAKANIAHgNIAGAAIgJARIAMAPIgHAAIgIgJQgFAKgKAAQgHABgEgFgAgOAJQgCADAAAEQAAAGADACQACADAEAAQAHAAAEgJIgLgQQgFAEgCADgAgJgXQgCABAAAFIABAFIAFAIIAGgIQACgCAAgFQAAgDgCgCQgBgCgEAAQgDAAgCADg");
	this.shape_175.setTransform(39.675,271.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgCAfIAAg3IgQAAIAAgHIAlAAIAAAHIgQAAIAAA3g");
	this.shape_176.setTransform(35.15,271.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAPAfIgFgRIgTAAIgFARIgHAAIASg+IAGAAIATA+gAAJAIIgJgeIgHAeIAQAAg");
	this.shape_177.setTransform(30.9,271.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_178.setTransform(25.475,272.725);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_179.setTransform(22.125,272.725);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_180.setTransform(19.225,272.675);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgCAhIAAguIAFAAIAAAugAgCgYIgBgDIABgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABADIgBADIgDABIgCgBg");
	this.shape_181.setTransform(16.925,271.775);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgLAUQgDgEAAgIIAAgfIAGAAIAAAfQAAAKAIAAIAEgBIAFgEIAAgkIAGAAIAAAuIgFAAIgBgFQgFAGgGAAQgGAAgDgEg");
	this.shape_182.setTransform(14.125,272.775);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAKAiIAAgYQgFAFgFAAQgHAAgEgGQgEgHAAgLQAAgHACgFQACgGADgDQAEgDAEAAQAGAAAEAFIABgEIAFAAIAABCgAgGgWQgDAFAAAIQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_183.setTransform(10.125,273.65);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_184.setTransform(6.375,272.725);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AALAfIgNgYIgJAAIAAAYIgGAAIAAg+IAOAAQAIAAAGAGQAEAFAAAJQAAAGgCAFQgDAEgGACIAOAZgAgLABIAIAAQAFAAADgDQADgDAAgGQAAgHgDgDQgDgDgFAAIgIAAg");
	this.shape_185.setTransform(2.6,271.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAAAAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCACAAQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAAAQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_186.setTransform(72.45,260.125);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgTAgIACgJIAFABQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAIADgHIgOgwIAMAAIAGAhIAHghIANAAIgPAxQgCAKgDADQgEAFgGAAQgFAAgEgCg");
	this.shape_187.setTransform(69.575,259.35);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgPAVIACgJQAHADAFAAIADgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgDgCIgDgBQgGgCgCgDQgDgDAAgFQAAgHAFgEQAEgEAHAAQAGAAAHADIgDAJQgEgCgFAAIgDABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADADIAEABQAFACADACQACAEAAAEQAAAIgFAEQgEAEgHAAQgIAAgHgEg");
	this.shape_188.setTransform(65.925,258.325);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgNAUQgDgEAAgHIAAggIAMAAIAAAfQAAAGAEAAQADAAACgDIAAgiIAMAAIAAAuIgKAAIgBgFIgFAFQgCABgDAAQgGAAgDgEg");
	this.shape_189.setTransform(62.1,258.375);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgHAdIgBAEIgJAAIAAhCIAMAAIAAAXQAEgEAEAAQAFAAADADQAEADABAGQACAEAAAHQAAAIgCAGQgCAFgEADQgDADgFAAQgFAAgEgFgAgFgCIAAAYQACACADAAQADAAABgEQACgDAAgIQAAgHgCgCQgBgEgDAAQgDAAgCACg");
	this.shape_190.setTransform(58.075,257.375);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgPAVIACgJQAHADAFAAIADgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIgDgCIgDgBQgGgCgCgDQgDgDAAgFQAAgHAFgEQAEgEAHAAQAGAAAHADIgDAJQgEgCgFAAIgDABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADADIAEABQAFACADACQACAEAAAEQAAAIgFAEQgEAEgHAAQgIAAgHgEg");
	this.shape_191.setTransform(52.575,258.325);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgFAiIAAgvIALAAIAAAvgAgEgVQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_192.setTransform(49.925,257.325);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAHAiIgKgWIgDAFIAAARIgMAAIAAhDIAMAAIAAAkIAMgQIANAAIgOARIAOAeg");
	this.shape_193.setTransform(45.475,257.325);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAKAAIABAFQABgDAEgBQADgCADAAIADAAIgBALIgFAAQgFAAgCADIAAAhg");
	this.shape_194.setTransform(41.925,258.275);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgNASQgFgGAAgMQAAgLAFgGQAFgHAIAAQAJAAAFAHQAFAGAAALQAAALgFAHQgFAHgJAAQgIAAgFgHgAgEgKQgBAEgBAGQABAHABAEQABADADAAQADAAACgDQACgEAAgHQAAgGgCgEQgCgDgDAAQgDAAgBADg");
	this.shape_195.setTransform(38.2,258.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAGAYIgGgeIgFAeIgLAAIgMgvIANAAIAFAgIAGgeIAJAAIAHAeIAFggIAMAAIgMAvg");
	this.shape_196.setTransform(33.2,258.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgFAaQgDgDAAgJIAAgWIgGAAIAAgJIAGAAIACgNIAJAAIAAANIAKAAIAAAJIgKAAIAAAVIABAFQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAFgBIACAJQgFACgGABQgGAAgDgFg");
	this.shape_197.setTransform(28.775,257.75);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgLASQgFgGgBgMQABgGACgGQADgGADgDQAEgDAEAAQAJAAAEAGQAEAGABALIAAAFIgXAAQABAFADADQACADAEAAQAEAAAFgCIADAIIgHADIgIABQgHAAgGgHgAgDgLQgBACgBAGIAMAAIAAgBQAAgFgCgDQgCgCgDAAQgBAAgCADg");
	this.shape_198.setTransform(25.25,258.325);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAGAYIAAgfQAAgGgFAAIgCABIgEACIAAAiIgMAAIAAguIAKAAIABAFIAGgFQACgBAEAAQAGAAADAEQADAEAAAHIAAAgg");
	this.shape_199.setTransform(21.225,258.275);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgLASQgGgGABgMQgBgGADgGQACgGAFgDQADgDAFAAQAHAAAFAGQAFAGAAALIAAAFIgXAAQABAFACADQACADAFAAQAEAAAFgCIADAIIgHADIgHABQgJAAgFgHgAgDgLQgBACgBAGIAMAAIAAgBQAAgFgCgDQgBgCgDAAQgCAAgCADg");
	this.shape_200.setTransform(15.5,258.325);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAGAiIAAggQAAgFgFAAIgCABIgEACIAAAiIgMAAIAAhDIAMAAIAAAZQAFgGAGAAQAGAAADAEQADAEAAAHIAAAhg");
	this.shape_201.setTransform(11.475,257.325);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgFAaQgDgDAAgJIAAgWIgGAAIAAgJIAGAAIACgNIAJAAIAAANIAKAAIAAAJIgKAAIAAAVIABAFQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAFgBIACAJQgFACgGABQgGAAgDgFg");
	this.shape_202.setTransform(7.825,257.75);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgJAiIAAglIgGAAIAAgJIAGAAIAAgCQAAgJAEgFQAFgFAGAAQAGAAAEACIgCAJIgFgBQgDAAgCACQgCADAAAEIAAACIAKAAIAAAJIgKAAIAAAlg");
	this.shape_203.setTransform(3.425,257.275);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgFAiIAAgvIALAAIAAAvgAgEgVQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_204.setTransform(0.825,257.325);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgPAVIACgJQAHADAFAAIADgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgBgDIgDgCIgDgBQgGgCgCgDQgDgDAAgFQAAgHAFgEQAEgEAHAAQAGAAAHADIgDAJQgEgCgFAAIgDABQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADADIAEABQAFACADACQACAEAAAEQAAAIgFAEQgEAEgHAAQgIAAgHgEg");
	this.shape_205.setTransform(130.475,248.525);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgNAcQgEgHAAgMQAAgHACgFQACgFAEgDQADgDAFAAQADAAAEADIAAgWIAMAAIAABCIgJAAIgBgEQgFAFgFAAQgHAAgEgGgAgDAAQgCACAAAHQAAAIACADQABAEADAAQADAAACgCIAAgYQgCgCgDAAQgDAAgBAEg");
	this.shape_206.setTransform(126.625,247.575);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgLASQgGgGAAgMQAAgGADgGQACgGAEgDQAFgDADAAQAJAAAEAGQAFAGgBALIAAAFIgWAAQABAFADADQABADAFAAQAFAAAEgCIADAIIgHADIgHABQgIAAgGgHgAgDgLQgCACAAAGIAMAAIAAgBQAAgFgCgDQgBgCgEAAQgBAAgCADg");
	this.shape_207.setTransform(122.65,248.525);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgLASQgFgGgBgMQABgGACgGQADgGAEgDQAEgDADAAQAJAAAEAGQAEAGABALIAAAFIgXAAQABAFADADQACADAEAAQAEAAAFgCIADAIIgHADIgIABQgHAAgGgHgAgDgLQgBACgBAGIAMAAIAAgBQAAgFgCgDQgCgCgDAAQgBAAgCADg");
	this.shape_208.setTransform(118.75,248.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAJAAIABAEQAFgFAFAAQAHAAAEAGQAEAIAAAKQAAAJgCAEQgCAGgEADQgDADgFAAQgDgBgEgDIAAAWgAgFgUIAAAXQACACADAAQADAAABgEQACgCAAgIQAAgGgCgEQgBgDgDAAQgDAAgCACg");
	this.shape_209.setTransform(114.875,249.45);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgPAVIACgJQAHADAFAAIADgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIgDgCIgDgBQgGgCgCgDQgDgDAAgFQAAgHAFgEQAEgEAHAAQAGAAAHADIgDAJQgEgCgFAAIgDABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADADIAEABQAFACADACQACAEAAAEQAAAIgFAEQgEAEgHAAQgIAAgHgEg");
	this.shape_210.setTransform(110.975,248.525);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgNAVQgDgEAAgGQAAgIAEgDQAEgEAHAAIAHAAIAAgCQAAgIgHAAQgEAAgGADIgEgJIAIgDIAHgBQAIAAAEAEQAFAFAAAHIAAAgIgJAAIgBgFQgCADgEABQgCACgDAAQgFAAgEgEgAgDAFQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABIABAEQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAQACAAAEgDIAAgKIgGAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_211.setTransform(105.7,248.525);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgFAaQgDgEAAgIIAAgVIgGAAIAAgKIAGAAIACgNIAJAAIAAANIAKAAIAAAKIgKAAIAAAUIABAGQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAFgBIACAJQgFACgGABQgGAAgDgFg");
	this.shape_212.setTransform(102.375,247.95);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgNAVQgDgEAAgGQAAgIAEgDQAEgEAHAAIAGAAIAAgCQABgIgHAAQgFAAgFADIgEgJIAIgDIAIgBQAHAAAEAEQAFAFAAAHIAAAgIgJAAIgBgFQgCADgDABQgCACgEAAQgFAAgEgEgAgDAFQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAABIABAEQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAQACAAADgDIAAgKIgEAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_213.setTransform(98.85,248.525);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgNAcQgEgHAAgMQAAgHACgFQACgFAEgDQADgDAFAAQADAAAEADIAAgWIAMAAIAABCIgJAAIgBgEQgFAFgFAAQgHAAgEgGgAgDAAQgCACAAAHQAAAIACADQABAEADAAQADAAACgCIAAgYQgCgCgDAAQgDAAgBAEg");
	this.shape_214.setTransform(94.875,247.575);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AAGAYIgGgeIgFAeIgLAAIgMgvIAMAAIAGAgIAGgeIAKAAIAFAeIAGggIAMAAIgMAvg");
	this.shape_215.setTransform(88.35,248.525);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgNASQgFgGAAgMQAAgLAFgGQAFgHAIAAQAIAAAGAHQAFAGAAALQAAALgFAHQgGAHgIAAQgIAAgFgHgAgEgKQgCAEAAAGQAAAHACAEQABADADAAQADAAACgDQABgEABgHQgBgGgBgEQgCgDgDAAQgDAAgBADg");
	this.shape_216.setTransform(83.4,248.525);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgFAiIAAhDIALAAIAABDg");
	this.shape_217.setTransform(80.35,247.525);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgPAVIACgJQAHADAFAAIADgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIgDgCIgDgBQgGgCgCgDQgDgDAAgFQAAgHAFgEQAEgEAHAAQAGAAAHADIgDAJQgEgCgFAAIgDABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADADIAEABQAFACADACQACAEAAAEQAAAIgFAEQgEAEgHAAQgIAAgHgEg");
	this.shape_218.setTransform(77.675,248.525);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgTAgIACgJIAFABQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAIADgHIgOgwIAMAAIAGAhIAHghIANAAIgPAxQgCAJgDAFQgEAEgGAAQgFAAgEgCg");
	this.shape_219.setTransform(72.425,249.55);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgFAiIAAhDIALAAIAABDg");
	this.shape_220.setTransform(69.5,247.525);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgFAiIAAgvIALAAIAAAvgAgEgVQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_221.setTransform(67.575,247.525);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAKAAIABAFQABgDAEgBQADgCADAAIADAAIgBALIgFAAQgFAAgCADIAAAhg");
	this.shape_222.setTransform(65.325,248.475);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgNAVQgDgEAAgGQAAgIAEgDQAEgEAHAAIAGAAIAAgCQAAgIgGAAQgFAAgFADIgDgJIAIgDIAHgBQAHAAAFAEQAEAFAAAHIAAAgIgJAAIgBgFQgCADgDABQgDACgDAAQgFAAgEgEgAgDAFQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAABIABAEQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQADAAACgDIAAgKIgEAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_223.setTransform(61.65,248.525);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgMAYIAAguIAKAAIABAFQABgDAEgBQADgCADAAIADAAIgBALIgFAAQgFAAgCADIAAAhg");
	this.shape_224.setTransform(58.575,248.475);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgNASQgFgGAAgMQAAgLAFgGQAFgHAIAAQAJAAAFAHQAFAGAAALQAAALgFAHQgFAHgJAAQgIAAgFgHgAgEgKQgBAEgBAGQABAHABAEQABADADAAQADAAACgDQACgEAAgHQAAgGgCgEQgCgDgDAAQgDAAgBADg");
	this.shape_225.setTransform(54.85,248.525);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgRAiIAAhCIAJAAIABAEQAFgFAFAAQAHAAAEAGQAEAIAAAKQAAAJgCAEQgCAGgEADQgDADgFAAQgDgBgEgDIAAAWgAgFgUIAAAXQACACADAAQADAAABgEQACgCAAgIQAAgGgCgEQgBgDgDAAQgDAAgCACg");
	this.shape_226.setTransform(50.825,249.45);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AARAYIAAgfQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgDABIgDACIAAABIAAABIAAAgIgLAAIAAgfIgBgEQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgEABIgDACIAAAiIgMAAIAAguIAKAAIABAFQADgDADgCQADgBADAAQAEAAACABQACACABAEQADgEADgCIAHgBQAGAAADAEQADAEAAAHIAAAgg");
	this.shape_227.setTransform(45.4,248.475);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgLASQgGgGABgMQAAgGACgGQADgGAEgDQADgDAFAAQAHAAAFAGQAFAGAAALIAAAFIgXAAQABAFACADQADADAEAAQAEAAAFgCIADAIIgHADIgHABQgJAAgFgHgAgDgLQgCACAAAGIAMAAIAAgBQAAgFgCgDQgBgCgDAAQgCAAgCADg");
	this.shape_228.setTransform(40.15,248.525);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgFAaQgDgEAAgIIAAgVIgGAAIAAgKIAGAAIACgNIAJAAIAAANIAKAAIAAAKIgKAAIAAAUIABAGQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAFgBIACAJQgFACgGABQgGAAgDgFg");
	this.shape_229.setTransform(36.725,247.95);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgTAgIACgJIAFABQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAIADgHIgOgwIAMAAIAGAhIAHghIANAAIgPAxQgCAJgDAFQgEAEgGAAQgFAAgEgCg");
	this.shape_230.setTransform(31.625,249.55);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgMAVQgEgEAAgGQAAgIAEgDQAEgEAHAAIAHAAIAAgCQgBgIgGAAQgFAAgFADIgDgJIAHgDIAHgBQAIAAAFAEQAEAFAAAHIAAAgIgJAAIgBgFQgCADgEABQgCACgDAAQgFAAgDgEgAgDAFQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAABIABAEQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAQACAAAEgDIAAgKIgGAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_231.setTransform(27.7,248.525);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AARAYIAAgfQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgEABIgDACIAAABIAAABIAAAgIgLAAIAAgfIgBgEQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgEABIgDACIAAAiIgMAAIAAguIAKAAIABAFQADgDADgCQADgBAEAAQADAAABABQADACACAEQACgEADgCIAHgBQAGAAADAEQADAEAAAHIAAAgg");
	this.shape_232.setTransform(22.65,248.475);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgFAgIAAgzIgPAAIAAgLIApAAIAAALIgOAAIAAAzg");
	this.shape_233.setTransform(15.725,247.75);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgUAcQgEgEAAgIQAAgLALgGIgFgIIgBgIQAAgGAEgFQAEgDAHAAQAGAAAEADQAEAEAAAGQAAAFgCAEQgDAEgFAEIAHAJIAFgJIALAAIgKARIAMAQIgNAAIgFgHQgGAHgIABQgIgBgFgEgAgMAJIgBAGQAAADACADQACACADAAQAFAAACgGIgJgMIgEAEgAgHgVIgBAEQAAAFADAFIAFgFIAAgFIAAgEQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_234.setTransform(11.425,247.75);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgFAgIAAgzIgPAAIAAgLIApAAIAAALIgOAAIAAAzg");
	this.shape_235.setTransform(6.725,247.75);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AALAgIgDgNIgQAAIgDANIgMAAIARg+IAMAAIASA+gAAGAIIgGgYIgFAYIALAAg");
	this.shape_236.setTransform(2.275,247.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,239.6,146.3,79.1);


(lib.F3_copy4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// TXT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBKIAAiTIA4AAQAXABARAIQARAKAJAQQAJARAAAVQAAAXgJARQgKAQgRAJQgRAJgWAAgAgYAnIAQAAQAPAAAJgKQAIgKAAgTQAAgRgIgLQgJgKgPAAIgQAAg");
	this.shape.setTransform(134.625,52.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBKIAAiTIBiAAIAAAiIg7AAIAAAYIAuAAIAAAfIguAAIAAAYIA9AAIAAAig");
	this.shape_1.setTransform(121.65,52.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBKIAAhvIgoAAIAAgkIB5AAIAAAkIgoAAIAABvg");
	this.shape_2.setTransform(109.25,52.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBKIAAiTIApAAIAACTg");
	this.shape_3.setTransform(99.9,52.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnBKIAAhPIgbA1IgYAAIgagzIAABNIgmAAIAAiTIAmAAIAnBNIAlhNIAnAAIAACTg");
	this.shape_4.setTransform(88.175,52.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBKIAAiTIAnAAIAACTg");
	this.shape_5.setTransform(76.45,52.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBKIAAiTIApAAIAABvIA6AAIAAAkg");
	this.shape_6.setTransform(68.325,52.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBKIgxhSIAABSIgmAAIAAiTIAkAAIAxBSIAAhSIAnAAIAACTg");
	this.shape_7.setTransform(55.1,52.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA7QgOgQAAggIAAhVIAoAAIAABUQAAAPAFAHQAFAGAKAAQALAAAFgGQAFgHAAgPIAAhUIAoAAIAABVQAAAggPAQQgQAQgeAAQgeAAgQgQg");
	this.shape_8.setTransform(40.85,52.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaBKIgxhSIAABSIgnAAIAAiTIAlAAIAxBSIAAhSIAmAAIAACTg");
	this.shape_9.setTransform(22.55,52.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBCQgRgKgJgRQgJgRAAgWQAAgWAKgRQAJgSARgJQAQgJAUAAQAWAAAQAKQARAKAJARQAJASAAAUQAAAWgKASQgKARgQAJQgRAKgUAAQgVAAgQgKgAgVgcQgJAMAAAQQAAARAJAMQAIALANAAQAOAAAIgLQAJgMAAgRQAAgQgJgMQgIgKgOgBQgNABgIAKg");
	this.shape_10.setTransform(7.575,52.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,36.3,146.1,31.5);


(lib.F3_copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AgTAjIAAhDIAMAAIABAHQAJgJAMAAIAFABIgCANIgGgBQgJAAgIAHIAAAxg");
	this.shape.setTransform(117.775,10.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("AgWAcQgGgHAAgNIAAgqIAOAAIAAApQAAAHADAEQAEAEAGAAQAIAAAIgHIAAgxIAOAAIAABDIgMAAIgBgHIgLAHQgFACgGAAQgLAAgFgHg");
	this.shape_1.setTransform(111.325,10.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("AgQAfQgIgFgFgIQgEgIAAgKQAAgJAEgIQAFgJAIgEQAHgEAJgBQAKABAIAEQAHAEAFAJQAEAIAAAJQAAALgEAHQgFAJgIAEQgHAEgKAAQgJAAgHgEgAgNgQQgGAHAAAJQAAAKAGAHQAFAGAIAAQAJAAAFgGQAGgHAAgKQAAgJgGgHQgFgGgJAAQgIAAgFAGg");
	this.shape_2.setTransform(103.95,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("AgIAmQgFgHAAgNIAAgfIgMAAIAAgLIAMAAIADgTIAKAAIAAATIAWAAIAAALIgWAAIAAAdQABAIACAEQADADAFAAQAGAAAFgCIAEAKIgIAEIgJABQgLAAgGgGg");
	this.shape_3.setTransform(94.9,9.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("AgNAfQgIgFgEgIQgFgIAAgKQAAgJAFgIQAEgJAHgEQAIgEAHgBQAJAAAHAFQAHAEADAHQAEAIAAAJIAAAHIgvAAQACAJAFAEQAGAFAIABIAKgBIAKgFIAEALQgGADgGACQgGABgHAAQgKAAgHgEgAgJgSQgFAFgBAIIAgAAIAAAAQAAgIgEgFQgEgFgHAAQgGAAgFAFg");
	this.shape_4.setTransform(88.975,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFBFB").s().p("AgZAsIAEgMIAKAEIAKABQAKAAAEgFQAEgEAAgKIAAgFQgEAEgFACQgFABgEAAQgKAAgGgFQgGgEgEgIQgEgGABgLQgBgKAFgIQAEgIAGgEQAIgFAIAAQAKABAJAHIACgGIALAAIAABAQgBAPgHAJQgJAIgPAAQgOAAgLgFgAgLgeQgFAGAAAKQAAAKAFAGQAFAFAHAAQAEAAAEgBIAIgEIAAghQgHgFgIAAQgHAAgGAGg");
	this.shape_5.setTransform(81.6,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBFB").s().p("AgZAdIADgLQALAFAKABQANAAAAgJQAAgEgDgCQgCgCgHgBIgDgBQgLgDgFgDQgEgFAAgIQAAgJAHgGQAHgFALgBQALABALAFIgDALQgKgFgJAAQgFABgDACQgDACAAADQAAAEACABQACACAGABIAEABQALAEAFADQAFAGAAAIQAAAJgHAFQgHAHgMgBQgNAAgMgGg");
	this.shape_6.setTransform(72.525,10.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBFB").s().p("AgNAfQgIgFgEgIQgFgIAAgKQAAgJAFgIQAEgJAHgEQAIgEAHgBQAJAAAHAFQAHAEADAHQAEAIAAAJIAAAHIgvAAQACAJAFAEQAGAFAIABIAKgBIAKgFIAEALQgGADgGACQgGABgHAAQgKAAgHgEgAgJgSQgFAFgBAIIAgAAIAAAAQAAgIgEgFQgEgFgHAAQgGAAgFAFg");
	this.shape_7.setTransform(66.075,10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFBFB").s().p("AgGAwIAAhDIANAAIAABDgAgFghQgCgCAAgEQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_8.setTransform(61.2,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFBFB").s().p("AgGAxIAAhhIANAAIAABhg");
	this.shape_9.setTransform(58.3,8.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFBFB").s().p("AgGAwIAAhDIANAAIAABDgAgFghQgCgCgBgEQABgEACgCQACgCADAAQAEAAACACQACACABAEQgBAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_10.setTransform(55.4,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFBFB").s().p("AAkAjIAAgpQAAgPgNAAQgIAAgJAHIABAHIAAAqIgNAAIAAgpQAAgPgNAAQgIAAgIAHIAAAxIgOAAIAAhDIAMAAIABAHQAKgJAMAAQAGAAAFADQAEADACAFQAHgGAGgCQAGgDAGAAQALAAAFAHQAGAHAAANIAAAqg");
	this.shape_11.setTransform(48.275,10.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFBFB").s().p("AgWAeQgFgGAAgJQAAgKAGgFQAGgFALAAIASAAIAAgCQAAgHgEgEQgDgEgHAAQgKAAgLAFIgEgLQAHgDAGgCQAHgBAGgBQANAAAHAIQAHAGAAANIAAAqIgLAAIgCgHQgEADgGADQgFACgGAAQgKAAgGgFgAgNAPQAAAEADACQADADAFAAIAIgCQAEgCAEgDIAAgMIgPAAQgMAAAAAKg");
	this.shape_12.setTransform(38.975,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFBFB").s().p("AgMAxIAAg3IgNAAIAAgLIANAAIAAgFQAAgMAGgHQAGgIALAAQAIAAAHAEIgDALQgFgCgFAAQgGAAgDAEQgDADAAAHIAAAFIAUAAIAAALIgUAAIAAA3g");
	this.shape_13.setTransform(33.475,8.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFBFB").s().p("AgTAjIAAhDIAMAAIABAHQAJgJAMAAIAFABIgCANIgGgBQgJAAgIAHIAAAxg");
	this.shape_14.setTransform(26.275,10.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFBFB").s().p("AgGAwIAAhDIANAAIAABDgAgFghQgCgCAAgEQAAgEACgCQACgCADAAQADAAADACQACACAAAEQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_15.setTransform(22.05,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFBFB").s().p("AgNAfQgIgFgEgIQgFgIAAgKQAAgJAFgIQAEgJAHgEQAIgEAHgBQAJAAAHAFQAHAEADAHQAEAIAAAJIAAAHIgvAAQACAJAFAEQAGAFAIABIAKgBIAKgFIAEALQgGADgGACQgGABgHAAQgKAAgHgEgAgJgSQgFAFgBAIIAgAAIAAAAQAAgIgEgFQgEgFgHAAQgGAAgFAFg");
	this.shape_16.setTransform(17.075,10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFBFB").s().p("AAPAxIAAgqQAAgHgDgDQgDgEgHAAQgIAAgIAHIAAAxIgOAAIAAhhIAOAAIAAAlQAFgFAGgCQAEgCAGAAQALAAAGAHQAFAHAAAMIAAArg");
	this.shape_17.setTransform(10.025,8.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFBFB").s().p("AgIAmQgFgHAAgNIAAgfIgMAAIAAgLIANAAIACgTIAKAAIAAATIAXAAIAAALIgXAAIAAAdQABAIACAEQADADAFAAQAGAAAGgCIADAKIgIAEIgKABQgKAAgGgGg");
	this.shape_18.setTransform(3.65,9.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFBFB").s().p("AgRAtQgGgEgEgJQgDgIgBgKQAAgKAEgIQAFgIAHgEQAGgEAJgBQAKAAAHAHIAAgjIAPAAIAABhIgLAAIgCgHQgFAFgFACQgFABgGAAQgIAAgHgEgAgLgCQgFAFAAALQAAAKAFAGQAFAHAHAAQAEAAAFgBIAHgFIAAgiQgHgFgIAAQgIAAgFAGg");
	this.shape_19.setTransform(134.1,-5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFBFB").s().p("AAPAjIAAgpQAAgHgDgEQgDgEgHAAQgIAAgIAHIAAAxIgOAAIAAhDIAMAAIABAHQAFgFAGgCQAEgCAHAAQALAAAGAHQAFAHAAANIAAAqg");
	this.shape_20.setTransform(126.975,-3.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFBFB").s().p("AgWAeQgFgFAAgKQAAgKAGgFQAGgFALAAIASAAIAAgCQAAgHgEgFQgDgDgHAAQgKAAgLAFIgEgLQAHgEAGgBQAHgBAGgBQANAAAHAHQAHAIAAAMIAAAqIgLAAIgCgIQgEAEgGADQgFADgGgBQgKAAgGgFgAgNAPQAAAEADACQADACAFABIAIgCQAEgCAEgDIAAgMIgPAAQgMAAAAAKg");
	this.shape_21.setTransform(119.775,-3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFBFB").s().p("AgZAdIADgLQALAGAKAAQANAAAAgJQAAgEgDgCQgCgCgHgBIgDgBQgLgDgFgDQgEgFAAgIQAAgJAHgGQAHgFALgBQALABALAFIgDALQgKgFgJABQgFAAgDACQgDABAAAEQAAAEACABQACACAGABIAEABQALAEAFADQAFAGAAAIQAAAJgHAFQgHAHgMgBQgNAAgMgGg");
	this.shape_22.setTransform(110.925,-3.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFBFB").s().p("AgTAjIAAhDIAMAAIABAHQAJgJAMAAIAFABIgCANIgGgBQgJAAgIAHIAAAxg");
	this.shape_23.setTransform(105.925,-3.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFBFB").s().p("AgNAfQgIgFgEgIQgFgIAAgKQAAgJAFgJQAEgHAHgFQAIgEAHgBQAJAAAHAFQAHAEADAHQAEAHAAAKIAAAHIgvAAQACAJAFAEQAGAGAIAAIAKgBIAKgFIAEALQgGADgGACQgGACgHgBQgKAAgHgEgAgJgSQgFAFgBAJIAgAAIAAgBQAAgIgEgFQgEgFgHAAQgGAAgFAFg");
	this.shape_24.setTransform(99.625,-3.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFBFB").s().p("AAPAxIAAgqQAAgHgDgDQgDgEgHAAQgIAAgIAHIAAAxIgOAAIAAhhIAOAAIAAAlQAFgFAGgCQAEgCAGAAQALAAAGAHQAFAHAAAMIAAArg");
	this.shape_25.setTransform(92.575,-5.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFBFB").s().p("AgLAfQgIgEgEgJQgEgIAAgKQAAgJAFgJQAEgIAIgEQAIgEAIgBQAGABAFABQAFABAFADIgEALIgIgDIgHgBQgJAAgGAGQgGAHAAAJQAAAKAGAGQAGAHAJAAIAIgBIAIgDIAEAKQgJAHgNgBQgJAAgIgEg");
	this.shape_26.setTransform(85.825,-3.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFBFB").s().p("AgWAeQgFgFAAgKQAAgKAGgFQAGgFALAAIASAAIAAgCQAAgHgEgFQgDgDgHAAQgKAAgLAFIgEgLQAHgEAGgBQAHgBAGgBQANAAAHAHQAHAIAAAMIAAAqIgLAAIgCgIQgEAEgGADQgFADgGgBQgKAAgGgFgAgNAPQAAAEADACQADACAFABIAIgCQAEgCAEgDIAAgMIgPAAQgMAAAAAKg");
	this.shape_27.setTransform(79.125,-3.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFBFB").s().p("AgNAfQgIgFgEgIQgFgIAAgKQAAgJAFgJQAEgHAHgFQAIgEAHgBQAJAAAHAFQAHAEADAHQAEAHAAAKIAAAHIgvAAQACAJAFAEQAGAGAIAAIAKgBIAKgFIAEALQgGADgGACQgGACgHgBQgKAAgHgEgAgJgSQgFAFgBAJIAgAAIAAgBQAAgIgEgFQgEgFgHAAQgGAAgFAFg");
	this.shape_28.setTransform(72.325,-3.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFBFB").s().p("AgIAmQgFgHAAgNIAAgfIgMAAIAAgLIANAAIACgTIAKAAIAAATIAXAAIAAALIgXAAIAAAdQABAIACAEQADADAFAAQAGAAAGgCIADAKIgIAEIgKABQgKAAgGgGg");
	this.shape_29.setTransform(66.2,-4.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFBFB").s().p("AAOAiIgOgvIgNAvIgOAAIgWhDIAPAAIAOAyIAOgvIANAAIAOAvIAOgyIAPAAIgWBDg");
	this.shape_30.setTransform(56.175,-3.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFBFB").s().p("AgQAfQgIgFgFgIQgEgIAAgKQAAgJAEgJQAFgIAIgEQAHgEAJgBQAKABAIAEQAIAFAEAIQAEAIAAAJQAAAKgEAIQgFAJgHAEQgIAEgKAAQgJAAgHgEgAgNgQQgGAHAAAJQAAAKAGAGQAFAHAIAAQAIAAAGgHQAFgGABgKQgBgJgFgHQgGgGgIAAQgIAAgFAGg");
	this.shape_31.setTransform(47.35,-3.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFBFB").s().p("AAPAxIAAgqQAAgHgDgDQgDgEgHAAQgIAAgIAHIAAAxIgOAAIAAhhIAOAAIAAAlQAFgFAGgCQAEgCAGAAQALAAAGAHQAFAHAAAMIAAArg");
	this.shape_32.setTransform(39.975,-5.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFBFB").s().p("AAPAjIAAgpQAAgHgDgEQgDgEgHAAQgIAAgIAHIAAAxIgOAAIAAhDIAMAAIABAHQAFgFAGgCQAEgCAHAAQALAAAGAHQAFAHAAANIAAAqg");
	this.shape_33.setTransform(30.075,-3.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFBFB").s().p("AgTAjIAAhDIAMAAIABAHQAJgJAMAAIAFABIgCANIgGgBQgJAAgIAHIAAAxg");
	this.shape_34.setTransform(24.325,-3.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFBFB").s().p("AgWAeQgFgFAAgKQAAgKAGgFQAGgFALAAIASAAIAAgCQAAgHgEgFQgDgDgHAAQgKAAgLAFIgEgLQAHgEAGgBQAHgBAGgBQANAAAHAHQAHAIAAAMIAAAqIgLAAIgCgIQgEAEgGADQgFADgGgBQgKAAgGgFgAgNAPQAAAEADACQADACAFABIAIgCQAEgCAEgDIAAgMIgPAAQgMAAAAAKg");
	this.shape_35.setTransform(18.025,-3.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFBFB").s().p("AgNAfQgIgFgEgIQgFgIAAgKQAAgJAFgJQAEgHAHgFQAIgEAHgBQAJAAAHAFQAHAEADAHQAEAHAAAKIAAAHIgvAAQACAJAFAEQAGAGAIAAIAKgBIAKgFIAEALQgGADgGACQgGACgHgBQgKAAgHgEgAgJgSQgFAFgBAJIAgAAIAAgBQAAgIgEgFQgEgFgHAAQgGAAgFAFg");
	this.shape_36.setTransform(11.225,-3.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFBFB").s().p("AgbAtIAAhaIAPAAIAABNIAoAAIAAANg");
	this.shape_37.setTransform(4.85,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-16,148.70000000000002,35.3);


(lib.F3_copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJA1QgEgDAAgGQAAgHAEgDQAEgEAFAAQAGAAAEAEQAEADAAAHQAAAFgEAEQgEAEgGAAQgFAAgEgEgAgJASIgChKIAYAAIgDBKg");
	this.shape.setTransform(-32.325,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAqIgQg1IgPA1IgVAAIgchTIAaAAIAOA3IAOg0IAVAAIAPA1IANg4IAaAAIgbBTg");
	this.shape_1.setTransform(-41.275,2.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAmQgKgGgFgKQgFgKAAgMQAAgMAFgKQAGgKAJgGQAJgFAKAAQAMAAAIAFQAJAFAFAKQAEAJAAALIAAAKIg2AAQADASATAAQANAAALgGIAGAQIgQAHQgIACgJAAQgMAAgKgGgAgJgUQgFAFgBAIIAgAAIAAgBQAAgHgEgFQgEgFgHAAQgGAAgFAFg");
	this.shape_2.setTransform(-52.425,2.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA4IgshGIAABGIgYAAIAAhvIAWAAIAsBGIAAhGIAZAAIAABvg");
	this.shape_3.setTransform(-62.45,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F3_copy1, new cjs.Rectangle(-70.2,-12,42.300000000000004,25), null);


(lib.F2_image_gph = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.teacher2_160x600();
	this.instance.setTransform(-157.2,-131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.2,-131.1,398.79999999999995,660);


(lib.F2_disclaimer_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIACgBIADABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(28.575,295.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAfIgGgCIACgFIAFABIAFABQAFAAADgEQADgFABgMIgJABQgIABgEgFQgFgEAAgJQAAgKAFgEQAEgGAHAAQARAAAAAcIAAACQAAARgFAHQgFAJgJAAIgGgBgAgHgWQgCAEAAAHQAAAHADADQADACAFAAIAIAAIAAgEQAAgWgKAAQgEAAgDADg");
	this.shape_1.setTransform(25.875,292.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEAfIAAg1IgKAJIgEgFIAOgMIAHAAIAAA9g");
	this.shape_2.setTransform(22.4,292.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAYQgEgIAAgPIAAgBQAAgPAEgIQAEgIAIAAQAJAAAEAIQAEAIAAAPIAAABQAAAPgEAIQgEAIgJAAQgIAAgEgIgAgKAAIAAABQAAAZAKAAQAKAAAAgZIAAgBQAAgagKABQgKgBAAAag");
	this.shape_3.setTransform(19.35,292.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAfIAAgEIABgLIACgHQADgEAFgFIAHgIQACgEAAgDQAAgFgCgCQgCgDgEAAQgFAAgFAFIgCgFIAGgEIAHgCQAGABAFAEQADAEABAGIgBAHIgFAGIgIAIQgEAEgCAEQgBAFAAAIIAVAAIAAAFg");
	this.shape_4.setTransform(15.65,292.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIACgBIADABQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_5.setTransform(11.675,295.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgZIgGAAIAAgGIAGAAIABgNIAFAAIAAANIAMAAIAAAGIgMAAIAAAYIABAJQABACAEAAIAGgCIABAFQgEADgEAAQgFgBgDgEg");
	this.shape_6.setTransform(9.575,293.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAhIAAhAIAFAAIABADQAEgEAGAAQAHgBAEAHQAEAHAAAKQAAAIgCAFQgCAFgEADQgDADgFAAQgFAAgEgEIAAAWgAgJgWIAAAbQAEAEAFAAQAEAAADgFQADgEAAgJQAAgIgDgFQgDgFgEAAQgFAAgEAFg");
	this.shape_7.setTransform(6.325,294.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_8.setTransform(2.325,293.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAcIACgGQAGAEAGAAQAFAAADgDQAEgDAAgFQAAgFgDgCQgCgDgFgDIgCgBQgMgEAAgMQAAgHAFgFQAFgFAHAAQAGAAAGAEIgCAGQgFgDgFAAQgEAAgDACQgDAEAAAEQAAAEADADQACADAEADIACAAQANAFAAAMQAAAIgFAEQgFAFgIABQgIAAgHgFg");
	this.shape_9.setTransform(-1.475,292.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_10.setTransform(117.375,283.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_11.setTransform(114.425,283.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLASQgFgHAAgLQAAgLAFgGQAEgGAHAAQAIAAAFAGQAEAHAAAKQAAALgEAHQgFAGgIAAQgHAAgEgGgAgHgNQgDAFAAAIQAAAIADAFQADAFAEAAQAFAAADgFQACgFAAgIQAAgIgCgFQgDgFgFAAQgEAAgDAFg");
	this.shape_12.setTransform(110.85,283.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIASQgFgHAAgLQAAgKAFgHQAFgGAHAAQAFAAAFACIgCAFIgHgBQgFAAgDAEQgEAFAAAIQAAAIAEAFQADAFAFAAQAEAAADgBIACAFQgEACgGAAQgHAAgFgGg");
	this.shape_13.setTransform(107.375,283.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAcIACgFQAGADAGAAQAFAAADgDQAEgDAAgFQAAgFgDgCQgCgDgFgDIgCgBQgMgEAAgMQAAgHAFgFQAFgFAHAAQAGAAAGAEIgCAGQgFgDgFAAQgEAAgDACQgDADAAAFQAAAEADADQACADAEADIACAAQANAFAAAMQAAAHgFAFQgFAFgIABQgIAAgHgFg");
	this.shape_14.setTransform(103.725,283.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_15.setTransform(100.025,283.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJAYIAAgfQAAgKgIAAIgEABIgFAEIAAAkIgHAAIAAguIAGAAIABAFQAGgGAFAAQAHAAACAEQADAEABAIIAAAfg");
	this.shape_16.setTransform(96.15,283.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAYQgGgJAAgPQAAgOAGgJQAFgIAJgBQAKABAFAIQAGAJAAAOQAAAPgGAJQgFAJgKAAQgJAAgFgJgAgHgWQgDADgBAHQgCAFAAAHQAAAIACAGQACAGADADQADADADAAQAEAAADgDQADgDACgGQACgGAAgIQAAgHgCgGQgCgGgDgDQgDgDgEAAQgDAAgEADg");
	this.shape_17.setTransform(91.725,283.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAcIACgFQAGADAGAAQAFAAADgDQAEgDAAgFQAAgFgDgCQgCgDgFgDIgCgBQgMgEAAgMQAAgHAFgFQAFgFAHAAQAGAAAGAEIgCAGQgFgDgFAAQgEAAgDACQgDADAAAFQAAAEADADQACADAEADIACAAQANAFAAAMQAAAHgFAFQgFAFgIABQgIAAgHgFg");
	this.shape_18.setTransform(85.725,283.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKAgIgKguIgJAuIgHAAIgLg+IAGAAIAJAyIAKgtIAFAAIAKAtIAJgyIAGAAIgLA+g");
	this.shape_19.setTransform(80.875,283.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAYQgGgIAAgQQAAgJADgIQADgGAFgEQAGgEAGgBQAGABAGADIgCAFQgFgCgEAAQgHAAgFAHQgFAHAAALQAAAMAEAHQAFAHAHAAIAHgBIAAgVIgLAAIAAgFIASAAIAAAeQgHAEgIAAQgKAAgGgJg");
	this.shape_20.setTransform(75.525,283.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAJAYIAAgfQAAgKgHAAIgFABIgFAEIAAAkIgGAAIAAguIAFAAIAAAFQAHgGAGAAQAGAAADAEQACAEAAAIIAAAfg");
	this.shape_21.setTransform(69.65,283.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMASQgEgHAAgLQAAgLAEgGQAFgGAHAAQAIAAAFAGQAEAHAAAKQAAALgEAHQgFAGgIAAQgHAAgFgGgAgGgNQgEAFAAAIQAAAIAEAFQACAFAEAAQAFAAADgFQADgFAAgIQAAgIgDgFQgDgFgFAAQgEAAgCAFg");
	this.shape_22.setTransform(65.6,283.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAcQgEgHAAgLQAAgIACgEQACgGADgDQAEgCAEAAQAFAAAFAEIAAgYIAGAAIAABCIgFAAIgBgEIgFAEIgFABQgHAAgEgGgAgGgDQgDAEAAAJQAAAJADAEQADAFAEAAQAFAAAEgEIAAgcQgEgEgFAAQgEAAgDAFg");
	this.shape_23.setTransform(59.875,282.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_24.setTransform(56.075,283.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_25.setTransform(52.575,283.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKAUQgEgDAAgHQAAgGAEgEQAEgDAGAAIAJAAIAAgEQAAgLgJAAQgEAAgGAEIgCgFIAHgDIAFgBQAHAAAEAEQAEAEAAAHIAAAfIgFAAIgBgEQgFAFgGAAQgFAAgDgEgAgFAEQgCACAAAEQAAAEABACQACACAEAAQAEAAAFgEIAAgMIgIAAQgEAAgCACg");
	this.shape_26.setTransform(49.125,283.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAeIAAADIgFAAIAAhCIAGAAIAAAYQAFgEAFAAQAHAAAEAGQAEAHAAAKQAAAHgCAGQgCAFgEADQgDADgFAAQgFAAgFgEgAgJgDIAAAbQAEAEAFAAQAEAAADgFQADgFAAgIQAAgJgDgEQgDgFgEAAQgFAAgEAFg");
	this.shape_27.setTransform(45.525,282.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAJAiIgMgZIgGAHIAAASIgGAAIAAhDIAGAAIAAApIARgUIAHAAIgPARIAQAdg");
	this.shape_28.setTransform(40.125,282.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgKAYIAAguIAGAAIAAAGQAFgHAHAAIADAAIgBAHIgEgBQgGAAgDAGIAAAjg");
	this.shape_29.setTransform(36.925,283.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLASQgFgHAAgLQAAgLAFgGQAEgGAHAAQAIAAAEAGQAFAHAAAKQAAALgFAHQgEAGgIAAQgHAAgEgGgAgHgNQgCAFAAAIQAAAIACAFQADAFAEAAQAFAAADgFQADgFgBgIQABgIgDgFQgDgFgFAAQgEAAgDAFg");
	this.shape_30.setTransform(33.35,283.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAIAXIgIgjIgHAjIgGAAIgMgtIAHAAIAIAlIAIgkIAFAAIAIAkIAIglIAHAAIgMAtg");
	this.shape_31.setTransform(28.675,283.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgNIAFAAIAAANIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEADgEAAQgFAAgDgFg");
	this.shape_32.setTransform(24.625,283.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_33.setTransform(21.375,283.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAJAYIAAgfQAAgKgIAAIgEABIgFAEIAAAkIgHAAIAAguIAGAAIABAFQAGgGAFAAQAHAAACAEQAEAEAAAIIAAAfg");
	this.shape_34.setTransform(17.5,283.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDAaQgDgDAAgIIAAgaIgGAAIAAgFIAGAAIABgNIAFAAIAAANIAMAAIAAAFIgMAAIAAAZIABAJQABABAEAAIAGgBIABAFQgEADgEAAQgFAAgDgFg");
	this.shape_35.setTransform(12.425,283.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAVIACgGIAFADIAGAAQADAAACgCQADgCAAgDQAAgGgHgCIgBgBQgGgCgDgCQgCgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAGACIgCAFQgFgCgEAAQgCAAgDACQgCACAAADQAAAGAGACIACABQAGACADADQACADAAAEQAAAHgEADQgEAEgGAAQgHAAgGgDg");
	this.shape_36.setTransform(9.425,283.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKASQgFgHAAgLQAAgHACgFQACgGAEgDQAEgCAEAAQAHAAAEAFQAEAGAAALIgBADIgXAAQAAAIAEAEQADAEAFAAQAEAAAFgCIABAFIgFACIgGABQgIAAgFgGgAgFgNQgDAEAAAHIARAAIAAgBQAAgHgCgEQgCgEgEAAQgEAAgCAFg");
	this.shape_37.setTransform(6.025,283.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRAgIAAg+IAPAAQAIgBAFAFQAFAEAAAIQAAAGgDADQgCAEgFABQAGABADAEQADAEAAAGQAAAHgFAFQgFAFgIAAgAgKAaIAKAAQAFAAADgDQADgDAAgGQAAgFgDgDQgDgDgFAAIgKAAgAgKgCIAIAAQALAAAAgMQAAgEgDgDQgDgEgFAAIgIAAg");
	this.shape_38.setTransform(2.125,283.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAEIgFAKIgFgDIAIgJIgLgCIABgFIALAEIgBgMIAEAAIAAAMIALgEIABAFIgLACIAHAJIgEADg");
	this.shape_39.setTransform(-1.725,281.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,274.9,137.70000000000002,25.600000000000023);


(lib.F2_copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AAAAJIgKASIgKgIIANgQIgUgDIAFgNIASAIIgCgUIANAAIgCAUIASgIIAFANIgUADIANAQIgKAIg");
	this.shape.setTransform(95.175,-90.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("AARA4IgbgmIgJAJIAAAdIgQAAIAAhvIAQAAIAABAIAigeIAUAAIgiAdIAjAwg");
	this.shape_1.setTransform(88.425,-87.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("AgWAoIAAhNIAOAAIABAJQAKgLAOAAIAGABIgCAPIgHgBQgKAAgKAIIAAA4g");
	this.shape_2.setTransform(81.325,-86.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("AgUAkQgIgGgFgJQgFgJAAgMQAAgLAFgKQAFgIAJgFQAJgGAKAAQALAAAJAGQAJAFAGAJQAEAKAAAKQAAAMgFAJQgFAKgJAFQgJAFgLAAQgLAAgJgFgAgPgSQgGAIgBAKQABAMAGAIQAGAHAJAAQAKAAAHgHQAFgIAAgMQAAgKgFgIQgHgHgKAAQgJAAgGAHg");
	this.shape_3.setTransform(73.55,-86.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("AAQAnIgQg2IgPA2IgQAAIgZhNIARAAIAQA6IAQg3IAPAAIAQA3IAQg6IARAAIgZBNg");
	this.shape_4.setTransform(63.225,-86.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFBFB").s().p("AgJAsQgGgIAAgPIAAgkIgNAAIAAgNIANAAIAEgWIALAAIAAAWIAaAAIAAANIgaAAIAAAiQAAAJAEAEQADAEAGAAQAHAAAGgDIADANQgDACgGACIgKABQgNAAgGgHg");
	this.shape_5.setTransform(54.15,-87.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBFB").s().p("AgQAkQgJgFgFgKQgEgJgBgLQABgMAEgJQAFgKAJgEQAJgGAJAAQAKAAAIAFQAIAFAEAIQADAJAAAKIAAAJIg1AAQABAKAHAFQAGAGAKAAIALgBIAMgFIAEAMQgGAFgHABQgIACgIAAQgLAAgJgFgAgLgVQgGAGgBAJIAmAAIAAAAQAAgJgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_6.setTransform(47.15,-86.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBFB").s().p("AAZA0IgxhLIAABLIgQAAIAAhoIAQAAIAxBMIAAhMIAQAAIAABog");
	this.shape_7.setTransform(37.925,-87.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFBFB").s().p("AgJAsQgGgIAAgPIAAgkIgOAAIAAgNIAPAAIADgWIALAAIAAAWIAaAAIAAANIgaAAIAAAiQAAAJAEAEQADAEAGAAQAHAAAGgDIAEANQgEACgFACIgLABQgNAAgGgHg");
	this.shape_8.setTransform(26.35,-87.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFBFB").s().p("AgdAiIADgNQAOAGALAAQAPAAAAgJQAAgFgDgCQgDgCgIgCIgEgBQgMgEgFgEQgGgFAAgJQAAgKAIgHQAJgHAMAAQANAAAMAHIgDAMQgLgFgLAAQgGAAgDACQgDADAAAEQgBAEADACQACACAHACIAFABQAMAEAHAEQAFAFAAAKQAAALgIAHQgJAGgNAAQgQAAgNgHg");
	this.shape_9.setTransform(19.95,-86.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFBFB").s().p("AgQAkQgJgFgFgKQgEgJAAgLQAAgMAEgJQAGgKAIgEQAIgGAKAAQAKAAAIAFQAHAFAEAIQAFAJAAAKIAAAJIg2AAQACAKAGAFQAGAGAKAAIAMgBIALgFIAEAMQgHAFgGABQgIACgIAAQgLAAgJgFgAgLgVQgGAGgBAJIAmAAIAAAAQAAgJgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_10.setTransform(12.35,-86.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFBFB").s().p("AgmA0IAAhoIAmAAQASABAJAGQAJAIAAANQAAAJgFAFQgEAHgJADQALAAAEAHQAGAGAAALQAAAJgFAGQgEAHgIADQgIADgKAAgAgVAmIAZAAQAIAAAEgEQAFgEABgHQgBgIgFgEQgEgEgKAAIgXAAgAgVgHIAVAAQAJAAAFgEQAFgDgBgIQABgHgFgEQgFgEgJAAIgVAAg");
	this.shape_11.setTransform(3.85,-87.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFBFB").s().p("AgdAiIADgMQANAFAMAAQAPAAAAgKQAAgEgDgBQgDgDgIgCIgEgBQgMgEgFgEQgGgFAAgJQAAgLAIgGQAJgHAMAAQANAAAMAHIgDAMQgLgFgLAAQgGAAgDADQgEACABAEQgBAEADACQACACAHACIAFABQAMADAHAFQAFAGAAAJQAAALgIAGQgIAHgOAAQgQAAgNgHg");
	this.shape_12.setTransform(82.4,-100.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFBFB").s().p("AgKAOQAJgIABgHQgDAAgCgDQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADADQADADAAAFQAAAHgEAGQgFAHgHAGg");
	this.shape_13.setTransform(77.35,-105.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFBFB").s().p("AgaAjQgFgHAAgLQgBgLAIgGQAGgGANAAIAVAAIAAgBQABgKgFgEQgEgFgIABQgLAAgNAFIgFgMQAIgEAIgCQAHgCAIAAQAPAAAHAJQAJAHAAAPIAAAxIgNAAIgCgJQgGAFgHADQgGACgHAAQgLAAgHgGgAgPAQQAAAGAEACQADADAGABIAJgCQAFgCAEgDIAAgQIgRAAQgOABAAAKg");
	this.shape_14.setTransform(71.9,-100.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFBFB").s().p("AgNAkQgJgFgFgJQgEgKAAgLQAAgMAFgKQAFgJAJgEQAJgGAKAAQAHAAAGACQAFACAGADIgFAMIgJgDIgIgBQgKAAgHAHQgHAHAAAMQAAALAHAIQAGAGALAAIAKgBIAJgDIAEAMQgKAHgPAAQgLAAgJgFg");
	this.shape_15.setTransform(64.35,-100.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFBFB").s().p("AgHA4IAAhOIAPAAIAABOgAgGgmQgDgDAAgEQAAgEADgDQADgCADAAQAFAAACACQADADAAAEQAAAEgDADQgCADgFAAQgDAAgDgDg");
	this.shape_16.setTransform(58.8,-102.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFBFB").s().p("AgWAoIAAhNIAOAAIABAJQAKgLAOAAIAGABIgCAPIgHgBQgKAAgKAIIAAA4g");
	this.shape_17.setTransform(54.525,-100.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFBFB").s().p("AgQAkQgJgFgFgJQgEgKAAgLQAAgMAEgJQAGgKAIgEQAIgGAKAAQAKAAAHAFQAJAFADAIQAFAJAAAKIAAAJIg2AAQACAKAGAGQAHAFAJAAIAMgBIALgEIAFALQgHAFgIACQgHABgIAAQgLAAgJgFgAgLgVQgFAGgCAKIAmAAIAAgBQAAgJgFgGQgFgFgIgBQgIABgFAFg");
	this.shape_18.setTransform(47.1,-100.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFBFB").s().p("AApAoIAAgvQAAgRgPAAQgJAAgKAIIABAIIAAAwIgQAAIAAgvQAAgRgOAAQgJAAgKAIIAAA4IgQAAIAAhNIAOAAIABAIQAMgKAOAAQAHAAAGADQADADAEAGQAIgGAGgDQAHgDAHAAQAMAAAHAIQAHAIAAAPIAAAwg");
	this.shape_19.setTransform(36.35,-100.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFBFB").s().p("AAeA1IgJgaIgqAAIgIAaIgSAAIAnhpIARAAIAnBpgAAQAMIgQguIgPAuIAfAAg");
	this.shape_20.setTransform(24.625,-102.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFBFB").s().p("AASAoIAAgvQAAgIgEgFQgEgEgIAAQgJAAgKAIIAAA4IgQAAIAAhNIAOAAIABAIQAHgFAGgDQAGgCAHAAQANAAAGAIQAHAIAAAPIAAAwg");
	this.shape_21.setTransform(12.175,-100.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFBFB").s().p("AgUAkQgIgFgFgKQgFgJAAgMQAAgLAFgKQAFgJAJgEQAJgGAKAAQALAAAKAGQAIAFAGAJQAEAJAAALQAAAMgFAKQgFAJgJAFQgJAFgLAAQgLAAgJgFgAgPgSQgGAHgBALQABAMAGAIQAGAHAJAAQAKAAAHgHQAFgIAAgMQAAgLgFgHQgHgIgKABQgJgBgGAIg");
	this.shape_22.setTransform(3.35,-100.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-114.4,103.60000000000001,38.2);


(lib.F2_copy2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AhHBQIAAigIA+AAQAYABATAJQATALAJARQAKATAAAXQAAAZgKASQgKATgTAJQgSAJgYAAgAgaArIARAAQARgBAJgKQAKgMAAgUQAAgUgKgKQgJgMgRAAIgRAAg");
	this.shape.setTransform(128.475,-57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("Ag3BQIAAigIBsAAIAAAlIg/AAIAAAaIAyAAIAAAjIgyAAIAAAZIBCAAIAAAlg");
	this.shape_1.setTransform(113.75,-57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("AgWBQIAAh4IgtAAIAAgoICGAAIAAAoIgtAAIAAB4g");
	this.shape_2.setTransform(99.75,-57.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("AgdBIQgSgLgKgSQgKgTAAgYQAAgSAHgQQAGgPAMgLQALgLAPgGQAPgFAPAAQAPAAANADQAOADAKAHIgLAjQgKgEgIgCQgIgCgJAAQgTAAgKAMQgMALAAATQAAANAGAKQAFAJAKAFQAIAGAMAAQARAAATgKIAMAjQgZAPgdAAQgYAAgTgLg");
	this.shape_3.setTransform(85.25,-57.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("Ag2BQIAAigIBrAAIAAAlIg/AAIAAAaIAxAAIAAAjIgxAAIAAAZIBBAAIAAAlg");
	this.shape_4.setTransform(71.5,-57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFBFB").s().p("AAcBQIg1hZIAABZIgrAAIAAigIApAAIA1BaIAAhaIArAAIAACgg");
	this.shape_5.setTransform(56.475,-57.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBFB").s().p("AAcBQIg1hZIAABZIgrAAIAAigIApAAIA1BaIAAhaIArAAIAACgg");
	this.shape_6.setTransform(40.125,-57.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBFB").s().p("AgpBIQgSgLgKgTQgKgTAAgXQAAgYALgTQALgTASgKQASgKAVAAQAYAAASALQASALAKASQAKATAAAXQAAAYgLATQgKAUgSAKQgSAKgXAAQgWAAgTgLgAgXgeQgKAMAAASQAAATAKAMQAJAMAOAAQAPAAAKgMQAJgMAAgTQAAgSgJgMQgKgNgPAAQgOAAgJANg");
	this.shape_7.setTransform(23.225,-57.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFBFB").s().p("AgdBIQgSgLgKgSQgKgTAAgYQAAgSAHgQQAGgPAMgLQAKgLAQgGQAOgFAQAAQAPAAANADQAOADAKAHIgLAjQgKgEgIgCQgJgCgIAAQgTAAgLAMQgLALAAATQAAANAGAKQAFAJAJAFQAJAGAMAAQASAAASgKIAMAjQgZAPgdAAQgYAAgTgLg");
	this.shape_8.setTransform(7.2,-57.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-75.7,141,34.1);


(lib.F2_copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AgyBAQgRgSAAgjIAAhcIAtAAIAABcQABAQAEAIQAGAGALABQANgBAFgGQAFgIAAgQIAAhcIAsAAIAABcQAAAjgQASQgSASghAAQggAAgSgSg");
	this.shape.setTransform(102.1,-77.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("AgpBIQgSgLgKgTQgKgTAAgXQAAgYALgTQALgTASgKQASgKAVAAQAYAAASALQASALAKASQAKATAAAXQAAAYgLATQgKAUgSAKQgSAKgXAAQgWAAgTgLgAgXgeQgKAMAAASQAAATAKAMQAJAMAOAAQAPAAAKgMQAJgMAAgTQAAgSgJgMQgKgNgPAAQgOAAgJANg");
	this.shape_1.setTransform(85.425,-77.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("AgVBQIAAg4Ig2hoIAwAAIAbBEIAdhEIAwAAIg2BoIAAA4g");
	this.shape_2.setTransform(69,-77.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("Ag/BQIAAigIBAAAQAeAAAQAPQARAPAAAbQAAAagRAOQgRAQgdAAIgUAAIAAAvgAgTgDIASAAQAJAAAFgGQAGgFAAgJQAAgKgFgFQgGgEgJAAIgSAAg");
	this.shape_3.setTransform(49.425,-77.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("Ag2BQIAAigIBrAAIAAAmIg/AAIAAAZIAxAAIAAAjIgxAAIAAAZIBBAAIAAAlg");
	this.shape_4.setTransform(35.5,-77.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFBFB").s().p("Ag2BQIAAigIBrAAIAAAmIg/AAIAAAZIAxAAIAAAjIgxAAIAAAZIBBAAIAAAlg");
	this.shape_5.setTransform(22.45,-77.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBFB").s().p("AAXBQIgjhBIgPASIAAAvIgtAAIAAigIAtAAIAAA8IAtg8IAzAAIgzBCIA3Beg");
	this.shape_6.setTransform(8.225,-77.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-95.7,114.5,34.1);


(lib.F2_copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AgjBPQgPgEgLgGIALgjQAXAKAVAAQAMAAAFgCQAGgDAAgGQAAgFgGgDQgFgDgMgEIgKgCQgVgGgKgLQgJgLAAgSQAAgZAQgOQARgNAcAAQAOAAANADQAOADALAGIgMAiQgHgDgLgCQgKgDgJAAQgJAAgFADQgFADAAAGQAAAEAEAEQAFADAJACIAKADQAZAHAKAJQAKALAAASQAAAagRAOQgSAOgeAAQgRAAgPgEg");
	this.shape.setTransform(66.775,-97.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("AgxBAQgSgRABgkIAAhcIAtAAIAABcQAAAQAEAIQAGAGALAAQANAAAEgGQAGgIAAgQIAAhcIAtAAIAABcQAAAkgRARQgRASgiAAQghAAgQgSg");
	this.shape_1.setTransform(51.9,-97.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("AgWBQIAAh4IgtAAIAAgoICHAAIAAAoIgtAAIAAB4g");
	this.shape_2.setTransform(31.95,-97.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("Ag3BQIAAigIBsAAIAAAlIg/AAIAAAaIAxAAIAAAjIgxAAIAAAZIBCAAIAAAlg");
	this.shape_3.setTransform(18.55,-97.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("Ag2BQIAAigIAtAAIAAB6IBAAAIAAAmg");
	this.shape_4.setTransform(5.925,-97.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-115.7,78.8,34.10000000000001);


(lib.F1_image_gph = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.teacher1_160x600();
	this.instance.setTransform(-165,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-149.2,385.8,671.7);


(lib.F1_copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AgVBQIAAh4IgtAAIAAgoICGAAIAAAoIgtAAIAAB4g");
	this.shape.setTransform(117.8,-38.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("AgjBPQgPgEgLgGIALgjQAXAKAVAAQAMAAAFgCQAGgDAAgGQAAgFgGgDQgFgDgMgEIgKgCQgVgGgKgLQgJgLAAgSQAAgZAQgOQARgNAcAAQAOAAANADQAOADALAGIgMAiQgHgDgLgCQgKgDgJAAQgJAAgFADQgFADAAAGQAAAEAEAEQAFADAJACIAKADQAZAHAKAJQAKALAAASQAAAagRAOQgSAOgeAAQgRAAgPgEg");
	this.shape_1.setTransform(103.925,-38.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("AAUBQIgbg0IgRAAIAAA0IgsAAIAAigIBBAAQAcAAASAOQAQAPABAZQAAAPgHALQgHAMgMAHIAjA9gAgYgFIAWAAQAGAAAFgGQAFgFAAgIQAAgJgFgFQgFgEgGAAIgWAAg");
	this.shape_2.setTransform(90.15,-38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("AgWBQIAAigIAsAAIAACgg");
	this.shape_3.setTransform(78.7,-38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("Ag1BQIAAigIBqAAIAAAmIg9AAIAAAdIAxAAIAAAjIgxAAIAAA6g");
	this.shape_4.setTransform(69.55,-38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFBFB").s().p("AAqBQIAAhWIgdA6IgaAAIgdg3IAABTIgqAAIAAigIArAAIAqBVIAphVIArAAIAACgg");
	this.shape_5.setTransform(48.875,-38.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBFB").s().p("Ag3BQIAAigIBsAAIAAAmIg/AAIAAAZIAyAAIAAAjIgyAAIAAAZIBCAAIAAAlg");
	this.shape_6.setTransform(33.2,-38.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBFB").s().p("AAYBQIAAg9IgvAAIAAA9IgtAAIAAigIAtAAIAAA9IAvAAIAAg9IAtAAIAACgg");
	this.shape_7.setTransform(18.425,-38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFBFB").s().p("AgWBQIAAh4IgtAAIAAgoICGAAIAAAoIgtAAIAAB4g");
	this.shape_8.setTransform(3.35,-38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-56.6,132.7,34.1);


(lib.F1_copy1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AgVBRIAAh6IgtAAIAAgmICGAAIAAAmIgtAAIAAB6g");
	this.shape.setTransform(85.4,-59.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("AgxBAQgRgSAAgiIAAhdIAtAAIAABcQgBARAGAGQAFAIALgBQANABAEgIQAGgGAAgRIAAhcIAtAAIAABdQgBAigRASQgRASghAAQggAAgRgSg");
	this.shape_1.setTransform(70.65,-59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("Ag/BRIAAigIBAAAQAeAAAQAOQARAPAAAaQAAAbgRAPQgRAPgdAAIgUAAIAAAwgAgTgDIASAAQAJAAAFgFQAGgGAAgKQAAgJgFgFQgGgEgJAAIgSAAg");
	this.shape_2.setTransform(55.975,-59.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("AgyBAQgQgSgBgiIAAhdIAtAAIAABcQAAARAGAGQAFAIALgBQAMABAGgIQAFgGAAgRIAAhcIAsAAIAABdQABAigSASQgQASgiAAQghAAgRgSg");
	this.shape_3.setTransform(36.2,-59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("AgpBIQgSgLgKgTQgKgTAAgXQAAgYALgTQALgTASgKQASgKAVAAQAYAAASALQASALAKASQAKATAAAXQAAAYgLATQgKAUgSAKQgSAKgXAAQgWAAgTgLgAgXgeQgKAMAAASQAAATAKAMQAJAMAOAAQAPAAAKgMQAJgMAAgTQAAgSgJgMQgKgNgPAAQgOAAgJANg");
	this.shape_4.setTransform(19.875,-59.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFBFB").s().p("AgVBRIAAg5Ig3hnIAxAAIAcBCIAdhCIAuAAIg2BnIAAA5g");
	this.shape_5.setTransform(3.8,-59.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-77.4,166.8,34.10000000000001);


(lib.F1_copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBFB").s().p("AgaAdQAKgIAGgIQAGgHADgGQgIgCgEgFQgFgGgBgIQAAgJAHgGQAGgGAKAAQAKAAAHAHQAGAHAAALQAAAQgMAQQgLAQgTAMg");
	this.shape.setTransform(113.4,-70.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFBFB").s().p("AgjBPQgPgEgLgGIALgjQAXAKAVAAQAMAAAFgCQAGgDAAgGQAAgFgGgDQgFgDgMgEIgKgCQgVgGgKgLQgJgLAAgSQAAgZAQgOQARgNAcAAQAOAAANADQAOADALAGIgMAiQgHgDgLgCQgKgDgJAAQgJAAgFADQgFADAAAGQAAAEAEAEQAFADAJACIAKADQAZAHAKAJQAKALAAASQAAAagRAOQgSAOgeAAQgRAAgPgEg");
	this.shape_1.setTransform(104.125,-78.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFBFB").s().p("AAUBRIgbg1IgRAAIAAA1IgsAAIAAigIBBAAQAcAAASANQARAPAAAaQgBAOgGALQgHAMgMAHIAjA+gAgYgFIAWAAQAHgBAEgFQAFgFAAgIQAAgJgFgFQgEgEgHAAIgWAAg");
	this.shape_2.setTransform(90.4,-78.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFBFB").s().p("Ag2BRIAAigIBrAAIAAAlIg/AAIAAAZIAxAAIAAAjIgxAAIAAAZIBCAAIAAAmg");
	this.shape_3.setTransform(76.35,-78.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFBFB").s().p("AAYBRIAAg+IgvAAIAAA+IgtAAIAAigIAtAAIAAA8IAvAAIAAg8IAtAAIAACgg");
	this.shape_4.setTransform(61.625,-78.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFBFB").s().p("AgdBIQgSgLgKgSQgKgTAAgYQAAgSAHgQQAGgPAMgLQALgLAPgGQAOgFAQAAQAPAAANADQAOADAKAHIgLAjQgKgEgIgCQgJgCgIAAQgTAAgLAMQgLALAAATQAAANAGAKQAFAJAJAFQAJAGAMAAQARAAATgKIAMAjQgZAPgdAAQgYAAgTgLg");
	this.shape_5.setTransform(46.45,-78.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFBFB").s().p("AAhBRIgIgbIgyAAIgIAbIgwAAIA7igIAsAAIA8CggAAPATIgPg1IgPA1IAeAAg");
	this.shape_6.setTransform(31.05,-78.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFBFB").s().p("Ag3BRIAAigIBsAAIAAAlIg/AAIAAAZIAyAAIAAAjIgyAAIAAAZIBCAAIAAAmg");
	this.shape_7.setTransform(17,-78.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFBFB").s().p("AgWBRIAAh6IgtAAIAAgmICGAAIAAAmIgtAAIAAB6g");
	this.shape_8.setTransform(3.35,-78.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-96.4,166.8,34.10000000000001);


(lib.cta_color_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FA6400","#D93A3F","#D93A3F"],[0.463,1,1],-95.1,2.3,94.9,2.3).s().p("Au1B9IAAj5IdrAAIAAD5g");
	this.shape.setTransform(95,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,25);


(lib.btn_clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.att_160x600_tag_logo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{white_logo:0,blue_logo:1});

	// logo_white
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkSBtQgRgHgPgLIAAgBQALAHAQAEQATAEAYAAQAbABAWgIQAQgFALgGIAAAAIAAAAQgQAOgTAGQgUAIgVAAQgTAAgTgGgAkqBVQgfgNgLgWQALAQAbAJQAZAJAdAAQAnAAAhgMQAigLAMgTIACAAIAAAAIgIAPQgGAKgIAGQgOAMgWAGQgTAGgXAAQgpAAgdgMgACRA9QgMgLAAgSQAAgPAGgKQAHgHAOgHIgJgOQgEgIAAgGQAAgPALgLQAKgKASAAQARAAAKAKQAJAJAAAPQAAAMgHAJQgGAHgMAGIATAUIALgSIACgCIAEAAIARAAIACABQABAAAAAAQAAABAAAAQAAABAAAAQgBAAAAAAIgTAhIAcAfIACAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgWAAIgEAAIgCgCIgOgQQgGAKgKAGQgKAFgPAAQgTAAgNgLgACiAQQgFAGgBAJQAAAIAHAFQAHAHAIAAQAHAAAHgEQAFgEAFgHIgcgeQgIAFgEAFgACvguQgDAEgBAGQAAAEADAFIAHAKQAKgGAEgEQAEgEAAgFQAAgGgDgEQgEgDgGAAQgHAAgEADgAEhBFQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhuIgmAAIgCgBIgBgCIAAgQIABgCIACgBIBlAAIADABIABACIAAAQQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDABIgmAAIAABuQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgABIBFIgCgBIgBgDIAAhuIgmAAIgDgBIgBgCIAAgQIABgCIADgBIBlAAIACABIABACIAAAQQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCABIgmAAIAABuIgBADQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAgAAYBFQgEAAgBgDIgKgeIg3AAIgLAeQgBADgEAAIgRAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIAAgDIAuiBQACgDADAAIAXAAQAEAAABADIAvCBIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAgAgmAOIAmAAIgSg4gAkyA1QgYgJgNgOIgFgFIgCgFQgBgIAAgMQAFARAVAOQAbAPAnAAQAtAAAtgSQAUgIANgIQANgJABgIIABAAIAAAFQAAAIgCAHQAAAJgCAEQgGANgSAKQgdAPg2AAQgpAAghgNgAk5AFQgcgJgHgPIAAgCIAAgDQAAgFAEgHQACgHACgFIgBAHQAAARAaAMQAYAMAiAAQAmAAAogNQAvgQgBgUQAFAKADAJQACAJgCAGQgEAQgbAJQgaAKgogBQg4AAgjgOgAkogjQgigLgBgRQABgCAEgFQAHgJAJgHQgFAFAAAHQAAAKAKAIQAOAKAfAAQArAAAegNQANgGAIgHQAHgFAAgFIgBgDIALALQAFAFABADQADAEgBAEQAAAOgTAIQgXAMgnAAQgoAAgigLgAkfhKQgQgGgBgJQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAHgFQAMgJAPgEQAQgEAQAAQAgAAAaAQIAGAEIACADQAAAJgVAHQgVAHgdAAQgcAAgSgGg");
	this.shape.setTransform(80.05,28.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// logo_blue_black
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#459DD5").s().p("AglBtQgRgHgPgLIAAgBQALAHAQAEQATAEAXAAQAbABAWgIQAQgFALgGIAAAAIAAAAQgQAOgTAGQgUAIgVAAQgSAAgTgGgAg9BVQgfgNgLgWQALAQAbAJQAZAJAdAAQAmAAAhgMQAigLAMgTIACAAIAAAAIgIAPQgGAKgIAGQgOAMgWAGQgTAGgXAAQgoAAgdgMgAhFA1QgYgJgNgOIgFgFIgBgFQgCgIAAgMQAFARAVAOQAbAPAnAAQAsAAAtgSQAUgIANgIQANgJABgIIABAAIAAAFQAAAIgCAHQAAAJgCAEQgGANgSAKQgdAPg2AAQgoAAghgNgAhMAFQgcgJgHgPIAAgCIAAgDQAAgFAEgHQACgHACgFIgBAHQAAARAaAMQAYAMAiAAQAlAAAogNQAvgQgBgUQAFAKADAJQACAJgCAGQgEAQgbAJQgaAKgogBQg3AAgjgOgAg7gjQgigLgBgRQABgCAEgFQAHgJAJgHQgFAFAAAHQAAAKAKAIQAOAKAfAAQAqAAAegNQANgGAIgHQAHgFAAgFIgBgDIALALQAFAFABADQADAEgBAEQAAAOgTAIQgXAMgnAAQgnAAgigLgAgyhKQgQgGgBgJQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAHgFQAMgJAPgEQAQgEAPAAQAgAAAaAQIAGAEIACADQAAAJgVAHQgVAHgcAAQgcAAgSgGg");
	this.shape_1.setTransform(56.35,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#010202").s().p("AALA9QgMgLAAgTQAAgOAGgKQAGgHAOgHIgJgPQgDgHAAgGQAAgQAKgKQALgKARAAQARAAAKAKQAJAJAAAPQAAAMgHAJQgGAGgMAHIAUAUIAKgSIADgCIADgBIARAAIADABQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIgTAgIAdAgIABAEQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgWAAIgEgBIgCgCIgNgPQgHAKgJAFQgLAGgPAAQgTAAgMgLgAAbAQQgFAGAAAIQAAAJAGAFQAHAHAIAAQAIAAAGgEQAGgEAFgHIgcgeQgJAFgEAFgAAoguQgDAEAAAGQAAAEADAFIAHAKQAJgGAEgEQAEgEAAgFQAAgGgDgEQgEgEgGAAQgHAAgEAEgACbBFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAhuIglAAIgDgBIgBgCIAAgQIABgDIADAAIBkAAIADAAIABADIAAAQQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDABIglAAIAABuQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAg9BFIgDgBIgBgDIAAhuIgmAAIgCgBIgBgCIAAgQIABgDIACAAIBlAAIACAAIABADIAAAQQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIgCABIgmAAIAABuIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAhuBFQgEAAgBgDIgKgeIg4AAIgLAeQAAADgEAAIgRAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIAAgDIAuiBQACgDADAAIAYAAQAEAAAAADIAwCBIgBADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAitANIAnAAIgTg3g");
	this.shape_2.setTransform(93.5167,28.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(1));

	// color_line
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFAD03","#FF595C"],[0,0.529],-80.2,0,80.2,0).s().p("AshARIAAghIZDAAIAAAhg");
	this.shape_3.setTransform(80.2,1.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

	// white
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AsfEHIAAoMIY/AAIAAIMg");
	this.shape_4.setTransform(80.25,27.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(1));

	// blue
	this.instance = new lib.logo_tag_bg_blue();
	this.instance.setTransform(0,3,2.2535,0.6037);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.4,54.3);


(lib.F3_copy3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask_ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFaBAQgRgJgIgRQgJgRAAgVQAAgPAGgOQAFgOAKgKQAKgKAOgFQANgFAPAAQANAAAMAEQAMADAJAGIgKAfIgQgGQgHgCgJAAQgQAAgKALQgKAKAAAQQAAAMAFAJQAEAIAIAFQAJAEAKAAQARAAAQgIIAKAfQgWANgZAAQgXAAgQgKgAkXBHQgOgEgKgGIAKgeQAVAIATAAQALAAAFgCQAEgCAAgFQAAgFgEgCQgFgDgLgDIgJgDQgUgFgIgJQgIgKAAgQQgBgWAPgMQAQgNAZAAQAMAAANADQAMADAIAFIgJAfIgRgFIgQgCQgKAAgDACQgFADAAAFQAAAEAEADQADADAJACIAJADQAXAFAJAJQAJAJAAAQQAAAXgQAMQgPANgcAAQgPAAgNgDgAG/BIIAAiOIBgAAIAAAhIg5AAIAAAWIAtAAIAAAfIgtAAIAAAXIA7AAIAAAhgAD/BIIAAiOIApAAIAACOgADHBIIgXgvIgQAAIAAAvIgnAAIAAiOIA6AAQAaAAAOANQAQAMgBAXQABANgHAJQgFALgLAGIAfA3gACggEIATAAQAHAAAEgFQAFgFAAgHQAAgIgFgEQgDgEgIAAIgTAAgAgIBIIAAiOIA4AAQAbAAAPANQAPANAAAYQAAAWgQAOQgPANgaAAIgSAAIAAArgAAegCIAQAAQAJAAAFgFQAEgFAAgIQABgJgFgEQgFgEgJAAIgQAAgAiPBIIAAhrIgoAAIAAgjIB4AAIAAAjIgpAAIAABrgAmcBIIAAiOIBhAAIAAAhIg5AAIAAAWIAtAAIAAAfIgtAAIAAAXIA6AAIAAAhgAogBIIAAiOIA7AAQAZAAAOAJQAOAKAAASQAAALgHAJQgFAJgMADQANACAIAJQAGAIAAANQAAAMgFAKQgIAJgLAFQgMAFgQAAgAn6AqIAYAAQAHAAAEgDQADgEABgHQgBgHgDgDQgEgEgHAAIgYAAgAn6gNIAVAAQAGAAAEgEQAEgDAAgHQAAgHgEgDQgEgEgGAAIgVAAg");
	mask.setTransform(55.4,32.725);

	// Layer_2
	this.instance = new lib.gradient_bar("synched",0);
	this.instance.setTransform(-96.6,32.3,1.1138,1,0,0,0,211.7,12.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,x:68.9},9).to({startPosition:0},10).to({scaleX:1.1138,x:233.35},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,25.4,109,14.700000000000003);


(lib.cta_main = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{over:1,out:8});

	// timeline functions:
	this.frame_0 = function() {
		var flag = false;
		this.stop();
	}
	this.frame_7 = function() {
		if (this.flag) {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(9));

	// copy_pink
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAcIAAg3IAkAAIAAAKIgXAAIAAAMIASAAIAAAKIgSAAIAAANIAYAAIAAAKg");
	this.shape.setTransform(61.225,11.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIAcIgJgTIgIAAIAAATIgNAAIAAg3IAWAAQAJAAAFAFQAGAEAAAJQAAAFgDAEQgCAFgFACIANAVgAgJAAIAJAAQACgBADgCQACgCAAgDQAAgEgCgDQgCgCgDAAIgJAAg");
	this.shape_1.setTransform(56.125,11.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgIAEgGQADgHAGgEQAGgDAHAAQAIAAAGAEQAHAEADAGQADAHAAAHQAAAJgDAGQgEAHgGAEQgGADgIAAQgHAAgGgEgAgJgLQgEAEAAAHQAAAHAEAFQAEAGAFAAQAHAAAEgGQADgFAAgHQAAgHgDgEQgEgGgHAAQgFAAgEAGg");
	this.shape_2.setTransform(50.025,11.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAcIAAghIgLAXIgIAAIgMgWIAAAgIgNAAIAAg3IANAAIAPAgIAQggIAMAAIAAA3g");
	this.shape_3.setTransform(43.35,11.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAcIgWgjIAAAjIgMAAIAAg3IALAAIAWAjIAAgjIAMAAIAAA3g");
	this.shape_4.setTransform(34.9,11.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAcIgJgTIgIAAIAAATIgNAAIAAg3IAWAAQAJAAAFAFQAGAEAAAJQAAAFgDAEQgCAFgFACIANAVgAgJAAIAJAAQACgBADgCQACgCAAgDQAAgEgCgDQgCgCgDAAIgJAAg");
	this.shape_5.setTransform(29.375,11.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAcIgEgLIgTAAIgEALIgNAAIAVg3IALAAIAVA3gAAHAHIgHgVIgGAVIANAAg");
	this.shape_6.setTransform(23.575,11.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAcIAAg3IAkAAIAAAKIgXAAIAAAMIASAAIAAAKIgSAAIAAANIAYAAIAAAKg");
	this.shape_7.setTransform(18.425,11.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAcIAAg3IAMAAIAAAsIAXAAIAAALg");
	this.shape_8.setTransform(13.775,11.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(16));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkSBqQgnAAgcgcQgcgbAAgoQAAgmAcgcQAcgcAnAAIIlAAQAoAAAbAcQAcAcAAAmQAAAogcAbQgbAcgoAAg");
	mask.setTransform(37,10.625);

	// box
	this.instance = new lib.cta_color_box("synched",0);
	this.instance.setTransform(0.65,12.5,1,1,0,0,0,95,12.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.3123,x:124.65},7).to({scaleX:1.3185,rotation:180,x:-29.7},1).to({regX:94.8,scaleX:1.0141,x:95.6},4).to({regX:94.9,scaleX:1.5674,rotation:0,x:-52.05},1).to({regX:95,scaleX:1,x:0.65},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,2.3,95,19);


// stage content:
(lib.att_mob_hcta_teacher_uf_160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clicktag_btn.addEventListener("click", ClickTag);
		
		function ClickTag() {
			window.open( clickTag, "_blank");
		}
	}
	this.frame_166 = function() {
		this.cta_btn.gotoAndPlay(1);
	}
	this.frame_185 = function() {
		//CTA Rollover animation
		this.cta_clicktag.addEventListener("mouseover", rollOver.bind(this));
		
		function rollOver() {
			this.cta_btn.flag = true;
			this.cta_btn.gotoAndPlay("over");
		}
		this.cta_clicktag.addEventListener("mouseout", rollOut.bind(this));
		
		function rollOut() {
			this.cta_btn.gotoAndPlay("out");
		}
		
		//Clicktag animation for CTA
		this.cta_clicktag.addEventListener("click", Cta_clicktag);
		
		function Cta_clicktag() {
			window.open(clickTag, "_blank");
		}
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(166).call(this.frame_166).wait(19).call(this.frame_185).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(186));

	// hit_cta_button
	this.cta_clicktag = new lib.btn_clicktag();
	this.cta_clicktag.name = "cta_clicktag";
	this.cta_clicktag.setTransform(55.55,168.4,0.326,0.1098,0,0,0,150.5,126.5);
	this.cta_clicktag._off = true;
	new cjs.ButtonHelper(this.cta_clicktag, 0, 1, 2, false, new lib.btn_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta_clicktag).wait(185).to({_off:false},0).wait(1));

	// clickTag_btn
	this.clicktag_btn = new lib.btn_clicktag();
	this.clicktag_btn.name = "clicktag_btn";
	this.clicktag_btn.setTransform(80,300,0.5333,2.4,0,0,0,150,125);
	new cjs.ButtonHelper(this.clicktag_btn, 0, 1, 2, false, new lib.btn_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag_btn).wait(186));

	// cta_btn
	this.cta_btn = new lib.cta_main();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(56.9,167.4,1,1,0,0,0,47.5,12.5);
	this.cta_btn.alpha = 0;
	this.cta_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta_btn).wait(124).to({_off:false},0).to({alpha:1},8,cjs.Ease.cubicInOut).wait(54));

	// logo_att
	this.instance = new lib.att_160x600_tag_logo("single",1);
	this.instance.setTransform(10.9,540.45,1,1,0,0,0,11.1,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({startPosition:0},0).wait(74));

	// F1_copy1_copy_copy_copy
	this.instance_1 = new lib.F1_copy1("synched",0);
	this.instance_1.setTransform(14.4,155.55,1,1,0,0,0,104.4,16.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:118.45,alpha:1},7,cjs.Ease.quartOut).wait(40).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(131));

	// F1_copy1_2
	this.instance_2 = new lib.F1_copy1_2("synched",0);
	this.instance_2.setTransform(14.4,156.55,1,1,0,0,0,104.4,16.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:118.45,alpha:1},7,cjs.Ease.quartOut).wait(38).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(131));

	// F1_copy2
	this.instance_3 = new lib.F1_copy2("synched",0);
	this.instance_3.setTransform(14.4,155.55,1,1,0,0,0,104.4,16.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:118.45,alpha:1},7,cjs.Ease.quartOut).wait(36).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(131));

	// F1_image
	this.instance_4 = new lib.F1_image_gph("synched",0);
	this.instance_4.setTransform(156.65,108,0.9964,0.9964,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-0.1,scaleX:0.9527,scaleY:0.9526,x:153.25,y:116.55,startPosition:17},51).to({scaleX:0.9488,scaleY:0.9487,x:152.95,y:117.3,alpha:0,startPosition:0},6).to({_off:true},1).wait(128));

	// F2_copy1_copy
	this.instance_5 = new lib.F2_copy1("synched",0);
	this.instance_5.setTransform(30.4,193.75,1,1,0,0,0,104.4,36);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).to({x:115.1,alpha:1},8,cjs.Ease.quartOut).wait(39).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(74));

	// F2_copy2
	this.instance_6 = new lib.F2_copy2("synched",0);
	this.instance_6.setTransform(30.4,193.75,1,1,0,0,0,104.4,36);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({_off:false},0).to({x:115.1,alpha:1},8,cjs.Ease.quartOut).wait(36).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(74));

	// F2_copy2_copy
	this.instance_7 = new lib.F2_copy2_2("synched",0);
	this.instance_7.setTransform(30.4,193.75,1,1,0,0,0,104.4,36);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(62).to({_off:false},0).to({x:115.1,alpha:1},8,cjs.Ease.quartOut).wait(34).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(74));

	// F2_copy3
	this.instance_8 = new lib.F2_copy3("synched",0);
	this.instance_8.setTransform(12.25,232.4,1,1,0,0,0,84.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).to({x:96.95,alpha:1},8,cjs.Ease.quartOut).wait(33).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(74));

	// F2_disclaimer
	this.instance_9 = new lib.F2_disclaimer_txt("synched",0);
	this.instance_9.setTransform(151.55,248,1,1,0,0,0,138,18.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).to({alpha:1},8).wait(31).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(74));

	// F2_image
	this.instance_10 = new lib.F2_image_gph("synched",0);
	this.instance_10.setTransform(148.6,104.05,0.9886,0.9888,0,0,0,0.2,0.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(51).to({_off:false},0).to({regY:0.8,scaleX:0.9326,scaleY:0.9328,x:144.75,y:115.25,startPosition:10},60).to({_off:true},1).wait(74));

	// F3_copy1
	this.instance_11 = new lib.F3_copy1();
	this.instance_11.setTransform(37.6,55.85);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(112).to({_off:false},0).to({x:78.1,alpha:1},7,cjs.Ease.quartOut).wait(67));

	// F3_copy2
	this.instance_12 = new lib.F3_copy2("synched",0);
	this.instance_12.setTransform(45,86.8,1,1,0,0,0,100.4,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(115).to({_off:false},0).to({x:109.4,alpha:1},7,cjs.Ease.quartOut).wait(64));

	// F3_copy3_copy
	this.instance_13 = new lib.F3_copy3("single",0);
	this.instance_13.setTransform(14.4,100.05,1,1,0,0,0,69.2,26.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(118).to({_off:false},0).to({x:78.8,alpha:1},7,cjs.Ease.quartOut).wait(5).to({mode:"synched",loop:false},0).wait(56));

	// F3_copy3
	this.instance_14 = new lib.F3_copy4("single",0);
	this.instance_14.setTransform(14.4,100.05,1,1,0,0,0,69.2,26.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(121).to({_off:false},0).to({x:78.8,alpha:1},7,cjs.Ease.quartOut).wait(58));

	// F3_disclaimer
	this.instance_15 = new lib.F3_disclaimer_txt("synched",0);
	this.instance_15.setTransform(148.6,229.1,1,1,0,0,0,138,18.9);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(127).to({_off:false},0).to({startPosition:0},7).wait(52));

	// F3_phone
	this.instance_16 = new lib.F3_phone_gph("synched",0);
	this.instance_16.setTransform(250.5,84.55,1,1,0,0,0,35.5,87);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(115).to({_off:false},0).to({x:121.35},9,cjs.Ease.cubicOut).wait(62));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00CAFF","#00A0DE","#007AB4"],[0,0.224,1],43.1,161.2,-43.2,-161.2).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(80.0011,299.9992,0.5333,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(186));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,271.2,343.5,357.59999999999997);
// library properties:
lib.properties = {
	id: 'C617512025DE43EF9BA8B74025A6BF5F',
	width: 160,
	height: 600,
	fps: 24,
	color: "#019FDA",
	opacity: 1.00,
	manifest: [
		{src:"images/logo_tag_bg_blue.jpg", id:"logo_tag_bg_blue"},
		{src:"images/phone_160x600.png", id:"phone_160x600"},
		{src:"images/teacher1_160x600.jpg", id:"teacher1_160x600"},
		{src:"images/teacher2_160x600.jpg", id:"teacher2_160x600"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C617512025DE43EF9BA8B74025A6BF5F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;