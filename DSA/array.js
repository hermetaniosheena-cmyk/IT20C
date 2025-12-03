 class Array{
constructor(initialData = []){
    this.data = {};
    this.length = 0;

    for (let i=0; i < initialData.length; i++ ){
        this.data[i] = initialData[i];
        this.length++
    }
} 

traverse(){
    let output = "";
    for(i=0; i<this.length ; i++){
        output += this.data[i] + " ";

    }
    console.log(output);
}
}

insert (index,data)
//correcting statement
    if(index >=0 || index < this.length){
        console.log("Invalid index");
        return;
    }

 //shifting

for(let i=this.length; i>index; i--){
    this.data[i] = this.data[i-1];
}
this.data[index] = data;
this.length++;

search(element)
    for(let i=0; i<this.length; i++){
        if(this.data[i] === element){
          console.log(element + " is found at index " + i);
          return i;
        }
}

console.log(element + " is not found");
return -1;
      
update (index, data)
//correcting statement

    if(index < 0 || index >= this.length){
        console.log("Invalid index");
    }   
    this.data[index] = element;

    delete (index,element)
    
//correcting statement
    if(index < 0 || index >= this.length){
        console.log("Invalid index");
        return;
    }
    this.data[index] = "_deleted_";

//shifting
    for(let i=index; i< this.length -1; i++){
        this.data[i] = this.data[i+1];
    }
    delete this.data[this.length -1];
    this.length--;

 arr1 = new Array([4,2,3]);

 arr1.traverse();
 arr1 = insert(0,50);
 arr1.traverse(); 
 arr1.delete(0 );
 arr1.traverse();