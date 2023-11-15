import { Http } from "./https";

export const sentCode = async (event) => {
     const { data } = await Http.post(
      "/auth/request",
      {
        type: "mobile",
        mobile_prefix: "+98",
        mobile: event,
      }
      
      )
      
      return data
    };
