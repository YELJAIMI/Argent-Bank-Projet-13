import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "./Features/sliceLogin";
import userReducer from "./Features/sliceUser";

const store = configureStore({
	reducer: {
		login: loginReducer,
		user: userReducer,
	},
});

export default store;