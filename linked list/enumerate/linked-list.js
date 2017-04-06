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
/* Consider a node with head and tail pointing to the same node n1 with val say (3) to add a new node(5) to the last, just store the head in a temp variable( ie
 the val 3) now point the head node(3) to the new node(this.next=newnode)and increment the counter*/
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

function Print(n){
	while(n){
		console.log(n.value);
		n = n.next;
	}
}
