
// read list
const getStoredData = () =>{
    const storedListStr = localStorage.getItem('read-list')
    const storedList = JSON.parse(storedListStr)
    if(storedList){
        return storedList
    }
    else{
        return []
    }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoredData()
    if(storedList.includes(id)){
        console.log(id,'already exist')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
    }
}


// WishList
const getStoredWishListData = () =>{
    const storedWishListStr = localStorage.getItem('wish-list')
    const storedWishList = JSON.parse(storedWishListStr)
    if(storedWishList){
        return storedWishList
    }
    else{
        return []
    }
}

const addToStoredWishList = (id) =>{
    const storedWishList = getStoredWishListData()
    if(storedWishList.includes(id)){
        console.log(id,'already exist')
    }
    else{
        storedWishList.push(id)
        const storedWishListStr = JSON.stringify(storedWishList)
        localStorage.setItem('wish-list', storedWishListStr)
    }
}

export {addToStoredReadList , addToStoredWishList, getStoredData ,getStoredWishListData}