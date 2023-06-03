import style from "./Button.module.css";

interface Props {
  color?: "danger" | "primary";
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = (props: Props): JSX.Element => {
  const color = props.color ?? "primary";
  return (
    <div>
      <button className={`${style.button} ${style[`button-${color}`]}`} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};
