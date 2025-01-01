import Node from "./node.js";

export default class LinkedList {

    constructor() {
    }

    #start = null;
    #end = null;

    prepend(value) {
        let node = new Node(value, this.start);

        if(!this.start) {
            this.start = node;
        } else if(!this.start.nextNode) {
            this.end = this.start;
            this.start = node;
        } else {
            this.start = node;
        };
    };

    append(value) {
        let node = new Node(value);

        if(!this.start) {
            this.start = node;
        } else if (!this.end) {
            this.start.nextNode = node;
            this.end = node;
        } else {
            this.end.nextNode = node;
            this.end = node;
        }
    }

    size() {
        let reference = this.start;
        let counter = 0;
        do {
            counter++;
            reference = reference.nextNode;
        } while(reference)
        return counter;
    }

    head() {
        return this.start;
    }

    tail() {
        return this.end ? this.end : this.start;
    }

    at(index) {
        let reference = this.start;
        for(let i = 0 ; i < index ; i++) {
            reference = reference.nextNode;
        }
        return reference;
    }

    pop() {
        if(this.start.nextNode === null) this.start = null;
        else {
            let length = this.size();
            let node = this.at(length-2);
            this.end = node;
            node.nextNode = null;
        }
    }

    contains(value) {
        let reference = this.start;
        while(reference) {
            if(reference.value === value) {
                return true;
            };
            reference = reference.nextNode;
        }
        return false;
    }

    find(value) {
        let reference = this.start;
        let index = 0;
        while(reference) {
            if(reference.value === value) return index;
            reference = reference.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let string = "";
        let reference = this.start;
        while(reference) {
            string += `(${reference.value}) -> `;
            reference = reference.nextNode; 
        }
        return string + "null";
    }
}