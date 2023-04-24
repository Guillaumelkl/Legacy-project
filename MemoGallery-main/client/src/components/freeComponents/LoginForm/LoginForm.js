import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import PostLoginData from "./PostLoginData";
import "./LoginForm.css"

const LoginForm = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (userData) => {
    reset({
      email: "",
      password: "",
    });
    const result = await PostLoginData(userData);
    if(result){
      props.onLogin(true);
      navigate("/homePage");
    }
  };
  
  return (
    <div className='newJobForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label>Email : </label>
          <input
            type='email'
            name='email'
            {...register("email", {
              required: "Email is required.",
            })}
          />
          {errors.email && <p className='errorMsg'>{errors.email.message}</p>}
        </div>
        <div className='form-control'>
          <label>Password : </label>
          <input
            type='password'
            name='password'
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be at-least 5 characters.",
              },
            })}
          />
          {errors.password && (
            <p className='errorMsg'>{errors.password.message}</p>
          )}
        </div>
        <div className='form-control'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
