
  class HashMap {

    constructor(loadFactor = 0.75, initialCapacity = 16) {
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.fullCapacity = this.capacity*this.loadFactor
        this.bucket = Array(this.capacity).fill(null).map(() => []);
    }

     hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i))%this.capacity;
        }
     
        return hashCode
      }

      set(key, value){
        let index = this.hash(key)
        let bucket = this.bucket[index]
        if(this.length() >= this.fullCapacity){
          this.capacity*=2
          this.fullCapacity = this.capacity*this.loadFactor
        }
        
        for(let el of bucket){
            if(el.key === key && el.value !== value){
             bucket.push({key, value})
             return 
            } 
        }
       bucket.push({key, value})
       return 
      }
      
      get(key){
        let index = this.hash(key)
        let bucket = this.bucket[index]
        let values = ""
        for(let el of bucket){
            if(el.key === key) {
            values +=` ${el.value} `
            }
            
        }
        return values === ""?null:values
      }

      has(key){
        let index = this.hash(key)
        let bucket = this.bucket[index]
        
       
          for(let el of bucket){
            if(el.key === key){
                return true
            }
        }
        return false
  
      }
      
      remove(key){
        let index = this.hash(key)
        
        for(let el of this.bucket[index]){
          if(el.key === key){
            this.bucket[index] = []
            return true
          }
        }
        return false
      }


        length(){
          let count = 0
          this.bucket.forEach((arr) => {if(arr.length !== 0){for(let i=0;i<arr.length;i++){count++}}})
          
              return count
        }

        clear(){
          this.bucket.Map((arr) => arr = [])
        }

        keys(){
          let keys = []
          this.bucket.forEach((arr) => {if(arr.length !== 0){for(let i=0;i<arr.length;i++){keys.push(arr[i].key)}}})
            return keys
        }

        values(){
          let values = []
          this.bucket.forEach((arr) => {if(arr.length !== 0){for(let i=0;i<arr.length;i++){values.push(arr[i].value)}}})
            return values
        }

        entries(){
          let entry = []
          this.bucket.forEach((arr) => {if(arr.length !== 0){for(let i=0;i<arr.length;i++){arr[i]=[arr[i].key, arr[i].value]; entry.push(arr[i])}}})
          
          return JSON.stringify(entry)
        }
  }



  /*let hashmap = new HashMap()

  hashmap.set("key", "value")
  hashmap.set("key", "value2")
  hashmap.set("test", "value3")
  //console.log(hashmap.remove("key"))
  console.log(hashmap.entries())*/

 

export default HashMap