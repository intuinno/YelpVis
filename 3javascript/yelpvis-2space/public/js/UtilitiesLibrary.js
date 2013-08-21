//alert("loaded");

var result = []
var num = 0;
function getTexts(){
 var text1 = document.getElementsByTagName("text");
 var new_text = [];
 for (var i=0;i<text1.length-VisDock.init_text;i++){
  new_text[i] = text1[i+VisDock.init_text];
 }
 return new_text;
}
function getCircles(){
 return document.getElementsByTagName("circle");
}
function getPaths(){
 return document.getElementsByTagName("path");
}
function getNodes(N){
 var nodes = document.getElementsByTagName("g");

 var new_nodes = []
 for (var i=0;i<N;i++){
 init_g=4
//  new_nodes[i] = nodes[i+init_g-1];
  new_nodes[i] = nodes[i+init_g];
 }
 return new_nodes;
}
function getNumberOfCircles(){
 return VisDock.numSvgCircle;
}
function getNumberOfPaths(){
 return VisDock.numSvgPath;
}
function getQueryColor(index){
 return QueryManager.colors[index];
}
function getQueryVisibility(index){
 return QueryManager.visibility[index];
}
function getPolygons(){
 return document.getElementsByTagName("polygon");
}
function CheckNodeConditions(obj,attr,str){
 var result=obj.getAttributeNS(null,attr);
//alert(result)
 if (result.indexOf(str) == -1){
  return 0;
 }
 else {
  return 1;
 }
}

//function PathInit(points){
// var path = document.createElementNS("http://www.w3.org/2000/svg","path");
// var strpoints=[];

// for(var i=0;i<points.length;i++){
//  if (i != points.length-1){
//   strpoints=[strpoints + points[i][0] + "," + points[i][1] + " "];
//  }
//  else{
//   strpoints=[strpoints + points[i][0] + "," + points[i][1]];
//  }
// }
// strpoints=[strpoints + points[0][0] + "," + points[0][1]];
// path.setAttributeNS(null,"points",strpoints)
// alert(strpoints);
// return path;
//}

function PolygonInit(points,t){
 var shapebound = document.createElementNS("http://www.w3.org/2000/svg","polygon");
 var strpoints=[];

 for(var i=0;i<points.length;i++){
  if (i != points.length-1){
   strpoints=[strpoints + (points[i][0]-t[0]) + "," + (points[i][1]-t[1]) + " "];
  }
  else{
   strpoints=[strpoints + (points[i][0]-t[0]) + "," + (points[i][1]-t[1]) + " "];
  }
 }
 strpoints=[strpoints + (points[0][0]-t[0]) + "," + (points[0][1]-t[1])];
 shapebound.setAttributeNS(null,"points",strpoints)
 

 
 
 
 //shapebound.attr("transform","scale(" + PanZoomTool)")
 return shapebound;
}

function EllipseInit(points){
 var ellipse = document.createElementNS("http://www.w3.org/2000/svg","ellipse");
 var ecx=points[0];
 var ecy=points[1];
 var rx=points[2];
 var ry=points[3];
//alert(ecx + "   " + ecy + "   " + rx + "   " + ry);
 ellipse.setAttributeNS(null,"cx",ecx)
 ellipse.setAttributeNS(null,"cy",ecy)
 ellipse.setAttributeNS(null,"rx",rx)
 ellipse.setAttributeNS(null,"ry",ry) 
//alert(ellipse)
 return ellipse;
}

function LineInit(points){
 var line = document.createElementNS("http://www.w3.org/2000/svg","line");
 var x1=points[0][0];
 var y1=points[0][1];
 var x2=points[1][0];
 var y2=points[1][1];
 line.setAttributeNS(null,"x1",x1);
 line.setAttributeNS(null,"y1",y1);
 line.setAttributeNS(null,"x2",x2);
 line.setAttributeNS(null,"y2",y2);

 return line;
}

//function EllipseInit(points){
// var shapebound = document.createElementNS("http://www.w3.org/2000/svg","polygon");
// shapebound.setAttributeNS(null,"cx",points[0])
// shapebound.setAttributeNS(null,"cy",points[1])
// shapebound.setAttributeNS(null,"r",points[2])
// return shapebound;
//}

function PathPolygonIntersection(points,shapebound,path){
 var bound=new Polygon(shapebound);
 var P=new Path(path);
 var str=path.getAttributeNS(null,"d").split("L")
 var str2=str[0].split(",");
 var x=str2[0].split("M")[1];
 var y=str2[1];
 var pt = new Point2D(x,y);

// if (bound.pointInPolygon(pt)){
//  return 1;
// }
//alert(x + " " +y)
 var result = Intersection.intersectPathShape(P, bound);
//alert(result.status)
 if (result.status == "Intersection") {
  return 1;
 }
 return 0;
// }
}

function PathLineIntersection(points,path){
 var P = new Path(path)
// var cx=(circle.getAttributeNS(null,"cx"));
// var cy=(circle.getAttributeNS(null,"cy"));
// var r=(circle.getAttributeNS(null,"r"));
// if (cx != null && cy != null && r != null){
//  var c = new Point2D(cx,cy);
  if (points.length > 2){
//   var line = PathInit(points);
//   var L = new Path(path);
//   var result = Intersection.intersectPathShape(P, L); 
//   var result = Intersection.intersectPathShape(L, P); 
//   if (result.status == "Intersection") {
//    return 1;
//   }
   for (var j=0;j<points.length-1;j++){
    var line = LineInit([[points[j][0], points[j][1]],[points[j+1][0],points[j+1][1]]]);
    var L = new Line(line);
    var result = Intersection.intersectPathShape(P, L); 
    if (result.status == "Intersection") {
     return 1;
    }
   }
  }
  else{
   var line = LineInit(points);
   var L = new Line(line);
   var result = Intersection.intersectPathShape(P, L);
   if (result.status == "Intersection") {
    return 1;
   }
  }
// }
}

function PathEllipseIntersection(points,path){
//alert(points)
// if (points.length == 1){
  var E = new Ellipse(points);
// }
// else {
//  var ellipse = EllipseInit(points);
//  var E = new Ellipse(ellipse);
// }
// var cx=parseFloat(points.getAttributeNS(null,"cx"))-transform[0];
// var cy=parseFloat(points.getAttributeNS(null,"cy"))-transform[1];
// var rx=parseFloat(points.getAttributeNS(null,"rx"));
// var ry=parseFloat(points.getAttributeNS(null,"ry"));

 var P = new Path(path);
 var str=path.getAttributeNS(null,"d").split("L")
 var str2=str[0].split(",");
 var x=str2[0].split("M")[1];
 var y=str2[1];

// var pt = new Point2D(x,y);
// if (Math.pow((cx-x)/rx,2) + Math.pow((cy-y)/ry,2) <= 1){
//  return 1;
// }
//alert(x + " " + y)
 var result = Intersection.intersectPathShape(P, E)
 if (result.status == "Intersection") {
  return 1;
 }
}

function PolygonPolygonIntersection(points,shapebound,polygon){
 var bound=new Polygon(shapebound);
 var npoly=new Polygon(polygon);
 var vector_points=[];
 var vector_points2 = [];
//alert("JFDSKLJFKD")
 for (var j=0;j<points.length;j++){
  vector_points[j] = new Point2D(points[j][0],points[j][1])
 }
// alert(polygon.getAttributeNS(null,"points"))
 var points2 = polygon.getAttributeNS(null,"points").split(" ")
//alert(points2)
 for (var j=0;j<points2.length;j++){
  var pxy = points2[j].split(",");
  var px = parseInt(pxy[0]);
  var py = parseInt(pxy[1]);
  vector_points2[j] = new Point2D(px,py)
 }
 var pxy = points2[0].split(",");
 var p_x = pxy[0];
 var p_y = pxy[1];

 var p = new Point2D(p_x,p_y);

 if (bound.pointInPolygon(p)){
  return 1;
 }
 var result = Intersection.intersectPolygonPolygon(vector_points, vector_points2)
 if (result.status == "Intersection") {
  return 1;
 }
// }
}

function CirclePolygonIntersection(points,shapebound,circle){
 var bound=new Polygon(shapebound);
 var vector_points=[];
 var cx=(circle.getAttributeNS(null,"cx"));
 var cy=(circle.getAttributeNS(null,"cy"));
 var r=(circle.getAttributeNS(null,"r"));
 for (var j=0;j<points.length;j++){
  vector_points[j] = new Point2D(points[j][0],points[j][1])
 }
 if (cx != null && cy != null && r != null){
  cx = parseFloat(cx);
  cy = parseFloat(cy);
  r = parseFloat(r);

		var tool = d3.select("#legend").selectAll("g")
		//alert(tool)
		var det = d3.mouse(tool[0][0])
		if (det[0]<0){
			cx = PanZoomTool.zoomMovieScale*cx + PanZoomTool.zoomMovieTranslate[0]
			cy = PanZoomTool.zoomMovieScale*cy + PanZoomTool.zoomMovieTranslate[1]
			//r = r / PanZoomTool.zoomMovieScale;
			//RectangleTool.drawspace = RectangleTool.panel1;
		//	alert("meh")
		}
		else{
			cx = PanZoomTool.zoomUserScale*cx + PanZoomTool.zoomUserTranslate[0]
			cy = PanZoomTool.zoomUserScale*cy + PanZoomTool.zoomUserTranslate[1]			
			//r = r  PanZoomTool.zoomUserScale;			
			//RectangleTool.drawspace = RectangleTool.panel2;
		//	alert("meh2")
		} 


  var p = new Point2D(cx,cy);

  if (bound.pointInPolygon(p)){
   return 1;
  }
  
  
  
  
  
  var result = Intersection.intersectCirclePolygon(p, r, vector_points)
  if (result.status == "Intersection") {
   return 1;
  }
 }
}

function EllipsePolygonIntersection(points,shapebound,points2){
 var bound=new Polygon(shapebound); 
 var vector_points=[];
 var cx=points[0];//(ellipse.getAttributeNS(null,"cx"));
 var cy=points[1];//(circle.getAttributeNS(null,"cy"));
// var rx=points[2];//(circle.getAttributeNS(null,"r"));
// var ry=points[3];
// for (var j=0;j<points.length;j++){
//  vector_points[j] = new Point2D(points[j][0],points[j][1])
// }
// if (cx != null && cy != null && r != null){
//  cx = parseFloat(cx);
//  cy = parseFloat(cy);
//  r = parseFloat(r);
//  var p = new Point2D(cx,cy);
 var c = new Point2D(cx,cy);//alert("JFDSKLK")
 var rx = points[2];
 var ry = points[3];//alert("CCCCCC")
  if (bound.pointInPolygon(points2[0])){
   return 1;
  }
//alert(points2[0].x + " " + points2[0].y)
  if (Math.pow((cx-points2[0].x)/rx,2) + Math.pow((cy-points2[0].y)/ry,2) <= 1){
   return 1;
  }

//alert("CCSD")
  var result = Intersection.intersectEllipsePolygon(c, rx, ry, points2)
  if (result.status == "Intersection") {
   return 1;
  }
// }
}

function LinePolygonIntersection(points1, points2, shapebound){//alert("JSDFKLJDFKS")
 var bound=new Polygon(shapebound);
 var vector_points=[];
 var p = [];
// if (points2.length > 2){
 for (var j=0;j<points2.length-1;j++){
  p1 = new Point2D(points2[j][0], points2[j][1])
  p2 = new Point2D(points2[j+1][0],points2[j+1][1])
    //var line = LineInit([[points[j][0], points[j][1]],[points[j+1][0],points[j+1][1]]]);
    //var L = new Line(line);
//alert(points1)
  var result = Intersection.intersectLinePolygon(p1, p2, points1); //alert(result.status)
  if (result.status == "Intersection") {
   return 1;
  }
 }
// }

//alert(result.status)

// var cx=(circle.getAttributeNS(null,"cx"));
// var cy=(circle.getAttributeNS(null,"cy"));
// var r=(circle.getAttributeNS(null,"r"));
// for (var j=0;j<points.length;j++){
//  vector_points[j] = new Point2D(points[j][0],points[j][1])
// }
// if (cx != null && cy != null && r != null){
//  cx = parseFloat(cx);
//  cy = parseFloat(cy);
//  r = parseFloat(r);
//  var p = new Point2D(cx,cy);

//  if (bound.pointInPolygon(p)){
//   return 1;
//  }
//  var result = Intersection.intersectCirclePolygon(p, r, vector_points)
//  if (result.status == "Intersection") {
//   return 1;
//  }
// }
}

function CircleLineIntersection(points,circle){
 var cx=(circle.getAttributeNS(null,"cx"));
 var cy=(circle.getAttributeNS(null,"cy"));
 var r=(circle.getAttributeNS(null,"r"));
 if (cx != null && cy != null && r != null){
  var c = new Point2D(cx,cy);
  if (points.length > 2){
   for (var j=0;j<points.length-1;j++){
    var a1 = new Point2D(points[j][0],points[j][1]);
    var a2 = new Point2D(points[j+1][0],points[j+1][1]);
    var result = Intersection.intersectCircleLine(c, r, a1, a2)
    if (result.status == "Intersection") {
     return 1;
    }
   }
  }
  else{
   var a1 = new Point2D(points[0][0],points[0][1]);
   var a2 = new Point2D(points[1][0],points[1][1]);
   var result = Intersection.intersectCircleLine(c, r, a1, a2)
   if (result.status == "Intersection") {
    return 1;
   }
  }
 }
}

function CircleEllipseIntersection(points,circle){
 //var translate = transform[0];
 //var scale = transofrm[1];
 var vector_points=[];
 var ecx=points[0];
 var ecy=points[1];
 var rx=points[2];
 var ry=points[3];
 var cx=circle.getAttributeNS(null,"cx");
 var cy=circle.getAttributeNS(null,"cy");
 var r=circle.getAttributeNS(null,"r");
 var cc = new Point2D(cx,cy);
 if (cx != null && cy != null && r != null){
  cx = parseFloat(cx)//+translate[0];
  cy = parseFloat(cy)//+translate[1];
  var ec = new Point2D(ecx,ecy);
  if (Math.pow((cx-ecx)/rx,2) + Math.pow((cy-ecy)/ry,2) <= 1){
   return 1;
  }
  var result = Intersection.intersectCircleEllipse(cc, r, ec, rx, ry)
  if (result.status == "Intersection") {
   return 1;
  }
 }
}
function addCircleLayer(circle){
 if (QueryManager.layers[num-1] == undefined){
  QueryManager.layers[num-1] = [];
  QueryManager.colors[num-1] = [];
  QueryManager.visibility[num-1] = [];
 }

 var cx = parseFloat(circle.getAttributeNS(null,"cx"));
 var cy = parseFloat(circle.getAttributeNS(null,"cy"));
 var r = parseFloat(circle.getAttributeNS(null,"r"));

 var C = viewport.append("circle")
  .attr("cx",cx)
  .attr("cy",cy)
  .attr("r",r)
  .attr("style", "opacity:" + VisDock.opacity + "; fill:" + VisDock.color[num-1]);


//alert(C.getAttributeNS(null,"r"))
 QueryManager.layers[num-1].push(C);
 if (QueryManager.colors[num-1].length == 0){
  QueryManager.colors[num-1] = VisDock.color[num-1];
  QueryManager.visibility[num-1] = VisDock.opacity;
 }
}

function addPathLayer(path,t){
 if (QueryManager.layers[num-1] == undefined){
  QueryManager.layers[num-1] = [];
  QueryManager.colors[num-1] = [];
  QueryManager.visibility[num-1] = [];
 }

 var d = path.getAttributeNS(null,"d");
//alert(VisDock.color + " " + num)
 var P = viewport.append("path")
  .attr("d",d)
  .attr("fill", VisDock.color[num-1])
  .attr("opacity", VisDock.opacity)
  .attr("stroke-width",1)
  .attr("transform","translate("+t[0]+","+t[1]+")")
//alert(QueryManager.layers)
 QueryManager.layers[num-1].push(P);
 if (QueryManager.colors[num-1].length == 0){
  QueryManager.colors[num-1] = VisDock.color[num-1];
  QueryManager.visibility[num-1] = VisDock.opacity;
 };//alert("done")
//alert("DONE")
}

function addTextLayer(textstr,str,style,t){
 if (QueryManager.layers[num-1] == undefined){
  QueryManager.layers[num-1] = [];
  QueryManager.colors[num-1] = [];
  QueryManager.visibility[num-1] = [];
 }

 //var strstyle = style.split(",");
 //var anchor = strstyle[0];
 style.fill = VisDock.color[num-1];
 var posx = textstr.attr("x")
 var posy = textstr.attr("y")
// var style = textstr.attr("style")
//alert(style)
// alert(textstr.attr("x") + " and " + str + " and ")
 //alert(style.fill) 
 var P = viewport.append("text")
  .attr({"x":posx,"y":posy})
  .attr(style)
	.attr("style", "font-family: arial;")
  //.attr("fill", VisDock.color[num-1])
  //.attr("transform","translate("+t[0]+","+t[1]+")")
  .text(str)
//alert("alert")
//alert(QueryManager.layers)
 QueryManager.layers[num-1].push(P);
 if (QueryManager.colors[num-1].length == 0){
  QueryManager.colors[num-1] = VisDock.color[num-1];
  QueryManager.visibility[num-1] = VisDock.opacity;
 };//alert("done")
//alert("DONE")
}

function AddCircleColor(circle){
 if (QueryManager.layers[num-1] == undefined){
  QueryManager.layers[num-1] = [];
  QueryManager.colors[num-1] = [];
  QueryManager.visibility[num-1] = [];
 }
//alert(QueryManager.visibility[num-1])
 circle.setAttributeNS(null, "style", "fill: " + VisDock.color[num-1]);
 QueryManager.layers[num-1].push(circle);
 if (QueryManager.colors[num-1].length == 0){
  QueryManager.colors[num-1] = VisDock.color[num-1];
  QueryManager.visibility[num-1] = VisDock.opacity;
 }
}
function ChangeCircleColor(circle,color){
//alert(circle)
 circle.setAttributeNS(null, "style", "fill: " + color);
//alert(color)
}
//alert("done");