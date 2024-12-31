import createLinkedList from "./linkedlist.js";

const list = createLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.find("numer"));
console.log(list.find("cat"));
console.log(list.at(3));
console.log(list.contains("foo"));
console.log(list.contains("turtle"));
console.log(list.size());
list.pop();
console.log(list.tail());
console.log(list.toString());
list.pop();
console.log(list.toString());
console.log(list.head());
console.log(list.tail());