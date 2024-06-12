function isValidWalk(walk) {
    
    let nCount = 0
    let sCount = 0
    let eCount = 0
    let wCount = 0
    
    walk.forEach((element) => {
      if (element === 'n') {
        nCount++
      }
      if (element === 's') {
        sCount++
      }
      if (element === 'e') {
        eCount++
      }
      if (element === 'w') {
        wCount++
      }
      
    })
    
    return (nCount === sCount && eCount === wCount && walk.length === 10)
  }

// react rendering
    // rendering is triggered on a render call
    // it is also triggered on (AND ONLY IN THE COMPONENT CONTAINING) set functions, a re-render
        // render will trickle down parent -> child
    // 