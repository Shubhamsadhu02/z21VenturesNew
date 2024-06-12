var BASE_URL = "https://blog.z21.ventures/wp-json/wp/v2/";
// var POSTPERPAGE = "posts?per_page=100";
var POST = "posts";
var COMMUNITY = "community";
var fetchBlogs = async () => {
  try {
    var res = await fetch(BASE_URL + POST + "?per_page=100");
    var json = await res.json();
    return json;
  } catch (error) {
    return [];
  }
};

var fetchSingleBlog = async (slug) => {
  try {
    var res = await fetch(BASE_URL + POST + "?slug=" + slug);
    var json = await res.json();
    console.log(json);
    if (json.length > 0) {
      return json[0];
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

const fetchRelatedBlogs = async () => {
  try {
    var res = await fetch(BASE_URL + POST + "?per_page=100");
    var json = await res.json();
    if (json.length > 4) {
      let arr = [];
      for (var i = 0; i < 3; i++) {
        arr.push(json[Math.floor(Math.random() * json.length)]);
      }
      return arr;
    }
    return json;
  } catch (error) {
    return [];
  }
};

var fetchCommunities = async () => {
  try {
    var res = await fetch(BASE_URL + COMMUNITY + "?per_page=100");
    var json = await res.json();
    return json.reverse();
  } catch (error) {
    return [];
  }
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  var formdata = new FormData();
  formdata.append("email", document.getElementById("email")?.value);
  formdata.append("name", document.getElementById("fullName")?.value);
  formdata.append("description", document.getElementById("description")?.value);
  formdata.append("subject", document.getElementById("subject")?.value);
  formdata.append("nameLink", document.getElementById("nameLink")?.value);
  formdata.append("urlLink", document.getElementById("urlLink")?.value);
  formdata.append("attachment", document.getElementById("attachment")?.value);

  console.log(formdata);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch("https://z21.ventures/mail/index.php", requestOptions)
    .then((response) => response.body())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export {
  fetchBlogs,
  fetchSingleBlog,
  fetchRelatedBlogs,
  handleFormSubmit,
  fetchCommunities,
};
