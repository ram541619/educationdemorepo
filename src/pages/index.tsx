import React from 'react';

import { GetStaticProps } from 'next';

//import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
//import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
//import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';
import LoginForm from '../components/auth/login-form';
import { IBlogGalleryProps } from '../blog/BlogGallery';
//import { Main } from 'next/document';

const Index = () => (
  // <Main
  //   meta={
  //     <Meta
  //       title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
  //       description={AppConfig.description}
  //     />
  //   }
  // >
    
  //   {/* <BlogGallery posts={props.posts} pagination={props.pagination} /> */}
  // </Main>
  <div className='flex items-center justify-center h-screen bg-light sm:bg-gray-100'>
    <div className="m-auto max-w-md w-full bg-white sm:shadow p-5 sm:p-8 rounded">
    <h3 className="text-2xl font-bold text-center">LOGIN</h3>
    <div className="mt-4">
    <LoginForm />
    </div>
    </div>
  </div>
  
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
