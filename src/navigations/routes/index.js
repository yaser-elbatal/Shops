import { navigate, navigationRef } from "./RootNavigationHelper";




export const toRegister = () => {
    navigate("Register");
};

export const toLogin = () => {
    navigate("Login");
};

export const toCodeActivation = () => {
    navigate("CodeActivation");
};

export const toChangePassword = () => {
    navigate("ChangePassword");
};

export const toContactUS = () => {
    navigate("ContactUS");
};

export const toAboutApp = () => {
    navigate("AboutApp");
};


export const toShowLang = () => {
    navigate("ShowLang");
};


export const toMyProfile = () => {
    navigate("MyProfile");
};

export const toEditProduct = () => {
    navigate("EditProduct");
};


export const toProductDetails = (params) => {
    navigate("ProductDetails", params);
};






export const toGoBack = () => {
    navigationRef.current.goBack();
};

