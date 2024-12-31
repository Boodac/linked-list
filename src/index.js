import createLinkedList from "./linkedlist.js";

const list = createLinkedList();

list.prepend("dog");
list.prepend("cat");
list.prepend("parrot");
list.prepend("hamster");
list.prepend("snake");
list.prepend("turtle");

console.log(list.toString());
console.log(list.tail());

list.append("fox");

console.log(list.toString());
console.log(list.tail());

console.log(list.at(list.size()-2));