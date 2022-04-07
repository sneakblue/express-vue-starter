import useSessionStore from "./session";
import useUserStore from "./users"

const appStore = {};

// Register app status Library
export const registerStore = () => {
    appStore['useSessionStore'] = useSessionStore();
    appStore['useUserStore'] = useUserStore();
};

export default appStore;
