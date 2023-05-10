export const firstElement = (array) => {
    return array[0]
}

export const SliceElement = (array) => {
    return array.slice(0, -1)
}

export const popElement = (array) => {
    return array.pop()

}

export const SliceFirstElement = (array) => {
    return array.slice(1)
}

export const removeName = (array, nameRemove) => {
    return array.filter((elt) => {
        return (
            elt !== nameRemove
        )
    })
}

export const newNumbers = (array) => {
    let newSort = [...new Set(array)]
    return newSort
}

export const sumArray = (array) => {
    let result = array.reduce((x, y) => {
        return x + y;
      });
           return result;
}