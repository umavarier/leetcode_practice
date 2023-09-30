// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function(s) {
    const map = new Map()
    for(let letter of s)
        !map.has(letter) ? map.set(letter,1) : map.set(letter,-1)
        for(let item of map)
            if(item[1] === 1) return s.indexOf(item[0])

        return -1
    }
