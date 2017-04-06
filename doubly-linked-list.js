function DllNode(val, prev, next){
	this.value = val;
	this.previous = prev ? prev : null;
	this.next = next ? next : null;
}

function Dll(h,t,c){
	this.head = h ? h : null;
	this.tail = t ? t : null;
	this.count = 0;
	if(this.head != null){
		var current = this.head;
		while(current){
			this.count++;
			current = current.next;
		}
	}
}

//before .....5<->7->null
//head ->3 <->5<->7->null
Dll.prototype.AddFirst = function(v) {
	var newNode = new DllNode(v);
	if(!this.head){
		this.head = newNode;
		this.tail = newNode;
	}else{
		newNode.next = this.head;
		this.head.previous = newNode;
		this.head = newNode;
	}
	this.count++;
}

// before 3<->5
//after 3<->5<->7
Dll.prototype.AddLast = function(n){
	var newNode = new DllNode(n);
	if(!this.head){
		this.head = newNode;
		this.tail = newNode;
	} else {
		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;
	}
	this.count++
}

//before 3<-> 5<->7
//after 5<->7

Dll.prototype.RemoveFirst = function(n) {
	var newNode = new DllNode(n);
	if(this.head){

		if(this.count == 1){
			this.head = null;
			this.tail = null;
			
		}

		else {
		this.head = this.head.next;
		this.head.previous = null;
		}
		this.count--;
	} 
}


//before 3<-> 5<->7
//after 3<->5

Dll.prototype.RemoveLast = function(n){
	var newNode = new DllNode(n);
	if(this.head){

		if(this.count == 1){
			this.head = null;
			this.tail = null;

		} else{
			this.tail = this.tail.previous;
			this.tail.next = null;
		}
		this.count--;
	}
}

Dll.prototype.Remove = function(n){
	//4 cases
	//1. Empty list - do nothing
	//2. Single node - previous is null
	//3. Many Nodes
	//  a.  Node to remove is the first node
	//  b.  Node to remove is the middle or the last node
	if(this.count){
		var current = this.head;
		while(current){
			if(current.value==v){
				if(current==this.head){
					this.RemoveFirst();
					break;
				}
				else if(current==this.tail){
					this.RemoveLast();
					break;
				}
				else{
					var temp = current.next;
					current.next = null;
					current.previous.next = temp;
					this.count--;
					break;
				}
			}
			current = current.next;
		}
	}
}


Dll.prototype.Clear = function(){
	this.head = null;
	this.tail = null;
	this.count = 0;
}


Dll.prototype.Enumerate = function(){
	var current = this.head;
	while(this.head){
		console.log(current.value);
		current = current.next;
	}
}

Dll.prototype.Find = function(val){
	var current = this.head;
	while(current){
		while(current.value == val){
			return true;
			current = current.next;
		}
		return false;
	}
}