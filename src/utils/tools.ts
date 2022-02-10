export const serverUrl = "http://localhost:1337";

export const uploadUrl = serverUrl + "/api/v1/common/upload_file";

/**
 * 设置token
 * @param token
 * @returns
 */
export const setToken = (token: string) =>
  sessionStorage.setItem("token", token);

export const getToken = () => sessionStorage.getItem("token");

export const removeToken = () => sessionStorage.removeItem("token");

/**
 * 处理图片路径
 * @param url
 * @returns
 */
export const dalImg = (url: string | undefined) => {
  if (url) {
    if (url.startsWith("http")) {
      return url;
    }
    return serverUrl + url;
  }
  return "http://oss.penkuoer.com/uPic/ss.jpeg";
};
