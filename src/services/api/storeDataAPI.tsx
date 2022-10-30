import axios from "../../configs/Axios/axios.config";

export const APIGetStoreData = async (paramData?:any) => {
    try {
      let result = await axios.get('/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt', { params: paramData });
      const response = {
        data: result.data,
        status: result.status,
        message: result.statusText,
      };
      return response;
    } catch (error) {
      console.error('error >>>>', error);
      return error;
    }
  };