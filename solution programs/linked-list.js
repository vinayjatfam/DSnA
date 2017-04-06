//1. Constructor functions to create LinkedListNode and LinkedList
//2. Functions in Linked List
//  a. AddFirst()
//  b. AddLast()
//  c. RemoveFirst()
//  d. RemoveLast()
//  e. Remove()
//  f. find()
//  g. enumerate()
//  h. clear()


function LinkedListNode(v,n) {
	this.value = v;
	this.next = n ? n : null;
}

function LinkedList(h,t){
	this.head = h? h : null; 
	this.tail = t? t : null;
	this.count = 0;
	if(this.head){
		var current = this.head;
		while(current){
			this.count++;
			current = current.next;
		}
	}
}

LinkedList.prototype.AddFirst = function(v){
	var newNode = new LinkedListNode(v);

	var temp = this.head;
	this.head = newNode;
	this.head.next = temp;

	this.count++;

	if(this.count == 1){
		this.tail = this.head;
	}
}

LinkedList.prototype.AddLast = function(v){
	var newNode = new LinkedListNode(v);

	if(this.count == 0){
		this.head = newNode;
	}
	else{
		this.tail.next = newNode;
	}
	this.tail = newNode;
	this.count++;
}

LinkedList.prototype.RemoveFirst = function(){
	if(this.count){
		this.head = this.head.next;
		this.count--;

		if(this.count == 0){
			this.tail = null;
		}
	}
}

LinkedList.prototype.RemoveLast = function(){
	if(this.count){
		if(this.count == 1){
			this.head = null;
			this.tail = null;
		}
		else{
			var current = this.head;
			while(current.next != this.tail){
				current = current.next;
			}

			current.next = null;
			this.tail = current;
		}

		this.count--;
	}
}

LinkedList.prototype.find = function(val){
	var current = this.head;
	while(current){
		if(current.value == val)
			return true;
		current = current.next;
	}
	return false;
}

//Removing from anywhere in the list
LinkedList.prototype.Remove = function(val){
	//4 cases
	//1. Empty list - do nothing
	//2. Single node - previous is null
	//3. Many Nodes
	//  a.  Node to remove is the first node
	//  b.  Node to remove is the middle or the last node

	var current = this.head;
	var previous = null;

	//case 1
	while(current){
		if(current.value == val){
			//case 3b
			if(previous){
				previous.next = current.next;

				if(!current.next){
					this.tail = previous;
				}
				this.count--;
			}
			//case 2 or 3a
			else{
				this.RemoveFirst();
			}

			return true;
		}

		previous = current;
		current = current.next;

	}

	return false;
	
}

LinkedList.prototype.enumerate = function(){
	var current = this.head;
	while(current){
		console.log(current.value);
		current = current.next;
	}
}

LinkedList.prototype.clear = function(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}