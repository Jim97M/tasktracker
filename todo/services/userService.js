 import axios from 'axios';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    getAll: async () => {
        let res = await axios.get(`/api/user`);
        return res.data || [];
    }
}