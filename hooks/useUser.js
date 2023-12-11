import {useMutation} from "@tanstack/react-query";
import {createUser} from "../apis/users";

const useUserMutation = () =>{
    return useMutation({
        mutationKey: ['post', 'users'],
        mutationFn: createUser,
    })
}
export const useUser = () =>{
   return {
       useUserMutation,
   }
}