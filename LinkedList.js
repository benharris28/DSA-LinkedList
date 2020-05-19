class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // Sets next parameter to the current head, making this 
        const node = new Node(data, this.head);
        this.head = node;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getLast() {
        if(!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
        // There is at least one node in the chain
        last.next = new Node(data);

        } else {
            // The chain is empty
            this.head = new Node(data)
        }
    }
    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }

        // If the node to be removed is head, make the next node head
        if (this.head.data === item) {
            this.head = this.head.next;
            return;
        }

        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.data !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        previousNode.next = currNode.next;
    }

    find(item) {
        // Start at head
        let currNode = this.head;

        if (!this.head) {
            return null;
        }

        while (currNode.data !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    insertBefore(key, data) {
        // get index of node with that key
        // Set next value of previouse node to this node being inserted

         // If the list is empty
         if (!this.head) {
            this.head = new Node(data)
        }



        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        let newNode = new Node(data)

        while ((currNode !== null) && (currNode.data !== key)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        

        previousNode.next = newNode;
       



    }

    insertAfter(key, data) {
        // get index of node with that key
        // Set next value of previouse node to this node being inserted

         // If the list is empty
         if (!this.head) {
            this.head = new Node(data)
            return;
        }




        // Start at the head
        let currNode = this.head;
        
        

        let newNode = new Node(data)

        while ((currNode !== null) && (currNode.data !== key)) {
            
            currNode = currNode.next;
        }

        

        currNode.next = newNode;
       
    }

    getLast() {
        if (!this.head) {
          return null;
        }
    
        let node = this.head;
        while (node) {
          if (!node.next) {
            return node;
          }
          node = node.next;
        }
      }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
          if (counter === index) {
            return node;
          }
    
          counter++;
          node = node.next;
        }
        return null;
      }

    insertAt(data, index) {
        if (!this.head) {
          this.head = new Node(data);
          return;
        }
    
        if (index === 0) {
          this.head = new Node(data, this.head);
          return;
        }
    
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
      }

      isEmpty() {
          if (!this.head) {
              return console.log('Empty');
          }
          else return console.log('Not empty')
      }

      findFromEnd(n) {
        let size = this.size();
        if (size < 3) {
            return console.log('Length is less than 3')
        }

       let pointerOne = this.head
       let pointerTwo = this.head

        for (let i = 0; i < n; i++) {
            pointerOne = pointerOne.next
        }

        while(pointerOne !== null) {
            pointerOne = pointerOne.next;
            pointerTwo = pointerTwo.next
        }

        return pointerTwo;
      }

      middleOfList() {
          // Two pointers, one moving faster?

      }

      reverseList() {
          let previous = null;
          let current = this.head;
          let next = null

          while (current !== null) {
              next = current.next;
              current.next = previous;
              previous = current;
              current = next;
          }

          return;
      }

}

const SLL = new LinkedList();
SLL.head = new Node('Apollo');
SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');
SLL.remove('Husker')
SLL.isEmpty();
console.log(SLL.size());
console.log(SLL);
console.log(SLL.getAt(3));
console.log(SLL.findFromEnd(2));



module.exports = { Node, LinkedList};