import styles from "./Input.module.css";

export default function Input({ name, type = 'text', ...props }) {

  return (
    <input className={styles.input} name={name} type={type}  {...props} />
  )
}
