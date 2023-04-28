let userData = {};
interface userData {
    userId: number;
    publisherName: string;
  }


  let userInfoData = {}

  async function createAccount(CreatedUser : object) {
      //We want to target our User Controller
      const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net/User/adduser',{
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
      const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net/User/login',{
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
      let res = await fetch(`https://tasktrackerbackendapi.azurewebsites.net/User/userbyusername/${username}`)
      let data = await res.json();
      userData = data;
      return userData;
  }

async function addTaskItem(taskItem: object) {
    const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net/TaskTracker/AddTaskItem',{
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
    console.log(data)
    return data;
}

async function updateTaskItem(taskItem : object) {
    const res = await fetch('https://tasktrackerbackendapi.azurewebsites.net/TaskTracker/EditTaskItem',{
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
    let res = await fetch(`https://tasktrackerbackendapi.azurewebsites.net/tasktracker/GetAllTaskItems`)
    let data = await res.json();
    return data;
}

async function getUserInfoByID(userId: number) {
    let res = await fetch(``)
    let userInfoData = await res.json();
    return userInfoData;
}

function loggedInData(){
    return userData as userData;
    //this will consist of user ID and their Name.
}

function checkToken() {
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData != null){
        result = true;
    }
    return result;
}

export { checkToken, loggedInData, getTaskItems, GetLoggedInUserData, login, createAccount, updateTaskItem, getUserInfoByID, addTaskItem}