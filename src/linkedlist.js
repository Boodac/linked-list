import Node from "./node.js";

export default function createLinkedList() {
    let start = null;
    let end = null;

    function prepend(value) {
        node = new Node(value, start);

        if(!start) {
            start = node;
        } else {
            node.nextNode = start;
            start = node;
        };
    };

    function append(value) {
        node = new Node(value);

        if(!start) {
            start = node;
        } else if (!end) {
            start.nextNode = node;
            end = node;
        } else {
            end.nextNode = node;
            end = node;
        }
    }

    function size(value) {
        let reference = start;
        let counter = 0;
        do {
            counter++;
            reference = reference.nextNode;
        } while(reference)
        return counter;
    }

    function head() {
        return start;
    }

    function tail() {
        return end;
    }

    function at(index) {
        let reference = start;
        for(let i = 0 ; i <= index ; i++) {
            reference = reference.nextNode;
        }
        return reference;
    }

    function pop() {
        if(start.nextNode === null) start = null;
        let reference = start;
        while(reference) {
            let lastChecked = reference;
            reference = reference.nextNode;
            if(!reference.nextNode) lastChecked.nextNode = null;
        }
    }

    function contains(value) {
        let reference = start;
        while(reference) {
            if(reference.value === value) {
                return true;
            };
            reference = reference.nextNode;
        }
        return false;
    }

    function find(value) {
        let reference = start;
        let index = 0;
        while(reference) {
            if(reference.value === value) return index;
            reference = reference.nextNode;
            index++;
        }
        return null;
    }

    function toString() {
        let string = "";
        let reference = start;
        while(reference) {
            string += `(${reference.value}) -> `;
            reference = reference.nextNode; 
        }
        return string + "null";
    }

    return { prepend, append, head, tail, find, toString, contains, pop, at, size }
}