const data = () => {
  var xhr = new XMLHttpRequest();

  xhr.open("get", "https://randomuser.me/api/", true);

  xhr.send();

  xhr.onload = function () {
    const return_data = JSON.parse(xhr.responseText).results[0];
    document.getElementById("profile-pic").src = return_data.picture["large"];
  };

  xhr.onerror = (e) => {
    console.log(e);
  };
};

data();
