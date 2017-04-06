function LinkedListNode(value, next){
	this.value = value;
	this.next  = next ? next : null;
}


function LinkedList(h, t){
	this.head = h ? h : null;
	this.tail = t ? t : null;
	this.count = 0;
	if(this.head){
		var current = this.head;
	    while(current){
            this.count++;
            current = current.next;
        }
    }
}
/*note you made errors here you forgot the new keyword for the declaration of a linkedlistnode and the Prototype has small p you had typed it like this LinkedList.
Prototype.AddFirst which gives an error sayin Addfirst() is not a function meaning the function was not added to the prototype chain. SO make sure p is small

*/
LinkedList.prototype.AddFirst = function(n){
    var newNode = new LinkedListNode(n);
    var temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    this.count++;
    if(this.count == 1) {
        this.tail = this.head;
    }
}

LinkedList.prototype.AddLast = function(n){
    var newNode = new LinkedListNode(n);
    var temp = this.head;
    this.next = newNode;
    if(this.count == 0){
        this.head = newNode;
    }
    else{
        this.tail = newNode;
    }
    this.tail = newNode
    this.count++;
}

function Print(n){
	while(n){
		console.log(n.value);
		n = n.next;
	}
}
