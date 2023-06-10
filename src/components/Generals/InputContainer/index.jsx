import { InputDirection } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export function InputContainer({
  children,
  Icon,
  label,
  register,
  name,
  delay,
  type,
  error,
  ...rest
}) {
  const [visibilityPassword, setVisibilityPassword] = useState(false);

  return (
    <InputDirection delay={delay} isError={!!error}>
      <label>
        {label} {!!error && <span> - {error}</span>}
      </label>
      <div>
        {Icon && <Icon />}
        {children ? (
          children
        ) : register ? (
          <input
            {...register(name)}
            type={
              type === "password"
                ? visibilityPassword
                  ? "text"
                  : "password"
                : null
            }
            {...rest}
          />
        ) : (
          <input
            readOnly
            type={
              type === "password"
                ? visibilityPassword
                  ? "text"
                  : "password"
                : null
            }
            {...rest}
          />
        )}
        {type ==='password' ? visibilityPassword ? 
        <FaEyeSlash
          className="eye"
          onClick={() => setVisibilityPassword(false)}
        />
        : <FaEye className="eye" onClick={() => setVisibilityPassword(true)} />
        : null}
      </div>
    </InputDirection>
  );
}

export default InputContainer;
