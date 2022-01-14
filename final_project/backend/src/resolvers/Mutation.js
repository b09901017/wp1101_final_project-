

const Mutation = {

    async createLink(parent, { origin,short }, { db, pubsub }, info) {

        const random_x_words = (x)=>{     //回傳隨機字母x個
            var words = "" //存字串
            for(var i=0;i<x;i++){
                const random_en_world = Math.floor(Math.random()*25)+65 // A從65 到 Z 65+25  
                words.push(String.fromCharCode(random_en_world)) //存入字串
            }
            return words
        };//random_x_words

        new db.urls({      
            origin : origin , short : short   ///未存id
          }).save();
          

        return db.urls.find({origin : origin})
        
    }//createLink
    
};

export { Mutation as default };
