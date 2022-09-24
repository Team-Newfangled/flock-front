import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../lib/API";
import { 
  changeCompany, 
  changeFile, 
  changeName
} from "../../util/api/user";

export const editProfile = createAsyncThunk(
  'users/editProfile',
  async(data) => {
    try{
      if(data.image !== ""){
        await changeFile(data.image)
          .then((res) => {
            console.log("file: ", res)
          })
      }
      if(data.name !== ""){
        await changeName(data.nickname)
          .then((res) => {
            console.log("name: ", res)
          })
      }
      if(data.company !== ""){
        await changeCompany(data.company)
          .then((res) => {
            console.log("company: ", res)
          })
      }
      return data
    }catch(e) {
      console.log(e)
    }
  }
)