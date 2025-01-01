import LinkedList from "./linkedlist.js";

const list = new LinkedList("Zebra");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.tail);

list.append("fox");

console.log(list.toString());
console.log(list.tail);

console.log(list.at(list.size()-2));

console.log(list.find("parrot"));
console.log(list.find("sdfiaihf"));

console.log(list.contains("parrot"));
console.log(list.contains("salfijirefainf"));

list.pop();

console.log(list.toString());

console.log(list.head);