const name = "Ritesh"
const count = 80

//String interopolation 
console.log(`My name is ${name} and my count is ${count}`)

//String Function
const st = new String("riteshh")

console.log(st.charAt(2));
console.log(st.toUpperCase())
console.log(st.indexOf('h'))

console.log(name.charAt(2))

//Substring
const nst = st.substring(2,4)
console.log(nst)

//Slice (it could be negative value)
//negative value start with reverse indexing
const stt = st.slice(-8, 2)
console.log(stt)

//Trim
// it remove white space
const name1 = "   raj  "
console.log(name1)
console.log(name1.trim())

//Replace
const url = "https;//ritesh.com/ristesh%49chaudhary"
console.log(url.replace('%49', '-'))

//include functions, it checks the data present in the url or not
console.log(url.includes('ritesh'))


//split
console.log(url.split('/'))