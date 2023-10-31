class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Link {
  constructor(){
    this.head = null
  }
  add(data){
    let node = new Node(data)

    if(this.head == null){
      this.head = node
    }else{
      let current = this.head
      while(current.next !== null){
        current = current.next
      }
      current.next = node
    }
  }

  // get(index){
  //   let current = this.head; 
  //   let count = 0;

  //   while(current){
  //     if(count === index ){
  //       return current.value;
  //     }else{
  //       current = current.next; 
  //       count++;      
  //     }
  //   }
  //   return null;
  // }  

  get(index){
    let current = this.head;
    let count = 0;

    while(current){
      if(count === index ){        
        return current.data;
      } else {
        current = current.next;
        count++;
        // console.log(count)
      }    
    }
    return null;
  }

  getNode(index){
    let current = this.head 
    let count = 0
    
    while(current){
      if(index == count){
        return current
      }else{
        current = current.next
        count++
      }
    }
    return null
  }

  addAt(index, element){
    let newNode = new Node(element)
    let current = this.head 

    if(index == 0){
      newNode.next = current
      this.head = newNode
    }else{
      let prevNode = this.getNode(index - 1)
      
      newNode.next = prevNode.next
      prevNode.next = newNode
    }

  }

  removeAt(index){
    let current = this.head 

    if(index == 0){
      this.head = current.next
    }else{
      let prevnode = this.getNode(index - 1)
      prevnode.next = prevnode.next.next      
    }
  }


}

let list = new Link()

list.add(0)
list.add(1)
// list.addAt(1,5)
list.add(2)
list.removeAt(1)
list.add(3)
list.add(4)
list.add(5)
console.log(list)
// let index = list.get(0)


// console.log(list.getNode(0))
