if( typeof Object.create !== 'function') {
    
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}


$('#page1').live('pageinit', function() {

	var PSmin = 4, PSmax = 5;

	$("#range-1a").on("change", function(event) {

		PSmin = +event.target.value;
		
		 if(isMovieSelected) {
                
                
                selectionStatesMovie.requeryCriteria(PSmin,PSmax);
                updateDisplay('user',selectionStatesMovie);
            } else {
                selectionStatesUser.requeryCriteria(PSmin,PSmax);
                updateDisplay ('movie',selectionStatesUser);
            }
	});

	$("#range-1b").on("change", function(event) {

		PSmax = +event.target.value;
		
           if(isMovieSelected) {
                
                
                selectionStatesMovie.requeryCriteria(PSmin,PSmax);
                updateDisplay('user',selectionStatesMovie);
            } else {
                selectionStatesUser.requeryCriteria(PSmin,PSmax);
                updateDisplay ('movie',selectionStatesUser);
            }	
            
    });

    $("#bandwidth").on("change", function(event) {

        bandwidth = +event.target.value;
        
              
            if(isMovieSelected) {
                
                updateDisplay('user',selectionStatesMovie);
            } else {
                updateDisplay ('movie',selectionStatesUser);
            }
        
    });
    
    
	var w = 300;
	var h = 300;
	var margin = 10;
	var jobList = ['administrator',
    'artist',
    'doctor',
    'educator',
    'engineer',
    'entertainment',
    'executive',
    'healthcare',
    'homemaker',
    'lawyer',
    'librarian',
    'marketing',
    'none',
    'other',
    'programmer',
    'retired',
    'salesman',
    'scientist',
    'student',
    'technician',
    'writer'];
    

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
                    return xQuery(d);
                }).attr("cy", function(d) {
                    return yQuery(d);
                }).attr("r", function(d) {
                    return rQuery(+d.numReview);
                }).attr("fill", color).attr("stroke", color).classed("selectedCircle", true);
                
                selectionCircle.exit().remove();


            });
            
            //Exit Remove
            queryEntity.exit().remove();
            
            }
            
   
            updateContour(space, mySelectionState);
    



            updateLegend(space, mySelectionState);
    
          
            
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

 
function reQuery(d) {
    
    if (d.mode === 'single') {
        
        if(d.query.length === 0) {
            
            return [];
        } 
    }
}
    
     
//Class for one single selection    
function QuerySets(domain, query, selection, newClass, groupMode, relationMin, relationMax, legend, contourMode, contourOn) {
    
    this.domain = domain; //domain can be 'user' or 'movie'
    this.query =query; 
    this.selection =selection;
    this.assignedClass= newClass;
    this.contourList = [];
    this.mode = groupMode;  //mode can be  'single', 'groupOR','groupAND'
    this.relationMin = relationMin;  //means a PSmin at the time of selection
    this.relationMax = relationMax; //means a PSmax at the time of selection
    this.legend = legend;
    this.contourMode = contourMode;
    this.contourOn = contourOn;
    
    
          
}

QuerySets.prototype = {
    isSelected: function(d) {
        if(this.query.indexOf(d) === -1) {
            return false;
        } else {
            return true;
        }
    },
    
    remove: function (d) {
        
        this.query.splice(d,1);
        
        this.selection = this.requery();
    },
    
    //Using relationMin, relationMax, assignedClass, groupMode
    //Updates legend, selection 
   
    
        requery: function(newRelationMin, newRelationMax) {

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


function SelectionStatesSpace()  {
    
    this.querySetsList = [];
    
    
    
}

SelectionStatesSpace.prototype = {
    
    isSelected: function (d) {
        
        var i;
        
        for ( i=0;i<this.querySetsList.length;i++) {
            if ( this.querySetsList[i].isSelected(d)) {
                return true;
            }
        }
        
        return false;
    },
    
    newClass: function (d) {
        
        var newIndex = 0;
        var count =0;
        
        var selectedClassList = this.querySetsList.map(function(d) { return d.assignedClass;});
        
        while ( selectedClassList.indexOf(newIndex) != -1) {
                                newIndex += 1;
                            
        }
        
        return newIndex;
    },
    
    add: function (d) {
        
        this.querySetsList.push(d);
    },
    
    removeEntity: function (d) {
        
        var z;
        
        for (z=0; z < this.querySetsList.length;z++) {
            
            if(this.querySetsList[z].query.indexOf(d) != -1) {
                
                this.querySetsList[z].remove(this.querySetsList[z].query.indexOf(d));
                
                if (this.querySetsList[z].query.length == 0) {
                    
                    this.remove(z);
                }
            }
        }
        
     },
         
    remove: function (d) {
        
        this.querySetsList.splice(d,1);
    },
    
    requeryCriteria: function (relMin, relMax)  {
        
        var i ;
        
        for (i=0; i< this.querySetsList.length; i++) {
            
            this.querySetsList[i].requery(relMin, relMax);
            
        }
        
    }    
      
        
   
}

    //Variables for Index 
    var svgLegend = d3.select("#legend")
                    .append("svg")
                        .attr("height", 300);
                        //.attr("viewBox", "0 0 " + 100 + " " +h)
                        //.style("border", "1px solid silver");
                        
                        //.attr("transform", "translate(" + margin + "," + margin + ")");   
    
    
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
    var fillWordScale = d3.scale.pow(4).range(["white", "black"]);
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
	var isGroupSelectionMode = false;
	var isContourOn = true;
	
    
	
	var movieVQnum = 0;
   
	
	var movieTitle = [];
	var movieTitleOrig = [];

	var ordinalColor = d3.scale.category10();

	
	//Scale variable for movie space
	var xDomainExtent = [0,1];
	var yDomainExtent = [0,1];
	
	var xValue = function (d) {
		return x(+d.X);
	}
 
 	var yValue = function (d) {
		return y(+d.Y);
	}

   
	//variables for Geo mapping
	var proj = d3.geo.albersUsa();
	var path = d3.geo.path().projection(proj);
	var wasLocation = false;
	var wasYAxisUser, wasYValueUser,wasYScaleUser; 
	var myStates, myZip=[];
	var contourMovie =[];
	var contourUser =[];
	var colourCategory =[];


	//Scale variable for user space
	var xDomainExtentUser = [0,1];
	var yDomainExtentUser = [0,1];
	
	var xValueUser = function (d) {
		return xScaleUser(+d.X);
	}
 
 	var yValueUser = function (d) {
		return yScaleUser(+d.Y);
	}	

	var x = d3.scale.linear().range([margin, w - margin]);

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
					
	
	var svgMovie = d3.select("#movieCanvas")
					.append("svg")
						.attr("height", h)
						.attr("viewBox", "0 0 " + w + " " +h)
						.attr("title", "Movie Space")
						.style("border", "1px solid silver")
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
							.attr("clip-path","url(#movieClip)")
						//	.attr("transform", "translate(" + margin + "," + margin + ")")
							.call(zoomMovie);
							
	var rect = svgMovieBody.append("svg:rect")
							.attr("width",w-margin)
							.attr("height",h-margin)
							.attr("fill","white");
						
						
						

    var svgMovieContourGroup = svgMovieBody.append("svg:g").attr('class','movieContourGroup');
    
	var svgMovieSelectionGroup = svgMovieBody.append("svg:g").attr('class', 'movieSelectionSVGGroup');

	var svgMovieGroup = svgMovieBody.append("svg:g").attr('class', 'movieSVGGroup');
	
						
	svgMovie.append("svg:g")
			.attr("class","x axis")
			.attr("transform","translate(0," + (h-margin) + ")")
			.call(xAxis);
			
	svgMovie.append("svg:g")
			.attr("class","y axis")
			.attr("transform","translate(" + margin + ",0)")
			.call(yAxis);

	d3.csv("data/ratings.csv", function(ratingsCSV) {

		ratings = ratingsCSV;
		userLength = ratings.length;
		movieLength = d3.keys(ratings[0]).length;

	})
	
	d3.json("data/us-states.geojson", function(states) {

		myStates = states;

	})

	d3.csv("data/movieSpaceNoNormal.csv", function(movieCSV) {

		movieData = movieCSV;
		
		//Set up Scales after reading data
		
		rMovieScale.domain(d3.extent(movieData, function(d){ return +d.numReview; }));
		fillMovieScale.domain(d3.extent(movieData, function(d){ return +d.avgReview; }));
		
		

		for (var count = 0; count < movieData.length; count++) {

			movieTitle[count] = movieData[count].title;
			movieTitleOrig[count] = movieData[count].title;
		}

		movieStar = svgMovieGroup.selectAll("circle")
						.data(movieCSV,function(d) {return d.index;})
						.enter()
					.append("svg:circle")
					.classed("movieCircle", true)
					.classed("star", true)
					.attr("cx", xValue)
					.attr("cy", yValue)
					.attr("r", function(d) {
						return rMovieScale(+d.numReview);
					})
					.attr("fill", function(d) {
						return fillMovieScale(+d.avgReview);
					})
					.on('click', function(d, i) {

						var tempGalaxy = [];

						if(isMovieSelected === false) {
						
							
							isMovieSelected = true;
							clearSelection();
							
						
						}
						if (selectionStatesMovie.isSelected(d) === false) {
                             //Here this star is newly selected 
                             //So Add to the Selection
                             
                             if( isGroupSelectionMode ) {
                                 //Group mode:  Add to the current selection
                                 
                             } else {
                                 //Individual mode: Add to the new selection
                                 
                                 for (var count = 0; count < userLength; count++) {
            
                                     if (ratings[count][i] >= PSmin && ratings[count][i] <= PSmax) {
                
                                        tempGalaxy.push(userData[count]);
                                     }
                                 }
                                 
                                 var newClass = selectionStatesMovie.newClass(); 
                                 var newQuery = [d];
                                 var textLegend = d.title + " (Ratings " + PSmin + "-" + PSmax + ") " + $('input[name=contourMode]:checked').val();
                                 
                                 var tempQuerySet = new QuerySets('movie',newQuery, tempGalaxy, newClass,'single', PSmin, PSmax, textLegend, $('input[name=contourMode]:checked').val(),isContourOn);
                                 
                                 selectionStatesMovie.add(tempQuerySet);
                                 
                                 x.domain(xDomainExtent);
                                 y.domain(yDomainExtent);
                                
                             }
                            
            
                        } else {
                            
                            //Here this star is already selected
                            //So remove it 
                            
                            
                                selectionStatesMovie.removeEntity(d);
    
                                            
                        }
                        
                        updateDisplay('user',selectionStatesMovie); 


					});

		$('.movieCircle').tipsy({
			gravity : 'w',
			html : true,
			fade : true,
			delayOut : 1000,
			title : function() {
				var d = this.__data__, c = d.title;
				return '<a href="' + d.url + '" target="_blank ">' + c + '</a>';
			}
		});

	});

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
						
	var svgUser = d3.select("#userCanvas")
					.append("svg")
						.attr("height", h)
						.attr("viewBox", "0 0 " + w + " " +h)
						.attr("title", "User Space")
						.style("border", "1px solid silver")
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
							.attr("clip-path","url(#userClip)")
							.call(zoomUser);
							
	var rect = svgUserBody.append("svg:rect")
							.attr("width",w-margin)
							.attr("height",h-margin)
							.attr("fill","white");
							
	
	 var svgUserContourGroup = svgUserBody.append("svg:g").attr('class','userContourGroup');
	 
	var svgUserSelectionGroup = svgUserBody.append("svg:g").attr('class', 'userSelectionSVGGroup');

	var svgUserGroup = svgUserBody.append("svg:g").attr('class', 'userSVGGroup');



	svgUser.append("svg:g")
			.attr("class","x axis")
			.attr("transform","translate(0," + (h-margin) + ")")
			.call(xAxisUser);
			
	svgUser.append("svg:g")
			.attr("class","y axis")
			.attr("transform","translate(" + margin + ",0)")
			.call(yAxisUser);
	
	d3.csv("data/userSpaceNoNormal.csv", function(userCSV) {

		userData = userCSV;
		
		//Set up Scales after reading data
		
		rUserScale.domain(d3.extent(userData, function(d){ return +d.numReview; }));
		fillUserScale.domain(d3.extent(userData, function(d){ return +d.avgReview; }));
		

		svgUserGroup.selectAll("circle")
					.data(userCSV, function(d) {
						return +d.num;
					})
					.enter()
					.append("svg:circle")
					.classed("userCircle", true)
					.classed("star", true)
					.attr("cx", xValueUser)
					.attr("cy", yValueUser)
					.attr("r", function(d) {
			//  console.log((d.numReview*5)*(d.numReview*10));
						return rUserScale(+d.numReview);

					})
					.attr("fill", function(d) {
							
						return fillUserScale(+d.avgReview);
					})
					.on('click', function(d, i) {

						var tempGalaxy = [];

						if(isMovieSelected === true) {
						
							
							isMovieSelected = false;
							clearSelection();
						
						}
						if (selectionStatesUser.isSelected(d) === false) {
			                 //Here this star is newly selected 
			                 //So Add to the Selection
			                 
			                 if( isGroupSelectionMode ) {
			                     //Group mode:  Add to the current selection
			                     
			                 } else {
			                     //Individual mode: Add to the new selection
			                     
			                     for (var count = 0; count < movieLength; count++) {
            
                                     if (ratings[i][count] >= PSmin && ratings[i][count] <= PSmax) {
                
                                        tempGalaxy.push(movieData[count]);
                                     }
                                 }
			                     
			                     var newClass = selectionStatesUser.newClass(); 
			                     var newQuery = [d];
			                     var textLegend = d.age + ", " + d.sex + ", " + d.job + " (Ratings " + PSmin + "-" + PSmax + ") " + $('input[name=contourMode]:checked').val();
			                     
			                     var tempQuerySet = new QuerySets('user',newQuery, tempGalaxy, newClass,'single', PSmin, PSmax, textLegend,$('input[name=contourMode]:checked').val(),isContourOn);
                                 
			                     selectionStatesUser.add(tempQuerySet);
			                     
			                     xScaleUser.domain(xDomainExtentUser);
                                 yScaleUser.domain(yDomainExtentUser);
                                
                                
                                 
                                 
                               
			                 }
			             	
			
						} else {
							
							//Here this star is already selected
							//So remove it 
							
							
    							selectionStatesUser.removeEntity(d);
	
											
						}
						
						updateDisplay('movie',selectionStatesUser); 


					});
					
														
		
       

		$('.userCircle').tipsy({
			gravity : 'w',
			html : true,
			fade : true,
			delayOut : 1000,
			title : function() {
				var d = this.__data__;
				return d.age + ', ' + d.sex + ', ' + d.job;
			}
		});

	})
	
	
	   //Scale variable for user space
    var xDomainExtentWord = [0,1];
    var yDomainExtentWord = [0,1];
    
    var xValueWord = function (d) {
        return xScaleWord(+d.X);
    }
 
    var yValueWord = function (d) {
        return yScaleWord(+d.Y);
    }   

	
	var xScaleWord = d3.scale.linear().range([margin, w-margin]);
    var yScaleWord = d3.scale.linear().range([h-margin,margin]);
    
    var rWordScale = d3.scale.linear().range([minStarRadius, maxStarRadius]);
    
    
    var xAxisWord = d3.svg.axis()
                        .scale(xScaleWord)
                        .orient("bottom")
                        .ticks(5);
                        
    var yAxisWord = d3.svg.axis()
                        .scale(yScaleWord)
                        .orient("left")
                        .ticks(5);
                        
    var zoomWord = d3.behavior.zoom()
                        .x(xScaleWord)
                        .y(yScaleWord)
                        .on("zoom", zoomedWord);
                        
    var svgWord = d3.select("#wordCanvas")
                    .append("svg")
                        .attr("height", h)
                        .attr("viewBox", "0 0 " + w + " " +h)
                        .attr("title", "Word Space")
                        .style("border", "1px solid silver")
                        .attr("transform", "translate(" + margin + "," + margin + ")")
                    .append("svg:g");
                    
    var clip = svgWord.append("defs")
                        .append("svg:clipPath")
                        .attr("id","wordClip")
                        .append("svg:rect")
                        .attr("id","clip-rect")
                        .attr("x",margin)
                        .attr("y",margin)
                        .attr("width",w-2*margin)
                        .attr("height",h-2*margin);
                        
    var svgWordBody = svgWord.append("g")
                            .attr("clip-path","url(#wordClip)")
                            .call(zoomWord);
                            
    var rect = svgWordBody.append("svg:rect")
                            .attr("width",w-margin)
                            .attr("height",h-margin)
                            .attr("fill","white");
                            
    
     var svgWordContourGroup = svgWordBody.append("svg:g").attr('class','wordContourGroup');
     
    var svgWordSelectionGroup = svgWordBody.append("svg:g").attr('class', 'wordSelectionSVGGroup');

    var svgWordGroup = svgWordBody.append("svg:g").attr('class', 'wordSVGGroup');



    svgWord.append("svg:g")
            .attr("class","x axis")
            .attr("transform","translate(0," + (h-margin) + ")")
            .call(xAxisWord);
            
    svgWord.append("svg:g")
            .attr("class","y axis")
            .attr("transform","translate(" + margin + ",0)")
            .call(yAxisWord);
    
    d3.csv("data/wordSpaceNoNormal.csv", function(wordCSV) {

        wordData = wordCSV;
        
        //Set up Scales after reading data
        
        rWordScale.domain(d3.extent(wordData, function(d){ return +d.numReview; }));
        fillWordScale.domain(d3.extent(wordData, function(d){ return +d.avgReview; }));
        

        svgWordGroup.selectAll("circle")
                    .data(wordCSV, function(d) {
                        return +d.num;
                    })
                    .enter()
                    .append("svg:circle")
                    .classed("wordCircle", true)
                    .classed("star", true)
                    .attr("cx", xValueWord)
                    .attr("cy", yValueWord)
                    .attr("r", function(d) {
            //  console.log((d.numReview*5)*(d.numReview*10));
                        return rWordScale(+d.numReview);

                    })
                    .attr("fill", function(d) {
                            
                        return fillWordScale(+d.avgReview);
                    })
                    .on('click', function(d, i) {

                        var tempGalaxy = [];

                        if(isMovieSelected === true) {
                        
                            
                            isMovieSelected = false;
                            clearSelection();
                        
                        }
                        if (selectionStatesWord.isSelected(d) === false) {
                             //Here this star is newly selected 
                             //So Add to the Selection
                             
                             if( isGroupSelectionMode ) {
                                 //Group mode:  Add to the current selection
                                 
                             } else {
                                 //Individual mode: Add to the new selection
                                 
                                 for (var count = 0; count < movieLength; count++) {
            
                                     if (ratings[i][count] >= PSmin && ratings[i][count] <= PSmax) {
                
                                        tempGalaxy.push(movieData[count]);
                                     }
                                 }
                                 
                                 var newClass = selectionStatesWord.newClass(); 
                                 var newQuery = [d];
                                 var textLegend = d.age + ", " + d.sex + ", " + d.job + " (Ratings " + PSmin + "-" + PSmax + ") " + $('input[name=contourMode]:checked').val();
                                 
                                 var tempQuerySet = new QuerySets('word',newQuery, tempGalaxy, newClass,'single', PSmin, PSmax, textLegend,$('input[name=contourMode]:checked').val(),isContourOn);
                                 
                                 selectionStatesWord.add(tempQuerySet);
                                 
                                 xScaleWord.domain(xDomainExtentWord);
                                 yScaleWord.domain(yDomainExtentWord);
                                
                                
                                 
                                 
                               
                             }
                            
            
                        } else {
                            
                            //Here this star is already selected
                            //So remove it 
                            
                            
                                selectionStatesWord.removeEntity(d);
    
                                            
                        }
                        
                        updateDisplay('movie',selectionStatesUser); 


                    });
                    
                                                        
        
       

        $('.wordCircle').tipsy({
            gravity : 'w',
            html : true,
            fade : true,
            delayOut : 1000,
            title : function() {
                var d = this.__data__;
                return d.age + ', ' + d.sex + ', ' + d.job;
            }
        });

    })
    
    
	function zoomedMovie() {
// 
		svgMovieContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		svgMovieSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		svgMovieGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		svgMovie.select(".x.axis").call(xAxis);
		svgMovie.select(".y.axis").call(yAxis);
	}
	
	function zoomedUser() {
// 
        svgUserContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		svgUserSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		svgUserGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		
		svgUser.select(".x.axis").call(xAxisUser);
		svgUser.select(".y.axis").call(yAxisUser);
	}


    function zoomedWord() {
// 
        svgWordContourGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        svgWordSelectionGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        svgWordGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        
        svgWord.select(".x.axis").call(xAxisWord);
        svgWord.select(".y.axis").call(yAxisWord);
    }

	function clearSelection() {

		selectionStatesMovie = new SelectionStatesSpace() ;
		selectionStatesUser = new SelectionStatesSpace();
		
		updateDisplay('movie', selectionStatesUser);
		updateDisplay('user',selectionStatesMovie);

		
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
        
                
     if(isContourOn == false) {
         
         svgMovieContourGroup.selectAll("g").remove();
         svgUserContourGroup.selectAll("g").remove();
        
        
        
        return;
    }
        var min=100, max=-100;
        
        var selectedData2D=[];
   
        var XStep = (myXScale.range()[1] - myXScale.range()[0]) / numStepForKDE;
        var YStep = (myYScale.range()[1] - myYScale.range()[0]) / numStepForKDE;

        var XCoord = d3.range(myXScale.range()[0]-3*XStep, myXScale.range()[1] + 3*XStep, XStep);
        var YCoord = d3.range(myYScale.range()[0]-3*YStep, myYScale.range()[1] + 3*YStep, YStep);
        
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
                var myRating =0;
                
                if($('input[name=contourMode]:checked').val() === 'den'){
            
                    return 1;        
                }
            
                
                for (index =0; index < z.query.length; index++) {
                    myRating += ratings[z.query[index].num][d.index];    
                } 
                return myRating;
            });
            
            } else if (Space ==='user') {
                
                var tempDataZ = tempGalaxy.map(function(d) {
                
                var index = 0;
                var myRating =0;
                
                 if($('input[name=contourMode]:checked').val() === 'den'){
            
                    return 1;        
                }
                
                for (index =0; index < z.query.length; index++) {
                    myRating += ratings[d.num][z.query[index].index];    
                } 
                return myRating;
            });
                
            }



            var data2D = science.stats.kde2D(tempDataX, tempDataY, tempDataZ, XCoord, YCoord, XStep / bandwidth, YStep / bandwidth);
            
            var minTemp = d3.min(data2D, function(d) { return d3.min(d);});
            var maxTemp = d3.max(data2D, function (d) { return d3.max(d);});
            
            if (minTemp < min) {
                
                min = minTemp;
                
            }
            
            
            if (maxTemp > max) {
                
                max = maxTemp;
                
            } 
            
            return data2D;
            
        });
        
         selectedData2D.map(function (data2D,i) {
             
            var c = new Conrec(), zs = d3.range(min, max, (max - min) / numLevelForContour);

            c.contour(data2D, 0, XCoord.length - 1, 0, YCoord.length - 1, XCoord, YCoord, zs.length, zs);

            mySelectionStates.querySetsList[i].contourList =  c.contourList();

        });
        
         for (var j = 0; j < 10; j++)
            colourCategory[j] = d3.scale.linear().domain([min, max]).range(["#fff", ordinalColor(j)]);

        
        var contourGroup = myContourGroup.selectAll("g")
                        .data(mySelectionStates.querySetsList, function(d) {return d.assignedClass;});
                        
            contourGroup.enter().append("g");
      
      
                        contourGroup.each(function(d, i) {

                            var f = d.assignedClass;


                            var paths =   d3.select(this)
                                .selectAll("path")
                                .data(d.contourList, function(d) {
                                    return d.level;
                                });
                             
                             
                            paths.enter()
                                .append("path");
                                
                                
                                paths.style("fill", function(d) {

                                    return colourCategory[f](d.level);
                                }).transition().delay(200).duration(300)
                                 .attr("d", d3.svg.line().x(function(d) {
                                    return +(d.x);
                                }).y(function(d) {
                                    return +(d.y);
                                })).attr("fill-opacity",0.01)
                                .transition().duration(300)
                                .attr("fill-opacity",0.8);
                                
                                
                          
                                
                          
                                
                               paths.exit()
                                .remove();

                        });
                        
                                          
                contourGroup.exit().remove();
        
    }



	$(function() {

		$("#searchMovie").autocomplete({
			source : movieTitle,
			target : $('#suggestions'),

			minLength : 1,
			matchFromStart : false,

			callback : function(e) {

				var $a = $(e.currentTarget);
				$('#searchMovie').val($a.text());
				$('#searchMovie').autocomplete('clear');
				
				var index = movieTitleOrig.indexOf($a.text());

                var selection = svgMovieGroup.selectAll("circle");
                
                var targetObject = selection.filter(function (d,i) { return i === index ? this:null;});

				targetObject.on("click")(movieData[index],index);

			}
		});
	});
	
	$('#movieXAxisMenu').on('change', function() {
		
		var $this = $(this),
			val	= $this.val();
			
			switch (val) {
				case 'sim1':
				
					x = d3.scale.linear().range([margin, w - margin]);

					xDomainExtent = d3.extent(movieData, function(d){return +d.X;});
															
					xValue = function (d) {
						return x(+d.X);
					}
												
					break;
					
				case 'avgReview':
				
					x = d3.scale.linear().range([margin, w - margin]);

					xDomainExtent = d3.extent(movieData, function(d){return +d.avgReview;});
															
					xValue = function (d) {
						return x(+d.avgReview);
					}
										
					break;
					
				case 'numReview':
					
					x = d3.scale.linear().range([margin, w - margin]);
				
					xDomainExtent = d3.extent(movieData, function(d){return +d.numReview;});
															
					xValue = function (d) {
						return x(+d.numReview);
					}
										
					break;
															
				case 'relDate':
				
					var timeFormat = d3.time.format("%e-%b-%Y");
					
					xDomainExtent = d3.extent(movieData, function(d){ return timeFormat.parse(d.date); });
										
					x = d3.time.scale().range([margin, w - margin]);
					
					xValue = function (d) {
						return x((timeFormat.parse(d.date)));
					}
												
					break;
					
					
			}
			
			xAxis.scale(x);
		
			x.domain(xDomainExtent);
		
			y.domain(yDomainExtent);
			
			zoomMovie.x(x).y(y);
			
			svgMovieContourGroup.attr("transform","scale(1)");
													
			svgMovieSelectionGroup.attr("transform", "scale(1)");
			
			svgMovieGroup.attr("transform", "scale(1)");

			svgMovie.selectAll(".y.axis").transition()
					.duration(1000)
					.call(yAxis);
			
			svgMovie.selectAll(".x.axis").transition()
					.duration(1000)
					.call(xAxis);
					
			svgMovieBody.selectAll(".selectedCircle, .star").transition()
				.duration(1000)
				.attr('cx', xValue)
				.attr("cy", yValue);	
				
			updateContour('movie',selectionStatesUser);	
					
	});
	
	
    
	
	$('#movieYAxisMenu').on('change', function() {
		
		var $this = $(this),
			val	= $this.val();
			
			switch (val) {
				case 'sim2':
				
					y = d3.scale.linear().range([ h - margin, margin]);

					yDomainExtent = d3.extent(movieData, function(d){return +d.Y;});
															
					yValue = function (d) {
						return y(+d.Y);
					}
												
					break;
					
				case 'avgReview':
				
					y = d3.scale.linear().range([ h - margin, margin]);

					yDomainExtent = d3.extent(movieData, function(d){return +d.avgReview;});
															
					yValue = function (d) {
						return y(+d.avgReview);
					}
										
					break;
					
				case 'numReview':
				
					y = d3.scale.linear().range([ h - margin, margin]);

					yDomainExtent = d3.extent(movieData, function(d){return +d.numReview;});
															
					yValue = function (d) {
						return y(+d.numReview);
					}
										
					break;
															
				case 'relDate':
				
					var timeFormat = d3.time.format("%e-%b-%Y");
					
					yDomainExtent = d3.extent(movieData, function(d){ return timeFormat.parse(d.date); });
										
					y = d3.time.scale().range([ h - margin, margin]);
					
					yValue = function (d) {
						return y((timeFormat.parse(d.date)));
					}
												
					break;
					
					
			}
			
			yAxis.scale(y);
		
			x.domain(xDomainExtent);
		
			y.domain(yDomainExtent);
			
			zoomMovie.x(x).y(y);
			
			svgMovieContourGroup.attr("transform","scale(1)");
													
			svgMovieSelectionGroup.attr("transform", "scale(1)");
			
			svgMovieGroup.attr("transform", "scale(1)");

			svgMovie.selectAll(".y.axis").transition()
					.duration(1000)
					.call(yAxis);
			
			svgMovie.selectAll(".x.axis").transition()
					.duration(1000)
					.call(xAxis);
					
			svgMovieBody.selectAll(".selectedCircle, .star").transition()
				.duration(1000)
				.attr('cx', xValue)
				.attr("cy", yValue);		
				
		     updateContour('movie',selectionStatesUser);
	});
	
	$('#userXAxisMenu').on('change', function() {
		
		var $this = $(this),
			val	= $this.val();
			
			if(val === 'location') {
    					
    			wasLocation = true;
    			
    			$('#userYAxisMenu').selectmenu('disable');
    			
				wasYAxisUser = yAxisUser;
				wasYValueUser = yValueUser;
				wasYScaleUser = yScaleUser;
		
				var locationGroup = svgUserSelectionGroup.append("g").attr("id","states");
		          
		          proj.translate([310,250]);
		          proj.scale(600);
		
				d3.select("#states").selectAll("path")
						.data(myStates.features)
					.enter().append("path")
						.attr("d",path);
		
				xValueUser = function (d) {
					
								var p = proj([d.lon, d.lat]);
								
								return p[0];
							}
							
				yValueUser = function (d) {
		
								var p = proj([d.lon, d.lat]);
								
								return p[1];
				}
												
												
				svgUserBody.selectAll(".selectedCircle, .star").transition()
						.duration(1000)
						.attr('cx', xValueUser)
						.attr("cy", yValueUser);	
						
				updateContour("user",selectionStatesMovie);
				
						
			} else {
				
				if(wasLocation === true) {
					
					$('#userYAxisMenu').selectmenu('enable');
				
					wasLocation = false;	
					
					yScaleUser = wasYScaleUser;
					yAxisUser = wasYAxisUser;
					yValueUser  = wasYValueUser;
					
					d3.select("#states").remove();
					
				}
				
				
				switch (val) {
				
				case 'sim1':
				
					
				
					xScaleUser = d3.scale.linear().range([margin, w - margin]);

					
					xDomainExtentUser = d3.extent(userData, function(d){return +d.X;});
															
					xValueUser = function (d) {
						return xScaleUser(+d.X);
					}
					
												
					break;
					
				case 'avgReview':
				
					xScaleUser = d3.scale.linear().range([margin, w - margin]);

					xDomainExtentUser = d3.extent(userData, function(d){return +d.avgReview;});
															
					xValueUser = function (d) {
						return xScaleUser(+d.avgReview);
					}
					
										
					break;
					
				case 'numReview':
					
					xScaleUser = d3.scale.linear().range([margin, w - margin]);

					xDomainExtentUser = d3.extent(userData, function(d){return +d.numReview;});
															
					xValueUser = function (d) {
						return xScaleUser(+d.numReview);
					}
					
					
					break;
															
				case 'age':
					
					xScaleUser = d3.scale.linear().range([margin, w - margin]);

					xDomainExtentUser = d3.extent(userData, function(d){return +d.age;});
															
					xValueUser = function (d) {
						return xScaleUser(+d.age);
					}
					
										
					break;
					
				case 'gender':
					
					xScaleUser = d3.scale.ordinal().rangePoints([margin, w - margin],1);

					xDomainExtentUser = ['M','F'];
															
					xValueUser = function (d) {
						return xScaleUser(d.sex);
					}
							
					
								
					break;
					
				case 'job':
					
					xScaleUser = d3.scale.ordinal().rangePoints([margin, w - margin],1);

					xDomainExtentUser = jobList;
															
					xValueUser = function (d) {
						return xScaleUser(d.job);
					}
					
										
					break;
					
			}
			
			xAxisUser.scale(xScaleUser);
		
			xScaleUser.domain(xDomainExtentUser);
		
			yScaleUser.domain(yDomainExtentUser);
			
			zoomUser.x(xScaleUser).y(yScaleUser);
			
			svgUserContourGroup.attr("transform","scale(1)");
													
			svgUserSelectionGroup.attr("transform", "scale(1)");
			
			svgUserGroup.attr("transform", "scale(1)");

			svgUser.selectAll(".y.axis").transition()
					.duration(1000)
					.call(yAxisUser);
			
			svgUser.selectAll(".x.axis").transition()
					.duration(1000)
					.call(xAxisUser);
					
			svgUserBody.selectAll(".selectedCircle, .star").transition()
				.duration(1000)
				.attr('cx', xValueUser)
				.attr("cy", yValueUser);	
				
			updateContour("user",selectionStatesMovie);
				
			}
						
	});

    $('#userYAxisMenu').on('change', function() {
        
        var $this = $(this),
            val = $this.val();
            
           
               
                
                switch (val) {
                
                case 'sim2':
                
                    
                
                    yScaleUser = d3.scale.linear().range([h-margin, margin]);

                    
                    yDomainExtentUser = d3.extent(userData, function(d){return +d.Y;});
                                                            
                    yValueUser = function (d) {
                        return yScaleUser(+d.Y);
                    }
                    
                                                
                    break;
                    
                case 'avgReview':
                
                    yScaleUser = d3.scale.linear().range([h-margin, margin]);

                    yDomainExtentUser = d3.extent(userData, function(d){return +d.avgReview;});
                                                            
                    yValueUser = function (d) {
                        return yScaleUser(+d.avgReview);
                    }
                    
                                        
                    break;
                    
                case 'numReview':
                    
                    yScaleUser = d3.scale.linear().range([h-margin, margin]);

                    yDomainExtentUser = d3.extent(userData, function(d){return +d.numReview;});
                                                            
                    yValueUser = function (d) {
                        return yScaleUser(+d.numReview);
                    }
                    
                    
                    break;
                                                            
                case 'age':
                    
                    yScaleUser = d3.scale.linear().range([h-margin, margin]);

                    yDomainExtentUser = d3.extent(userData, function(d){return +d.age;});
                                                            
                    yValueUser = function (d) {
                        return yScaleUser(+d.age);
                    }
                    
                                        
                    break;
                    
                case 'gender':
                    
                    yScaleUser = d3.scale.ordinal().rangePoints([h-margin, margin],1);

                    yDomainExtentUser = ['M','F'];
                                                            
                    yValueUser = function (d) {
                        return yScaleUser(d.sex);
                    }
                            
                   
                                
                    break;
                    
                case 'job':
                    
                    yScaleUser = d3.scale.ordinal().rangePoints([h-margin, margin],1);

                    yDomainExtentUser = jobList;
                                                            
                    yValueUser = function (d) {
                        return yScaleUser(d.job);
                    }
                    
                                        
                    break;
                    
            }
            
            yAxisUser.scale(yScaleUser);
        
            yScaleUser.domain(yDomainExtentUser);
        
            xScaleUser.domain(xDomainExtentUser);
            
            zoomUser.x(xScaleUser).y(yScaleUser);
            
            svgUserContourGroup.attr("transform","scale(1)");
                                                    
            svgUserSelectionGroup.attr("transform", "scale(1)");
            
            svgUserGroup.attr("transform", "scale(1)");

            svgUser.selectAll(".y.axis").transition()
                    .duration(1000)
                    .call(yAxisUser);
            
            svgUser.selectAll(".x.axis").transition()
                    .duration(1000)
                    .call(xAxisUser);
                    
            svgUserBody.selectAll(".selectedCircle, .star").transition()
                .duration(1000)
                .attr('cx', xValueUser)
                .attr("cy", yValueUser);    
                
            
            updateContour('user',selectionStatesMovie);
            
            
                        
    });

	$('#resetButton').click(function() {
	    

	    clearSelection();
	    
    });	
    
    $('#contourON').on('change',function() {
        
        
            var $this = $(this),
            val = $this.val();
            
            if (val === 'on') {
                
                isContourOn = true;
            } else {
                isContourOn = false;
            }
        
            if(isMovieSelected) {
                
                updateDisplay('user',selectionStatesMovie);
            } else {
                updateDisplay ('movie',selectionStatesUser);
            }
    });     	
    
      $('input[name=contourMode]').on('change',function() {
        
        
                  
            if(isMovieSelected) {
                
                updateDisplay('user',selectionStatesMovie);
            } else {
                updateDisplay ('movie',selectionStatesUser);
            }
    });     
    
    
    
         
	
	d3.select("#saveas")
	   .on("click", writeDownloadLink);
	   
	function writeDownloadLink(){
    var html = d3.select("svg")
        .attr("title", "test2")
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

    d3.select("body").append("div")
        .attr("id", "download")
        .style("top", event.clientY+20+"px")
        .style("left", event.clientX+"px")
        .html("Right-click on this preview and choose Save as<br />Left-Click to dismiss<br />")
        .append("img")
        .attr("src", "data:image/svg+xml;base64,"+ btoa(html));

    d3.select("#download")
        .on("click", function(){
            if(event.button == 0){
                d3.select(this).transition()
                    .style("opacity", 0)
                    .remove();
            }
        })
        .transition()
        .duration(500)
        .style("opacity", 1);
};

});
