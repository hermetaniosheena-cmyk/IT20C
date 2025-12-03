class Stack {
constructor(){
    this.data = {};
    this.topindex = -1;
}
traverse(){ 
    let output = "";
    for(let i=0; i<=this.topindex; i++){
        output += this.data[i] + " ";
    }
    console.log(output);
}
push(element){
    this.topindex++;
    this.data[this.topindex] = element;
}
is_empty(){
    return this.topindex === -1;
}
peek(){
    //correcting statement
    if(this.is_empty())return null;
    return this.data[this.topindex];
}
pop(){
    //correcting statement
    if(this.is_empty()) return null;

    let value = this.data[this.topindex];
    delete this.data[this.topindex];
    this.topindex--;
    return value;
}
 size(){
    return this.topindex + 1;
}

}
// 
let stack1 = new Stack();   
stack1.push(2)
stack1.traverse();
stack1.push(3)
stack1.traverse();
stack1.push(1)
stack1.traverse();   
//console.log("Top element is: " + stack1.peek());   
console.log("Top element of the stack is " + stack1.is_empty());   
stack1.pop();
console.log("Top element " + stack1.pop() + "is popped the new element " + stack1.peek()); 
console.log("New size of the stack is " + stack1.size());   
stack1.traverse();