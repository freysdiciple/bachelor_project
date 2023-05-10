const DIRECTION = {
    LEFT: "A",
    LEFTUP: "Q",
    UP: "W",
    RIGHTUP: "E",
    RIGHT: "D",
    RIGHTDOWN: "C",
    DOWN: "X",
    LEFTDOWN: "Z"
}

const random = () => Math.round(Math.random() * 10000000);

class Vector {
    static zero() { return {x: 0, y: 0 }}
    static positiveRandom(multx, multy) { return {x: Math.random() * multx, y: Math.random() * multy} }

    static add(v1, v2){
        return {x: v1.x + v2.x, y: v1.y + v2.y}
    }
    static subtract(v1, v2){
        return {x: v1.x - v2.x, y: v1.y - v2.y}
    }
    static multiply(k, v){
        return {x: v.x * k, y: v.y * k}
    }
    static divide(k, v){
        if(!k) return v;
        return {x: v.x / k, y: v.y / k}
    }

    static dot(v1, v2) {
        return v1.x*v2.x + v1.y*v2.y;
    }
    static length(v){
        return Math.sqrt(Vector.dot(v,v));
    }
    static normalize(v){
        return Vector.divide(Vector.length(v), v)
    }
    static reverse(v){
        return {x: v.x*-1, y: v.y*-1}
    }
}

export { Vector, DIRECTION, random }