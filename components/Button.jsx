import styles from './Button.module.css'

export default function Button({ type = 'button', children, ...props }) {
  return (
    <button className={styles.button} type={type} {...props}>{children}</button>
  )
}
