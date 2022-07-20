import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {  // asyncを付与
  const paths = await getAllPostIds()  // awaitで呼び出し
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {  // asyncを付与
  const postData = await getPostData(params.id)  // awaitで呼び出し
  return {
    props: {
      postData
    }
  }
}