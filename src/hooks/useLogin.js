const useLogin = () => {
  const isLogin = !!localStorage.getItem('access_token');
  return isLogin;
};

export default useLogin;