document.addEventListener('DOMContentLoaded', () => {
    var current = localStorage.getItem("current");  
    var destination = localStorage.getItem("destination"); 
    
    
        document.getElementById(current).style.fill="#FC100D";

    if(destination=="Boys Washroom" ||destination=="Girls Washroom" || destination=="WaterFilter" || destination=="Entry Exit")
    {
        document.getElementById(destination+1).style.fill="#4BB543";
        document.getElementById(destination+2).style.fill="#4BB543";
        return;
    }
    else{
    document.getElementById(destination).style.fill="#4BB543";
    }
    
    let shortestDistanceNode = (distances, visited) => {
          let shortest = null;
          for (let node in distances) {
              let currentIsShortest =
                  shortest === null || distances[node] < distances[shortest];
              if (currentIsShortest && !visited.includes(node)) {
                  shortest = node;
              }
          }
          return shortest;
      };

    let findShortestPath = (graph, startNode, endNode) => {
          let distances = {};
        distances[endNode] = "Infinity";
        distances = Object.assign(distances, graph[startNode]);
        let parents = { endNode: null };
        for (let child in graph[startNode]) {
         parents[child] = startNode;
        }
          let visited = [];
          let node = shortestDistanceNode(distances, visited);
        while (node) {
         let distance = distances[node];
         let children = graph[node]; 
             for (let child in children) {
               if (String(child) === String(startNode)) {
                 continue;
              } else {
                 let newdistance = distance + children[child];
                 if (!distances[child] || distances[child] > newdistance) {
            distances[child] = newdistance;
            parents[child] = node;
           } 
                }
              }  
             visited.push(node);
             node = shortestDistanceNode(distances, visited);
           }
         
        let shortestPath = [endNode];
        let parent = parents[endNode];
        while (parent) {
         shortestPath.push(parent);
         parent = parents[parent];
        }
        shortestPath.reverse();
        let results = {
         distance: distances[endNode],
         path: shortestPath,
        };        
          return results;
       };

    graph={



//First Floor Graph
"Room 101p":{"Stairs To Ground Floorp"  : 1 , "Room 102p"  : 1 },
"Room 102p":{"Room 101p"  : 1 , "Room 103p"  : 1 },
"Room 103p":{"Room 102p"  : 1 , "Room 105bp"  : 1 },
"Room 105bp":{"Room 103p"  : 1 , "Room 105p"  : 1 },
"Room 105p":{"Room 105bp"  : 1 , "Room 105ap"  : 1 ,"To Stairs1p"  : 1 },
"Room 105ap":{"Room 105p"  : 1 , "Room 106p"  : 1 },
"To Stairs1p":{"Room 105p"  : 1 , "Room 108p"  : 1 },
"Room 106p":{"Room 105ap"  : 1 , "Room 107p"  : 1 },
"Room 107p":{"Room 106p"  : 1 , "Girls WashRoom1p"  : 1 },
"Girls WashRoom1p":{"Room 107p"  : 1 },
"Room 108p":{"To Stairs1p"  : 1 , "Room 109p"  : 1 },
"Room 109p":{"Room 108p"  : 1 , "Room 110p"  : 1 },
"Room 110p":{"Room 109p"  : 1 , "Room 111p"  : 1 },
"Room 111p":{"Room 110p"  : 1 , "Room 112p"  : 1 },
"Room 112p":{"Room 111p"  : 1 , "Room 113p"  : 1 },
"Room 113p":{"Room 112p"  : 1 , "To Stairs2p"  : 1 },
"To Stairs2p":{"Room 113p"  : 1 , "Room 117ap"  : 1 },
"Room 117ap":{"Room 117p"  : 1 , "Room 118p"  : 1 ,"To Stairs2p" :1},
"Room 117p":{"Room 117ap"  : 1 , "Room 116p"  : 1 },
"Room 114p":{"Boys WashRoom1p"  : 1 , "Room 115p"  : 1 },
"Boys WashRoom1p":{"Room 114p"  : 1 },
"Room 115p":{"Room 114p"  : 1 , "Room 116p"  : 1 },
"Room 116p":{"Room 115p"  : 1 , "Room 117p"  : 1 },
"Room 118p":{"Room 117ap"  : 1 , "Room 119p"  : 1 },
"Room 119p":{"Room 118p"  : 1 , "Room 120p"  : 1 },
"Room 120p":{"Room 119p"  : 1 , "To Ground Floorp"  : 1 },
"To Ground Floorp":{"Room 120p"  : 1 , "Room 121p"  : 1 },
"Room 121p":{"To Ground Floorp"  : 1 , "Room 122p"  : 1 },
"Room 122p":{"Room 121p"  : 1 , "Room 123p"  : 1 },
"Room 123p":{"Room 122p"  : 1 , "Room 124p"  : 1 },
"Room 124p":{"Room 123p"  : 1 , "Room 124ap"  : 1 },
"To Stairs3p":{"Room 124ap"  : 1 , "HOD CSp"  : 1 },
"Room 124ap":{"Room 124p"  : 1 , "Room 125p"  : 1 , "To Stairs3p" : 1 },
"Room 125p":{"Room 124ap"  : 1 , "Room 126p"  : 1 },
"Room 126p":{"Room 125p"  : 1 , "Room 127p"  : 1 },
"Room 127p":{"Room 126p"  : 1 , "Girls WashRoom2p"  : 1 },
"Girls WashRoom2p":{"Room 127p"  : 1 },
"HOD CSp":{"To Stairs3p"  : 1 , "Room 128p"  : 1 },
"Room 128p":{"HOD CSp"  : 1 , "Room 129p"  : 1 },
"Room 129p":{"Room 128p"  : 1 , "Room 130p"  : 1 },
"Room 130p":{"Room 129p"  : 1 , "Room 131p"  : 1 },
"Room 131p":{"Room 130p"  : 1 , "Room 132p"  : 1 },
"Room 132p":{"Room 131p"  : 1 , "Room 133p"  : 1 },
"Boys WashRoom2p":{"Room 132p"  : 1 },
"Room 132p":{"Room 131p"  : 1 , "To Stairs4p"  : 1 },
"Room 133bp":{"Vector1p"  : 1 , "Room 133p"  : 1 },
"Room 133p":{"Room 133bp"  : 1 , "Room 133ap"  : 1 ,"To Stairs4p"  : 1 },
"Room 133ap":{"Room 133p"  : 1 , "Room 134p"  : 1 },
"To Stairs4p":{"Room 133p"  : 1 , "Room 132p"  : 1 },
"Room 134p":{"Room 133ap"  : 1 , "Room 135p"  : 1 },
"Room 135p":{"Room 134p"  : 1 , "Room 136p"  : 1 },
"Room 136p":{"Room 135p"  : 1 ,"Stairs To Ground Floorp"  : 1 },
"Stairs To Ground Floorp":{"Room 136p"  : 1 , "Room 101p"  : 1 },


//Ground Floor Graph
"Room G01p":{"Entry Exit1p"  : 1 , "Room G02p"  : 1 },
"Room G02p":{"Room G01p"  : 1 , "Room G03p"  : 1 },
"Room G03p":{"Room G02p"  : 1 , "Room G04p"  : 1 },
"Room G04p":{"Room G03p"  : 1 , "Room G05ap"  : 1 },
"Room G05ap":{"Room G04p"  : 1 , "Room G05p"  : 1 , "Stairs1p" :1},
"Stairs1p":{"Room G05ap"  : 1 , "Room G07p"  : 1 },
"Room G05p":{"Room G05ap"  : 1 , "Room G06p"  : 1 ,"WaterFilter1p":1},
"Room G06p":{"Room G05p"  : 1 , "Girls WashRoom1p"  : 1 },
"Girls WashRoom1p":{"Room G06p"  : 1 },
"Room G07p":{"Stairs1p"  : 1 , "Room G08p"  : 1 },
"Room G08p":{"Room G07p"  : 1 , "Room G09p"  : 1 },
"Room G09p":{"Room G08p"  : 1 , "Room G10p"  : 1 },
"Room G10p":{"Room G09p"  : 1 , "Room G11p"  : 1 },
"Room G11p":{"Room G10p"  : 1 , "Room G12p"  : 1 ,"WayToFountain2p" : 5},
"Room G12p":{"Room G11p"  : 1 , "Room G13p"  : 1 },
"Room G13p":{"Room G12p"  : 1 , "Stairs2p"  : 1 },
"Stairs2p":{"Room G13p"  : 1 , "Room G22ap"  : 1 },
"Room G22ap":{"Room G22p"  : 1 , "Room G23p"  : 1 ,"Stairs2p" :1},
"Room G22p":{"Room G22ap"  : 1 , "Room G21p"  : 1 },
"Room G21p":{"Room G20p"  : 1 , "Room G22p"  : 1 },
"Room G20p":{"Room G19p"  : 1 , "Room G21p"  : 1 },
"Room G19p":{"Room G18p"  : 1 , "Room G20p"  : 1 , "HOD MEp" : 1},
"Room G18p":{"Room G19p"  : 1 },
"HOD MEp":{"Room G19p"  : 1 , "Room G15p"  : 1 },
"Room G15p":{"HOD MEp"  : 1 },

"Room G23p":{"Room G22ap"  : 1 , "Room G24p"  : 1 },
"Room G24p":{"Room G23p"  : 1 , "To SRISTp"  : 1 },
"To SRISTp":{"Room G24p"  : 1 , "Auditoriump"  : 1 },
"Auditoriump":{"To SRISTp"  : 1 , "HOD CE1p"  : 1 ,"WayToFountain3p" : 5},
"HOD CE1p":{"Auditoriump"  : 1 , "Room G25p"  : 1 ,"HOD CEp":1},
"HOD CEp":{"HOD CE1p"  : 1 },
"Room G25p":{"HOD CE1p"  : 1 , "Room G26p"  : 1 },
"Room G26p":{"Room G25p"  : 1 , "Room G27p"  : 1 },
"Room G27p":{"Room G26p"  : 1 , "Room G27ap"  : 1 },
"Room G27ap":{"Room G27p"  : 1 , "Room G28p"  : 1,"Stairs3p" : 1 },
"Room G28p":{"Room G27ap"  : 1 , "Room G29p"  : 1 },
"Room G29p":{"Room G28p"  : 1 , "Girls WashRoom2p"  : 1 },
"Girls WashRoom2p":{"Room G29p"  : 1 },
"Stairs3p":{"Room G27ap"  : 1 , "HOD ITp"  : 1 },        
"HOD ITp":{"Stairs3p"  : 1 , "Room G30p"  : 1 },
"Room G30p":{"HOD ITp"  : 1 , "Room G31p"  : 1 },
"Room G31p":{"Room G30p"  : 1 , "Room G32p"  : 1 },
"Room G32p":{"Room G31p"  : 1 , "Room G33p"  : 1 ,"WayToFountain4p" : 5},
"Room G33p":{"Room G32p"  : 1 , "Room G34p"  : 1 },
"Room G34p":{"Room G33p"  : 1 , "Room G35p"  : 1 },
"Room G35p":{"Room G34p"  : 1 , "Stairs4p"  : 1 },
"Stairs4p":{"Room G35p"  : 1 , "Room G38ap"  : 1 ,"WaterFilter2p" :1},
"Room G38ap":{"Room G38p"  : 1 , "Room G37p"  : 1 , "Stairs4p" : 1 },
"Room G37p":{"Room G38ap"  : 1 , "Room G36p"  : 1 },
"Room G36p":{"Room G37p"  : 1 , "Boys Washroom2p"  : 1 },
"Boys WashRoom2p":{"Room G36p"  : 1 },
"Room G38p":{"Room G38ap"  : 1 , "Room G39p"  : 1 },
"Room G39p":{"Room G40p"  : 1 , "Room G38p"  : 1 },
"Room G40p":{"Room G41p"  : 1 , "Room G39p"  : 1 },
"Room G41p":{"Room G42p"  : 1 , "Room G40p"  : 1 },
"Room G42p":{"Entry Exit1p"  : 1 , "Room G41p"  : 1 },
"Entry Exit1p":{"Room G01p"  : 1 , "Room G42p"  : 1,"WayToFountain1p" : 5 },

"WayToFountain1p":{"Entry Exit1p"  : 1 , "Fountainp"  : 1 },
"WayToFountain2p":{"Room G11p"  : 1 , "Fountainp"  : 1 },
"WayToFountain3p":{"Auditoriump"  : 1 , "Fountainp"  : 1 },
"WayToFountain4p":{"Room G32p"  : 1 , "Fountainp"  : 1 },
"Fountainp":{"WayToFountain1p":2,"WayToFountain2p":2,"WayToFountain3p" :2,"WayToFountain4p" :2},
"WaterFilter1p":{"Room G05p":1,"Stair1p":1},
"WaterFilter2p":{"Stairs4p":1}

};
    path1=findShortestPath(graph,current+"p", destination+"p");
    console.log(path1)
    console.log(path1.path)
    for(var i=0;i<path1.path.length;i++)
    {
        console.log(path1.path[i]);
        document.getElementById(path1.path[i]).style.fill="#1668f5";
    }

});