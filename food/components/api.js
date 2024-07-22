const post = async (data) => {
    let isexist = false;
    (async () => {
      const users = await usr();
  
      users.map((elem) => {
        if (elem.email === data.email) {
          alert("Email already exists");
          isexist = true;
          return;
        }
      });
  
      if (!isexist) {
        let response = await fetch(
          "https://json-server-deployment-mxgi.onrender.com/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        window.location.href = "/food/pages/login.html";
      }
    })();
  };
  
  const usr = async () => {
    let response = await fetch("https://json-server-deployment-mxgi.onrender.com/users");
    let users = await response.json();
    return await users;
  };
  
  const usrdt = async (data) => {
    (async () => {
      const users = await usr();
  
      users.map((elem) => {
        if (elem.email === data.email) {
          if (elem.password === data.password) {
            localStorage.setItem("loginUser", JSON.stringify(elem));
            window.location.href = "/food/index.html";
          } else alert("Enter Correct Password");
        } else alert("User not found");
      });
    })();
  };
  
  const fooddt = async () => {
    let response = await fetch("https://json-server-deployment-mxgi.onrender.com/Food_Data");
    let food = await response.json();
    return await food;
  };
  
  const updtusr = async (id, data) => {
    console.log(id);
    console.log(data);
    const response = await fetch(
      `https://json-server-deployment-mxgi.onrender.com/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };
  
  export { post, usr, usrdt, fooddt, updtusr };