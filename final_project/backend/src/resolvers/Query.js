
const Query = {

    async link(parent, {url}, { db }, info) {
        
        const url_pair = db.urls.find({short : url})
        return url_pair;
    },

};

export { Query as default };
