let userData = {};
interface userData {
    userId: number;
    publisherName: string;
  }


  let userInfoData = {}

  async function createAccount(CreatedUser : object) {
      //We want to target our User Controller
      const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net/adduser',{
          method:"POST",
          headers:{
              'Content-Type':"application/json"
          },
          body:JSON.stringify(CreatedUser)
      });
      if(!res.ok){
          const message = `An Error has Occured  ${res.status}`;
          throw new Error(message);
      }
      const data = await res.json();
      //We are not writeing a return because this is a POST.
  }
  
  async function login(loginUser : object) {
      const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net/login',{
          method:"POST",
          headers:{
              'Content-Type':"application/json"
          },
          body:JSON.stringify(loginUser)
      });
      if(!res.ok){
          const message = `An Error has Occured  ${res.status}`;
          throw new Error(message);
      }
      const data = await res.json();
      //We are not writeing a return because this is a POST.
      return data;
  }
  
  async function GetLoggedInUserData(username: string) {
      let res = await fetch(`https://tasktrackerbackendapi.azurewebsites.net/userbyusername/{username}`)
      let data = await res.json();
      userData = data;
      return userData;
  }

async function addTaskItem(taskItem: object) {
    const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net',{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(taskItem)
    });
    if(!res.ok){
        const message = `An Error has Occured  ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

async function updateTaskItem(taskItem : object) {
    const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net',{
        method:"PUT",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(taskItem)
    });
    if(!res.ok){
        const message = `An Error has Occured  ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}

async function getTaskItems() {
    let res = await fetch(`https://tasktrackerbackendapi.azurewebsites.net`)
    let data = await res.json();
    return data;
}

async function getUserInfoByID(userId: number) {
    let res = await fetch(``)
    let userInfoData = await res.json();
    return userInfoData;
}

export { getTaskItems, GetLoggedInUserData, login, createAccount, updateTaskItem, getUserInfoByID, addTaskItem}