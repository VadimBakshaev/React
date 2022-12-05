import styles from './app.module.css'

export function  Message (proops) {
    return (
        <h1 className={styles.message}>{proops.text}</h1>
    )
}