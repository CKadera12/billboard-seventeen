(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[341,113,53,108],[341,0,111,111],[0,0,339,214]]},
		{name:"index_atlas_NP_", frames: [[224,252,155,68],[0,0,970,250],[0,252,222,126]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.seventeenberriestopright = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.seventeencranberries = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.seventeenspinach = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.seventeentable = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.seventeenturkey = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.seventeenham = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.whatsinourclassic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghDKQgNgNAAgTQAAgTANgNQANgNATAAQASAAANANQANANAAATQAAATgNANQgNANgSAAQgTAAgNgNgAgUBNQgGgJAAgUQAAgVAGgUQAFgTALgTIANgYQAegvAAgeQAAgWgLgNQgMgOgUAAQgSAAgLALQgMAKgFAXIgBABQgLAtgYAAQgOAAgHgJQgIgJAAgSQAAgkAjgaQAigZAxAAQAzAAAfAZQAfAZAAAqQAAAXgKATQgKATgcAZIgJAHQgcAYgJAYQgEALAAARIgBAUQgEAMgDADQgEADgHAAQgNAAgGgIg");
	this.shape.setTransform(41.4,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABXC9QgEgFAAgJIjJAAQgRAAgEgDQgGgCAAgIQAAgNAngkIAjghQBMhLATgeQAUgegBgeQAAgbgPgRQgPgQgYAAQgSgBgQAIQgQAHgQAQIgMANQgPARgLAAQgIABgEgFQgFgEAAgJQAAgIAFgKQAFgJAIgLQAZgZAfgNQAfgOAjAAQA0AAAgAbQAhAcAAAsQgBAagNAaQgOAageAcIgxAtIg2AxIgCAEIgBACIACADIAHABIBaAAIAXgCQAJgDAEgGIAKgQQANgUAMAAQAGAAAFAEQADAFAAAJQABANgEAQIgLAjQgJAXgIAIQgIAKgJgBQgHAAgDgDg");
	this.shape_1.setTransform(10.1,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAC4QhBAAgOgDQgPgFAAgLQAAgOAZgEQAQgCAHgEIAJgGIADgNIABgpIABiGIAAgVIAAgRQAAgVgDgFQgEgHgLAAIgNABIgOABQgIAAgFgDQgEgDAAgGQAAgIAJgHQAIgHAWgHQAagKAYgFQAWgFAOAAQAMAAAGAEQAGAFAAAIQAAAJgLAIIgEADQgDAEgCAXIgBBuIABBQIABAyIADAOIAJAHIAXAFQAYAEAAANQAAAMgOAEQgOAEg6AAg");
	this.shape_2.setTransform(-21.6,35.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXCPQgOgEAAgNQAAgKANgEIAIgEQAIgEADgKQADgKAAgWIAAgTIgBgYIAAgRQAAg1gCgPQgCgRgHgDIgNgFQgRgGAAgKQAAgGAFgFQAFgFANgFIAngNIAagFQAOAAAFAnIABAGIABABQAPgXARgNQAQgLAQAAQAUAAAMALQAMANAAAUQAAAUgJAMQgJAMgRgBIgOgDIgMgIIgHgLQgDgIgEAAQgUAAgHAcQgHAbAABXQAAAaACAMQAEANAHAEIAMADQARAHAAALQAAALgQAEQgQAFgnABQgsgBgOgFg");
	this.shape_3.setTransform(-65.1,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhpBtQgpgrAAhBQAAhAAsgsQArgrBAAAQA+AAAoApQAoAoAAA/QAABDgrAtQgqAtg/AAQg/AAgpgqgAg3hWQgRAYAAAmQgBA5AZAnQAZAmAhAAQAdAAARgXQASgZAAgmQAAg5gYgmQgZgmgiAAQgcAAgSAXg");
	this.shape_4.setTransform(-93.5,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRDQQgOgEAAgMQAAgJANgFIAIgEQAHgEACgJQADgJAAgZIAAgcIAAiLIggAAQgHAAgCgDQgDgDAAgIIAAgHQAAgHADgEQADgDAGAAIAfAAIgDgXIgBgUQAAgsAbgZQAagYAvAAQAhAAAUAPQAVAPAAAWQAAAOgHAHQgIAHgOAAQgJAAgHgEQgIgEgFgIIgFgKQgLgVgRAAQgLAAgFAHQgHAHAAALIAHAhQAFAZABAUIAqAAQAHAAADADQACADAAAIIAAAHQAAAHgCAEQgEADgGAAIgqAAIAACUQAAAlADAMQACALAGADIALAEQARAGAAAMQAAALgOAEQgOAEgqAAQgqAAgOgEg");
	this.shape_5.setTransform(-116,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPCuQgOgEgLgKQgKgKgEgPQgEgRAAgrIAAiaIgbAAIgIgCIgDgIIAAgHQAAgKAfgaIAMgKIALgJQAegbALAAIAIACQADADAAAFIAAA2IBBAAQAIAAACACQADAEAAAIIAAAGQAAAIgDAEQgDADgHAAIg8AAIgEACIgCAHIAACPQAAAlAHAKQAGAJARAAQAJAAAOgEIAUgFQAHAAAEAEQAEADAAAHQAAAQgZAOQgYAPgfAAQgSAAgOgFg");
	this.shape_6.setTransform(-153.7,36.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape_7.setTransform(-177.2,39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_8.setTransform(-205.1,39.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_9.setTransform(-236.6,39.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiTDPQgQgEAAgOQABgLAPgGQAPgGADgFQAEgFACgsIADhwIgDhrQgCgsgEgFQgDgFgPgGQgQgHAAgMQAAgKANgFQAOgEAyAAICwAAIAdgDIAPgEIAIADIAFAEQAGALAGAUQAEAUAAAOQABANgFAHQgFAHgJAAQgKAAgMgUIgIgOQgHgJgMgFQgOgEgTAAIgnAAQgcAAgOADQgPADgFAHQgFAFgCAUIgCA3IAAAYQAAAOACADQADADAIABIAvAAQAXgBAJgGQAJgHADgSIABgFQAEgfAQAAQAMAAAFAQQAFAQgBA4QABA2gFAQQgEAQgNAAQgQgBgEgeIgBgFQgCgSgKgHQgJgGgXgBIgvAAQgHABgDAFQgDAEAAASIAAAXIACBRQACARAFAEIANAHQASAHAAALQAAAOgRAEQgQAFgsABQgwgBgPgFg");
	this.shape_10.setTransform(-269.4,32.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg9QAAhEAqgrQArgsBBAAQA4AAAhAgQAgAfAAA3QAAASgFAFQgFAGgWAAIhvAAQgJAAgFgFQgGgFAAgHQAAgIAGgEQAFgEAJAAIA8AAIAPgDQADgCAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAAqQAAAtAXAiQAXAgAkAAQAVAAAPgFQAPgEAOgKIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIALQgHAJgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_11.setTransform(276.3,-25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfB5QgQgcgphfIgRgrQgVg3gMgHIgJgDQgRgHAAgLQAAgLAPgFQAOgFAvAAQAoAAAOAFQAOAFAAALIgCAJIgFAGIgKAEQgMAFAAAGIAHAXIAWA4IAYA4QAHANADAAQAEAAAFgIIANgZIAghJQAKgcAAgJIgCgLIgHgGIgIgEQgNgFAAgJQAAgLANgFQANgFAkAAQAeAAAMAFQANAFAAAKQAAAMgPAFIgKAEQgOAGgYA5IgIASIgMAbQhCCWgSAAQgMAAgRgdg");
	this.shape_12.setTransform(245.7,-25.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzDPQgOgFAAgNQAAgJAOgGIAHgDQAIgEADgKQADgJAAgWIAAgUIAAgXIAAgeQAAgugCgNQgDgOgGgDIgOgFQgRgGAAgJQAAgHAGgFQAFgFANgFIArgOIAegFQAIAAADAFQAEAGAAANIAAARIgBANIgCBJIAAACIgBBHQAAAcADALQACAMAHADIAKAFQAPAFAAALQAAALgOAFQgOAFgnAAQgqAAgPgFgAgjiSQgNgKAAgPQAAgQAOgMQAOgMATAAQASAAANALQAMAKAAAQQAAAQgNALQgOALgTAAQgTAAgMgKg");
	this.shape_13.setTransform(221.8,-32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPCvQgOgGgLgJQgKgKgEgPQgEgQAAgrIAAicIgbAAIgIgCIgDgHIAAgHQAAgKAfgZIAMgLIALgKQAegaALAAIAIADQADACAAAEIAAA3IBBAAQAIAAACADQADACAAAIIAAAIQAAAHgDADQgDADgHAAIg8AAIgEADIgCAHIAACPQAAAlAHAKQAGAKARAAQAJgBAOgFIAUgEQAHAAAEADQAEAFAAAFQAAAQgZAQQgYAOgfAAQgSAAgOgEg");
	this.shape_14.setTransform(203.1,-28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape_15.setTransform(179.6,-25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg9QAAhEAqgrQArgsBBAAQA4AAAhAgQAgAfAAA3QAAASgFAFQgFAGgWAAIhvAAQgJAAgFgFQgGgFAAgHQAAgIAGgEQAFgEAJAAIA8AAIAPgDQADgCAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAAqQAAAtAXAiQAXAgAkAAQAVAAAPgFQAPgEAOgKIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIALQgHAJgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_16.setTransform(151.6,-25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiTDQQgQgGAAgNQAAgLAPgGQAQgGADgFQAEgFADgsIAChwIgDhrQgCgsgEgGQgDgDgPgHQgQgGAAgMQAAgMAOgEQANgEAyAAICxAAIAdgDIAOgDIAIABIAFAGQAGAKAFAUQAFAUABAOQAAAMgFAIQgFAHgJAAQgKAAgMgUIgJgOQgFgJgOgEQgNgFgTAAIgoAAQgbAAgOADQgPADgFAHQgEAFgDATIgCA4IAAAXQAAAOACAEQADAEAIgBIAvAAQAXABAKgHQAIgHADgSIABgFQAEgeAPAAQANgBAFARQAFAPAAA4QAAA2gFAQQgFAPgNAAQgPABgEgfIgBgFQgDgSgIgGQgKgIgXABIguAAQgJAAgCAEQgDAGAAASIAAAWIACBRQACARAFAFIANAGQASAHAAAMQAAAMgQAGQgQAEguAAQguAAgQgEg");
	this.shape_17.setTransform(118.8,-32.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhXCQQgOgFAAgNQAAgKANgFIAIgDQAIgEADgKQADgKAAgVIAAgUIgBgXIAAgRQAAg2gCgQQgCgPgHgEIgNgFQgRgGAAgJQAAgIAFgEQAFgFANgFIAngNIAagFQAOAAAFAnIABAGIABABQAPgXARgNQAQgLAQgBQAUABAMALQAMAMAAAVQAAAUgJAMQgJAMgRAAIgOgDIgMgJIgHgMQgDgHgEAAQgUAAgHAcQgHAcAABWQAAAaACANQAEANAHADIAMAEQARAFAAAMQAAALgQAFQgQAEgnAAQgsAAgOgEg");
	this.shape_18.setTransform(73.7,-26);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA/CTQgEgFAAgJIAAgVIAAgBIgCAAQgDAAgHAHIgEAEQgOAOgRAHQgRAHgVAAQgWAAgTgIQgTgIgNgPQgOgRgFgXQgGgXAAg+IAAgTIAAgWIAAgFQAAgYgDgHQgDgGgLgEIgLgEQgRgEAAgLQAAgHAGgFQAGgFAUgHIAogKIAegEQAIAAAEAFQADAGAAANIAAALIgDBtQAAA6AMAXQAMAWAeAAQAgAAAPgdQAOgdAAhGIAAgXQAAgWgDgHQgDgHgKgDIgMgEQgQgEAAgLQAAgHAGgEQAFgFAUgIIAngKIAegEQAJAAAEAFQADAFAAAOIAAAQIgEB3IABAxIACATQACAMAPAGIAFACQARAFAAAKQAAAGgFAFQgGAFgMAFIgpANQgUAFgLAAQgIAAgEgEg");
	this.shape_19.setTransform(44.1,-25.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag/DOQghgKgbgUQgqgegWgvQgWgvAAg5QAAheA5g7QA7g6BdAAQAlAAAiALQAgALAaAWQAnAfAVAvQAWAwgBA2QABAkgKAgQgKAggTAaQgcAngtAWQgsAWg0AAQgiAAgggLgAhgiIQgfAoAABDQAABaAnA5QAnA5A8AAQA1AAAggnQAggoAAhDQAAhZgog6Qgpg6g7AAQg0AAggAog");
	this.shape_20.setTransform(3.7,-32);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiOCQQgOgFAAgNQAAgKAOgFIAHgDQAIgEADgKQADgKAAgVIAAgUIAAgXIAAgeQAAgugCgNQgDgOgGgDIgOgFQgRgGAAgJQAAgHAGgFQAFgFANgFIApgNIAfgGQAHABAEAEQAEAEAAAKIAAATIAAADIACABIABAAIABgBIAIgHIAGgFQAfgdAjgBQAWAAATAJQATAKANAPQAOAQAFAWQAGAWAAAvIAAAmIAAATIAAAQQAAAVACAIQADAJAHAEIAIADQAOAFAAAKQAAAMgNAGQgNADgtAAQgpAAgNgDQgOgFAAgLQAAgLAOgGIALgEQAHgEACgMQADgNAAgfQAAhcgMgXQgMgYgeAAQgOABgPAIQgNAKgIAPQgHANgCAWQgDAXAAA5QAAAcADAJQACAKAHADIAKAEQAPAGAAALQAAALgOAFQgOAEgnAAQgrAAgPgEg");
	this.shape_21.setTransform(-53.5,-26);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgzDPQgOgFAAgNQAAgJAOgGIAHgDQAIgEADgKQADgJAAgWIAAgUIAAgXIAAgeQAAgugDgNQgCgOgGgDIgOgFQgRgGAAgJQAAgHAGgFQAFgFANgFIArgOIAegFQAIAAADAFQAEAGAAANIAAARIgBANIgCBJIAAACIgBBHQAAAcACALQADAMAGADIALAFQAPAFAAALQAAALgOAFQgOAFgmAAQgrAAgPgFgAgjiSQgMgKAAgPQAAgQANgMQAOgMATAAQASAAANALQAMAKAAAQQAAAQgOALQgNALgTAAQgTAAgMgKg");
	this.shape_22.setTransform(-79.5,-32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape_23.setTransform(-117.1,-25.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEBUIgVh/IgBgDIAAgHQAAgPAHgIQAHgHAMAAQANAAAGAHQAIAIgBAPIAAAHIgBAEIgTB+g");
	this.shape_24.setTransform(-134.8,-43.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPCvQgOgGgLgJQgKgKgEgPQgEgQAAgrIAAicIgbAAIgIgCIgDgHIAAgHQAAgKAfgZIAMgLIALgKQAegaALAAIAIADQADACAAAEIAAA3IBBAAQAIAAACADQADACAAAIIAAAIQAAAHgDADQgDADgHAAIg8AAIgEADIgCAHIAACPQAAAlAHAKQAGAKARAAQAJgBAOgFIAUgEQAHAAAEADQAEAFAAAFQAAAQgZAQQgYAOgfAAQgSAAgOgEg");
	this.shape_25.setTransform(-150.4,-28.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_26.setTransform(-176.3,-25.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAoDQQgOgFAAgLQAAgLAPgFIALgFQAGgEADgMQADgNAAgeQAAhdgMgXQgMgXgeAAQgPAAgOAJQgOAJgIAPQgGAMgDAXQgCAWAAA5QAAAdACAJQADAKAGADIALAFQAOAFAAALQAAALgOAFQgOAFglAAQguAAgOgFQgOgFAAgNQAAgJAOgFIAIgEQAIgEADgMQADgMAAggIAAgwIAAgsIgCiDQgBgfgFgHQgDgDgRgFQgSgFAAgKQAAgIAIgGQAHgFAagKIAdgIIAagDQAKAAAEAGQAEAFAAANIgBAMIgCB0IAAAOIACAHIAEACIAGgGIAKgMQAPgOAQgHQAQgHASAAQAxAAAZAgQAYAgAABBIABAbIAAAzIAAARQAAAOADAHQADAGAGAEIAHADQAPAGAAAJQAAANgOAFQgOAFguAAQglAAgPgFg");
	this.shape_27.setTransform(-210.3,-32.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAoBlIg+igQgTg1gLgYQgMgYgLgIIgQgHQgOgGAAgLQAAgMANgEQAOgEA3AAQA2AAANAEQANAEAAAMQAAAMgWAIIgCABQgHACgDAEQgEAEABAHQAAAKANAoIAxB+IAUAvQAGAMAEAAQAFAAAFgKIATgqIAGgMQA7iQAAgSQAAgJgEgGQgEgGgKgFIgGgDQgRgHAAgLQAAgMALgEQAMgEAwAAQAtAAAMAEQAMAEAAAMQAAALgRAIIgMAGQgUANgmBjIgZA8Ig3CIIgKAaQgSAugNAAQgOAAgrhwgAh3C9IgEgJQglhRg5iUIgahGIgSgjQgHgMgJgFIgIgDQgTgGAAgMQAAgMANgEQAOgEA3AAQA3AAANAEQAOAEAAAMQAAAMgXAIIgCABQgHACgDAFQgDADAAAHQAAAKAMAiIAwCAIAXA1QAGAKAEAAQAFAAAGgOIAPghQAGgUAPAAQATAAAAAUIgEASIglBcIgJAWQgSAvgMAAQgKAAgKgYg");
	this.shape_28.setTransform(-257.4,-31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whatsinourclassic, new cjs.Rectangle(-289.2,-68.8,583.4,137.7), null);


(lib.vidctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B63100").ss(2,1,1).p("ApVjaISrAAQBaAABABAQBABAAABaIAAAAQAABbhABAQhABAhaAAIyrAAQhaAAhAhAQhAhAAAhbIAAAAQAAhaBAhAQBAhABaAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B63100").s().p("ApVDbQhaAAhAhAQhAhAAAhbIAAAAQAAhaBAhAQBAhABaAAISrAAQBaAABABAQBABAAABaIAAAAQAABbhABAQhABAhaAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vidctarollover, new cjs.Rectangle(-82.6,-22.8,165.3,45.8), null);


(lib.toprightgarnish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seventeenberriestopright();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.toprightgarnish, new cjs.Rectangle(-26.5,-54,53,108), null);


(lib.spiralcutham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjrCPQgOgEAAgNQAAgKAOgFIAIgDQAIgEACgKQADgKAAgWIAAgTIAAgYIAAgRQAAg1gDgPQgCgRgGgDIgNgFQgSgGABgKQAAgGAEgFIATgJIAqgPIAdgFQAHAAAFAEQAEAFAAALIAAAPIAAADIAAADIACAAIACAAIABgBIAGgFIAEgEQAjgfAkAAQANAAAMADQANAEALAIQALAIALANQAKANADAAQAEAAAHgJIAOgNQASgQAOgGQAOgGARABQAiAAAZANQAZAOALAYQANAbABBUIAAAdIAAAPIgBANQAAARADAIQADAHAHAEIAHADQAPAFABAKQAAANgOAEQgOAEgtABQgpgBgOgEQgOgEgBgLQAAgLAQgHIAKgDQAIgEACgPQADgPAAghQAAhWgLgXQgMgWgfAAQghgBgPAeQgPAdAABFIAAAQQAAAfAEALQADAKAHAEIAIADQAOAFgBAKQAAANgNAEQgNAEgtABQgogBgNgEQgOgEAAgLQAAgLAOgFIAMgFQAGgEADgMQACgMAAghQAAhbgLgYQgMgWgfAAQgPgBgOAKQgOAJgIAQQgHANgCAYQgDAWABA2QgBAbADALQADAJAFAEIALAFQAPAFABALQgBALgOAFQgPAFglAAQgtgBgOgFg");
	this.shape.setTransform(244.6,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_1.setTransform(202.7,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABADMQgPgFgBgNQABgMARgGIAOgHQAEgDACgTIADhEIgBgoIgDgMQgDgFgOgCQgOgDg2AAIg9ACQgQACgFAEIgEAJIgBAVIAAAYIACBEQACATAEADIANAHQATAGgBAMQAAANgPAFQgRAFgtAAQguAAgQgFQgQgFAAgNQAAgLASgHIANgHQAGgEADglQACglAAhWIgChsQgDgsgDgFQgDgEgPgGQgQgHAAgLQAAgMANgEQAMgEA1AAQAyAAAOAEQANAEAAAMQABALgTAHIgNAHQgEAEgDASIgCBVQAAAMALAEQALAEAqAAIAYAAIA9gCQASgCAFgEIAEgFIABgMIAAgNIgDhHQgCgPgEgDIgOgHQgRgHgBgLQAAgMAOgEQANgEA0AAQA0AAAMAEQANAEAAAMQAAAMgSAGIgNAHQgGAEgDAoQgCAmAABOIACBwQACAsAFAFQACAFAQAGQAPAGAAALQAAANgQAFQgRAFgsAAQgvAAgQgFg");
	this.shape_2.setTransform(164.6,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPCuQgOgEgLgKQgKgKgEgPQgEgRAAgrIAAiaIgbAAIgIgCIgDgIIAAgHQAAgKAfgaIAMgKIALgJQAegbALAAIAIACQADADAAAEIAAA3IBBAAQAIAAACACQADAEAAAIIAAAGQAAAIgDAEQgDADgHAAIg8AAIgEACIgCAHIAACPQAAAlAHAKQAGAJARAAQAJAAAOgEIAUgFQAHAAAEAEQAEADAAAHQAAAQgZAOQgYAPgfAAQgSAAgOgFg");
	this.shape_3.setTransform(115.7,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA/CTQgEgFAAgJIAAgVIAAgBIgCAAQgDAAgHAHIgEAEQgOAOgRAHQgRAHgVAAQgWAAgTgIQgTgIgNgPQgOgRgFgXQgGgXAAg+IAAgTIAAgWIAAgFQAAgYgDgHQgDgGgLgEIgLgEQgRgEAAgLQAAgHAGgFQAGgFAUgHIAogKIAegEQAIAAAEAFQADAGAAANIAAALIgDBtQAAA6AMAXQAMAWAeAAQAgAAAPgdQAOgdAAhGIAAgXQAAgWgDgHQgDgHgKgDIgMgEQgQgEAAgLQAAgHAGgEQAFgFAUgIIAngKIAegEQAJAAAEAFQADAFAAAOIAAAQIgEB3IABAxIACATQACAMAPAGIAFACQARAFAAAKQAAAGgFAFQgGAFgMAFIgpANQgUAFgLAAQgIAAgEgEg");
	this.shape_4.setTransform(87.4,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtDKQgmgOgegaQghgfgSgrQgRgrgBgyQAAgpAMgjQAMgiAXgcQAcgkApgSQApgSAvAAIAkACIA4ANIAGgDIAWgEIAKACIAIAJQAJAPAGAXQAGAWAAARQAAAMgFAHQgEAFgJAAQgNAAgVgaIgTgUQgPgRgYgIQgXgIgbgBQg4AAghAoQghAmAABEQAABVAqA3QApA3A/AAQAaAAAWgIQAXgIAPgPIANgRQANgQAJgBQAHABAFAHQAEAJABANQAAAbgIAPQgHAQgNAAIgEAAIgDgBQgbAPgbAGQgcAIgdgBQgrAAgngOg");
	this.shape_5.setTransform(50.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5AeQgJAAgDgDQgEgEAAgHIACgOIAHgQQAEgIAEgDQAEgDAMABIAOAAIAaAAIAxgBIAIgBQAJAAAEADQAEADAAAIQAAAQgJAOQgJANgNAAIgOAAIgQgBIhAADIgGAAg");
	this.shape_6.setTransform(20,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwDQQgPgEAAgNQABgKALgFIAPgIQAFgEADgSIABg6IAAgtIAAg2IAAgWQAAhJgCgVQgDgVgGgDIgSgHQgSgFAAgKQAAgHAFgFQAGgFAUgHIAogLIAcgEQAKAAADAFQADAGABAOIgBAVQgEBoAABoIADBjQABAVAFAFIAQAJQAOAFAAAMQAAAKgPAGQgOAEgmAAQgsAAgNgFg");
	this.shape_7.setTransform(1.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_8.setTransform(-22.1,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhXCPQgOgEAAgNQAAgKANgEIAIgEQAIgEADgKQADgKAAgWIAAgTIgBgYIAAgRQAAg1gCgPQgCgRgHgDIgNgFQgRgGAAgKQAAgGAFgFQAFgFANgFIAngNIAagFQAOAAAFAnIABAGIABABQAPgXARgNQAQgLAQAAQAUAAAMALQAMANAAAUQAAAUgJAMQgJAMgRgBIgOgDIgMgIIgHgLQgDgIgEAAQgUAAgHAcQgHAbAABXQAAAaACAMQAEANAHAEIAMADQARAHAAALQAAALgQAEQgQAFgnABQgsgBgOgFg");
	this.shape_9.setTransform(-48.8,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzDPQgOgFAAgNQAAgJAOgGIAIgDQAHgEADgKQADgJAAgWIAAgUIgBgXIAAgeQAAgugBgNQgDgOgGgDIgOgFQgRgGAAgJQAAgHAFgFQAGgFAMgFIAsgOIAegFQAIAAAEAFQADAGAAANIAAARIgBANIgCBJIAAACIgBBHQAAAcADALQACAMAHADIAKAFQAPAFAAALQAAALgPAFQgNAFgnAAQgrAAgOgFgAgjiSQgNgKAAgPQAAgQAOgMQAOgMATAAQASAAANALQAMAKAAAQQAAAQgNALQgOALgTAAQgTAAgMgKg");
	this.shape_10.setTransform(-69.3,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiMDGQgPgFAAgMQAAgKANgFIAOgHQAGgGADgXQACgXAAhIIAAgvQAAhOgDgXQgDgXgGgEIgOgFQgRgGAAgJQAAgHAFgFQAFgFAMgEIApgOQATgFAKAAQAIAAAEAFQAEAEAAAKIAAAOIAAAGIABACIAMgIIALgIQASgOAQgGQAQgGARAAQA2AAAiAnQAiAoAAA/QAABEgmAtQgnAtg7AAQgYAAgJgHQgKgHAAgMQAAgGAEgFQAFgFAJAAIAHACIAKABQAgAAATgbQATgbAAgsQAAgxgUgfQgWgeggAAQgeAAgRARQgSAQAAAsIAAC4IACAdQACALADAEQAEAEANAEIALAEIAGAFIADAIQAAALgRAFQgRAEgqAAQgqAAgOgEg");
	this.shape_11.setTransform(-95.8,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhHDSQgggIgVgMQgLgGgIgaQgHgYAAghQAAgNAFgIQAFgGAJAAQAOAAAOAZIAHANQASAgAWAPQAWAPAeAAQAfAAAWgTQAWgTAAgcQAAgohWglIgJgFQhGgdgXgbQgXgZAAgpQAAg0AmgiQAnghA9AAIAiADIAoAJIAMgHIAJgDQAHAAAGAEQAGAFAGALQAJARAGAUQAGASAAAPQAAAJgFAGQgEAFgIABQgQgBgOgUIgFgGQgQgVgTgLQgTgKgZAAQgfAAgTAPQgTAPAAAbQAAAXAQAQQAPAPA+AbIAMAFQA0AWAXAUQAQAPAIATQAIAUAAAWQAAA8gpAhQgpAhhJAAQgjAAgggGg");
	this.shape_12.setTransform(-129.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spiralcutham, new cjs.Rectangle(-148.1,-36.4,422.1,72.9), null);


(lib.spinachpng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenspinach();
	this.instance.parent = this;
	this.instance.setTransform(-78,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spinachpng, new cjs.Rectangle(-78,-34,155,68), null);


(lib.seventeenturkey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenturkey();
	this.instance.parent = this;
	this.instance.setTransform(-169.5,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenturkey_1, new cjs.Rectangle(-169.5,-107,339,214), null);


(lib.seventeentable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeentable();
	this.instance.parent = this;
	this.instance.setTransform(-485,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeentable_1, new cjs.Rectangle(-485,-125,970,250), null);


(lib.seventeencranberriespng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeencranberries();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeencranberriespng, new cjs.Rectangle(-55.5,-55.5,111,111), null);


(lib.roastedturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFDAQgOgMAAgTQAAgOAKgKQAKgLAOAAIANACIAJAGIAIAMQAHALAGAAQAPAAAPgWQAPgVAAgWQAAgagUgtIgDgHIguhlIgbg5QgFgKgRgHIAAgBQgKgEgEgDQgDgEAAgHQAAgMAPgGQAPgEAqAAQArAAAOAEQAOAFAAALIgCAJIgFAGIgKAEQgLAFAAAFIAFAWIAYA6IAXA2QAHAOAFABQACgBAHgOIATgtIAVg5QAHgVAAgHQAAgJgQgJQgQgJAAgHQAAgLANgEQANgFAhABQAjAAAMAEQAMAFAAALQAAALgQAFIgMADQgRAKgSAxIgJAWIglBdQgvB4geAlQgfAkgqgBQgWABgNgMg");
	this.shape.setTransform(197,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_1.setTransform(166.6,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABfDUIgNgCQgMgEgcglIgMgPIgFgGQhGhcgGABQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAIgCANIAAANIACA9QACARAEAEIARAJQANAFAAAMQAAAKgOAGQgPAEgmAAQgsAAgOgFQgOgEAAgNQAAgKAOgGIAIgCQAHgFAEgOQADgOAAgiIgBgkIAAgtIAAgjIgBhsQgCgagFgFQgDgEgNgEIgKgCIgLgGIgCgIQAAgHAGgFQAFgFAVgHIAngLIAegEQAJAAADAFQAEAGAAAOIgCA3IgCBLIAABIIACAPQABAEADgBIAMgHIAVgQIAcgdQAIgIAAgEQAAgDgLgGQgKgFAAgJQAAgNAOgFQAPgGAqABQAbgBANAGQANAFAAALQAAAOgVAFQgWAGgJAFQgKAGgZAYIgEAFIgKALIgDAFQAAAGAZAhIADAEIAyA9QAVAYALAIQAHAFATAGQASAGAAAMQAAAMgNAGQgOAFgfAAg");
	this.shape_2.setTransform(135.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXCPQgOgEAAgNQAAgKANgEIAIgEQAIgEADgKQADgKAAgWIAAgTIgBgYIAAgRQAAg1gCgPQgCgRgHgDIgNgFQgRgGAAgKQAAgGAFgFQAFgFANgFIAngNIAagFQAOAAAFAnIABAGIABABQAPgXARgNQAQgLAQAAQAUAAAMALQAMANAAAUQAAAUgJAMQgJAMgRgBIgOgDIgMgIIgHgLQgDgIgEAAQgUAAgHAcQgHAbAABXQAAAaACAMQAEANAHAEIAMADQARAHAAALQAAALgQAEQgQAFgnABQgsgBgOgFg");
	this.shape_3.setTransform(107.7,6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA/CTQgEgFAAgJIAAgVIAAgBIgCAAQgDAAgHAHIgEAEQgOAOgRAHQgRAHgVAAQgWAAgTgIQgTgIgNgPQgOgRgFgXQgGgXAAg+IAAgTIAAgWIAAgFQAAgYgDgHQgDgGgLgEIgLgEQgRgEAAgLQAAgHAGgFQAGgFAUgHIAogKIAegEQAIAAAEAFQADAGAAANIAAALIgDBtQAAA6AMAXQAMAWAeAAQAgAAAPgdQAOgdAAhGIAAgXQAAgWgDgHQgDgHgKgDIgMgEQgQgEAAgLQAAgHAGgEQAFgFAUgIIAngKIAegEQAJAAAEAFQADAFAAAOIAAAQIgEB3IABAxIACATQACAMAPAGIAFACQARAFAAAKQAAAGgFAFQgGAFgMAFIgpANQgUAFgLAAQgIAAgEgEg");
	this.shape_4.setTransform(78.1,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8DOQgRgFAAgNQAAgLAQgGQAQgGACgFQAEgFACgvIABiJIAAhMIgDgvQgBgIgFgCQgFgDgMAAIgNAAQgTAAgLAFQgMAFgIALIgJAUIgIATIgJAJQgFAEgFAAQgJAAgEgIQgEgHAAgSQAAgmAJgYQAJgXAOAAIAEAAQAWAEAjAAICqAAQAjAAAYgEIADAAQAOAAAJAXQAJAYAAAmQAAARgEAIQgEAIgJAAIgKgEIgJgJIgIgTIgJgUQgIgLgMgFQgLgFgUAAIgMAAQgMAAgFADQgFACgBAJIgCAuIgBBMIACCJQABAvAEAFQADAFAPAGQAQAGAAALQAAANgRAFQgQAFgtAAQgsAAgQgFg");
	this.shape_5.setTransform(41.8,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah+CvQgjgnAAg+QAAhHAogsQAngsA+AAIAUACQAJADAFAGQAFAGAAAIQAAAQgTAAIgIgBIgHAAQghAAgTAaQgTAZAAAuQAAAxAVAeQAUAfAhAAQAeAAARgRQAQgRAAggIAAhPIAAiFQAAgVgDgHQgEgIgLgFIgIgCQgRgEgBgLQAAgIAHgFQAIgGAVgIIAhgJIAbgDQAKAAAEAFQAEAFABAOIgBAOIgDCyIACB6QACAbAEAEIAVAHQAOAEAAAJQAAAOgpANIgdAIIgWACQgJABgDgFQgEgEAAgKIAAgOIAAgGIgCgCIgJAHIgMAJQgSANgPAHQgRAFgSABQg2AAgigog");
	this.shape_6.setTransform(-10,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_7.setTransform(-43.9,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPCuQgOgEgLgKQgKgKgEgPQgEgRAAgrIAAiaIgbAAIgIgCIgDgIIAAgHQAAgKAfgaIAMgKIALgJQAegbALAAIAIACQADADAAAEIAAA3IBBAAQAIAAACACQADAEAAAIIAAAGQAAAIgDAEQgDADgHAAIg8AAIgEACIgCAHIAACPQAAAlAHAKQAGAJARAAQAJAAAOgEIAUgFQAHAAAEAEQAEADAAAHQAAAQgZAOQgYAPgfAAQgSAAgOgFg");
	this.shape_8.setTransform(-69.7,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape_9.setTransform(-93.2,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_10.setTransform(-121.1,6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhpBsQgpgqAAhBQAAhAAsgsQAqgrBBAAQA+AAAoApQAoAoAAA/QAABDgrAtQgrAtg+AAQg/AAgpgrgAg3hWQgSAYAAAmQABA5AYAnQAZAmAhAAQAdAAASgXQARgZAAgmQAAg5gYgmQgZgmgiAAQgdAAgRAXg");
	this.shape_11.setTransform(-153.6,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA+CRQgbhdgVgSQgUgTgdAAQgXAAAAgTQAAgSATAAQAwAAAXgSQAXgTAAgnQAAgngXgTQgYgTgsgBQgXAAgIAEQgJADgDAIIgDAaIgBA5IAACBIACBWQABAVAGAEIANAGQASAGAAAMQAAANgQAFQgQAFguAAQgtAAgRgFQgQgFAAgNQAAgMASgGIANgHQAGgFADgjQACgiAAhbIgChtQgCgqgEgFQgDgFgQgFQgPgHAAgLQAAgKAJgGQAJgEASAAIA/AAIA7gCIAugCQA/AAAhAcQAiAbAAAzQAAAmgWAcQgXAcgoAMIAAADQAfAFASAUQASATAOAvIAHAdQAMAtARAAIAIAAIAKgBQAGAAAEAEQAFAFAAAFQAAAOgRAJQgQAJgcAAQg5AAgUhEg");
	this.shape_12.setTransform(-190.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roastedturkey, new cjs.Rectangle(-213.9,-36.4,427.8,72.9), null);


(lib.organicturkeygravy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape.setTransform(89.2,39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_1.setTransform(61.1,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzDPQgOgFAAgNQAAgJAOgGIAHgDQAIgEADgKQADgJAAgWIAAgUIAAgXIAAgeQAAgugDgNQgCgOgGgDIgNgFQgSgGAAgJQAAgHAGgFQAFgFANgFIArgOIAegFQAIAAADAFQAEAGAAANIAAARIgBANIgCBJIAAACIgBBHQAAAcACALQADAMAGADIALAFQAPAFAAALQAAALgOAFQgOAFgmAAQgrAAgPgFgAgjiSQgMgKAAgPQAAgQANgMQAOgMATAAQASAAANALQAMAKAAAQQAAAQgOALQgNALgTAAQgTAAgMgKg");
	this.shape_2.setTransform(37.1,32.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiWDOQgQgFAAgNQAAgMASgHIAMgGQAHgFACgjQADgiAAhbIgChtQgDgqgEgFQgDgFgPgGQgPgGAAgLQAAgLAIgFQAJgFASAAIAeAAIAiAAIA6gBIAugCQBBAAAhAcQAgAcAAA3QAAA9goAgQgoAfhNAAQgdAAAAgUQAAgUAZAAQAkAAAXgTQAWgTAAgrQAAgogWgSQgXgUgvAAQgVAAgJAEQgIADgDAIIgDAaIgCA9IAAB/IACBSQACAWAFAEIANAGQASAHAAAMQAAANgQAFQgQAFguAAQgtAAgQgFg");
	this.shape_3.setTransform(12,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_4.setTransform(-38.4,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwDQQgOgEAAgNQgBgKAMgFIAQgIQAEgEADgSIACg6IgBgtIAAg2IAAgWQAAhJgDgVQgCgVgGgDIgSgHQgSgFgBgKQABgHAFgFQAGgFAUgHIAngLIAegEQAIAAAEAFQADAGAAAOIAAAVQgDBogBBoIACBjQACAVAFAFIARAJQANAFgBAMQABAKgOAGQgPAEgmAAQgrAAgOgFg");
	this.shape_5.setTransform(-62.7,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiMDGQgPgFAAgMQAAgKANgFIAOgHQAGgGADgXQACgXAAhIIAAgvQAAhOgDgXQgDgXgGgEIgOgFQgRgGAAgJQAAgHAFgFQAFgFAMgEIApgOQATgFAKAAQAIAAAEAFQAEAEAAAKIAAAOIAAAGIABACIAMgIIALgIQASgOAQgGQAQgGARAAQA2AAAiAnQAiAoAAA/QAABEgmAtQgnAtg7AAQgYAAgJgHQgKgHAAgMQAAgGAEgFQAFgFAJAAIAHACIAKABQAgAAATgbQATgbAAgsQAAgxgUgfQgWgeggAAQgeAAgRARQgSAQAAAsIAAC4IACAdQACALADAEQAEAEANAEIALAEIAGAFIADAIQAAALgRAFQgRAEgqAAQgqAAgOgEg");
	this.shape_6.setTransform(-88.8,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiMDGQgPgFAAgMQAAgKANgFIAOgHQAGgGADgXQACgXAAhIIAAgvQAAhOgDgXQgDgXgGgEIgOgFQgRgGAAgJQAAgHAFgFQAFgFAMgEIApgOQATgFAKAAQAIAAAEAFQAEAEAAAKIAAAOIAAAGIABACIAMgIIALgIQASgOAQgGQAQgGARAAQA2AAAiAnQAiAoAAA/QAABEgmAtQgnAtg7AAQgYAAgJgHQgKgHAAgMQAAgGAEgFQAFgFAJAAIAHACIAKABQAgAAATgbQATgbAAgsQAAgxgUgfQgWgeggAAQgeAAgRARQgSAQAAAsIAAC4IACAdQACALADAEQAEAEANAEIALAEIAGAFIADAIQAAALgRAFQgRAEgqAAQgqAAgOgEg");
	this.shape_7.setTransform(-123.5,44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA/DQQgRgFAAgOQAAgKAUgIIAFgCQAIgCADgEQADgEABgHIgFgZIgKgeIgGgJIgEgCIgXgDIgrAAIgaAAQgYAAAAgUQAAgYAaAAIANAAIAfAAIAeACIgehPIgdhEIgHAAIgeBIIgdBLIgcBKQgHARAAAKQAAAJAFAHQADAGAJADIAKAEQASAGAAAMQAAAOgPAFQgPAFgsAAQgsAAgPgFQgOgFAAgOQAAgLARgHIALgFQAXgOATgxIAGgSIAqhnIAKgaQAqhnAKgsQADgOAGgDQAGgEAQAAQAKAAAGAEQAHAEAGALIAsBgIA5CIIANAjQAhBUATAKIAKAEQATAFAAAMQAAAOgSAFQgRAFgzAAQg0AAgRgFg");
	this.shape_8.setTransform(-161,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AivCwQg1gqAAhDQAAgmARgcQARgcAmgaIABgDQgMgNgHgOQgGgOAAgPQAAgtAhgeQAigdA1AAQAjABAZAOQAYANAAASQAAAGgGAGQgGAEgIAAIgXgIQgVgHgQAAQgYAAgOAPQgOAPAAAaQAAAKAEAKQAEAHAHAIQAHAGANAHIARAGIAGACIACAEQAAAGgLAMQgKANgKAAIgMgDIgUgHQgQANgJAVQgJAVAAAaQAAA2AlAlQAkAjA4ABQAvAAAdgZQAcgYAAgnQAAgZgLgOQgMgPgUAAQgUAAgNAMQgMAMAAATIAAAFIAAADIgFACIgEAAQgLAAgGgIQgGgIAAgOQAAgrB/g6IAIgEQAigQARgSQASgSAAgTQAAgOgIgHQgHgGgPAAIgMAAIgKABQgHAAgDgDQgEgEAAgGQAAgNAQgJQAPgIAZAAQAfAAASARQASARAAAdQAAAlgfAdQgfAdhBAZQAbAKAOAWQAOAVAAAeQAAAVgJAWQgIAUgRASQgaAdgoAPQgoANgzAAQhYAAg1gog");
	this.shape_9.setTransform(103,-32.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiOCQQgOgFAAgNQAAgKAOgFIAIgDQAHgEADgKQADgKAAgVIAAgUIAAgXIAAgeQgBgugBgNQgDgOgGgDIgOgFQgRgGAAgJQAAgHAFgFQAGgFAMgFIAqgNIAegGQAJABADAEQAEAEAAAKIAAATIAAADIACABIABAAIABgBIAIgHIAGgFQAfgdAjgBQAWAAATAJQATAKANAPQAOAQAFAWQAGAWAAAvIAAAmIgBATIAAAQQAAAVADAIQAEAJAGAEIAIADQAOAFAAAKQAAAMgNAGQgNADgtAAQgpAAgNgDQgOgFAAgLQAAgLAOgGIALgEQAHgEACgMQADgNABgfQAAhcgNgXQgMgYgeAAQgPABgOAIQgNAKgIAPQgGANgDAWQgCAXAAA5QAAAcACAJQACAKAHADIAKAEQAPAGAAALQAAALgPAFQgNAEgnAAQgsAAgOgEg");
	this.shape_10.setTransform(42.9,-26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzDPQgOgFAAgNQAAgJAOgGIAHgDQAIgEADgKQADgJAAgWIAAgUIAAgXIAAgeQAAgugCgNQgDgOgGgDIgOgFQgRgGAAgJQAAgHAGgFQAFgFANgFIArgOIAegFQAIAAADAFQAEAGAAANIAAARIgBANIgCBJIAAACIgBBHQAAAcADALQACAMAHADIAKAFQAPAFAAALQAAALgOAFQgOAFgnAAQgqAAgPgFgAgjiSQgMgKAAgPQAAgQANgMQAOgMATAAQASAAANALQAMAKAAAQQAAAQgOALQgNALgTAAQgTAAgMgKg");
	this.shape_11.setTransform(16.9,-32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABfDUIgNgCQgMgFgcgjIgMgQIgFgHQhGhagGgBQgDAAgBAEIgCAMIAAAMIACA9QACARAEAGIARAIQANAGAAAKQAAAMgOAEQgPAFgmAAQgsAAgOgFQgOgFAAgNQAAgJAOgGIAIgDQAHgEAEgOQADgOAAgiIgBgkIAAgtIAAgiIgBhsQgCgbgFgGQgDgDgNgEIgKgDIgLgEIgCgJQAAgHAGgFQAFgFAVgHIAngLIAegEQAJAAADAGQAEAFAAANIgCA4IgCBMIAABIIACAOQABAEADAAIAMgHIAVgSIAcgbQAIgJAAgEQAAgDgLgGQgKgFAAgJQAAgNAOgFQAPgFAqgBQAbABANAFQANAFAAAMQAAANgVAGQgWAEgJAGQgKAGgZAYIgEAFIgKAKIgDAGQAAAGAZAhIADAEIAyA8QAVAZALAIQAHAFATAGQASAFAAAMQAAANgNAFQgOAGgfAAg");
	this.shape_12.setTransform(-6.8,-32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiMDGQgPgFAAgMQAAgKANgFIAOgHQAGgGADgXQACgXAAhIIAAgvQAAhOgDgXQgDgXgGgEIgOgFQgRgGAAgJQAAgHAFgFQAFgFAMgEIApgOQATgFAKAAQAIAAAEAFQAEAEAAAKIAAAOIAAAGIABACIAMgIIALgIQASgOAQgGQAQgGARAAQA2AAAiAnQAiAoAAA/QAABEgmAtQgnAtg7AAQgYAAgJgHQgKgHAAgMQAAgGAEgFQAFgFAJAAIAHACIAKABQAgAAATgbQATgbAAgsQAAgxgUgfQgWgeggAAQgeAAgRARQgSAQAAAsIAAC4IACAdQACALADAEQAEAEANAEIALAEIAGAFIADAIQAAALgRAFQgRAEgqAAQgqAAgOgEg");
	this.shape_13.setTransform(-42.4,-20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjqCQQgPgFAAgNQAAgKAPgFIAHgDQAIgEADgKQACgKAAgVIAAgUIAAgXIAAgRQAAg2gCgQQgDgPgGgEIgOgFQgQgGAAgJQAAgHAEgFIATgKIArgOIAcgGQAHAAAEAGQAFAEAAAKIAAAPIAAAEIABADIABABIACAAIABgBIAGgHIAEgCQAjghAjAAQAOAAAMAFQANADAMAJQAKAGAKAOQALANADAAQAEAAAHgJIAOgNQASgQAOgGQAOgFARgBQAiAAAZAOQAZAOALAYQAOAaAABVIAAAcIAAAQIgBAOQAAARADAGQADAIAHAEIAIADQAPAFAAAKQAAAMgOAGQgOADgtAAQgqAAgOgDQgOgFABgLQAAgLAPgGIAKgFQAIgEADgOQACgOAAgjQAAhUgLgXQgMgYgfAAQgiAAgOAeQgPAdAABGIAAAPQAAAgADAJQAEALAHAEIAHADQAOAFAAAKQAAAMgNAGQgNADgtAAQgnAAgOgDQgOgFAAgLQAAgLAOgGIAMgEQAGgEACgLQADgNAAggQAAhcgMgXQgMgYgeAAQgQABgOAIQgNAKgIAPQgGANgDAYQgCAXAAA3QAAAaACAKQADAKAGAEIAKAEQAPAGABALQAAALgPAFQgOAEgnAAQgsAAgNgEg");
	this.shape_14.setTransform(-85.9,-26);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA/CTQgEgFAAgJIAAgVIAAgBIgCAAQgDAAgHAHIgEAEQgOAOgRAHQgRAHgVAAQgWAAgTgIQgTgIgNgPQgOgRgFgXQgGgXAAg+IAAgTIAAgWIAAgFQAAgYgDgHQgDgGgLgEIgLgEQgRgEAAgLQAAgHAGgFQAGgFAUgHIAogKIAegEQAIAAAEAFQADAGAAANIAAALIgDBtQAAA6AMAXQAMAWAeAAQAgAAAPgdQAOgdAAhGIAAgXQAAgWgDgHQgDgHgKgDIgMgEQgQgEAAgLQAAgHAGgEQAFgFAUgIIAngKIAegEQAJAAAEAFQADAFAAAOIAAAQIgEB3IABAxIACATQACAMAPAGIAFACQARAFAAAKQAAAGgFAFQgGAFgMAFIgpANQgUAFgLAAQgIAAgEgEg");
	this.shape_15.setTransform(-130.1,-25.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiWDOQgQgFAAgNQAAgMASgHIAMgGQAHgFACgjQADgiAAhbIgChtQgDgqgEgFQgDgFgPgGQgPgGAAgLQAAgLAIgFQAJgFASAAIAeAAIAiAAIA6gBIAugCQBBAAAhAcQAgAcAAA3QAAA9goAgQgoAfhNAAQgdAAAAgUQAAgUAZAAQAkAAAXgTQAWgTAAgrQAAgogWgSQgXgUgvAAQgVAAgJAEQgIADgDAIIgDAaIgCA9IAAB/IACBSQACAWAFAEIANAGQASAHAAAMQAAANgQAFQgQAFguAAQgtAAgQgFg");
	this.shape_16.setTransform(-164.1,-32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.organicturkeygravy, new cjs.Rectangle(-184.3,-68.8,313.1,137.7), null);


(lib.organiccranberrysauce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape.setTransform(336.5,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_1.setTransform(312.7,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhXCPQgOgEAAgNQAAgKANgEIAIgEQAIgEADgKQADgKAAgWIAAgTIgBgYIAAgRQAAg1gCgPQgCgRgHgDIgNgFQgRgGAAgKQAAgGAFgFQAFgFANgFIAngNIAagFQAOAAAFAnIABAGIABABQAPgXARgNQAQgLAQAAQAUAAAMALQAMANAAAUQAAAUgJAMQgJAMgRgBIgOgDIgMgIIgHgLQgDgIgEAAQgUAAgHAcQgHAbAABXQAAAaACAMQAEANAHAEIAMADQARAHAAALQAAALgQAEQgQAFgnABQgsgBgOgFg");
	this.shape_2.setTransform(286.6,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhpBsQgpgqAAhBQAAhAAsgsQAqgrBBAAQA+AAAoApQAoAoAAA/QAABDgrAtQgrAtg+AAQg/AAgpgrgAg3hWQgSAYAAAmQABA5AYAnQAYAmAjAAQAcAAASgXQARgZAAgmQAAg5gYgmQgZgmgiAAQgdAAgRAXg");
	this.shape_3.setTransform(258.2,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjqCPQgPgEAAgNQAAgKAPgFIAHgDQAIgEADgKQACgKAAgWIAAgTIAAgYIAAgRQAAg1gCgPQgDgRgGgDIgOgFQgQgGAAgKQAAgGAEgFIATgJIArgPIAcgFQAHAAAEAEQAFAFAAALIAAAPIAAADIABADIABAAIACAAIABgBIAGgFIAEgEQAjgfAjAAQAOAAAMADQANAEAMAIQAKAIAKANQALANADAAQAEAAAHgJIAOgNQASgQAOgGQAOgGARABQAiAAAZANQAZAOALAYQAOAbAABUIAAAdIAAAPIgBANQAAARADAIQADAHAHAEIAIADQAPAFAAAKQAAANgOAEQgOAEgtABQgqgBgOgEQgOgEABgLQAAgLAPgHIAKgDQAIgEADgPQACgPAAghQAAhWgLgXQgMgWgfAAQgigBgOAeQgPAdAABFIAAAQQAAAfADALQAEAKAHAEIAHADQAOAFAAAKQAAANgNAEQgNAEgtABQgngBgOgEQgOgEAAgLQAAgLAOgFIAMgFQAGgEACgMQADgMAAghQAAhbgMgYQgMgWgeAAQgQgBgOAKQgNAJgIAQQgGANgDAYQgCAWAAA2QAAAbACALQADAJAGAEIAKAFQAPAFABALQAAALgPAFQgOAFgnAAQgsgBgNgFg");
	this.shape_4.setTransform(214.7,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoDQQgOgFAAgLQAAgLAPgFIALgFQAGgEADgMQADgNAAgeQAAhdgMgXQgMgXgeAAQgPAAgOAJQgOAJgIAPQgGAMgDAXQgCAWAAA5QAAAdACAJQADAKAGADIALAFQAOAFAAALQAAALgOAFQgOAFglAAQguAAgOgFQgOgFAAgNQAAgJAOgFIAIgEQAIgEADgMQADgMAAggIAAgwIAAgsIgCiDQgBgfgFgHQgDgDgRgFQgSgFAAgKQAAgIAIgGQAHgFAagKIAdgIIAagDQAKAAAEAGQAEAFAAANIgBAMIgCB0IAAAOIACAHIAEACIAGgGIAKgMQAPgOAQgHQAQgHASAAQAxAAAZAgQAYAgAABBIABAbIAAAzIAAARQAAAOADAHQADAGAGAEIAHADQAPAGAAAJQAAANgOAFQgOAFguAAQglAAgPgFg");
	this.shape_5.setTransform(153.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhcBtQgogrAAg+QAAhCArgsQAsgsA/AAQAxAAAhAZQAhAYAAAiQAAAOgJAIQgJAJgOAAQgQAAgIgIQgJgHgKgXQgKgVgKgIQgMgJgSAAQghAAgSAZQgTAaAAAsQAAAzAbAgQAbAhAoAAQAPAAANgEQAMgEAMgIIALgIQAQgMAIAAQAHAAADADQADAEAAAGQAAAIgGAJQgGALgJAIQgYAUgYAKQgYAJgeAAQg7AAgqgqg");
	this.shape_6.setTransform(121.9,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA/CTQgEgFAAgJIAAgVIAAgBIgCAAQgDAAgHAHIgEAEQgOAOgRAHQgRAHgVAAQgWAAgTgIQgTgIgNgPQgOgRgFgXQgGgXAAg+IAAgTIAAgWIAAgFQAAgYgDgHQgDgGgLgEIgLgEQgRgEAAgLQAAgHAGgFQAGgFAUgHIAogKIAegEQAIAAAEAFQADAGAAANIAAALIgDBtQAAA6AMAXQAMAWAeAAQAgAAAPgdQAOgdAAhGIAAgXQAAgWgDgHQgDgHgKgDIgMgEQgQgEAAgLQAAgHAGgEQAFgFAUgIIAngKIAegEQAJAAAEAFQADAFAAAOIAAAQIgEB3IABAxIACATQACAMAPAGIAFACQARAFAAAKQAAAGgFAFQgGAFgMAFIgpANQgUAFgLAAQgIAAgEgEg");
	this.shape_7.setTransform(88.9,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjrCPQgOgEAAgNQAAgKAOgFIAIgDQAIgEACgKQADgKAAgWIAAgTIAAgYIAAgRQAAg1gDgPQgCgRgGgDIgNgFQgSgGABgKQAAgGAEgFIATgJIAqgPIAdgFQAHAAAEAEQAFAFAAALIAAAPIAAADIAAADIACAAIACAAIABgBIAGgFIAEgEQAjgfAjAAQAOAAAMADQANAEALAIQALAIAKANQALANADAAQAEAAAHgJIAOgNQASgQAOgGQAOgGARABQAiAAAZANQAZAOALAYQANAbABBUIAAAdIAAAPIgBANQAAARADAIQADAHAHAEIAHADQAQAFAAAKQAAANgOAEQgOAEgtABQgqgBgOgEQgOgEABgLQAAgLAPgHIAKgDQAIgEADgPQACgPAAghQAAhWgLgXQgMgWgfAAQgigBgOAeQgPAdAABFIAAAQQAAAfAEALQADAKAHAEIAIADQAOAFgBAKQAAANgNAEQgNAEgtABQgngBgOgEQgOgEAAgLQAAgLAOgFIAMgFQAGgEACgMQADgMAAghQAAhbgMgYQgLgWgfAAQgQgBgOAKQgNAJgIAQQgHANgCAYQgDAWABA2QgBAbADALQADAJAFAEIALAFQAPAFABALQAAALgPAFQgOAFgnAAQgsgBgOgFg");
	this.shape_8.setTransform(44.7,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhpBsQgpgqAAhBQAAhAArgsQArgrBAAAQA/AAAoApQAoAoAAA/QAABDgrAtQgqAtg/AAQg/AAgpgrgAg3hWQgRAYgBAmQAAA5AZAnQAYAmAjAAQAcAAASgXQARgZAAgmQAAg5gZgmQgYgmghAAQgeAAgRAXg");
	this.shape_9.setTransform(-14.7,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape_10.setTransform(-44.1,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah+CvQgjgnABg+QAAhHAngsQAngsA+AAIAVACQAIADAFAGQAFAGAAAIQAAAQgTAAIgIgBIgHAAQghAAgTAaQgTAZAAAuQgBAxAWAeQAUAfAhAAQAeAAARgRQAQgRAAggIAAhPIAAiFQABgVgEgHQgEgIgLgFIgIgCQgSgEAAgLQABgIAGgFQAIgGAVgIIAhgJIAbgDQAKAAAEAFQAEAFAAAOIAAAOIgDCyIACB6QABAbAGAEIAUAHQAOAEAAAJQAAAOgpANIgdAIIgWACQgIABgEgFQgEgEAAgKIAAgOIAAgGIgCgCIgJAHIgMAJQgRANgRAHQgQAFgSABQg2AAgigog");
	this.shape_11.setTransform(-89.5,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiOCPQgOgEAAgNQAAgKAOgFIAIgDQAHgEADgKQADgKAAgWIAAgTIgBgYIAAgcQAAgugBgOQgDgOgGgDIgOgFQgRgGAAgKQAAgGAFgFQAGgFAMgFIAqgOIAegEQAJgBADAFQAEAEAAAKIAAATIAAADIACAAIABAAIABgBIAHgFIAHgGQAfgdAjAAQAWAAATAJQATAIANAQQAOAQAFAWQAGAWAAAuIAAAnIgBATIAAAQQAAAVADAJQAEAIAGAEIAIADQAOAFAAAKQAAANgNAEQgNAEgtABQgpgBgNgEQgOgEAAgLQAAgLAOgFIALgFQAHgEACgNQADgMABggQAAhbgNgYQgMgWgeAAQgPgBgOAKQgNAJgIAQQgGAMgDAXQgCAWAAA4QAAAdACAKQACAIAHAEIAKAFQAPAFAAALQAAALgPAFQgNAFgnAAQgsgBgOgFg");
	this.shape_12.setTransform(-125.4,6.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_13.setTransform(-158.2,6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgOANgSAAQgSAAgNgNg");
	this.shape_14.setTransform(-182.4,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgOANgSAAQgSAAgNgNg");
	this.shape_15.setTransform(-198.9,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape_16.setTransform(-215.3,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.organiccranberrysauce, new cjs.Rectangle(-225.4,-36.4,572.5,72.9), null);


(lib.ordernowvid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAtIgVhDIgBAAIgVBDIgTAAIgehZIAUAAIAUBEIAAAAIAWhEIASAAIAVBEIABAAIAUhEIATAAIgeBZg");
	this.shape.setTransform(36.1,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAsQgJgDgGgHQgHgGgEgJQgDgJgBgKQABgJADgJQAEgJAHgGQAGgGAJgEQAJgDAJAAQAKAAAJADQAJAEAGAGQAHAGAEAJQADAJAAAJQAAAKgDAJQgEAJgHAGQgGAHgJADQgJADgKAAQgJAAgJgDgAgMgdQgGACgEAFQgDAEgCAGQgCAHAAAFQAAAGACAGQACAGADAEQAEAFAGADQAGACAGAAQAHAAAGgCQAFgDAEgFQAEgEACgGQACgGAAgGQAAgFgCgHQgCgGgEgEQgEgFgFgCQgGgCgHgBQgGABgGACg");
	this.shape_1.setTransform(22.6,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAuIAAgxIgBgKIgDgJQgDgEgEgCQgDgCgHAAQgJAAgHAIQgHAIAAANIAAAvIgRAAIAAhFIgBgKIAAgKIAQAAIABAIIABAHIAAAAQABgEADgDIAIgFQADgDAFgBQADgBAFAAQAJAAAGADQAGADAFAFQAEAFACAGQACAHAAAHIAAA3g");
	this.shape_2.setTransform(10.9,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAuIAAhFIgBgKIAAgKIARAAIAAAIIABAHIAAAAQAEgIAGgEIAIgEIAJgBIAHAAIgBARIgIgBQgHAAgFACQgEADgCAEQgEAEgBAFQgCAFAAAGIAAAug");
	this.shape_3.setTransform(-2.9,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAsQgJgEgHgFQgGgHgEgIQgDgJAAgLQAAgJADgJQAEgJAGgGQAHgGAIgEQAIgDAKAAQAJAAAJADQAHADAGAGQAGAGADAJQADAIAAALIAAACIAAADIhHAAQAAAGADAFQACAFAEAEQAEADAGACQAFACAEAAQAKAAAGgDQAHgEAEgGIAMAKQgHAJgKAFQgFACgFABIgMABQgIAAgJgDgAAbgHIgCgKQgCgEgDgEQgDgEgFgCQgEgCgGAAQgFAAgFACQgFACgEAEIgGAIQgDAFAAAFIA1AAIAAAAg");
	this.shape_4.setTransform(-12.8,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBFQgJgEgGgGQgFgGgEgJQgDgJAAgKQAAgJADgJQAEgIAFgGQAGgHAJgEQAIgDAKAAQAKAAAJAFQAIAFAEAGIABAAIAAhDIASAAIAACOIgSAAIAAgOIAAAAQgFAJgJADQgJAFgJAAQgKAAgIgEgAgLgEQgGADgEAEQgEAEgBAGQgCAGAAAGQAAAGACAHQABAFAEAFQAEAFAGACQAFADAHAAQAGAAAGgCQAGgEAEgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgEQgEgEgGgDQgGgCgGAAQgHAAgFACg");
	this.shape_5.setTransform(-25,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAuIAAhFIAAgKIAAgKIARAAIAAAIIABAHIAAAAQAEgIAGgEIAIgEIAIgBIAIAAIgBARIgIgBQgHAAgEACQgGADgBAEQgEAEgBAFQgCAFAAAGIAAAug");
	this.shape_6.setTransform(-33.9,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBFQgHgBgHgDQgNgFgJgJQgKgKgFgNQgFgNAAgPQAAgPAFgNQAFgNAKgJQAJgJANgGQAHgCAHgBQAHgCAHAAQAPAAANAFQAHADAGAEIAKAIQAJAJAGANQAFANAAAPQAAAPgFANQgGANgJAKQgFAFgFADIgNAGQgNAGgPAAQgHAAgHgCgAgUgxQgKAEgGAIQgHAHgDAKQgEAKAAAKQAAALAEAKQADAKAHAHQAHAHAJAFQAJAEALAAQALAAAKgEQAJgFAHgHQAHgHADgKQAEgKAAgLQAAgKgEgKQgDgKgHgHQgHgIgJgEQgJgEgMAAQgLAAgJAEg");
	this.shape_7.setTransform(-46.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernowvid, new cjs.Rectangle(-56.5,-13.5,102.5,27.4), null);


(lib.mashedpotatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape.setTransform(215.6,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_1.setTransform(187.6,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpBsQgpgqAAhBQAAhAAsgsQAqgrBBAAQA+AAAoApQAoAoAAA/QAABDgrAtQgrAtg+AAQg/AAgpgrgAg3hWQgSAYAAAmQABA5AYAnQAYAmAjAAQAcAAASgXQARgZAAgmQAAg5gYgmQgZgmgiAAQgdAAgRAXg");
	this.shape_2.setTransform(155.6,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPCuQgOgEgLgKQgKgKgEgPQgEgRAAgrIAAiaIgbAAIgIgCIgDgIIAAgHQAAgKAfgaIAMgKIALgJQAegbALAAIAIACQADADAAAEIAAA3IBBAAQAIAAACACQADAEAAAIIAAAGQAAAIgDAEQgDADgHAAIg8AAIgEACIgCAHIAACPQAAAlAHAKQAGAJARAAQAJAAAOgEIAUgFQAHAAAEAEQAEADAAAHQAAAQgZAOQgYAPgfAAQgSAAgOgFg");
	this.shape_3.setTransform(128.8,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_4.setTransform(102.8,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPCuQgOgEgLgKQgKgKgEgPQgEgRAAgrIAAiaIgbAAIgIgCIgDgIIAAgHQAAgKAfgaIAMgKIALgJQAegbALAAIAIACQADADAAAEIAAA3IBBAAQAIAAACACQADAEAAAIIAAAGQAAAIgDAEQgDADgHAAIg8AAIgEACIgCAHIAACPQAAAlAHAKQAGAJARAAQAJAAAOgEIAUgFQAHAAAEAEQAEADAAAHQAAAQgZAOQgYAPgfAAQgSAAgOgFg");
	this.shape_5.setTransform(76.4,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhpBsQgpgqAAhBQAAhAArgsQAsgrA/AAQA/AAAoApQAoAoAAA/QAABDgrAtQgqAtg/AAQg/AAgpgrgAg3hWQgRAYAAAmQAAA5AYAnQAYAmAiAAQAdAAARgXQASgZAAgmQAAg5gZgmQgYgmghAAQgeAAgRAXg");
	this.shape_6.setTransform(49.4,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiWDOQgQgFAAgNQAAgMASgHIAMgGQAHgFACgjQADgiAAhbIgChtQgDgqgEgFQgDgFgPgGQgPgGAAgLQAAgLAIgFQAJgFASAAIAeAAIAiAAIA6gBIAugCQBBAAAhAcQAgAcAAA3QAAA9goAgQgoAfhNAAQgdAAAAgUQAAgUAZAAQAkAAAXgTQAWgTAAgrQAAgogWgSQgXgUgvAAQgVAAgJAEQgIADgDAIIgDAaIgCA9IAAB/IACBSQACAWAFAEIANAGQASAHAAAMQAAANgQAFQgQAFguAAQgtAAgQgFg");
	this.shape_7.setTransform(16.1,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah+CvQgjgnAAg+QAAhHAogsQAngsA+AAIAUACQAJADAFAGQAFAGAAAIQAAAQgTAAIgIgBIgHAAQghAAgTAaQgTAZAAAuQAAAxAVAeQAUAfAhAAQAeAAARgRQAQgRAAggIAAhPIAAiFQAAgVgDgHQgEgIgLgFIgIgCQgRgEgBgLQAAgIAHgFQAIgGAVgIIAhgJIAbgDQAKAAAEAFQAEAFABAOIgBAOIgDCyIACB6QACAbAEAEIAVAHQAOAEAAAJQAAAOgpANIgdAIIgWACQgJABgDgFQgEgEAAgKIAAgOIAAgGIgCgCIgJAHIgMAJQgSANgPAHQgRAFgSABQg2AAgigog");
	this.shape_8.setTransform(-35.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_9.setTransform(-69.1,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoDQQgOgFAAgLQAAgLAPgFIALgFQAGgEADgMQADgNAAgeQAAhdgMgXQgMgXgeAAQgPAAgOAJQgOAJgIAPQgGAMgDAXQgCAWAAA5QAAAdACAJQADAKAGADIALAFQAOAFAAALQAAALgOAFQgOAFglAAQguAAgOgFQgOgFAAgNQAAgJAOgFIAIgEQAIgEADgMQADgMAAggIAAgwIAAgsIgCiDQgBgfgFgHQgDgDgRgFQgSgFAAgKQAAgIAIgGQAHgFAagKIAdgIIAagDQAKAAAEAGQAEAFAAANIgBAMIgCB0IAAAOIACAHIAEACIAGgGIAKgMQAPgOAQgHQAQgHASAAQAxAAAZAgQAYAgAABBIABAbIAAAzIAAARQAAAOADAHQADAGAGAEIAHADQAPAGAAAJQAAANgOAFQgOAFguAAQglAAgPgFg");
	this.shape_10.setTransform(-102.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVCXIgfgGIgJAGIgJABIgGgBIgGgEQgJgIgJgXQgIgYAAgVQAAgJAFgHQAFgGAHAAQAOAAANAXIALASQAJALAPAHQAPAHAQAAQAUAAALgKQALgJAAgRQAAgYgwgXIgRgJQgtgWgQgSQgQgTAAgbQAAgmAagYQAbgYAqAAIAUABIAUAEIAOgFIAJgCQAOAAANAXQAOAWAAAaQAAAKgFAGQgEAFgIAAQgHAAgGgFQgHgGgJgOQgLgSgLgHQgMgHgQAAQgQAAgKAKQgKAJAAAPQAAAOAKAKQAKAKAkASIADACQBRAnAAAvQAAAogfAbQgfAbgvAAg");
	this.shape_11.setTransform(-132.4,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAzCIIgPgPIgMAGQgkAYgkAAQgqAAgagYQgagZAAgoQAAguAhgZQAigaA8AAQAPAAAHAEQAHAEAAAMQAAAQgUAAQgcAAgRAOQgSAOAAAYQAAAXAPAOQAPAOAaAAQAbAAANgMQAMgNAAgeIAAhuQAAgZgMgOQgLgOgTAAQgOAAgNAGQgMAHgLANIgHAHQgRAWgUAAQgLAAgHgHQgHgHAAgNQAAgbAigTQAigSA0AAQAgAAAXAIQAXAJANAQQAIALAEASQAEARAAAqIAABcQAAARACAIQADAIAGACIAJACQASAFAAAKQAAAOgTALQgUALgaAAQgMAAgPgPg");
	this.shape_12.setTransform(-160.3,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABsDMQgQgFAAgNQAAgLASgHIANgHQAGgEACgNQACgMAAgnIAAgPIgBh7IgBhJIglBfQhVDegTAAQgJAAgRgeQgQgegphfIg/iRIgDByIgBBOIACA2QACANAEADIANAHQASAGAAAMQAAAMgPAGQgOAFgkAAQgfAAgPgGQgOgFAAgMQAAgKAPgIQAQgHACgGQADgOAFhLQAEhKABhbIAAgJQgBgfgCgKQgDgKgGgEIgOgGQgSgHAAgMQgBgMANgEQANgEArAAIApABIALACQAGAEAUA0IARApIAIAVQBHCtAFAAQAGAAAag+QAbg+AjhmIAGgSQAKggAJgJQAFgFAMgCIAngCQAnAAANAEQANAEAAAMQAAAMgRAGIgIADQgJAFgDAMQgCALAAAsIACClQADBKADALQACAHANAEIAFADIAMAHQAEAEAAAGQAAANgQAFQgRAFgvAAQgsAAgQgFg");
	this.shape_13.setTransform(-202.8,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mashedpotatoes, new cjs.Rectangle(-230.9,-36.4,461.8,72.9), null);


(lib.mainsides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCBnQgEAAgDgDQgDgDAAgEIAAgIIAAgJIACgJQABgEADgCIBZhGQAHgGAFgHQAFgIAAgJQAAgHgDgGQgEgGgFgEQgGgEgHgCQgGgCgGAAQgMAAgIAEIgNAJIgKAJQgEAEgFAAIgHgBIgGgFIgGgFQgCgDAAgDQAAgDACgDQAHgJAIgHQAIgGAJgEQATgJAVAAQAPAAANAFQANAEAKAIQAKAHAGAMQAGAMAAAQQAAARgKAOQgKANgOAKIg0AoIgCADIgBAEQAAAEAFACIBMAAQAEAAADACIADAFIACAFIAAAHIgCAKQgCAFgGAAg");
	this.shape.setTransform(106.2,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBkIgIgBIgGgCQgCgCAAgEIAAh+QAAgCgCgDIgFgBQgDAAgDACQgCADgEAAQgHAAgEgGQgEgFAAgGIACgJQADgFACgCIAHgEIAKgGIALgHIAKgGIAKgFIAFgCQAEAAADADQAEACAAAEIAAC1QAAAFgFACIgKACg");
	this.shape_1.setTransform(90.5,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyBmIgEgCIgEgBIgDgCIgig2IgGgGQgEgDgFAAIgZAAQgEAAgDADQgEADAAAEIABAxQAAAFgDABIgHACIgJABIgGgBQgGAAgDgBQgDgDAAgGIAAi5QAAgDACgCQADgCAEgBIBVAAQAPABANAEQANAFAKAJQAJAJAGANQAFAMAAAQQAAARgGAKQgHAKgHAHIgOAKQgHAFAAAEIABAFIAHALIAMAQIALAQQAEAIAAACQAAAEgCACIgHAFIgHACIgHABgAgqhAQgEACAAAGIAAAtQAAAFAEADQAFADAFAAIApAAQAIAAAGgBQAHgDAFgEQAGgEADgGQADgHAAgIQAAgRgMgIQgFgEgHgCQgGgDgIAAIgpAAQgFAAgFADg");
	this.shape_2.setTransform(67.9,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBmQgKgBgKgFQgKgEgIgFQgKgGgGgGQgPgPgJgTQgEgJgCgLQgCgKAAgLQAAgKACgLQACgKAEgJQAJgTAPgPQAGgGAKgGQAIgGAKgDQAKgEAKgDQAKgCALAAQALAAALACQAKADAKAEQAUAHAPAOQAOAPAIATQAJATAAAVQAAALgDAKQgBALgFAJQgIATgOAPQgPAOgUAHQgKAFgKABQgLACgLAAQgLAAgKgCgAgZg/QgNAFgJAJQgJAKgHANQgFANAAANQAAAPAFANQAHAMAJAJQAJAKANAFQANAGAMgBQAOABAMgGQANgFAJgKQAJgJAGgMQAFgNAAgPQAAgNgFgNQgGgNgJgKQgKgJgMgFQgMgFgOAAQgMAAgNAFg");
	this.shape_3.setTransform(44.5,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBmQgJAAgDgHIAAi7QAAgDADgDQADgDAEgBICKAAQADAAABADIADAFIACAHIAAAFQAAAGgCAEQgCAEgFACIhlAAQgDAAgEAEQgDADAAADIAAAZQAAAEADADQADACAEAAIBBAAQAEAAABAEIACAGIABAIIAAAGIgCAHQgBAEgFAAIhAAAIgEABIgDADIgDACIgBAEIAABIQgCADgDACIgGACIgIAAg");
	this.shape_4.setTransform(25.2,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBhQgVgJgQgPIgCgDIgBgFQAAgDACgDIAGgGIAIgGIAGgCQAFAAAFAEIANAJIARAIQAKADANABIAPgBQAIgCAHgDQAHgDAFgHQAFgGAAgIQAAgJgFgFQgGgEgJgDIgVgEIgXgEIgXgEQgMgEgJgEQgJgHgGgKQgGgKAAgPQAAgQAIgMQAJgLAMgIQAMgHAOgDQAPgEANAAIATACIAUAEQAKADAJAFQAKAFAGAHIACADIAAADQAAAEgCAEIgGAGIgIAEIgHACIgGgBQgLgJgMgFQgMgFgNgBIgOACQgHABgHAEQgGADgEAFQgEAFAAAIQAAALAJAFQAKAFAOACIAeAEQARACAOAGQAPAGAKAKQAJALAAAUQAAASgIANQgJAMgMAJQgNAIgQAEQgQAEgOAAQgVAAgWgIg");
	this.shape_5.setTransform(-4.7,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEBkIgGgCQgEgDAAgDIAAi4QAAgEADgCIAGgCICNAAQADACABACIACAGIABAHIAAAGIgCAHQgBAEgEACIhpAAQgCAAgDADQgDADAAADIAAAbQAAAEADADQADACAEAAIBDAAQADAAABACIACAIIABAIIAAAFQAAAJgIACIhBAAQgEAAgDADQgEADAAAEIAAAfQAAAEADACQACADAFAAIBmAAQAHADAAAJIAAAGIAAAIIgDAGQgBADgDAAg");
	this.shape_6.setTransform(-23.6,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUBkQgEAAgDgCQgEgCAAgFIAAi1QAAgFADgCQADgCAEgBIBLAAIAUACIAUAGQAUAGAPANQAOANAJAUQAEAIACALQACALAAAKQAAAWgIATQgFAJgFAJQgGAHgIAHQgHAGgJAGIgSAIQgUAIgUgBgAg3g9QgDADAAAFIAABtQAAAFAEABQAEADADAAIAlAAQANAAANgEQANgFAJgJQAKgIAGgMQAFgMAAgPQAAgOgFgMQgGgMgKgIQgJgJgNgFQgNgEgNAAIgkAAQgFAAgEADg");
	this.shape_7.setTransform(-45.5,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBnQgHABgEgHIAAjBQACgDADgCIAHgCIAHAAIAHAAQAIAAADAHIAADAQgCAEgDACIgHABIgHABg");
	this.shape_8.setTransform(-62.7,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBhQgVgJgQgPIgCgDIgBgFQAAgDACgDIAGgGIAIgGIAGgCQAFAAAFAEIANAJIARAIQAKADANABIAPgBQAIgCAHgDQAHgDAFgHQAFgGAAgIQAAgJgFgFQgGgEgJgDIgVgEIgXgEIgXgEQgMgEgJgEQgJgHgGgKQgGgKAAgPQAAgQAIgMQAJgLAMgIQAMgHAOgDQAPgEANAAIATACIAUAEQAKADAJAFQAKAFAGAHIACADIAAADQAAAEgCAEIgGAGIgIAEIgHACIgGgBQgLgJgMgFQgMgFgNgBIgOACQgHABgHAEQgGADgEAFQgEAFAAAIQAAALAJAFQAKAFAOACIAeAEQARACAOAGQAPAGAKAKQAJALAAAUQAAASgIANQgJAMgMAJQgNAIgQAEQgQAEgOAAQgVAAgWgIg");
	this.shape_9.setTransform(-77.4,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrBlQgNgFgLgHQgKgIgHgMQgHgMABgQQAAgNAFgMQAHgMAMgGIADgEIABgEQgBgEgCgDIgFgHIgFgKQgCgGAAgJQAAgNAGgLQAFgKAKgHQAJgHAMgDQAMgDANgBQALAAANAEQANAFAJAJQAEADAAAFIgCAFIgFAGIgGAFIgGABQgEAAgEgDIgGgEIgHgGQgGgCgHAAQgGAAgFACIgKAFQgEAEgDAFQgDAFABAFQAAAOAFAFQAFAGAHACQAHADAGgBQAIABACABQADACAAAFIAAAHQAAAFgBADQgDADgEAAIgRABQgJADgGADQgHAEgEAHQgEAGAAAKQAAAKADAGQAEAHAFAEQAGAEAIACQAHACAIAAQAOAAAKgHQAKgGAGgLQAFgJACgNIACgaIAAgFIABgFQACgEAFgEQAEgFAGAAIAfAAQAFAAACAFIAAAIQAAAFgBACIgGACIgGAAQgDAAgDADIgCAFIgCAEQgBATgFARQgGAQgKAMQgKANgQAGQgPAIgUgBQgOAAgOgDg");
	this.shape_10.setTransform(-106.3,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA7BpQgEgCgEgFIhShxQgCgDgEAAQgDAAgCACQgDADgBADIAABnQgCAGgEABQgEACgGAAIgMgBQgGgBgCgHIAAi+QAAgDADgCIAFgCIAHgBIAHAAQAIAAAFAGIBSBtQACADADAAIAEgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAhnQABgDADgCIAHgCIAHAAIAHAAQAJAAADAIIAADAQgCAEgEACQgDACgFAAg");
	this.shape_11.setTransform(-137.1,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHBnQgHABgEgHIAAjBQACgDADgCIAHgCIAHAAIAHAAQAIAAADAHIAADAQgCAEgDACIgHABIgHABg");
	this.shape_12.setTransform(-152.6,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABKBmIgLgCQgGgBgCgFIgLgbIgEgEQgDgCgCAAIhEAAIgCAAIgEACIgDACIgBACIgLAbIgEAEIgFACIgGABIgGAAIgFAAIgHgBIgFgCQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIBSi9QACgDAEgCIAGgBIAIABQAGABABAEIBPC8IABACQAAADgDACIgGABIgHABgAgCgfIgCADIgCAFIgEAKIgFALIgFAKIgEAJIgBAFIABAEQABABAAAAQABAAAAABQABAAABAAQAAAAABAAIAnAAIAEgCIACgEIgDgIIgGgQIgHgRIgFgLQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAg");
	this.shape_13.setTransform(-167.2,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA6BjQgFgCAAgFIAAhbQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgEAAgCAEIggAzQgDAGgFAAIgHgCQgDgBgCgDIgbgzQgCgDgEgBQgCABgDACQgCACAAACIAABZQgCAIgGABIgMABIgFAAIgGgCIgEgDIgBgFIAAi2QACgGAGgBIALgBIAHABQAEABACADIAvBQQAEAHAGAAIAGgCIAEgFIAwhPQAFgIAKAAIAJABQAEABACAFIAAC5QAAAEgCACIgGADIgHABIgHAAg");
	this.shape_14.setTransform(-188.6,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainsides, new cjs.Rectangle(-201.9,-13.6,319.5,33.5), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.herbstuffing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrC9QglgWAAggQAAgPAIgJQAIgKAQAAQAMAAAHAHQAGAHAEANQAHAWASAMQATAMAjAAQAmAAAZgPQAagPAAgWQAAgOgKgHQgJgIgSAAIgiADIgsACQgzAAgcgRQgcgSAAgXQAAgPAKgOQAKgNAVgNQgRgOgJgTQgIgSAAgXQAAgvAjgfQAkggA3AAIAeADIAsAIQALAAAMgFQANgFASgNIAKAJIADAKQAAAMgKAMQgJALgRAJIAJAXIADAYQAAAwgjAfQgjAdg4AAIgfgDIgbgGIgJAMIgDAKQAAAOANAHQAOAGAdAAIArgDIAtgDQApAAAVAQQAWAQAAAfQAAAuguAfQgtAfhFAAQg3AAglgXgAgviQQgPATAAAdQAAAeAOASQAPASAYAAQAXAAARgSQAQgTAAgdQAAgdgQgTQgQgSgYAAQgXAAgPASg");
	this.shape.setTransform(162.7,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiOCPQgOgEAAgNQAAgKAOgFIAIgDQAHgEADgKQADgKAAgWIAAgTIgBgYIAAgcQAAgugCgOQgCgOgGgDIgNgFQgSgGAAgKQAAgGAFgFQAGgFAMgFIAqgOIAegEQAJgBADAFQADAEABAKIAAATIAAADIACAAIABAAIABgBIAHgFIAHgGQAfgdAjAAQAWAAATAJQATAIAOAQQANAQAGAWQAFAWAAAuIAAAnIgBATIAAAQQAAAVAEAJQACAIAIAEIAHADQAOAFAAAKQAAANgNAEQgOAEgsABQgogBgPgEQgNgEAAgLQAAgLAOgFIALgFQAHgEACgNQAEgMAAggQgBhbgMgYQgLgWgfAAQgPgBgOAKQgOAJgHAQQgHAMgCAXQgDAWABA4QgBAdADAKQACAIAGAEIALAFQAPAFAAALQAAALgPAFQgOAFgmAAQgrgBgPgFg");
	this.shape_1.setTransform(128.6,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzDPQgOgFAAgNQAAgJAOgGIAIgDQAHgEADgKQADgJAAgWIAAgUIgBgXIAAgeQAAgugBgNQgDgOgGgDIgOgFQgRgGAAgJQAAgHAFgFQAGgFANgFIArgOIAegFQAIAAAEAFQADAGAAANIAAARIgBANIgCBJIAAACIgBBHQAAAcADALQACAMAHADIAKAFQAPAFAAALQAAALgPAFQgNAFgnAAQgrAAgOgFgAgjiSQgNgKAAgPQAAgQAOgMQAOgMATAAQASAAANALQAMAKAAAQQAAAQgNALQgOALgTAAQgTAAgMgKg");
	this.shape_2.setTransform(102.6,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRDQQgOgEAAgMQAAgJANgFIAIgEQAHgEACgJQADgJAAgZIAAgcIAAiLIggAAQgHAAgCgDQgDgDAAgIIAAgHQAAgHADgEQADgDAGAAIAfAAIgDgXIgBgUQAAgsAbgZQAagYAvAAQAhAAAUAPQAVAPAAAWQAAAOgHAHQgIAHgOAAQgJAAgHgEQgIgEgFgIIgFgKQgLgVgRAAQgLAAgFAHQgHAHAAALIAHAhQAFAZABAUIAqAAQAHAAADADQACADAAAIIAAAHQAAAHgCAEQgEADgGAAIgqAAIAACUQAAAlADAMQACALAGADIALAEQARAGAAAMQAAALgOAEQgOAEgqAAQgqAAgOgEg");
	this.shape_3.setTransform(88.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhRDQQgOgEAAgMQAAgJANgFIAIgEQAHgEACgJQADgJAAgZIAAgcIAAiLIggAAQgHAAgCgDQgDgDAAgIIAAgHQAAgHADgEQADgDAGAAIAfAAIgDgXIgBgUQAAgsAbgZQAagYAvAAQAhAAAUAPQAVAPAAAWQAAAOgHAHQgIAHgOAAQgJAAgHgEQgIgEgFgIIgFgKQgLgVgRAAQgLAAgFAHQgHAHAAALIAHAhQAFAZABAUIAqAAQAHAAADADQACADAAAIIAAAHQAAAHgCAEQgEADgGAAIgqAAIAACUQAAAlADAMQACALAGADIALAEQARAGAAAMQAAALgOAEQgOAEgqAAQgqAAgOgEg");
	this.shape_4.setTransform(71.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA/CTQgEgFAAgJIAAgVIAAgBIgCAAQgDAAgHAHIgEAEQgOAOgRAHQgRAHgVAAQgWAAgTgIQgTgIgNgPQgOgRgFgXQgGgXAAg+IAAgTIAAgWIAAgFQAAgYgDgHQgDgGgLgEIgLgEQgRgEAAgLQAAgHAGgFQAGgFAUgHIAogKIAegEQAIAAAEAFQADAGAAANIAAALIgDBtQAAA6AMAXQAMAWAeAAQAgAAAPgdQAOgdAAhGIAAgXQAAgWgDgHQgDgHgKgDIgMgEQgQgEAAgLQAAgHAGgEQAFgFAUgIIAngKIAegEQAJAAAEAFQADAFAAAOIAAAQIgEB3IABAxIACATQACAMAPAGIAFACQARAFAAAKQAAAGgFAFQgGAFgMAFIgpANQgUAFgLAAQgIAAgEgEg");
	this.shape_5.setTransform(42.9,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPCuQgOgEgLgKQgKgKgEgPQgEgRAAgrIAAiaIgbAAIgIgCIgDgIIAAgHQAAgKAfgaIAMgKIALgJQAegbALAAIAIACQADADAAAEIAAA3IBBAAQAIAAACACQADAEAAAIIAAAGQAAAIgDAEQgDADgHAAIg8AAIgEACIgCAHIAACPQAAAlAHAKQAGAJARAAQAJAAAOgEIAUgFQAHAAAEAEQAEADAAAHQAAAQgZAOQgYAPgfAAQgSAAgOgFg");
	this.shape_6.setTransform(15.4,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHDSQgggIgVgMQgLgGgIgaQgHgYAAghQAAgNAFgIQAFgGAJAAQAOAAAOAZIAHANQASAgAWAPQAWAPAeAAQAfAAAWgTQAWgTAAgcQAAgohWglIgJgFQhGgdgXgbQgXgZAAgpQAAg0AmgiQAnghA9AAIAiADIAoAJIAMgHIAJgDQAHAAAGAEQAGAFAGALQAJARAGAUQAGASAAAPQAAAJgFAGQgEAFgIABQgQgBgOgUIgFgGQgQgVgTgLQgTgKgZAAQgfAAgTAPQgTAPAAAbQAAAXAQAQQAPAPA+AbIAMAFQA0AWAXAUQAQAPAIATQAIAUAAAWQAAA8gpAhQgpAhhJAAQgjAAgggGg");
	this.shape_7.setTransform(-12.3,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoDQQgYgHgQgMIgTAMQgJAEgHAAIgKgBIgLgEIAAgFQALgMAEgZQAFgaAAhAIAAhAIAAhCQAAg2gDgSQgCgSgHgEIgPgFQgSgEAAgKQAAgHAGgEQAGgFAVgJIAjgKIAcgEQALAAAEAEQAEAEAAALIgBAQIgCBVIAAB/IABBMQAAAqANAPQANAOAhAAQAjAAAVgeQAUgfAAg2QAAgvgTgaQgUgbgjAAIgJAAIgGABQgWAAAAgUQAAgPAVgIQAUgIAYAAQA4AAAgAmQAhAlAAA/QAABJgpAtQgpAshEAAQgbAAgZgHg");
	this.shape_8.setTransform(-64.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhXCPQgOgEAAgNQAAgKANgEIAIgEQAIgEADgKQADgKAAgWIAAgTIgBgYIAAgRQAAg1gCgPQgCgRgHgDIgNgFQgRgGAAgKQAAgGAFgFQAFgFANgFIAngNIAagFQAOAAAFAnIABAGIABABQAPgXARgNQAQgLAQAAQAUAAAMALQAMANAAAUQAAAUgJAMQgJAMgRgBIgOgDIgMgIIgHgLQgDgIgEAAQgUAAgHAcQgHAbAABXQAAAaACAMQAEANAHAEIAMADQARAHAAALQAAALgQAEQgQAFgnABQgsgBgOgFg");
	this.shape_9.setTransform(-90.4,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AheBtQgpgrAAg+QAAhDAqgrQArgsBBAAQA4AAAhAgQAgAgAAA2QAAARgFAHQgFAFgWAAIhvAAQgJAAgFgFQgGgEAAgIQAAgIAGgEQAFgEAJAAIA8AAIAPgCQADgDAAgGQAAgcgSgTQgTgTgaAAQgjAAgRAeQgQAeAAArQAAAsAXAhQAXAhAkAAQAVAAAPgEQAPgGAOgJIAKgIQAPgMAIAAQAGAAAEAEQAFAEAAAGQAAAHgIAKQgHAKgMAKQgaAVgXAJQgXAJgcAAQg9AAgpgqg");
	this.shape_10.setTransform(-117.9,6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABBDMQgQgFgBgNQABgMARgGIAOgHQAEgDACgTIADhEIgCgoIgCgMQgDgFgOgCQgOgDg2AAIg9ACQgQACgGAEIgDAJIgBAVIAAAYIACBEQACATAFADIAMAHQATAGgBAMQAAANgPAFQgRAFgtAAQgtAAgRgFQgQgFAAgNQAAgLASgHIAMgHQAHgEACglQADglAAhWIgDhsQgCgsgDgFQgDgEgPgGQgQgHAAgLQAAgMANgEQAMgEA1AAQAyAAAOAEQANAEAAAMQABALgTAHIgMAHQgFAEgDASIgBBVQgBAMALAEQALAEAqAAIAYAAIA9gCQASgCAFgEIADgFIACgMIAAgNIgDhHQgCgPgEgDIgOgHQgRgHgBgLQAAgMAOgEQANgEA0AAQA0AAAMAEQANAEAAAMQAAAMgSAGIgNAHQgGAEgDAoQgCAmAABOIACBwQADAsAEAFQACAFAQAGQAPAGAAALQAAANgQAFQgRAFgsAAQgvAAgPgFg");
	this.shape_11.setTransform(-155.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.herbstuffing, new cjs.Rectangle(-179.4,-36.4,358.9,72.9), null);


(lib.hampng = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenham();
	this.instance.parent = this;
	this.instance.setTransform(-111,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hampng, new cjs.Rectangle(-111,-63,222,126), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhKEgThMCUJAAAMAAAAnDMiUJAAAg");
	this.shape.setTransform(0,0,1.022,0.996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-485.5,-125.5,971,251), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap8XiQklh8jijiQjjjih7kmQiBkwAAlMQAAlMCBkvQB7kmDjjiQDijiElh8QExiBFLAAQFMAAExCBQElB8DiDiQDiDiB9EmQCAEvAAFMQAAFMiAEwQh9EmjiDiQjiDiklB8QkxCBlMAAQlLAAkxiBg");
	this.shape.setTransform(163.5,163.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,327,327), null);


(lib.ctarectangleuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D63900").ss(2,1,1).p("ApVjaISrAAQBaAABABAQBABAAABaIAAAAQAABbhABAQhABAhaAAIyrAAQhaAAhAhAQhAhAAAhbIAAAAQAAhaBAhAQBAhABaAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApVDbQhaAAhAhAQhAhAAAhbIAAAAQAAhaBAhAQBAhABaAAISrAAQBaAABABAQBABAAABaIAAAAQAABbhABAQhABAhaAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangleuse, new cjs.Rectangle(-82.6,-22.8,165.3,45.8), null);


(lib.classicturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCFQgNgMAAgSQAAgTANgNQANgMARAAQASAAANAMQANANgBATQABASgNAMQgNANgSAAQgRAAgNgNgAgehHQgNgNAAgRQAAgTANgMQANgNARAAQASAAANANQANAMgBATQABARgNANQgNANgSAAQgRAAgNgNg");
	this.shape.setTransform(302.6,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUCLQgOgFAAgMQAAgJANgFIAIgEQAHgEADgJQADgJAAgWIAAgSIAAgXIAAgQQAAgzgDgQQgCgPgGgEIgNgFQgQgFAAgJQAAgHAFgFQAFgEAMgFIAmgNIAZgFQANAAAFAmIABAGIABABQAOgWAQgMQAQgMAQAAQATAAAMAMQALALAAAUQAAATgJAMQgJALgPAAIgPgDIgLgIIgHgLQgDgIgDAAQgTAAgIAbQgGAbAABUQAAAYACANQADAMAIADIALAEQARAGAAALQAAAKgQAFQgPAEgmAAQgrAAgNgEg");
	this.shape_1.setTransform(284.4,6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaBpQgpgpAAg7QAAhBApgqQApgrA/AAQA2AAAgAfQAgAeAAA1QAAARgGAGQgFAFgVAAIhrAAQgJAAgFgFQgFgEAAgHQAAgIAFgDQAFgFAJAAIA6AAIAOgCQAEgCAAgGQAAgbgSgTQgTgSgYAAQgiAAgRAdQgQAdAAApQABArAWAgQAWAfAjABQAUgBAPgEQAOgEANgKIAKgHQAOgMAJAAQAFAAAEAEQAEAEAAAFQAAAHgGAKQgIAKgLAJQgYAUgXAJQgXAJgaAAQg7AAgngpg");
	this.shape_2.setTransform(257.9,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiJCLQgOgFAAgMQAAgJAOgGIAHgDQAHgEADgJQADgJAAgWIAAgSIAAgXIAAgcQAAgsgDgNQgCgOgFgDIgOgFQgQgFAAgJQAAgHAFgEQAFgFAMgFIAogNIAdgFQAIAAAEAEQADAEAAAKIAAASIABADIABABIACgBIABAAIAGgGIAGgGQAfgcAiAAQAUAAATAJQATAIAMAPQANAQAGAVQAFAVAAAtIAAAlIAAASIAAAQQAAAUADAIQACAIAHAEIAHADQAOAGAAAJQAAAMgNAFQgNAEgrAAQgnAAgNgEQgNgEAAgLQAAgLAOgFIAKgFQAHgDACgMQADgNAAgeQAAhYgLgXQgMgWgdAAQgPAAgNAJQgOAJgHAPQgGAMgDAWQgCAVAAA3QAAAbACAJQADAJAGADIAKAFQAOAFAAALQAAALgNAEQgOAEglAAQgqAAgOgEg");
	this.shape_3.setTransform(226,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiJCLQgOgFAAgMQAAgJAOgGIAHgDQAHgEADgJQADgJAAgWIAAgSIAAgXIAAgcQAAgsgDgNQgCgOgFgDIgOgFQgQgFAAgJQAAgHAFgEQAFgFAMgFIAogNIAdgFQAIAAAEAEQADAEAAAKIAAASIABADIABABIACgBIABAAIAGgGIAGgGQAfgcAiAAQAUAAATAJQATAIAMAPQANAQAGAVQAFAVAAAtIAAAlIAAASIAAAQQAAAUADAIQACAIAHAEIAHADQAOAGAAAJQAAAMgNAFQgNAEgrAAQgnAAgNgEQgNgEAAgLQAAgLAOgFIAKgFQAHgDACgMQADgNAAgeQAAhYgLgXQgMgWgdAAQgPAAgNAJQgOAJgHAPQgGAMgDAWQgCAVAAA3QAAAbACAJQADAJAGADIAKAFQAOAFAAALQAAALgNAEQgOAEglAAQgqAAgOgEg");
	this.shape_4.setTransform(192.3,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxDIQgOgFAAgMQAAgJAOgGIAHgDQAHgEADgJQADgJAAgWIAAgSIAAgXIAAgdQAAgsgDgMQgCgOgFgDIgOgFQgQgFAAgJQAAgHAFgEQAFgFAMgFIAqgOIAdgFQAIAAADAFQADAGAAANIAAAQIAAANIgCBGIAAACIgBBFQAAAaACALQACALAHADIAKAFQAOAFAAALQAAALgNAEQgOAEglAAQgpAAgOgEgAgiiMQgMgKAAgPQAAgPANgMQANgLATAAQASAAAMAKQALAKAAAQQAAAPgMALQgOAKgSAAQgSAAgMgJg");
	this.shape_5.setTransform(167.3,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8DKIgjgBIgXAAIgYABQgiAAgLgFQgLgEAAgMQABgLAPgGQAPgFACgEQAEgGACgqIADhsIgDhnQgDgrgDgFQgDgFgOgFQgQgHAAgLQAAgLAMgFQAMgEAiAAIAYAAIAcABIAlgBIAggBQBoAAA5A2QA4A2AABiQAABhg5AyQg7AyhuAAgAg9ieQgMAEgEAJQgEAKgBAhIgCBVIACBqQACAsADAJQADAIATAGQASAGAaAAQA/AAAggmQAhgngBhOQABhSglgsQglgshFAAQgWAAgNAFg");
	this.shape_6.setTransform(137.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiAC5QgOgMAAgSQAAgOAKgKQAJgKAPAAIAMACIAIAHIAIAKQAHALAFAAQAPAAAPgUQAOgVAAgWQAAgYgUgsIgCgHIgthhIgag3QgFgKgQgHIAAAAQgKgEgDgEQgEgEABgFQAAgNAOgFQAPgEApAAQApAAANAEQAOAEAAAMIgBAIIgGAGIgKAEQgLAEAAAFIAGAVIAWA4IAXA1QAHANAEAAQACAAAHgNIASgsIAVg4QAGgTAAgHQAAgJgPgIQgQgJAAgHQAAgKANgEQAMgEAgAAQAiAAALAEQAMAEAAAMQAAAKgPAEIgMAEQgPAJgSAvIgIAWIgkBZQgvB0gcAjQgeAjgpAAQgUAAgNgLg");
	this.shape_7.setTransform(86,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhbBpQgogpABg7QgBhBApgqQApgrA/AAQA2AAAgAfQAfAeAAA1QAAARgFAGQgFAFgVAAIhqAAQgKAAgFgFQgFgEAAgHQAAgIAFgDQAFgFAJAAIA6AAIAOgCQADgCAAgGQAAgbgSgTQgRgSgaAAQghAAgQAdQgRAdABApQgBArAXAgQAWAfAjABQAVgBAOgEQAOgEAOgKIAKgHQAOgMAHAAQAHAAADAEQAFAEAAAFQAAAHgIAKQgHAKgLAJQgYAUgXAJQgWAJgbAAQg7AAgogpg");
	this.shape_8.setTransform(56.7,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABbDNIgMgCQgMgFgagiIgMgPIgFgGQhEhYgFAAQgDAAgCADIgBAMIAAAMIACA6QACARAEAFIAQAIQANAFAAALQAAALgOAEQgOAEglAAQgrAAgNgEQgOgFAAgMQAAgJAOgGIAHgDQAIgEADgNQADgOAAggIAAgjIgBgsIAAghIgBhoQgCgagEgFQgDgDgNgEIgJgDIgLgFIgCgIQAAgHAFgEQAGgFAUgHIAlgKIAdgEQAJAAADAFQAEAFAAANIgCA2IgCBJIAABFIACAOQABADADAAIAMgGIAUgRIAbgbQAHgIAAgEQAAgDgLgFQgJgFAAgJQAAgNAOgEQAOgFAoAAQAaAAANAFQANAFAAAKQAAAOgVAFQgVAFgIAFQgKAGgYAXIgFAFIgJAKIgDAFQAAAGAZAgIADAEIAwA6QAUAXAKAIQAHAFASAGQASAGAAALQAAAMgMAFQgOAFgeAAg");
	this.shape_9.setTransform(26.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhUCLQgOgFAAgMQAAgJANgFIAIgEQAHgEADgJQADgJAAgWIAAgSIAAgXIAAgQQAAgzgDgQQgCgPgGgEIgNgFQgQgFAAgJQAAgHAFgFQAFgEAMgFIAmgNIAZgFQANAAAFAmIABAGIABABQAOgWAQgMQAQgMAQAAQATAAAMAMQALALAAAUQAAATgJAMQgJALgPAAIgPgDIgLgIIgHgLQgDgIgDAAQgTAAgIAbQgGAbAABUQAAAYACANQADAMAIADIALAEQARAGAAALQAAAKgQAFQgPAEgmAAQgrAAgNgEg");
	this.shape_10.setTransform(-0.2,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA9COQgEgFAAgJIAAgUIAAgBIgCAAQgDAAgHAHIgEAEQgNAOgRAGQgQAHgUAAQgVAAgTgIQgSgIgNgOQgNgQgFgXQgGgWAAg7IABgTIAAgVIAAgGQAAgXgDgGQgEgGgKgEIgLgEQgQgEAAgKQAAgHAGgEQAGgFATgHIAmgKIAegEQAHAAAEAGQADAFAAANIAAALIgDBoQAAA4AMAWQALAWAdAAQAfAAAOgcQAOgdAAhDIAAgWQAAgVgDgHQgDgHgKgDIgLgEQgQgEAAgKQAAgGAGgFQAFgFAUgHIAlgKIAdgEQAJAAADAFQAEAFAAAOIgBAPIgDBzIAAAvIACASQACAMAOAGIABAAIAFABQAQAGAAAJQAAAGgFAFQgFAFgMAEIgoANQgTAFgLAAQgIAAgDgEg");
	this.shape_11.setTransform(-28.8,6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag6DHQgQgFAAgNQAAgKAPgHQAPgFADgEQADgFACguIACiEIgBhJIgDgtQgBgIgFgCQgEgCgMgBIgMAAQgTAAgLAFQgLAFgHALIgJASIgIATIgIAJQgFADgGAAQgIAAgEgHQgDgIAAgRQAAglAIgWQAJgWANAAIADAAQAWADAiAAICkAAQAiAAAXgDIADAAQANAAAJAWQAIAWAAAlQAAARgDAHQgEAIgJAAIgKgDIgIgJIgIgTIgJgSQgHgLgLgFQgLgFgUAAIgLAAQgMABgEACQgFACgBAIIgCAtIgCBJIACCEQACAuADAFQADAEAPAFQAPAHAAAKQAAANgQAFQgQAEgrABQgrgBgPgEg");
	this.shape_12.setTransform(-63.8,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AipCpQgzgoAAhBQAAgkAQgbQARgbAkgaIABgBQgMgNgGgNQgGgPAAgOQAAgsAggcQAhgcAzAAQAiAAAYANQAXANAAATQAAAFgGAFQgFAFgIgBIgXgHQgTgHgRAAQgWAAgNAOQgOAPAAAZQAAAKAEAJQADAHAHAHQAHAGANAHIAQAFIAFADIADAEQAAAGgLALQgKAMgJAAIgMgDIgTgHQgQAOgIATQgJAUAAAZQAAA2AkAjQAiAiA2AAQAuAAAcgXQAbgXAAgnQAAgXgLgOQgLgPgTAAQgUAAgMANQgMALAAASIAAAFIAAADIgFABIgEAAQgKAAgGgHQgGgIAAgNQAAgpB7g5IAIgDQAggQARgRQARgSAAgSQAAgNgHgHQgIgGgOgBIgLABIgKABQgHABgDgEQgEgEAAgGQAAgNAPgIQAPgHAYAAQAeAAASAPQARARAAAcQAAAkgeAcQgeAcg/AXQAaALAOAVQANAUAAAdQAAAVgIAUQgIAVgQARQgaAbgmAOQgmAOgxAAQhWAAgzgog");
	this.shape_13.setTransform(-120.6,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjiCLQgOgFAAgMQAAgJAOgGIAHgDQAHgEADgJQAEgJAAgWIgBgSIAAgXIAAgQQAAgzgDgQQgCgPgFgEIgOgFQgQgFgBgJQABgHAFgEIASgKIAogOIAcgFQAHAAAEAFQAEAEAAAKIAAAPIAAADIABADIABABIACgBIABAAIAGgGIAEgDQAigfAiAAQANAAAMAEQAMAEALAHQAKAHAKANQALANACAAQAEAAAIgJIAMgNQASgPAOgFQANgGAQAAQAhAAAYANQAYANALAYQANAZAABSIAAAbIAAAPIgBANQABARADAGQACAHAHAEIAIADQAOAGgBAJQABAMgNAFQgOAEgrAAQgoAAgNgEQgOgEgBgLQABgLAPgGIAKgEQAGgEAEgOQACgOAAghQAAhSgLgWQgMgWgdAAQghAAgOAcQgOAdAABDIAAAPQAAAeADAKQADAJAHAEIAIADQANAGAAAJQAAAMgNAFQgNAEgqAAQgnAAgNgEQgOgEAAgLQAAgLAPgFIAKgFQAGgDADgLQACgMAAggQABhYgMgXQgMgWgdAAQgPAAgNAJQgNAJgIAPQgGANgDAXQgCAVAAA1QgBAaADAKQADAJAFADIALAFQAPAFAAALQgBALgOAEQgNAEglAAQgrAAgNgEg");
	this.shape_14.setTransform(-187.9,6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyCEIgPgPIgMAGQgjAXgiAAQgpAAgZgYQgZgXAAgnQAAgtAggYQAhgZA6AAQAOAAAHAEQAHAEAAALQAAAQgUAAQgbAAgRANQgRAOAAAXQAAAXAPANQAPANAYAAQAbAAAMgMQALgMAAgdIAAhqQAAgYgLgOQgKgNgTAAQgOAAgMAGQgMAGgLANIgFAHQgRAWgTAAQgLAAgHgHQgHgIAAgMQAAgaAhgSQAggSAzAAQAfAAAWAIQAWAIAMAQQAJALADARQAEARAAAoIAABZQAAAQACAIQADAIAGABIAIADQASAEAAAKQAAANgTALQgSALgZAAQgNAAgNgOg");
	this.shape_15.setTransform(-228.3,6.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA+DFQgPgFAAgMQAAgMASgGIAMgGQAFgEACgRIAChCIgBgnIgCgLQgDgFgOgCQgNgDg1AAIg7ACQgQACgEAEIgEAIIgBAVIAAAXIACBCQACARAFAEIAMAGQARAGAAAMQAAAMgPAFQgPAFgtAAQgsAAgPgFQgQgFAAgMQAAgLARgHIANgGQAGgFADgjQACgjAAhUIgChoQgDgqgEgFQgCgEgPgGQgPgGAAgLQAAgLANgEQAMgFAzAAQAxAAANAFQAMAEAAALQAAALgRAHIgMAGQgFAEgCARIgCBSQAAALAKAFQALAEApAAIAWAAIA7gCQASgCAEgEIAEgFIABgLIAAgNIgChEQgCgPgFgDIgMgGQgSgHAAgLQAAgLANgEQANgFAxAAQAzAAAMAEQAMAEAAAMQAAALgSAHIgMAGQgFAEgDAmQgDAmABBKIACBsQACAqAEAGQADAEAPAGQAOAGAAALQAAAMgPAFQgQAFgsAAQgtAAgPgFg");
	this.shape_16.setTransform(-265.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeydinner, new cjs.Rectangle(-288.2,-35.2,601.2,70.4), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.billboardordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AAXAtIgXhDIAAAAIgVBDIgTAAIgehZIATAAIAVBEIABAAIAVhEIARAAIAXBEIAAAAIAUhEIATAAIgeBZg");
	this.shape.setTransform(41.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgSAsQgJgDgHgHQgGgGgEgJQgEgJABgKQgBgKAEgIQAEgJAGgGQAHgHAJgDQAJgEAJABQAKgBAJAEQAJADAHAHQAGAGAEAJQADAIAAAKQAAAKgDAJQgEAJgGAGQgHAHgJADQgJAEgKgBQgJABgJgEgAgMgdQgFADgEAEQgEAEgCAHQgCAGAAAFQAAAGACAGQACAGAEAEQAEAFAFADQAGADAGAAQAHAAAGgDQAFgDAEgFQAEgEACgGQACgGAAgGQAAgFgCgGQgCgHgEgEQgEgEgFgDQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(28.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AAXAuIAAgxIgBgKIgDgJQgDgEgDgCQgEgCgGAAQgKAAgHAIQgHAIAAANIAAAvIgSAAIAAhFIAAgKIgBgKIASAAIAAAIIAAAHIABAAQABgEAEgDIAGgFQAEgDAEgBQAEgBAFAAQAJAAAGADQAHADADAFQAFAFACAGQABAHAAAHIAAA3g");
	this.shape_2.setTransform(16.7,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgZAuIAAhFIAAgKIgBgKIARAAIABAIIAAAHIABAAQADgIAHgEIAIgEIAIgBIAHAAIAAARIgJgBQgGAAgEACQgFADgCAEQgDAEgCAFQgCAFAAAGIAAAug");
	this.shape_3.setTransform(2.9,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgQAsQgIgEgGgFQgHgHgDgJQgEgIAAgLQAAgJAEgJQADgJAHgGQAFgHAJgDQAJgEAIABQALAAAHACQAJAEAFAGQAGAGADAJQADAJAAAKIAAACIgBAEIhGAAQABAFACAFQACAFAEAEQAEADAFACQAGACAEABQAJgBAHgEQAHgDADgGIANAKQgHAJgJAFQgFACgGABIgMABQgIABgKgEgAAbgHIgCgKQgBgEgEgEQgDgDgEgDQgFgCgHAAQgEAAgFACQgFADgEADIgGAIQgCAFgBAFIA1AAIAAAAg");
	this.shape_4.setTransform(-7,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgUBFQgJgEgGgGQgFgGgEgJQgDgJAAgKQAAgJADgJQAEgIAFgGQAGgHAJgDQAIgEAKAAQAKAAAJAFQAIAFAEAGIABAAIAAhDIASAAIAACOIgSAAIAAgOIAAAAQgFAJgJADQgJAFgJAAQgKAAgIgEgAgLgEQgGADgEAEQgEAEgBAGQgCAGAAAGQAAAGACAHQABAFAEAFQAEAFAGACQAFADAHAAQAGAAAGgCQAGgDAEgFQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgEQgEgEgGgDQgGgCgGAAQgHAAgFACg");
	this.shape_5.setTransform(-19.2,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AgZAuIAAhFIAAgKIgBgKIARAAIABAIIAAAHIABAAQAEgIAGgEIAIgEIAIgBIAHAAIgBARIgIgBQgGAAgFACQgEADgDAEQgDAEgBAFQgCAFAAAGIAAAug");
	this.shape_6.setTransform(-28.1,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgOBFQgHgBgHgDQgNgFgJgJQgKgKgFgNQgFgNAAgPQAAgPAFgNQAFgNAKgJQAJgJANgGQAHgCAHgBQAHgCAHAAQAPAAANAFQAHADAGAEIAKAIQAJAJAGANQAFANAAAPQAAAPgFANQgGANgJAKQgFAFgFADIgNAGQgNAGgPAAQgHAAgHgCgAgUgxQgKAEgGAIQgHAHgDAKQgEAKAAAKQAAALAEAKQADAKAHAHQAHAHAJAFQAJAEALAAQALAAAKgEQAJgFAHgHQAHgHADgKQAEgKAAgLQAAgKgEgKQgDgKgHgHQgHgIgJgEQgJgEgMAAQgLAAgJAEg");
	this.shape_7.setTransform(-40.6,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.billboardordernow, new cjs.Rectangle(-50.7,-14.8,102.5,27.4), null);


(lib.whitelogouse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(130.4,59.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(-11.1,85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(130.6,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(-48.8,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-44.3,88.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(64.5,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(6.9,30.3);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,163.5,163.5);
	this.instance.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogouse, new cjs.Rectangle(-175,-175,350,350), null);


(lib.ctarolloveruse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// order-now
	this.instance = new lib.ordernowvid();
	this.instance.parent = this;
	this.instance.setTransform(2.5,-1.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

	// Layer 1
	this.instance_1 = new lib.vidctarollover();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-22.8,165.3,45.8);


(lib.classicturkeydinnersue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.classicturkeydinner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeydinnersue, new cjs.Rectangle(-288.2,-35.2,601.2,70.4), null);


// stage content:
(lib.billboardseventeen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_328 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(309).call(this.frame_328).wait(2));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(486.2,125.3,4.708,0.381,0,0,0,0.3,0.8);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(330));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(486.8,125.1,5.906,0.417,0,0,0,0.4,0.2);
	this.instance_1.filters = [new cjs.ColorFilter(1, 1, 1, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:0.4,x:488.7,alpha:0},9).wait(321));

	// white-logo
	this.instance_2 = new lib.whitelogouse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(851.8,50.7,0.414,0.414,0,0,0,0,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({regY:0,scaleX:0.03,scaleY:0.03,y:56.7},0).to({regX:0.1,scaleX:0.47,scaleY:0.47,x:851.9,alpha:1},6,cjs.Ease.get(1)).to({scaleX:0.41,scaleY:0.41,x:851.8},7,cjs.Ease.get(1)).wait(308));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7dAf4MAAAg/vMB72AAAMAAAA/vg");
	mask.setTransform(412.1,138.1);

	// classic-turkey-dinner
	this.instance_3 = new lib.classicturkeydinnersue();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.8,70);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(309).to({x:-288.2},0).to({x:339.8,alpha:1},10,cjs.Ease.get(1)).to({x:319.8},8,cjs.Ease.get(1)).wait(3));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg7dAf4MAAAg/vMB72AAAMAAAA/vg");
	mask_1.setTransform(412.1,138.1);

	// mains-and-sides
	this.instance_4 = new lib.mainsides();
	this.instance_4.parent = this;
	this.instance_4.setTransform(233.5,126.8);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(309).to({x:-374.5},0).to({x:253.5,alpha:1},10,cjs.Ease.get(1)).to({x:233.5},8,cjs.Ease.get(1)).wait(3));

	// and-so-much-more
	this.instance_5 = new lib.organiccranberrysauce();
	this.instance_5.parent = this;
	this.instance_5.setTransform(257,89.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(266).to({y:84.7},0).to({alpha:1},10).wait(28).to({alpha:0},5).wait(21));

	// pumpkin-apple-pies
	this.instance_6 = new lib.organicturkeygravy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(215.9,89.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(228).to({alpha:1},10).wait(28).to({alpha:0},5).wait(59));

	// herb-stuffing
	this.instance_7 = new lib.herbstuffing();
	this.instance_7.parent = this;
	this.instance_7.setTransform(211,84.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190).to({alpha:1},10).wait(28).to({alpha:0},5).wait(97));

	// mashed-potatoes
	this.instance_8 = new lib.mashedpotatoes();
	this.instance_8.parent = this;
	this.instance_8.setTransform(262.5,84.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(152).to({alpha:1},10).wait(28).to({alpha:0},5).wait(135));

	// Spiral-Cut
	this.instance_9 = new lib.spiralcutham();
	this.instance_9.parent = this;
	this.instance_9.setTransform(179.6,89.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(114).to({y:84.7},0).to({alpha:1},10).wait(28).to({alpha:0},5).wait(173));

	// roasted-turkey
	this.instance_10 = new lib.roastedturkey();
	this.instance_10.parent = this;
	this.instance_10.setTransform(245.4,89.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(76).to({y:84.7},0).to({alpha:1},10).wait(28).to({alpha:0},5).wait(211));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Eg7dAf4MAAAg/vMB72AAAMAAAA/vg");
	mask_2.setTransform(412.1,138.1);

	// whats-in-our-classic
	this.instance_11 = new lib.whatsinourclassic();
	this.instance_11.parent = this;
	this.instance_11.setTransform(320.8,89.5);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({x:-289.3},0).to({x:330.8,alpha:1},10,cjs.Ease.get(1)).to({x:320.8},8,cjs.Ease.get(1)).wait(49).to({alpha:0},5).wait(249));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Eg7xAf4MAAAg/vMB8KAAAMAAAA/vg");
	mask_3.setTransform(412.1,138.1);

	// rollover
	this.cta_rollover = new lib.ctarolloveruse();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(113.4,197.1);
	this.cta_rollover.alpha = 0;

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(19).to({x:-148.7},0).to({x:121.3,alpha:1},10,cjs.Ease.get(1)).to({x:113.4},8,cjs.Ease.get(1)).wait(293));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Eg4pAf4MAAAg/vMB5CAAAMAAAA/vg");
	mask_4.setTransform(412.1,138.1);

	// order-now
	this.instance_12 = new lib.billboardordernow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(110.2,196.5);
	this.instance_12.alpha = 0;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({x:-151.7},0).to({x:118.3,alpha:1},10,cjs.Ease.get(1)).to({x:110},8,cjs.Ease.get(1)).wait(293));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Eg7xAf4MAAAg/vMB8KAAAMAAAA/vg");
	mask_5.setTransform(412.1,138.1);

	// cta-rectangle
	this.instance_13 = new lib.ctarectangleuse();
	this.instance_13.parent = this;
	this.instance_13.setTransform(113.4,197.1);
	this.instance_13.alpha = 0;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({x:-148.7},0).to({x:121.3,alpha:1},10,cjs.Ease.get(1)).to({x:113.4},8,cjs.Ease.get(1)).wait(293));

	// garnish
	this.instance_14 = new lib.toprightgarnish();
	this.instance_14.parent = this;
	this.instance_14.setTransform(943.5,54);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(57).to({alpha:1},10).wait(263));

	// turkey
	this.instance_15 = new lib.seventeenturkey_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(786.5,143);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(52).to({alpha:1},10).wait(268));

	// cranberries
	this.instance_16 = new lib.seventeencranberriespng();
	this.instance_16.parent = this;
	this.instance_16.setTransform(680.5,-0.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(47).to({alpha:1},10).wait(273));

	// ham
	this.instance_17 = new lib.hampng();
	this.instance_17.parent = this;
	this.instance_17.setTransform(510.1,187);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(42).to({alpha:1},10).wait(278));

	// spinach
	this.instance_18 = new lib.spinachpng();
	this.instance_18.parent = this;
	this.instance_18.setTransform(315.9,216);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(37).to({alpha:1},10).wait(283));

	// table
	this.instance_19 = new lib.seventeentable_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(330));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.6,69,970.4,306);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;