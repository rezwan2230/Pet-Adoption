import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSeller = () => {
    const { user, loader } = useContext(AuthContext);
    const { data: isSeller, isPending: isSellerLoading } = useQuery({
        queryKey: [user?.email, 'isSeller'],
        enabled: !loader,
        queryFn: async () => {
            console.log('asking or checking is seller', user)
            // const res = await axios.get(`https://pet-zone-project-next-js.vercel.app/users/Admin/${user.email}`);
            const res = await axios.get(`http://localhost:5001/seller/${user.email}`);
            console.log(res.data);
            return res.data?.seller;
        }
    })
    return [isSeller, isSellerLoading]
};

export default useSeller;
