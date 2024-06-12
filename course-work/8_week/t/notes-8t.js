class Node {
    constructor(data) {
      this.data = data
      this.next = null
      this.prev = null
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
      this.tail = null
    }
  
    // Print each node's data in the LL
    printList(node) {
      if (node === undefined) node = this.head
      if (node) {
      console.log(node.data)
      this.printList(node.next)
      }
    }
  
    find (data, node) {
      if (node === undefined) node = this.head
      if (!node) {return null}
      return node.data === data? node : this.find(data, node.next)
    }
  
    append(data) {
      // First create a node object with given data
      const newNode = new Node(data)

      // Check if the LL is empty
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        this.tail = newNode 
      }

    }

    remove(data) {
      // If removing the head, make the 2nd item (if any) the new head
      if (this.head && this.head.data === data) {
        // we know there is a head and its value matches, so we want to remove it
        this.head = this.head.next
        // if this.head was the only node in the LL, then it was both the head and the tail
        if (this.head === null) {
          this.tail = null
        }
        return
      }

      // If we are here, we are removing a node other than the head
      let current = this.head
      // We need to stop at the node BEFORE the one we want to remove
      while (current.next !== null) {
        if (current.next.data === data) {
          // If we're here, the node to 'remove' is current.next
          current.next = current.next.next

          // Did we remove the tail? If so, reset the tail
          if (current.next === null) {
            this.tail = current
          }
        } else {
          current = current.next
        }
      }
    }
  }
  const apple = new Node('apple')
  const berry = new Node('berry')
  apple.next = berry
  const cherry = new Node('cherry')
  berry.next = cherry
  const durian = new Node('durian')
  cherry.next = durian
  
  
  
  const testLL = new LinkedList()
  testLL.head = apple
  testLL.printList()
  console.log(testLL.find(`berry`))
  console.log(testLL.find(`elderberry`))

