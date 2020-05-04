import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
            <h1>Ceci est la page de Blog</h1>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus risus ex, et scelerisque tortor maximus quis. Etiam euismod rutrum vulputate. Nulla sodales urna quis bibendum tincidunt. Phasellus luctus tellus suscipit, fringilla mi ut, luctus massa. Proin a tristique purus. Nunc eget aliquet leo. Aliquam pharetra, tortor ut hendrerit porta, justo eros tempus ante, at pretium diam risus non mauris. Etiam et luctus est. Cras id ornare erat. Fusce ante lorem, euismod ac dignissim ac, ornare sit amet leo. Vestibulum maximus dapibus pulvinar. Proin egestas aliquam augue, quis vulputate odio posuere nec. Mauris ornare lorem eget magna dapibus, eu rutrum leo ultricies. Mauris vel felis dictum, lacinia purus tincidunt, tristique nisi. 
            </p>
            </div>
        </Layout>
    )
}

export default blog
