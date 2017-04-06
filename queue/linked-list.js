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
/* Consider a node with head and tail pointing to the same node n1 with val say (3) to add a new node(5,n1) to the first, just store the head in a temp variable( ie 
the val 3)and add the new node using this.head = newNode; now the head is pointing to the new node i.e 5 and point the next to the old node i.e the temp variable*/
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
/* if the linked list is empty then head will be equal to new node. Likewise if linked list isnt empty that means the last node's next pointer(3,next->5) is set to the new
node and thee tail node is set to the new node(5).*/
LinkedList.prototype.AddLast = function(n){
    var newNode = new LinkedListNode(n);

    if(this.count == 0){
        this.head = newNode;
    }
    else{
        this.tail.next = newNode;
    }
    this.tail = newNode;
    this.count++;
}
/* LL

Head -> n1(3,----------------->n2(5,null)

tail------------------------------n2(5)

if count = 1{

tail = null
}
if count= 1+

head= this.head.next;
*/

LinkedList.prototype.RemoveFirst = function(n){
    if(this.count){
        this.head = this.head.next;
        this.count--;

        if(this.count == 0){
        this.tail = null;
        }
    }
}
/* check if the list has a node , if it has 1 node i.e count =1 remove the node and make head and tail = null | if the count is 1+ then use a var current to
store the head pointer(node with val 3) and check if the n1.next = tail if it is eqaul to tail set the next pointer to null and the tail arg of LL to current i.e5
Note: this.count != 0 and this.count are same in removefirst and removelast*/
LinkedList.prototype.RemoveLast = function(n){
    if(this.count != 0){
        if(this.count == 1) {
            this.head = null;
            this.tail = null;
        } else {
            var current = this.head;
            while(current.next != this.tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }
        this.count--;
    }
}


LinkedList.prototype.enumerate = function(){
    var current = this.head;
    while(current){
        console.log(current.value);
        current = current.next;
    }
}

/* returns true if it finds a parrticular item in the list else returns false
*/
LinkedList.prototype.find = function(val){
    var current = this.head;
    while(current){
        if(current.value == val)
            return true;
        current = current.next;
    }
    return false;
}


/*removes the first occurence of an item from the list
*/
LinkedList.prototype.Remove = function(val){
    /* 4  cases 1) Empty list- Do nothing
                2) Single node- Previous is null
                3) Many nodes; A)node to remove is the first node
                               B)node to remove is the middle or last node.
                               */
    var current = this.head;//3
    var previous = null;
    while(current){// while current is true i.e != null
        if(current.value == val){ //implies that the list has elements so ceck if the list has the value = val
            //its a node in the middle or the end
            if(previous != null){// if previous is null in the list then its either case 2 or 3a. So we check for previous != null meaning prev node has a val
                //case 3b
                previous.next = current.next;
                //the above statement just removes the current node and sets the previous next pointer to the current next pointer:) ( 3, n2)-> (5,n3)o/p=3,n3
                if(current.next = null){ // if current .next = null meaning it is the last element
                    this.tail = previous;
                }
                this.count--;
            }

            else{
                //case 2 or 3a
                RemoveFirst();//remove for the if(prev!= null)
            }
         return true;  //
        }
        previous = current;
        current = current.next;
    }
    return false;
}


LinkedList.prototype.Clear = function(){
    this.head = null;
    this.tail = null;
    this.count = 0;

}



function Print(n){
	while(n){
		console.log(n.value);
		n = n.next;
	}
}
