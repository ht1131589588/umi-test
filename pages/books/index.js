import styles from './index.css'
import Link from 'umi/link'
import router from 'umi/router'

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <ul>
        <li>
          <Link to="/books/1">web全栈</Link>
        </li>
        <li
          onClick={() => {
            router.push('/books/2')
          }}
        >
          hello
        </li>
      </ul>
    </div>
  )
}
