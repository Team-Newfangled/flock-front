import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { 
  changeCompany, 
  changeFile, 
  changeName
} from "../../util/api/user";

export const editProfile = createAsyncThunk(
  'users/editProfile',
  async({name, file, company}, thunkAPI) => {
    try{
      const res = await axios.all([changeFile(file), changeName(name), changeCompany(company)])
        .then(axios.spread((file, name, company) => {
          console.log(file, name, company);
        }));
      return res.data;
    }catch(e) {
      console.log(e)
    }
  }
)