if ( typeof Object.create !== 'function') {

	Object.create = function(o) {
		function F() {
		}


		F.prototype = o;
		return new F();
	};
}

$('#page1').live('pageinit', function() {

	var PSmin = 1, PSmax = 100;

	$("#range-1a").on("change", function(event) {

		PSmin = +event.target.value;

		if (isMovieSelected) {

			selectionStatesMovie.requeryCriteria(PSmin, PSmax);
			updateDisplay('user', selectionStatesMovie);
		} else {
			selectionStatesUser.requeryCriteria(PSmin, PSmax);
			updateDisplay('movie', selectionStatesUser);
		}
	});

	$("#range-1b").on("change", function(event) {

		PSmax = +event.target.value;

		if (isMovieSelected) {

<<<<<<< HEAD
			selectionStatesMovie.requeryCriteria(PSmin, PSmax);
			updateDisplay('user', selectionStatesMovie);
		} else {
			selectionStatesUser.requeryCriteria(PSmin, PSmax);
			updateDisplay('movie', selectionStatesUser);
		}

	});
=======
	var drawspace = null;
	
	
		//alert(panel1)		
		//alert(aa)
		//Panel.viewport.selectAll("*").attr("pointer-events", "none");
		//Panel.panel.on("mousedown", EllipseTool.mousedown);
		//panel1.selectAll("*").attr("pointer-events", "none");

		//EllipseTool.panel1.on("mousedown", EllipseTool.mousedown);	
		//panel2.selectAll("*").attr("pointer-events", "none");
		//EllipseTool.panel2.on("mousedown", EllipseTool.mousedown);		    
    
    
    
    VisDock.selectionHandler = {
        reset: function(){
        	
        	VisDock.captured = [];
        	VisDock.layers = [];
        	QueryManager.remove = 0;
        	for (i=0;i<num;i++){
        		QueryManager.query[i].remove();
        	}
        	var b_width = QueryManager.b_width;
        	var b_height = QueryManager.b_height;
        	QueryManager.ScrollHeight = QueryManager.b_height - 2*QueryManager.b_width;
        	QueryManager.ScrollbHeight = QueryManager.ScrollHeight;
        	QueryManager.ScrollBar.attr("x",0).attr("y",0)
        		.attr("width",b_width)
        		.attr("height",b_height)
        	num = 0;
        	/*
        	for (var j=0;j<num;j++){

			   	QueryManager.remove -= 1;//alert(QueryManager.remove)	
			   	VisDock.captured.splice(j,1);
				QueryManager.query[j].remove();

			   	QueryManager.removed.push(j);

				    	//VisDock.selectionHandler.removeColor(QueryManager.layers[j], index);
				    	
				    	
			   	var add = 0;;
			 	for (var i=0;i<num;i++){
			        if (QueryManager.removed.indexOf(i) != -1){
				    add -= 1;
			        }
			        var move = ((i+QueryManager.relative+add)*query_box_height);
			        QueryManager.query[i].attr("transform","translate(0,"+ (move)+")");//alert(move);
			        if (move <= 7*query_box_height && move >= 0){
					    QueryManager.query[i].attr("display","inline");
				    }
				    else {
					    QueryManager.query[i].attr("display","none");
				    }
				};	
        		if (QueryManager.ScrollbHeight < QueryManager.ScrollHeight){
    				    QueryManager.ScrollbHeight = QueryManager.ScrollHeight - (num-8+QueryManager.remove)*QueryManager.ScrollHeight/(num+QueryManager.remove);
				        if (QueryManager.ScrollbHeight + QueryManager.b_pos_y >= QueryManager.ScrollHeight){
					    var increment = QueryManager.ScrollHeight/(num+QueryManager.remove)-QueryManager.ScrollHeight/(num+QueryManager.remove-1);
					//alert(QueryManager.b_pos_y)
					    QueryManager.Bar.attr("transform","translate(0,"+(b_width+QueryManager.b_pos_y+increment)+")")
								//var add = 0;
								//for (var i=0;i<num;i++){
								
				        }
				        QueryManager.Bar.attr("height",QueryManager.ScrollbHeight)
							    
				    }
				    else{
				        QueryManager.extra = -1*(num-8+QueryManager.remove)*QueryManager.ScrollHeight/(num+QueryManager.remove);
				    }
				
				}
        	*/
        	
        	
        },
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62

	$("#bandwidth").on("change", function(event) {

		bandwidth = +event.target.value;

		if (isMovieSelected) {

			updateDisplay('user', selectionStatesMovie);
		} else {
			updateDisplay('movie', selectionStatesUser);
		}

	});

	$("input[name=groupMode]").on("change", function(event) {

		if ($("input[name=groupMode]:checked").val() == "union") {
			isUnion = true;

		} else {
			isUnion = false;
		}

	});

	var w = 600;
	var h = 600;
	var margin = 20;
	var categoryList = ['Mexican', 'Vegetarian', 'Breakfast & Brunch', 'American', 'Asian', 'Italian', 'Hotels & Travel', 'Arts & Entertainment', 'Nightlife', 'etc'];

	var drawspace = null;

	//alert(panel1)
	//alert(aa)
	//Panel.viewport.selectAll("*").attr("pointer-events", "none");
	//Panel.panel.on("mousedown", EllipseTool.mousedown);
	//panel1.selectAll("*").attr("pointer-events", "none");

	//EllipseTool.panel1.on("mousedown", EllipseTool.mousedown);
	//panel2.selectAll("*").attr("pointer-events", "none");
	//EllipseTool.panel2.on("mousedown", EllipseTool.mousedown);

	VisDock.selectionHandler = {
		reset : function() {

			VisDock.captured = [];
			QueryManager.remove = 0;
			for ( i = 0; i < num; i++) {
				QueryManager.query[i].remove();
			}
			var b_width = QueryManager.b_width;
			var b_height = QueryManager.b_height;
			QueryManager.ScrollHeight = QueryManager.b_height - 2 * QueryManager.b_width;
			QueryManager.ScrollbHeight = QueryManager.ScrollHeight;
			QueryManager.ScrollBar.attr("x", 0).attr("y", 0).attr("width", b_width).attr("height", b_height)
			num = 0;
			/*
			 for (var j=0;j<num;j++){

			 QueryManager.remove -= 1;//alert(QueryManager.remove)
			 VisDock.captured.splice(j,1);
			 QueryManager.query[j].remove();

			 QueryManager.removed.push(j);

			 //VisDock.selectionHandler.removeColor(QueryManager.layers[j], index);

			 var add = 0;;
			 for (var i=0;i<num;i++){
			 if (QueryManager.removed.indexOf(i) != -1){
			 add -= 1;
			 }
			 var move = ((i+QueryManager.relative+add)*query_box_height);
			 QueryManager.query[i].attr("transform","translate(0,"+ (move)+")");//alert(move);
			 if (move <= 7*query_box_height && move >= 0){
			 QueryManager.query[i].attr("display","inline");
			 }
			 else {
			 QueryManager.query[i].attr("display","none");
			 }
			 };
			 if (QueryManager.ScrollbHeight < QueryManager.ScrollHeight){
			 QueryManager.ScrollbHeight = QueryManager.ScrollHeight - (num-8+QueryManager.remove)*QueryManager.ScrollHeight/(num+QueryManager.remove);
			 if (QueryManager.ScrollbHeight + QueryManager.b_pos_y >= QueryManager.ScrollHeight){
			 var increment = QueryManager.ScrollHeight/(num+QueryManager.remove)-QueryManager.ScrollHeight/(num+QueryManager.remove-1);
			 //alert(QueryManager.b_pos_y)
			 QueryManager.Bar.attr("transform","translate(0,"+(b_width+QueryManager.b_pos_y+increment)+")")
			 //var add = 0;
			 //for (var i=0;i<num;i++){

			 }
			 QueryManager.Bar.attr("height",QueryManager.ScrollbHeight)

			 }
			 else{
			 QueryManager.extra = -1*(num-8+QueryManager.remove)*QueryManager.ScrollHeight/(num+QueryManager.remove);
			 }

			 }
			 */

		},

		getHitsPolygon : function(points, inclusive) {

			//var bb = d3.selectAll(".userCircle");
			//isMovieSelected = 0;
			var tool = d3.select("#legend").selectAll("g")
			var det = d3.mouse(tool[0][0])
			if (det[0] < 0) {

				if (isMovieSelected == 1) {

				} else {
					clearSelection();
					if (num != 0) {
						VisDock.selectionHandler.reset();
					}

					//num = 0;

				}

				drawspace = panel1;
				isMovieSelected = 1;
				var aa = d3.selectAll(".movieCircle");

			} else {

				if (isMovieSelected == 1) {
					clearSelection();
					if (num != 0) {
						VisDock.selectionHandler.reset();
					}

					num = 0;
				} else {

				}

				drawspace = panel2;
				isMovieSelected = 0;
				var aa = d3.selectAll(".userCircle");
				//	alert("meh2")
			}

			var nElements = aa[0].length;
			//getNumberOfCircles();

			//var aa2 = getNodes(nElements);
			var bb = aa.data();
			var hits = [];

			var count = 0;

			var captured = 0;

			var shapebound = PolygonInit(points, [0, 0]);

			for (var i = 0; i < nElements; i++) {

				captured = 0;

				captured = CirclePolygonIntersection(points, shapebound, aa[0][i], inclusive);

				if (captured == 1 && CheckNodeConditions(aa[0][i], "class", "star")) {

					//if (isMovieSelected){
					hits[count] = bb[i];
					//aa[0][i];
					//}
					//else{
					//	hits[count] = mojvieData[i];
					//}

					count++;
				}
			}

			var tempGalaxy = [];
			//var count2 = 0;
			for ( i = 0; i < hits.length; i++) {
				tempGalaxy[i] = [];
				//Group mode:  Add to the current selection
				if (isMovieSelected) {
					for (var count = 0; count < userLength; count++) {

						if (ratings[count][bb[i].index] >= PSmin && ratings[count][bb[i].index] <= PSmax) {

							tempGalaxy[i].push(userData[count]);
						}
					}
				} else {

					for (var count = 0; count < movieLength; count++) {

						if (ratings[bb[i].num][count] >= PSmin && ratings[bb[i].num][count] <= PSmax) {

							tempGalaxy[i].push(movieData[count]);
						}
					}
				}
			}
			var querySpace;
			if (isMovieSelected) {
				querySpace = 'movie';
			} else {
				querySpace = 'user';
			}

			if (isUnion) {

				var union = []

				for (var j = 0; j < tempGalaxy.length; j++) {

					for (var k = 0; k < tempGalaxy[j].length; k++) {
						if (union.indexOf(tempGalaxy[j][k]) == -1) {
							union.push(tempGalaxy[j][k]);
						}
					}
				}

				//num++;
				//QueryManager.addQuery();
				VisDock.captured[num] = union;
				//VisDock.selectionHandler.setColor(union);
				QueryManager.querytoggle = [];
				for (var i = 0; i < num; i++) {

					QueryManager.querybox[i].attr("style", "fill: white;stroke:black")
				}

				var tempQuerySet = new QuerySets(querySpace, hits, union, num, 'union', PSmin, PSmax, "", $('input[name=contourMode]:checked').val(), isContourOn);

			} else {
				var common = []
				var first = tempGalaxy[0];
				for ( i = 0; i < tempGalaxy.length; i++) {
					var valid = 1;
					common = [];
					for (var j = 0; j < tempGalaxy[i].length; j++) {
						if (first.indexOf(tempGalaxy[i][j]) != -1) {
							common.push(tempGalaxy[i][j])
						}
					}
					first = common;

				}
				if (common.length != 0) {
					//num++;
					//QueryManager.addQuery();
					VisDock.captured[num] = common;
				}
				var tempQuerySet = new QuerySets(querySpace, hits, common, num, 'common', PSmin, PSmax, "", $('input[name=contourMode]:checked').val(), isContourOn);

			}

			//  var textLegend = d.title + " (Ratings " + PSmin + "-" + PSmax + ") " + $('input[name=contourMode]:checked').val();

			if (isMovieSelected) {
				selectionStatesMovie.add(tempQuerySet);

				x.domain(xDomainExtent);
				y.domain(yDomainExtent);

<<<<<<< HEAD
				updateDisplay('user', selectionStatesMovie);
			} else {
				selectionStatesUser.add(tempQuerySet);
				updateDisplay('movie', selectionStatesUser);
			}

			return hits;
			//	updateDisplay('movie', selectionStatesMovie);;
=======
	//x.domain(xDomainExtent);
	//y.domain(yDomainExtent);

	updateDisplay('user', selectionStatesMovie);
	updateDisplay('movie',selectionStatesUser);

	} else {
		selectionStatesUser.add(tempQuerySet);

		updateDisplay('movie',selectionStatesUser);
		updateDisplay('user',selectionStatesMovie);		
	}
	PanZoomTool.zoomMovie();
	PanZoomTool.zoomUser();
	
	return hits;
//	updateDisplay('movie', selectionStatesMovie);;
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62

		},

		getHitsEllipse : function(points, inclusive) {

			//var bb = d3.selectAll(".userCircle");
			//isMovieSelected = 0;
			var tool = d3.select("#legend").selectAll("g")
			var det = d3.mouse(tool[0][0])
			if (det[0] < 0) {

				if (isMovieSelected == 1) {

				} else {
					clearSelection();
					if (num != 0) {
						VisDock.selectionHandler.reset();
					}

					//num = 0;

				}

				drawspace = panel1;
				isMovieSelected = 1;
				var aa = d3.selectAll(".movieCircle");

			} else {

				if (isMovieSelected == 1) {
					clearSelection();
					if (num != 0) {
						VisDock.selectionHandler.reset();
					}

					num = 0;
				} else {

				}

				drawspace = panel2;
				isMovieSelected = 0;
				var aa = d3.selectAll(".userCircle");
				//	alert("meh2")
			}

			var nElements = aa[0].length;
			//getNumberOfCircles();

			//var aa2 = getNodes(nElements);
			var bb = aa.data();
			var hits = [];

			var count = 0;

			var captured = 0;

			//var shapebound = PolygonInit(points, [0, 0]);

			for (var i = 0; i < nElements; i++) {

				captured = 0;

				captured = CircleEllipseIntersection(points, aa[0][i]);

				if (captured == 1 && CheckNodeConditions(aa[0][i], "class", "star")) {

					//if (isMovieSelected){
					hits[count] = bb[i];
					//aa[0][i];
					//}
					//else{
					//	hits[count] = mojvieData[i];
					//}
					count++;
				}
			}

			var tempGalaxy = [];
			//var count2 = 0;
			for ( i = 0; i < hits.length; i++) {
				tempGalaxy[i] = [];
				//Group mode:  Add to the current selection
				if (isMovieSelected) {
					for (var count = 0; count < userLength; count++) {

						if (ratings[count][bb[i].index] >= PSmin && ratings[count][bb[i].index] <= PSmax) {

							tempGalaxy[i].push(userData[count]);
						}
					}
				} else {

					for (var count = 0; count < movieLength; count++) {

						if (ratings[bb[i].num][count] >= PSmin && ratings[bb[i].num][count] <= PSmax) {

							tempGalaxy[i].push(movieData[count]);
						}
					}
				}
			}
			var querySpace;
			if (isMovieSelected) {
				querySpace = 'movie';
			} else {
				querySpace = 'user';
			}

			if (isUnion) {

				var union = []

				for (var j = 0; j < tempGalaxy.length; j++) {

					for (var k = 0; k < tempGalaxy[j].length; k++) {
						if (union.indexOf(tempGalaxy[j][k]) == -1) {
							union.push(tempGalaxy[j][k]);
						}
					}
				}

				//num++;
				//QueryManager.addQuery();
				VisDock.captured[num] = union;
				//VisDock.selectionHandler.setColor(union);
				QueryManager.querytoggle = [];
				for (var i = 0; i < num; i++) {

					QueryManager.querybox[i].attr("style", "fill: white;stroke:black")
				}

				var tempQuerySet = new QuerySets(querySpace, hits, union, num, 'union', PSmin, PSmax, "", $('input[name=contourMode]:checked').val(), isContourOn);

			} else {
				var common = []
				var first = tempGalaxy[0];
				for ( i = 0; i < tempGalaxy.length; i++) {
					var valid = 1;
					common = [];
					for (var j = 0; j < tempGalaxy[i].length; j++) {
						if (first.indexOf(tempGalaxy[i][j]) != -1) {
							common.push(tempGalaxy[i][j])
						}
					}
					first = common;

				}
				if (common.length != 0) {
					//num++;
					//QueryManager.addQuery();
					VisDock.captured[num] = common;
				}
				var tempQuerySet = new QuerySets(querySpace, hits, common, num, 'common', PSmin, PSmax, "", $('input[name=contourMode]:checked').val(), isContourOn);

			}

			//  var textLegend = d.title + " (Ratings " + PSmin + "-" + PSmax + ") " + $('input[name=contourMode]:checked').val();

			if (isMovieSelected) {
				selectionStatesMovie.add(tempQuerySet);

				x.domain(xDomainExtent);
				y.domain(yDomainExtent);

				updateDisplay('user', selectionStatesMovie);
			} else {
				selectionStatesUser.add(tempQuerySet);
				updateDisplay('movie', selectionStatesUser);
			}

			return hits;
			//	updateDisplay('movie', selectionStatesMovie);;

		},

		/*
		 getHitsEllipse: function(points, inclusive){
		 var aa = getCircles();
		 var nElements = getNumberOfCircles();
		 var aa2 = getNodes(nElements);
		 var hits = [];
		 var count = 0;
		 var captured = 0;
		 //var shapebound = PolygonInit(points);;

		 for (var i=0; i<nElements; i++){
		 captured = 0;
		 captured = CircleEllipseIntersection(points,aa[i]);
		 //alert(CheckNodeConditions(aa2[i],"class","leaf node"));

		 if (captured == 1 && CheckNodeConditions(aa2[i],"class","leaf node")){
		 hits[count] = i;
		 count++;
		 }
		 }
		 return hits;
		 },
		 */

		getHitsLine : function(points, inclusive) {
			var aa = getCircles();
			var nElements = getNumberOfCircles();
			var sss = document.getElementsByTagName("g");
			//alert(sss.length)
			//alert(sss[4].getAttributeNS(null,"class"))
			var aa2 = getNodes(nElements);
			var hits = [];
			var count = 0;
			var captured = 0;

			for (var i = 0; i < nElements; i++) {
				captured = 0;
				captured = CircleLineIntersection(points, aa[i]);

				if (captured == 1 && CheckNodeConditions(aa2[i], "class", "leaf node")) {
					hits[count] = i;
					count++;
				}
			}
			return hits;
		},
		setColor : function(hits) {

			if (isMovieSelected == 1) {
				var aa = d3.selectAll(".movieCircle");
			} else {
				var aa = d3.selectAll(".userCircle");
			}

			var bb = aa.data();
			var tempGalaxy = [];
			//var count2 = 0;
			for ( i = 0; i < hits.length; i++) {
				tempGalaxy[i] = [];
				//Group mode:  Add to the current selection
				if (isMovieSelected) {
					for (var count = 0; count < userLength; count++) {

						if (ratings[count][bb[i].index] >= PSmin && ratings[count][bb[i].index] <= PSmax) {

<<<<<<< HEAD
							tempGalaxy[i].push(userData[count]);
						}
					}
				} else {
=======
	//x.domain(xDomainExtent);
	//y.domain(yDomainExtent);
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62

					for (var count = 0; count < movieLength; count++) {

						if (ratings[bb[i].num][count] >= PSmin && ratings[bb[i].num][count] <= PSmax) {

							tempGalaxy[i].push(movieData[count]);
						}
					}
				}
			}
			var querySpace;
			if (isMovieSelected) {
				querySpace = 'movie';
			} else {
				querySpace = 'user';
			}

			if (isUnion) {

				var union = []

				for (var j = 0; j < tempGalaxy.length; j++) {

					for (var k = 0; k < tempGalaxy[j].length; k++) {
						if (union.indexOf(tempGalaxy[j][k]) == -1) {
							union.push(tempGalaxy[j][k]);
						}
					}
				}

				//num++;
				//QueryManager.addQuery();
				VisDock.captured[num] = union;
				//VisDock.selectionHandler.setColor(union);
				QueryManager.querytoggle = [];
				for (var i = 0; i < num; i++) {

					QueryManager.querybox[i].attr("style", "fill: white;stroke:black")
				}

				var tempQuerySet = new QuerySets(querySpace, hits, union, num, 'union', PSmin, PSmax, "", $('input[name=contourMode]:checked').val(), isContourOn);

			} else {
				var common = []
				var first = tempGalaxy[0];
				for ( i = 0; i < tempGalaxy.length; i++) {
					var valid = 1;
					common = [];
					for (var j = 0; j < tempGalaxy[i].length; j++) {
						if (first.indexOf(tempGalaxy[i][j]) != -1) {
							common.push(tempGalaxy[i][j])
						}
					}
					first = common;

				}
				if (common.length != 0) {
					num++;
					//QueryManager.addQuery();
					VisDock.captured[num] = common;
				}
				var tempQuerySet = new QuerySets(querySpace, hits, common, num, 'common', PSmin, PSmax, "", $('input[name=contourMode]:checked').val(), isContourOn);

			}

			//  var textLegend = d.title + " (Ratings " + PSmin + "-" + PSmax + ") " + $('input[name=contourMode]:checked').val();

			if (isMovieSelected) {
				selectionStatesMovie.add(tempQuerySet);

				x.domain(xDomainExtent);
				y.domain(yDomainExtent);

				updateDisplay('user', selectionStatesMovie);
			} else {
				selectionStatesUser.add(tempQuerySet);
				updateDisplay('movie', selectionStatesUser);
			}

			/*
			 var aa = getCircles();
			 //alert("hits = " +aa)
			 for (var i=0;i<hits.length;i++){
			 addCircleLayer(aa[hits[i]]);
			 }*/
		},
		changeColor : function(color, query, index) {
			var visibility = getQueryVisibility(index);
			for (var i = 0; i < query.length; i++) {
				query[i].attr("style", "opacity:" + visibility + ";fill: " + color)
			}
		},
		changeVisibility : function(vis, query, index) {
			var color = getQueryColor(index);
			for (var i = 0; i < query.length; i++) {
				query[i].attr("style", "opacity:" + vis + ";fill: " + color)
			}
		},
		removeColor : function(hits, index) {
			for (var i = 0; i < hits.length; i++) {
				hits[i].remove();
			}
		}
	}

<<<<<<< HEAD
	function updateDisplay(space, selectionState) {
=======
	//  var textLegend = d.title + " (Ratings " + PSmin + "-" + PSmax + ") " + $('input[name=contourMode]:checked').val();

	if(isMovieSelected) {
	selectionStatesMovie.add(tempQuerySet);

	//x.domain(xDomainExtent);
	//y.domain(yDomainExtent);

	updateDisplay('user', selectionStatesMovie);
	} else {
		selectionStatesUser.add(tempQuerySet);
		updateDisplay('movie',selectionStatesUser);
	}    	
    	
    	
    	
    	
    	
    	
    	
/*
    var aa = getCircles();
//alert("hits = " +aa)
    for (var i=0;i<hits.length;i++){
        addCircleLayer(aa[hits[i]]);
    }*/
    },
    changeColor: function(color, query, index){
    var visibility = getQueryVisibility(index); 
    for (var i=0;i<query.length;i++){
        query[i].attr("style","opacity:" + visibility + ";fill: " +color)
    }
    },
    changeVisibility: function(vis, query, index){
    var color = getQueryColor(index);
    for (var i=0;i<query.length;i++){
        query[i].attr("style","opacity:" + vis + ";fill: " +color)
    }
    },
    removeColor: function(hits, index){
<<<<<<< HEAD
    for (var i=0;i<hits.length;i++){
        hits[i].remove();
=======
    // for (var i=0;i<hits.length;i++){
        // hits[i].remove();
    // }
    //index = index + 1;
    var selectionStatesTemp;
    var str;
    if(isMovieSelected) {
    	//selectionStatesTemp = selectionStatesMovie;
    	selectionStatesMovie.remove(index);
    	str = 'user';
    	updateDisplay(str, selectionStatesMovie);
    } else {
    	//selectionStatesTemp = selectionStatesUser;
    	selectionStatesUser.remove(index);
    	
    	str = 'movie';
    	updateDisplay(str, selectionStatesUser);
>>>>>>> 99afec0fc21d53c9c51a9d2b6241c9a74fc763aa
    }
    }
}
   

 function updateDisplay(space, selectionState) {


            var mySelectionState = selectionState;
            
            var mySelectionGroup, myQueryGroup, xSelect, ySelect, rSelect, xQuery,yQuery, rQuery;
            

            if ( space === "movie") {
                mySelectionGroup = svgMovieSelectionGroup;
                myQueryGroup = svgUserSelectionGroup;
                xSelect = xValue;
                ySelect = yValue;
                rSelect = rMovieScale;
                
                xQuery = xValueUser;
                yQuery = yValueUser;
                rQuery = rUserScale;
                
                
            } else if (space === 'user') {
                mySelectionGroup = svgUserSelectionGroup;
                myQueryGroup = svgMovieSelectionGroup;
                
                xSelect = xValueUser;
                 ySelect = yValueUser;
                rSelect = rUserScale;
                
                xQuery = xValue;
                yQuery = yValue;
                rQuery = rMovieScale;
                
                 }
        
            //Selection Space Halo
            //Update + enter
            //Bind            
            if( (mySelectionGroup.selectAll(".selectionG")[0].length !== 0 ) || (mySelectionState.querySetsList.length !== 0 )) { 
                
                var selectedEntity = mySelectionGroup.selectAll(".selectionG").data(mySelectionState.querySetsList, function(d) { 
                    return +d.assignedClass;
                    
            });
            
            //Enter 
            selectedEntity.enter().append("g").classed("selectionG",true);
            
            //Enter + Update
            selectedEntity.each(function(d, i) {

                var color = ordinalColor(d.assignedClass);
                
                //Bind
                var selectionCircle = d3.select(this).selectAll("circle").data(d.selection);
                
                //Enter Append
                selectionCircle.enter().append("circle");
                
                //Enter + Update 
                selectionCircle.attr("cx", function(d) {

                    return xSelect(d);
                }).attr("cy", function(d) {
                    return ySelect(d);
                }).attr("r", function(d) {
                    return rSelect(+d.numReview);
                }).attr("fill", color).attr("stroke", color).classed("selectedCircle", true);
                
                //Exit Remove
                selectionCircle.exit().remove();

            });
            
            //Exit Remove
            selectedEntity.exit().remove();

                }
            
            
            //Query Space Halo
            //Bind
           
            if( (myQueryGroup.selectAll(".queryG")[0].length !== 0 ) || (mySelectionState.querySetsList.length !== 0 )) { 
           
            var queryEntity = myQueryGroup.selectAll(".queryG").data(mySelectionState.querySetsList, function(d) {
                return +d.assignedClass;
            });
            
            //Enter Append
            queryEntity.enter().append("g").classed("queryG",true);
                       
            //Enter + Update            
            queryEntity.each(function(d, i) {

                var color = ordinalColor(d.assignedClass);
                
                //Bind
                var selectionCircle = d3.select(this).selectAll("circle").data(d.query);
                
                //Enter Append
                selectionCircle.enter().append("circle");
                
                //Enter + Update
                selectionCircle.attr("cx", function(d) {
                	//return d.getAttributeNS(null,"cx")
                    return xQuery(d);
                }).attr("cy", function(d) {
                    return yQuery(d);
                    //return d.getAttributeNS(null,"cy")
                }).attr("r", function(d) {
                	//return d.getAttributeNS(null,"r")
                    return rQuery(+d.numReview);
                }).attr("fill", color).attr("stroke", color).classed("selectedCircle", true);
                
                selectionCircle.exit().remove();


            });
            
            //Exit Remove
            queryEntity.exit().remove();
            
            }
            
   
            updateContour(space, mySelectionState);
    


           // updateLegend(space, mySelectionState);
   
            
        }     
        
function updateLegend(space, selectionState) {
    
   
    
    var myImage;
    
    if(space === 'movie') { 
        
        myImage = "images/left_arrow_bg.svg";
        
    } else if(space === 'user') {
        
        myImage = "images/right_arrow_bg.svg";
        
    }
                

    var mySVGImage =  svgLegend.selectAll("image");
    
    if (mySVGImage[0].length === 0 ) {
        
        mySVGImage = svgLegend.append("image");
    }
    
    mySVGImage.attr("xlink:href",myImage)
                .attr("x",60)
                .attr("width","50px")
                .attr("height","50px");
                
    if(selectionState.querySetsList.length === 0 ) {
        
        mySVGImage.remove();
        
    }
                
    var myLegendRect = svgLegend.selectAll("rect")
                            .data(selectionState.querySetsList, function (d) { return d.legend;});
                            
    myLegendRect.enter().append("rect");
    
    myLegendRect.attr("x", "0px")
                .attr("y",function(d,i) { 
                    return i * 20 + 100;
                })
                .attr("width",10)
                .attr("height",10)
                .attr("fill", function(d,i) { return ordinalColor(+d.assignedClass);});
                
    myLegendRect.exit().remove();
    
    var myLegendText = svgLegend.selectAll(".legendText")
                            .data(selectionState.querySetsList, function (d) { return +d.assignedClass;});
                            
    myLegendText.enter().append("text");
    
    myLegendText.attr("x", "12px")
                .attr("y",function(d,i) { 
                    return i * 20 + 108;
                }) 
                .attr("font-size","10px")
                .classed("legendText",true)
                .text( function(d,i) { return d.legend;});
                
    myLegendText.exit().remove();
        
    
   
}
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62

		var mySelectionState = selectionState;

		var mySelectionGroup, myQueryGroup, xSelect, ySelect, rSelect, xQuery, yQuery, rQuery;

		if (space === "movie") {
			mySelectionGroup = svgMovieSelectionGroup;
			myQueryGroup = svgUserSelectionGroup;
			xSelect = xValue;
			ySelect = yValue;
			rSelect = rMovieScale;

			xQuery = xValueUser;
			yQuery = yValueUser;
			rQuery = rUserScale;

		} else if (space === 'user') {
			mySelectionGroup = svgUserSelectionGroup;
			myQueryGroup = svgMovieSelectionGroup;

			xSelect = xValueUser;
			ySelect = yValueUser;
			rSelect = rUserScale;

			xQuery = xValue;
			yQuery = yValue;
			rQuery = rMovieScale;

		}

		//Selection Space Halo
		//Update + enter
		//Bind
		if ((mySelectionGroup.selectAll(".selectionG")[0].length !== 0 ) || (mySelectionState.querySetsList.length !== 0 )) {

			var selectedEntity = mySelectionGroup.selectAll(".selectionG").data(mySelectionState.querySetsList, function(d) {
				return +d.assignedClass;

			});

			//Enter
			selectedEntity.enter().append("g").classed("selectionG", true);

			//Enter + Update
			selectedEntity.each(function(d, i) {

				var color = ordinalColor(d.assignedClass);

				//Bind
				var selectionCircle = d3.select(this).selectAll("circle").data(d.selection);

				//Enter Append
				selectionCircle.enter().append("circle");

				//Enter + Update
				selectionCircle.attr("cx", function(d) {

					return xSelect(d);
				}).attr("cy", function(d) {
					return ySelect(d);
				}).attr("r", function(d) {
					return rSelect(+d.numReview);
				}).attr("fill", color).attr("stroke", color).classed("selectedCircle", true);

				//Exit Remove
				selectionCircle.exit().remove();

			});

			//Exit Remove
			selectedEntity.exit().remove();

		}

		//Query Space Halo
		//Bind

		if ((myQueryGroup.selectAll(".queryG")[0].length !== 0 ) || (mySelectionState.querySetsList.length !== 0 )) {

			var queryEntity = myQueryGroup.selectAll(".queryG").data(mySelectionState.querySetsList, function(d) {
				return +d.assignedClass;
			});

			//Enter Append
			queryEntity.enter().append("g").classed("queryG", true);

			//Enter + Update
			queryEntity.each(function(d, i) {

				var color = ordinalColor(d.assignedClass);

				//Bind
				var selectionCircle = d3.select(this).selectAll("circle").data(d.query);

<<<<<<< HEAD
				//Enter Append
				selectionCircle.enter().append("circle");

				//Enter + Update
				selectionCircle.attr("cx", function(d) {
					//return d.getAttributeNS(null,"cx")
					return xQuery(d);
				}).attr("cy", function(d) {
					return yQuery(d);
					//return d.getAttributeNS(null,"cy")
				}).attr("r", function(d) {
					//return d.getAttributeNS(null,"r")
					return rQuery(+d.numReview);
				}).attr("fill", color).attr("stroke", color).classed("selectedCircle", true);

				selectionCircle.exit().remove();

			});
=======
	var y = d3.scale.linear().range([ h - margin, margin]);
	
	var rMovieScale = d3.scale.linear().range([minStarRadius, maxStarRadius]);
	

	
	var xAxis	= d3.svg.axis()
					.scale(x)
					.orient("bottom")
					.ticks(5);
					
	var yAxis	= d3.svg.axis()
					.scale(y)
					.orient("left")
					.ticks(5);	
					
	var zoomMovie = d3.behavior.zoom()
					.x(x)
					.y(y)
					.on("zoom",zoomedMovie);
					
	PanZoomTool.zoomMovie = zoomMovie;
	PanZoomTool.nozoomMovie = d3.behavior.zoom()
					.x(x)
					.y(y)
					.on("zoom",null);
					
	var svgMovie = d3.select("#movieCanvas").append("svg")

    //var svgMovie = VisDock.getViewport();

	svgMovie.attr("height", h)
						.attr("viewBox", "0 0 " + w + " " +h)
						.attr("title", "Movie Space")
						.attr("transform", "translate(" + margin + "," + margin + ")")
					.append("svg:g");
						//.attr("transform", "translate(" + margin + "," + margin + ")");	
						
	var clip = svgMovie.append("defs")
						.append("svg:clipPath")
						.attr("id","movieClip")
						.append("svg:rect")
						.attr("id","clip-rect")
						.attr("x",margin)
						.attr("y",margin)
						.attr("width",w-2*margin)
						.attr("height",h-2*margin);
						
	var svgMovieBody = svgMovie.append("g")
							.attr("id","IDsvgMovie")
							.attr("clip-path","url(#movieClip)")
						//	.attr("transform", "translate(" + margin + "," + margin + ")")
							//.call(zoomMovie);
							
	var rect = svgMovieBody.append("svg:rect")
							.attr("width",w-margin)
							.attr("height",h-margin)
							.attr("fill","white");
						
	Panel.panel = svgMovieBody;					
						

    var svgMovieContourGroup = svgMovieBody.append("svg:g").attr('class','movieContourGroup');
    
	var svgMovieSelectionGroup = svgMovieBody.append("svg:g").attr('class', 'movieSelectionSVGGroup');
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62

			//Exit Remove
			queryEntity.exit().remove();

		}

		updateContour(space, mySelectionState);

		// updateLegend(space, mySelectionState);

	}

	function updateLegend(space, selectionState) {

		var myImage;

		if (space === 'movie') {

			myImage = "images/left_arrow_bg.svg";

		} else if (space === 'user') {

			myImage = "images/right_arrow_bg.svg";

		}

		var mySVGImage = svgLegend.selectAll("image");

		if (mySVGImage[0].length === 0) {

<<<<<<< HEAD
			mySVGImage = svgLegend.append("image");
		}
=======
	var xScaleUser = d3.scale.linear().range([margin, w-margin]);
	var yScaleUser = d3.scale.linear().range([h-margin,margin]);
	
	var rUserScale = d3.scale.linear().range([minStarRadius, maxStarRadius]);
	
	
	var xAxisUser = d3.svg.axis()
						.scale(xScaleUser)
						.orient("bottom")
						.ticks(5);
						
	var yAxisUser = d3.svg.axis()
						.scale(yScaleUser)
						.orient("left")
						.ticks(5);
						
	var zoomUser = d3.behavior.zoom()
						.x(xScaleUser)
						.y(yScaleUser)
						.on("zoom", zoomedUser);
						
	PanZoomTool.zoomUser = zoomUser;
	PanZoomTool.nozoomUser = d3.behavior.zoom()
						.x(xScaleUser)
						.y(yScaleUser)
						.on("zoom", null);
						
	
	var svgUser = d3.select("#userCanvas")
					.append("svg")
						.attr("height", h)
						.attr("viewBox", "0 0 " + w + " " +h)
						.attr("title", "User Space")
						.attr("transform", "translate(" + margin + "," + margin + ")")
					.append("svg:g");
					
	var clip = svgUser.append("defs")
						.append("svg:clipPath")
						.attr("id","userClip")
						.append("svg:rect")
						.attr("id","clip-rect")
						.attr("x",margin)
						.attr("y",margin)
						.attr("width",w-2*margin)
						.attr("height",h-2*margin);
						
	var svgUserBody = svgUser.append("g")
							.attr("id","IDsvgUser")
							.attr("clip-path","url(#userClip)");
							//.call(zoomUser);
							
	var rect = svgUserBody.append("svg:rect")
							.attr("width",w-margin)
							.attr("height",h-margin)
							.attr("fill","white");
							
	
	var svgUserContourGroup = svgUserBody.append("svg:g").attr('class', 'userContourSVGGroup');
	 
	var svgUserSelectionGroup = svgUserBody.append("svg:g").attr('class', 'userSelectionSVGGroup');
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62

		mySVGImage.attr("xlink:href", myImage).attr("x", 60).attr("width", "50px").attr("height", "50px");

		if (selectionState.querySetsList.length === 0) {

			mySVGImage.remove();

		}

		var myLegendRect = svgLegend.selectAll("rect").data(selectionState.querySetsList, function(d) {
			return d.legend;
		});

		myLegendRect.enter().append("rect");

		myLegendRect.attr("x", "0px").attr("y", function(d, i) {
			return i * 20 + 100;
		}).attr("width", 10).attr("height", 10).attr("fill", function(d, i) {
			return ordinalColor(+d.assignedClass);
		});

		myLegendRect.exit().remove();

		var myLegendText = svgLegend.selectAll(".legendText").data(selectionState.querySetsList, function(d) {
			return +d.assignedClass;
		});

		myLegendText.enter().append("text");

		myLegendText.attr("x", "12px").attr("y", function(d, i) {
			return i * 20 + 108;
		}).attr("font-size", "10px").classed("legendText", true).text(function(d, i) {
			return d.legend;
		});

		myLegendText.exit().remove();

	}

	function reQuery(d) {

		if (d.mode === 'single') {

			if (d.query.length === 0) {

				return [];
			}
		}
	}

	//Class for one single selection
	function QuerySets(domain, query, selection, newClass, groupMode, relationMin, relationMax, legend, contourMode, contourOn) {

		this.domain = domain;
		//domain can be 'user' or 'movie'
		this.query = query;
		this.selection = selection;
		this.assignedClass = newClass;
		this.contourList = [];
		this.mode = groupMode;
		//mode can be  'single', 'groupOR','groupAND'
		this.relationMin = relationMin;
		//means a PSmin at the time of selection
		this.relationMax = relationMax;
		//means a PSmax at the time of selection
		this.legend = legend;
		this.contourMode = contourMode;
		this.contourOn = contourOn;

	}


	QuerySets.prototype = {
		isSelected : function(d) {
			if (this.query.indexOf(d) === -1) {
				return false;
			} else {
				return true;
			}
		},

		remove : function(d) {

			this.query.splice(d, 1);

			this.selection = this.requery();
		},

		//Using relationMin, relationMax, assignedClass, groupMode
		//Updates legend, selection

		requery : function(newRelationMin, newRelationMax) {

			this.relationMin = newRelationMin;
			this.relationMax = newRelationMax;

			if (this.query.length === 0) {
				return [];
			} else if (this.query.length === 1) {

				var count = 0;
				var tempGalaxy = [];

				if (this.domain === 'user') {

					for ( count = 0; count < movieLength; count++) {

						if (ratings[this.query[0].num][count] >= this.relationMin && ratings[this.query[0].num][count] <= this.relationMax) {

							tempGalaxy.push(movieData[count]);
						}
					}

					this.legend = this.query[0].age + ", " + this.query[0].sex + ", " + this.query[0].job + " (Ratings " + this.relationMin + "-" + this.relationMax + ") " + $('input[name=contourMode]:checked').val();

				} else if (this.domain === 'movie') {

					for ( count = 0; count < userLength; count++) {

						if (ratings[count][this.query[0].index] >= this.relationMin && ratings[count][this.query[0].index] <= this.relationMax) {

							tempGalaxy.push(userData[count]);
						}
					}

					this.legend = this.query[0].title + " (Ratings " + this.relationMin + "-" + this.relationMax + ") " + $('input[name=contourMode]:checked').val();

				}

				this.selection = tempGalaxy;

			}
		}
	}

	function SelectionStatesSpace() {

		this.querySetsList = [];

	}


	SelectionStatesSpace.prototype = {

		isSelected : function(d) {

			var i;

			for ( i = 0; i < this.querySetsList.length; i++) {
				if (this.querySetsList[i].isSelected(d)) {
					return true;
				}
			}

			return false;
		},

		newClass : function(d) {

			var newIndex = 0;
			var count = 0;

			var selectedClassList = this.querySetsList.map(function(d) {
				return d.assignedClass;
			});

			while (selectedClassList.indexOf(newIndex) != -1) {
				newIndex += 1;

			}

			return newIndex;
		},

		add : function(d) {

			this.querySetsList.push(d);
		},

		removeEntity : function(d) {

			var z;

			for ( z = 0; z < this.querySetsList.length; z++) {

				if (this.querySetsList[z].query.indexOf(d) != -1) {

					this.querySetsList[z].remove(this.querySetsList[z].query.indexOf(d));

					if (this.querySetsList[z].query.length == 0) {

						this.remove(z);
					}
				}
			}

		},

		remove : function(d) {

			this.querySetsList.splice(d, 1);
		},

		requeryCriteria : function(relMin, relMax) {

			var i;

			for ( i = 0; i < this.querySetsList.length; i++) {

				this.querySetsList[i].requery(relMin, relMax);

			}

		}
	}

	//Variables for Index
	/*    var svgLegend = d3.select("#legend")
	.append("svg")
	.attr("height", 300);
	//.attr("viewBox", "0 0 " + 100 + " " +h)
	//.style("border", "1px solid silver");

	//.attr("transform", "translate(" + margin + "," + margin + ")");
	*/

	//Array of QuerySets to represent selection States
	//selectionStatesMovie is for when movies are selected
	//selectionStatesUser is for when users are selected
	var selectionStatesMovie = new SelectionStatesSpace();
	var selectionStatesUser = new SelectionStatesSpace();

	//Parameters for Tuning
	var numStepForKDE = 20;
	var numLevelForContour = 10;
	var movieStarHue = 45;
	var userStarHue = 45;
	var maxStarRadius = 10;
	var minStarRadius = 2;
	var fillMovieScale = d3.scale.pow(4).range(["white", "black"]);
	var fillUserScale = d3.scale.pow(4).range(["white", "black"]);
	var bandwidth = 1;

	//Data for the Analysis
	var ratings;
	var userData;
	var movieData;
	var movieLength;
	var userLength;
	var movieStar, userStar;

	//State variable for the selection
	var isMovieSelected = false;
	var isUnion = false;
	var isContourOn = true;

	var movieVQnum = 0;

	var movieTitle = [];
	var movieTitleOrig = [];

	var businessTitle = [];
	var businessTitleOrig = [];

	var ordinalColor = d3.scale.category10();

	//Scale variable for movie space
	var xDomainExtent = [0, 1];
	var yDomainExtent = [0, 1];

	var xValue = function(d) {
		return x(+d.X);
	}
	var yValue = function(d) {
		return y(+d.Y);
	}
	//variables for Geo mapping
	var proj = d3.geo.albers();
	//.center([33.390792,-112.012504]);
	var path = d3.geo.path().projection(proj);
	var wasLocation = false;
	var wasYAxisUser, wasYValueUser, wasYScaleUser;
	var myStates, myZip = [];
	var contourMovie = [];
	var contourUser = [];
	var colourCategory = [];

	//Scale variable for user space
	var xDomainExtentUser = [0, 1];
	var yDomainExtentUser = [0, 1];

	var xValueUser = function(d) {
		return xScaleUser(+d.X);
	}
	var yValueUser = function(d) {
		return yScaleUser(+d.Y);
	}
	var x = d3.scale.linear().range([margin, w - margin]);

	var y = d3.scale.linear().range([h - margin, margin]);

	var rMovieScale = d3.scale.linear().range([minStarRadius, maxStarRadius]);

	var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5);

	var yAxis = d3.svg.axis().scale(y).orient("left").ticks(5);

	var zoomMovie = d3.behavior.zoom().x(x).y(y).on("zoom", zoomedMovie);

	var svgMovie = d3.select("#movieCanvas").append("svg")

	//var svgMovie = VisDock.getViewport();

	svgMovie.attr("height", h).attr("viewBox", "0 0 " + w + " " + h).attr("title", "Movie Space").attr("transform", "translate(" + margin + "," + margin + ")").append("svg:g");
	//.attr("transform", "translate(" + margin + "," + margin + ")");

	var clip = svgMovie.append("defs").append("svg:clipPath").attr("id", "movieClip").append("svg:rect").attr("id", "clip-rect").attr("x", margin).attr("y", margin).attr("width", w - 2 * margin).attr("height", h - 2 * margin);

	var svgMovieBody = svgMovie.append("g").attr("id", "IDsvgMovie").attr("clip-path", "url(#movieClip)");
	//	.attr("transform", "translate(" + margin + "," + margin + ")")
	//.call(zoomMovie);

	var rect = svgMovieBody.append("svg:rect").attr("width", w - margin).attr("height", h - margin).attr("fill", "white");

	Panel.panel = svgMovieBody;

	var svgMovieContourGroup = svgMovieBody.append("svg:g").attr('class', 'movieContourGroup');

	var svgMovieSelectionGroup = svgMovieBody.append("svg:g").attr('class', 'movieSelectionSVGGroup');

	var svgMovieGroup = svgMovieBody.append("svg:g").attr('class', 'movieSVGGroup');

	svgMovie.append("svg:g").attr("class", "x axis").attr("transform", "translate(0," + (h - margin) + ")").call(xAxis);

	svgMovie.append("svg:g").attr("class", "y axis").attr("transform", "translate(" + margin + ",0)").call(yAxis);

	d3.csv("data/business_word.csv", function(ratingsCSV) {

		ratings = ratingsCSV;
		userLength = ratings.length;
		movieLength = d3.keys(ratings[0]).length;

	})

	d3.json("data/us-states.geojson", function(states) {

		myStates = states;

	})

	d3.csv("data/word.csv", function(movieCSV) {

		movieData = movieCSV;

		//Set up Scales after reading data

		rMovieScale.domain(d3.extent(movieData, function(d) {
			return +d.numReview;
		}));
		fillMovieScale.domain(d3.extent(movieData, function(d) {
			return +d.avgReview;
		}));

		for (var count = 0; count < movieData.length; count++) {

			movieTitle[count] = movieData[count].title;
			movieTitleOrig[count] = movieData[count].title;
		}

		movieStar = svgMovieGroup.selectAll("circle").data(movieCSV, function(d) {
			return d.index;
		}).enter().append("svg:circle").classed("movieCircle", true).classed("star", true).attr("cx", xValue).attr("cy", yValue).attr("r", function(d) {
			return rMovieScale(+d.numReview);
		}).attr("fill", function(d) {
			return fillMovieScale(+d.avgReview);
		});

		$('.movieCircle').tipsy({
			gravity : 'w',
			html : true,
			fade : false,
			delayOut : 0,
			title : function() {
				var d = this.__data__, c = d.title;
				return c;
			}
		});

	});

	var xScaleUser = d3.scale.linear().range([margin, w - margin]);
	var yScaleUser = d3.scale.linear().range([h - margin, margin]);

	var rUserScale = d3.scale.linear().range([minStarRadius, maxStarRadius]);

	var xAxisUser = d3.svg.axis().scale(xScaleUser).orient("bottom").ticks(5);

	var yAxisUser = d3.svg.axis().scale(yScaleUser).orient("left").ticks(5);

	var zoomUser = d3.behavior.zoom().x(xScaleUser).y(yScaleUser).on("zoom", zoomedUser);

	var svgUser = d3.select("#userCanvas").append("svg").attr("height", h).attr("viewBox", "0 0 " + w + " " + h).attr("title", "User Space").attr("transform", "translate(" + margin + "," + margin + ")").append("svg:g");

	var clip = svgUser.append("defs").append("svg:clipPath").attr("id", "userClip").append("svg:rect").attr("id", "clip-rect").attr("x", margin).attr("y", margin).attr("width", w - 2 * margin).attr("height", h - 2 * margin);

	var svgUserBody = svgUser.append("g").attr("id", "IDsvgUser").attr("clip-path", "url(#userClip)");
	//.call(zoomUser);

	var rect = svgUserBody.append("svg:rect").attr("width", w - margin).attr("height", h - margin).attr("fill", "white");

	var svgUserContourGroup = svgUserBody.append("svg:g").attr('class', 'userContourGroup');

	var svgUserSelectionGroup = svgUserBody.append("svg:g").attr('class', 'userSelectionSVGGroup');

	var svgUserGroup = svgUserBody.append("svg:g").attr('class', 'userSVGGroup');

	svgUser.append("svg:g").attr("class", "x axis").attr("transform", "translate(0," + (h - margin) + ")").call(xAxisUser);

	svgUser.append("svg:g").attr("class", "y axis").attr("transform", "translate(" + margin + ",0)").call(yAxisUser);

	VisDock.init("#legend", dockWidth, 570);
	VisDock.color = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];

	var panel1 = d3.selectAll("#IDsvgMovie")//document.getElementById("IDsvgMovie")
	var panel2 = d3.selectAll("#IDsvgUser")//document.getElementById("IDsvgUser")

	d3.csv("data/business.csv", function(userCSV) {

		userData = userCSV;

		//Set up Scales after reading data

		rUserScale.domain(d3.extent(userData, function(d) {
			return +d.numReview;
		}));
		fillUserScale.domain(d3.extent(userData, function(d) {
			return +d.avgReview;
		}));

		for (var count = 0; count < userData.length; count++) {

			businessTitle[count] = userData[count].name;
			businessTitleOrig[count] = userData[count].name;
		}

		svgUserGroup.selectAll("circle").data(userCSV, function(d) {
			return +d.num;
		}).enter().append("svg:circle").classed("userCircle", true).classed("star", true).attr("cx", xValueUser).attr("cy", yValueUser).attr("r", function(d) {
			//  console.log((d.numReview*5)*(d.numReview*10));
			return rUserScale(+d.numReview);

		}).attr("fill", function(d) {

			return fillUserScale(+d.avgReview);
		});

		$('.userCircle').tipsy({
			gravity : 'w',
			html : true,
			fade : false,
			delayOut : 0,
			title : function() {
				var d = this.__data__;
				return d.name;
			}
		});

	})
	function zoomedMovie() {
<<<<<<< HEAD
		//svgMovieContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		//svgMovieSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
=======
// 
		//svgMovieContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		//svgMovieSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		PanZoomTool.zoomMovieScale = d3.event.scale;
		PanZoomTool.zoomMovieTranslate = d3.event.translate;
		
		svgMovieContourGroup.attr("transform", "scale(" + d3.event.scale + ")");
		svgMovieSelectionGroup.attr("transform", "scale(" + d3.event.scale + ")");		
		
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62
		svgMovieGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		svgMovie.select(".x.axis").call(xAxis);
		svgMovie.select(".y.axis").call(yAxis);
<<<<<<< HEAD

		updateDisplay('movie', new SelectionStatesSpace());

		updateDisplay('movie', selectionStatesUser);
		updateContour('movie', selectionStatesUser);
	}

	function zoomedUser() {
		//
		//svgUserContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		//svgUserSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
=======
		updateDisplay('user',selectionStatesMovie);
		updateDisplay('movie',selectionStatesUser);		
	}
	PanZoomTool.zoomedMovie=function(){
		//svgMovieContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		//svgMovieSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		PanZoomTool.zoomMovieScale = d3.event.scale;
		PanZoomTool.zoomMovieTranslate = d3.event.translate;		
		
		svgMovieContourGroup.attr("transform", "scale(" + d3.event.scale + ")");
		svgMovieSelectionGroup.attr("transform", "scale(" + d3.event.scale + ")");			
		
		
		svgMovieGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		svgMovie.select(".x.axis").call(xAxis);
		svgMovie.select(".y.axis").call(yAxis);		
		
		updateDisplay('movie',selectionStatesUser);
		updateDisplay('user',selectionStatesMovie);		
	}
	function zoomedUser() {
// 
        //svgUserContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		//svgUserSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		PanZoomTool.zoomUserScale = d3.event.scale;
		PanZoomTool.zoomMovieTranslate = d3.event.translate;		
		
		svgMovieContourGroup.attr("transform", "scale(" + d3.event.scale + ")");
		svgMovieSelectionGroup.attr("transform", "scale(" + d3.event.scale + ")");			
		
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62
		svgUserGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		svgUser.select(".x.axis").call(xAxisUser);
		svgUser.select(".y.axis").call(yAxisUser);
<<<<<<< HEAD

		updateDisplay('user', new SelectionStatesSpace());

		updateDisplay('user', selectionStatesMovie);
		updateContour('user', selectionStatesMovie);
	}

	function clearSelection() {

		selectionStatesMovie = new SelectionStatesSpace();
		selectionStatesUser = new SelectionStatesSpace();

		updateDisplay('movie', selectionStatesUser);
		updateDisplay('user', selectionStatesMovie);

	}

	function updateContour(Space, SelectionStates) {

		var mySelectionStates = SelectionStates;

		if (Space === 'movie') {

			myContourGroup = svgMovieContourGroup;
			myX = xValue;
			myY = yValue;

			myXScale = x;
			myYScale = y;

		} else if (Space === 'user') {

			myContourGroup = svgUserContourGroup;

			myX = xValueUser;
			myY = yValueUser;

			myXScale = xScaleUser;
			myYScale = yScaleUser;
		}

		if (isContourOn == false) {

			svgMovieContourGroup.selectAll("g").remove();
			svgUserContourGroup.selectAll("g").remove();

			return;
		}
		var min = 100, max = -100;

		var selectedData2D = [];

		var XStep = (myXScale.range()[1] - myXScale.range()[0]) / numStepForKDE;
		var YStep = (myYScale.range()[1] - myYScale.range()[0]) / numStepForKDE;

		var XCoord = d3.range(myXScale.range()[0] - 3 * XStep, myXScale.range()[1] + 3 * XStep, XStep);
		var YCoord = d3.range(myYScale.range()[0] - 3 * YStep, myYScale.range()[1] + 3 * YStep, YStep);

		selectedData2D = mySelectionStates.querySetsList.map(function(z, i) {

			tempGalaxy = z.selection;

			var tempDataX = tempGalaxy.map(function(d) {
				return myX(d);
			});

			var tempDataY = tempGalaxy.map(function(d) {
				return myY(d);
			});

			if (Space === 'movie') {
				var tempDataZ = tempGalaxy.map(function(d) {

					var index = 0;
					var myRating = 0;

					if ($('input[name=contourMode]:checked').val() === 'den') {

						return 1;
					}

					for ( index = 0; index < z.query.length; index++) {
						myRating += ratings[z.query[index].num][d.index];
						// if (isNaN(myRating)) {
						//
						// console.log("NaN");
						//
						// }
					}

					return myRating;
				});

			} else if (Space === 'user') {

				var tempDataZ = tempGalaxy.map(function(d) {

					var index = 0;
					var myRating = 0;

					if ($('input[name=contourMode]:checked').val() === 'den') {

						return 1;
					}

					for ( index = 0; index < z.query.length; index++) {
						myRating += ratings[d.num][z.query[index].index];

					}
					return myRating;
				});

			}

			var data2D = science.stats.kde2D(tempDataX, tempDataY, tempDataZ, XCoord, YCoord, XStep / bandwidth, YStep / bandwidth);

			var minTemp = d3.min(data2D, function(d) {
				return d3.min(d);
			});
			var maxTemp = d3.max(data2D, function(d) {
				return d3.max(d);
			});

			if (minTemp < min) {

				min = minTemp;

			}

			if (maxTemp > max) {

				max = maxTemp;

			}

			return data2D;

		});

		selectedData2D.map(function(data2D, i) {

			var c = new Conrec(), zs = d3.range(min, max, (max - min) / numLevelForContour);

			c.contour(data2D, 0, XCoord.length - 1, 0, YCoord.length - 1, XCoord, YCoord, zs.length, zs);

			mySelectionStates.querySetsList[i].contourList = c.contourList();

		});

		for (var j = 0; j < 10; j++)
			colourCategory[j] = d3.scale.linear().domain([min, max]).range(["#fff", ordinalColor(j)]);

		var contourGroup = myContourGroup.selectAll("g").data(mySelectionStates.querySetsList, function(d) {
			return d.assignedClass;
		});

		contourGroup.enter().append("g");

		contourGroup.each(function(d, i) {

			var f = d.assignedClass;

			var paths = d3.select(this).selectAll("path").data(d.contourList, function(d) {
				return d.level;
			});

			paths.enter().append("path");

			paths.style("fill", function(d) {

				return colourCategory[f](d.level);
			}).transition().delay(200).duration(300).attr("d", d3.svg.line().x(function(d) {
				return +(d.x);
			}).y(function(d) {
				return +(d.y);
			})).attr("fill-opacity", 0.01).transition().duration(300).attr("fill-opacity", 0.8);

			paths.exit().remove();

		});

		contourGroup.exit().remove();

	}

	$(function() {

		$("#searchWord").autocomplete({
			source : movieTitle,
			target : $('#suggestions'),

			minLength : 1,
			matchFromStart : false,

			callback : function(e) {

				var $a = $(e.currentTarget);
				$('#searchWord').val($a.text());
				$('#searchWord').autocomplete('clear');

				var index = movieTitleOrig.indexOf($a.text());

				var selection = svgMovieGroup.selectAll("circle");

				var targetObject = selection.filter(function(d, i) {
					return i === index ? this : null;
				});

				targetObject.on("click")(movieData[index], index);

			}
		});
	});

	$(function() {

		$("#searchBusiness").autocomplete({
			source : businessTitle,
			target : $('#suggestionsBusiness'),

			minLength : 1,
			matchFromStart : false,

			callback : function(e) {

				var $a = $(e.currentTarget);
				$('#searchBusiness').val($a.text());
				$('#searchBusiness').autocomplete('clear');

				var index = businessTitleOrig.indexOf($a.text());

				var selection = svgUserGroup.selectAll("circle");

				var targetObject = selection.filter(function(d, i) {
					return i === index ? this : null;
				});

				targetObject.on("click")(userData[index], index);

			}
		});
	});

	$('#movieXAxisMenu').on('change', function() {

		var $this = $(this), val = $this.val();

		switch (val) {
			case 'sim1':

				x = d3.scale.linear().range([margin, w - margin]);

				xDomainExtent = d3.extent(movieData, function(d) {
					return +d.X;
				});

				xValue = function(d) {
					return x(+d.X);
				}

				break;

			case 'avgReview':

				x = d3.scale.linear().range([margin, w - margin]);

				xDomainExtent = d3.extent(movieData, function(d) {
					return +d.avgReview;
				});

				xValue = function(d) {
					return x(+d.avgReview);
				}

				break;

			case 'numReview':

				x = d3.scale.linear().range([margin, w - margin]);

				xDomainExtent = d3.extent(movieData, function(d) {
					return +d.numReview;
				});

				xValue = function(d) {
					return x(+d.numReview);
				}

				break;

			case 'useful':

				x = d3.scale.linear().range([margin, w - margin]);

				xDomainExtent = d3.extent(movieData, function(d) {
					return +d.useful_count;
				});

				xValue = function(d) {
					return x(+d.useful_count);
				}

				break;

			case 'cool':
=======
		updateDisplay('movie',selectionStatesUser);
		updateDisplay('user',selectionStatesMovie);
	}

	PanZoomTool.zoomedUser = function(){
        //svgUserContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		//svgUserSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		PanZoomTool.zoomUserScale = d3.event.scale;
		PanZoomTool.zoomUserTranslate = d3.event.translate;			
		
		svgMovieContourGroup.attr("transform", "scale(" + d3.event.scale + ")");
		svgMovieSelectionGroup.attr("transform", "scale(" + d3.event.scale + ")");			
		
		svgUserGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		svgUser.select(".x.axis").call(xAxisUser);
		svgUser.select(".y.axis").call(yAxisUser);	
		
		updateDisplay('movie',selectionStatesUser);
		updateDisplay('user',selectionStatesMovie);
	}
	
	function clearSelection() {
>>>>>>> 2d0d14137ee81390d7343a35d030f492943fce62

				x = d3.scale.linear().range([margin, w - margin]);

				xDomainExtent = d3.extent(movieData, function(d) {
					return +d.cool_count;
				});

				xValue = function(d) {
					return x(+d.cool_count);
				}

				break;

			case 'funny':

				x = d3.scale.linear().range([margin, w - margin]);

				xDomainExtent = d3.extent(movieData, function(d) {
					return +d.funny_count;
				});

				xValue = function(d) {
					return x(+d.funny_count);
				}

				break;

		}

		xAxis.scale(x);

		x.domain(xDomainExtent);

		y.domain(yDomainExtent);

		zoomMovie.x(x).y(y);

		svgMovieContourGroup.attr("transform", "scale(1)");

		svgMovieSelectionGroup.attr("transform", "scale(1)");

		svgMovieGroup.attr("transform", "scale(1)");

		svgMovie.selectAll(".y.axis").transition().duration(1000).call(yAxis);

		svgMovie.selectAll(".x.axis").transition().duration(1000).call(xAxis);

		svgMovieBody.selectAll(".selectedCircle, .star").transition().duration(1000).attr('cx', xValue).attr("cy", yValue);

		updateContour('movie', selectionStatesUser);

	});

	$('#movieYAxisMenu').on('change', function() {

		var $this = $(this), val = $this.val();

		switch (val) {
			case 'sim2':

				y = d3.scale.linear().range([h - margin, margin]);

				yDomainExtent = d3.extent(movieData, function(d) {
					return +d.Y;
				});

				yValue = function(d) {
					return y(+d.Y);
				}

				break;

			case 'avgReview':

				y = d3.scale.linear().range([h - margin, margin]);

				yDomainExtent = d3.extent(movieData, function(d) {
					return +d.avgReview;
				});

				yValue = function(d) {
					return y(+d.avgReview);
				}

				break;

			case 'numReview':

				y = d3.scale.linear().range([h - margin, margin]);

				yDomainExtent = d3.extent(movieData, function(d) {
					return +d.numReview;
				});

				yValue = function(d) {
					return y(+d.numReview);
				}

				break;

			case 'cool':

				y = d3.scale.linear().range([h - margin, margin]);

				yDomainExtent = d3.extent(movieData, function(d) {
					return +d.cool_count;
				});

				yValue = function(d) {
					return y(+d.cool_count);
				}

				break;

			case 'funny':

				y = d3.scale.linear().range([h - margin, margin]);

				yDomainExtent = d3.extent(movieData, function(d) {
					return +d.funny_count;
				});

				yValue = function(d) {
					return y(+d.funny_count);
				}

				break;

			case 'useful':

				y = d3.scale.linear().range([h - margin, margin]);

				yDomainExtent = d3.extent(movieData, function(d) {
					return +d.useful_count;
				});

				yValue = function(d) {
					return y(+d.useful_count);
				}

				break;

		}

		yAxis.scale(y);

		x.domain(xDomainExtent);

		y.domain(yDomainExtent);

		zoomMovie.x(x).y(y);

		svgMovieContourGroup.attr("transform", "scale(1)");

		svgMovieSelectionGroup.attr("transform", "scale(1)");

		svgMovieGroup.attr("transform", "scale(1)");

		svgMovie.selectAll(".y.axis").transition().duration(1000).call(yAxis);

		svgMovie.selectAll(".x.axis").transition().duration(1000).call(xAxis);

		svgMovieBody.selectAll(".selectedCircle, .star").transition().duration(1000).attr('cx', xValue).attr("cy", yValue);

		updateContour('movie', selectionStatesUser);
	});

	$('#userXAxisMenu').on('change', function() {

		var $this = $(this), val = $this.val();

		if (val === 'location') {

			wasLocation = true;

			$('#userYAxisMenu').selectmenu('disable');

			wasYAxisUser = yAxisUser;
			wasYValueUser = yValueUser;
			wasYScaleUser = yScaleUser;

			var locationGroup = svgUserSelectionGroup.append("g").attr("id", "states");

			proj.translate([8300, -2300]);
			proj.scale(40000);

			d3.select("#states").selectAll("path").data(myStates.features).enter().append("path").attr("d", path);

			xValueUser = function(d) {

				var p = proj([d.lon, d.lat]);

				return p[0];
			}
			yValueUser = function(d) {

				var p = proj([d.lon, d.lat]);

				return p[1];
			}

			svgUserBody.selectAll(".selectedCircle, .star").transition().duration(1000).attr('cx', xValueUser).attr("cy", yValueUser);

			updateContour("user", selectionStatesMovie);

		} else {

			if (wasLocation === true) {

				$('#userYAxisMenu').selectmenu('enable');

				wasLocation = false;

				yScaleUser = wasYScaleUser;
				yAxisUser = wasYAxisUser;
				yValueUser = wasYValueUser;

				d3.select("#states").remove();

			}

			switch (val) {

				case 'sim1':

					xScaleUser = d3.scale.linear().range([margin, w - margin]);

					xDomainExtentUser = d3.extent(userData, function(d) {
						return +d.X;
					});

					xValueUser = function(d) {
						return xScaleUser(+d.X);
					}

					break;

				case 'avgReview':

					xScaleUser = d3.scale.linear().range([margin, w - margin]);

					xDomainExtentUser = d3.extent(userData, function(d) {
						return +d.avgReview;
					});

					xValueUser = function(d) {
						return xScaleUser(+d.avgReview);
					}

					break;

				case 'numReview':

					xScaleUser = d3.scale.linear().range([margin, w - margin]);

					xDomainExtentUser = d3.extent(userData, function(d) {
						return +d.numReview;
					});

					xValueUser = function(d) {
						return xScaleUser(+d.numReview);
					}

					break;

				case 'category':

					xScaleUser = d3.scale.ordinal().rangePoints([margin, w - margin], 1);

					xDomainExtentUser = categoryList;

					xValueUser = function(d) {
						return xScaleUser(d.category);
					}

					break;

			}

			xAxisUser.scale(xScaleUser);

			xScaleUser.domain(xDomainExtentUser);

			yScaleUser.domain(yDomainExtentUser);

			zoomUser.x(xScaleUser).y(yScaleUser);

			svgUserContourGroup.attr("transform", "scale(1)");

			svgUserSelectionGroup.attr("transform", "scale(1)");

			svgUserGroup.attr("transform", "scale(1)");

			svgUser.selectAll(".y.axis").transition().duration(1000).call(yAxisUser);

			svgUser.selectAll(".x.axis").transition().duration(1000).call(xAxisUser);

			svgUserBody.selectAll(".selectedCircle, .star").transition().duration(1000).attr('cx', xValueUser).attr("cy", yValueUser);

			updateContour("user", selectionStatesMovie);

		}

	});

	$('#userYAxisMenu').on('change', function() {

		var $this = $(this), val = $this.val();

		switch (val) {

			case 'sim2':

				yScaleUser = d3.scale.linear().range([h - margin, margin]);

				yDomainExtentUser = d3.extent(userData, function(d) {
					return +d.Y;
				});

				yValueUser = function(d) {
					return yScaleUser(+d.Y);
				}

				break;

			case 'avgReview':

				yScaleUser = d3.scale.linear().range([h - margin, margin]);

				yDomainExtentUser = d3.extent(userData, function(d) {
					return +d.avgReview;
				});

				yValueUser = function(d) {
					return yScaleUser(+d.avgReview);
				}

				break;

			case 'numReview':

				yScaleUser = d3.scale.linear().range([h - margin, margin]);

				yDomainExtentUser = d3.extent(userData, function(d) {
					return +d.numReview;
				});

				yValueUser = function(d) {
					return yScaleUser(+d.numReview);
				}

				break;

			case 'age':

				yScaleUser = d3.scale.linear().range([h - margin, margin]);

				yDomainExtentUser = d3.extent(userData, function(d) {
					return +d.age;
				});

				yValueUser = function(d) {
					return yScaleUser(+d.age);
				}

				break;

			case 'gender':

				yScaleUser = d3.scale.ordinal().rangePoints([h - margin, margin], 1);

				yDomainExtentUser = ['M', 'F'];

				yValueUser = function(d) {
					return yScaleUser(d.sex);
				}

				break;

			case 'job':

				yScaleUser = d3.scale.ordinal().rangePoints([h - margin, margin], 1);

				yDomainExtentUser = jobList;

				yValueUser = function(d) {
					return yScaleUser(d.job);
				}

				break;

		}

		yAxisUser.scale(yScaleUser);

		yScaleUser.domain(yDomainExtentUser);

		xScaleUser.domain(xDomainExtentUser);

		zoomUser.x(xScaleUser).y(yScaleUser);

		svgUserContourGroup.attr("transform", "scale(1)");

		svgUserSelectionGroup.attr("transform", "scale(1)");

		svgUserGroup.attr("transform", "scale(1)");

		svgUser.selectAll(".y.axis").transition().duration(1000).call(yAxisUser);

		svgUser.selectAll(".x.axis").transition().duration(1000).call(xAxisUser);

		svgUserBody.selectAll(".selectedCircle, .star").transition().duration(1000).attr('cx', xValueUser).attr("cy", yValueUser);

		updateContour('user', selectionStatesMovie);

	});

	$('#resetButton').click(function() {

		clearSelection();

	});

	$('#contourON').on('change', function() {

		var $this = $(this), val = $this.val();

		if (val === 'on') {

			isContourOn = true;
		} else {
			isContourOn = false;
		}

		if (isMovieSelected) {

			updateDisplay('user', selectionStatesMovie);
		} else {
			updateDisplay('movie', selectionStatesUser);
		}
	});

	$('input[name=contourMode]').on('change', function() {

		if (isMovieSelected) {

			updateDisplay('user', selectionStatesMovie);
		} else {
			updateDisplay('movie', selectionStatesUser);
		}
	});

	d3.select("#saveas").on("click", writeDownloadLink);

	function writeDownloadLink() {
		$("svg").attr({
			version : '1.1',
			xmlns : "http://www.w3.org/2000/svg"
		});
		var html2 = $("#userCanvas").html();
		var b64 = btoa(html2);
		// Works in recent Webkit(Chrome)
		$("body").append($("<img src='data:image/svg+xml;base64,\n" + b64 + "' alt='file.svg'/>"));

		// Works in Firefox 3.6 and Webit and possibly any browser which supports the data-uri
		$("body").append($("<a href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n" + b64 + "' title='file.svg'>Download</a>"));

		// d3.select("body").append("div").attr("id", "download").style("top", event.clientY + 20 + "px").style("left", event.clientX + "px").html("Right-click on this preview and choose Save as<br />Left-Click to dismiss<br />").append("img").attr("src", "data:image/svg+xml;base64," + btoa(html));
		//
		// d3.select("#download").on("click", function() {
		// if (event.button == 0) {
		// d3.select(this).transition().style("opacity", 0).remove();
		// }
		// }).transition().duration(500).style("opacity", 1);
	};

	d3.select("#twitter").on("click", postTwitter);
	function postTwitter() {
		$("svg").attr({
			version : '1.1',
			xmlns : "http://www.w3.org/2000/svg"
		});
		var movieSvg = $("#movieCanvas").html();
		var image1 = btoa(movieSvg);

		var userSvg = $("#userCanvas").html();
		var image2 = btoa(userSvg);

	};

	d3.select("#facebook").on("click", postFacebook);
	function postFacebook() {
		$("svg").attr({
			version : '1.1',
			xmlns : "http://www.w3.org/2000/svg"
		});
		var movieSvg = $("#movieCanvas").html();
		var image1 = btoa(movieSvg);

		var userSvg = $("#userCanvas").html();
		var image2 = btoa(userSvg);

		$().ready(FB.init({
			appId : "147567282094128",
			status : true,
			cookie : true
		}));

		FB.login(function(response) {
			if (response.authResponse) {
				var access_token = FB.getAuthResponse()['accessToken'];
				console.log('Access Token = ' + access_token);
				// FB.api('me/feed', 'post', {
					// message : 'made a interesting observation with YelpVis',
					// status : 'success',
					// access_token : access_token,
					// picture : 'data:image/svg+xml;base64,\n" + image1 + "',
				// }, function(response) {
					// if (!response || response.error) {
						// alert('Error occured:' + response);
					// } else {
						// alert('Post ID: ' + response.id);
					// }
// 
				// });

				var media = [];
				media.push({
					'type' : 'image',
					'src' : 'data:image/svg+xml;base64,\n" + image1 + "',
					'href' : 'Link to webpage'
				});
				media.push({
					'type' : 'image',
					'src' : 'data:image/svg+xml;base64,\n" + image2 + "',
					'href' : 'Link to webpage'
				});

				var attachment = {
					'name' : 'YelpVis',
					'media' : media
				};

				FB.ui({
					method : 'stream.publish',
					message : 'made a interesting observation with YelpVis',
					attachment : attachment,
					user_message_prompt : 'post this to your wall?'
				});
				
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		}, {
			scope : 'user_photos,photo_upload,publish_stream,offline_access'
		});

	};

});
