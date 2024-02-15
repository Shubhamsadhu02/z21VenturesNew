var BASE_URL = "https://blog.z21.ventures/wp-json/wp/v2/";
var POST = "posts";
var fetchBlogs = async () => {
    try{
        var res = await fetch(BASE_URL+POST);
        var json = await res.json();
        return json;
    }catch(error){
        return [];
    }
    
}

var fetchSingleBlog = async (slug) => {
    try{
        var res = await fetch(BASE_URL+POST+"?slug="+slug);
        var json = await res.json();
        console.log(json);
        if(json.length > 0){
          return json[0];  
        }else{
            return false;
        }
    }catch(error){
        return false;
    }
}

const fetchRelatedBlogs = async () => {
    try{
        var res = await fetch(BASE_URL+POST);
        var json = await res.json();
        if(json.length > 4){
            let arr = [];
            for(var i = 0; i<3; i++){
                arr.push(json[Math.floor(Math.random() * json.length)]);
            }
            return arr;
        }
        return json;
    }catch(error){
        return [];
    }
}


export { fetchBlogs, fetchSingleBlog, fetchRelatedBlogs };