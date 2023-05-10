import { Vector, DIRECTION } from "./General";

class GridPoint {
    constructor(x, y, column, row){
        this.id = "C" + column + "R" + row;
        this.taken = false;
        this.coords = {
            x, y
        };
        this.point = {
            column, row
        }
        this.edges = {}
    }
}

class GridEdge {
    constructor(p1, p2, w = 1){
        this.points = [p1, p2];
        this.weight = w;
        this.habitants = [];
        this.otherEnd = (id) => {
            switch(id){
                case p1.id: return p2;
                case p2.id: return p1;
                default: return null;
            }
        }
    }
}

class GridModel {
    constructor(nodes, links, width, height, prefDistance){
        this.nodes = nodes;
        this.links = links;
        [this.grid, this.edges] = GridHelper.createGrid(width, height, prefDistance);
        
        for(let node of nodes.sort((a,b) => (b.in.length + b.out.length) - (a.in.length + a.out.length))){
            let closestPoint = GridHelper.findClosestAvailablePoint(this.grid, node.coords);
            if(!closestPoint) return alert("Grid not big enough");
            closestPoint.taken = true;
            node.gp = closestPoint;
        }
    }
}

class GridHelper {
    static isSamePoint(p1, p2){
        return p1.column === p2.column && p1.row === p2.row;
    }

    static createGrid(availableWidth, availableHeight, prefDistance){
        let width = Math.floor(availableWidth/prefDistance);
        let height = Math.floor(availableHeight/prefDistance);
        let padding = {
            w: (prefDistance + (availableWidth % prefDistance))/2,
            h: (prefDistance + (availableHeight % prefDistance))/2
        }

        let grid = [];
        let edges = [];

        //Run through to create all points in grid
        for(let c=0; c<width; c++){
            let column = [];
            for(let r=0; r<height; r++){
                column.push(new GridPoint(padding.w + c*prefDistance, padding.h + r*prefDistance, c, r))
            }
            grid.push(column);
        }

        //Run through and create all edges in grid
        for(let c=0; c<width; c++){
            for(let r=0; r<height; r++){
                let curr = grid[c][r];

                //Get horizontal and vertical edges
                if(c < width - 1){ //If not at right edge
                    let right = grid[c+1][r]; //Get point to the right of current

                    let edge = new GridEdge(curr, right); //Create new edge which connects the two
                    edges.push(edge);

                    curr.edges[DIRECTION.RIGHT] = edge; //Connect edge to points
                    right.edges[DIRECTION.LEFT] = edge;
                }
                if(r < height - 1){
                    let down = grid[c][r+1]; //Get point down from the current
                    let edge = new GridEdge(curr, down); //Create new edge which connects the two
                    edges.push(edge);

                    curr.edges[DIRECTION.DOWN] = edge; //Connect edge to points
                    down.edges[DIRECTION.UP] = edge;
                }

                //Get diagonal edges
                if(c < width - 1){
                    if(r > 0){
                        let rightUp = grid[c + 1][r - 1];
                        let edge = new GridEdge(curr, rightUp, 1.4);
                        edges.push(edge);

                        curr.edges[DIRECTION.RIGHTUP] = edge;
                        rightUp.edges[DIRECTION.LEFTDOWN] = edge;
                    }
                    if(r < height - 1){
                        let rightDown = grid[c + 1][r + 1];
                        let edge = new GridEdge(curr, rightDown, 1.4);
                        edges.push(edge);
                        
                        curr.edges[DIRECTION.RIGHTDOWN] = edge;
                        rightDown.edges[DIRECTION.LEFTUP] = edge;
                    }
                }
            }
        }

        return [grid, edges];
    }

    static getAllPoints(grid){
        let result = [];
        for(let col of grid) result.push(...col);
        return result;
    }

    static findClosestAvailablePoint(grid, coords){
        let points = this.getAllPoints(grid).filter(p => !(p.taken));
        if(!points.length) return null;

        let minDistance = Number.POSITIVE_INFINITY, closestPoint;
        for(let point of points){
            let between = Vector.subtract(point.coords, coords);
            let distance = Vector.dot(between, between);
            if(distance < minDistance) {
                minDistance = distance;
                closestPoint = point;
            }
        }

        return closestPoint;
    }
}

export default GridModel;
export { GridHelper }