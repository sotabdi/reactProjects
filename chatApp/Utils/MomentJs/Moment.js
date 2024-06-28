import moment from "moment";

export const getTime = () => {
    return moment().format('MM DD YYYY  h:mm:ss a');
}