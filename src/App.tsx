import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [ 
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa!', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare!' },
      { type: 'link', content: 'jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2024-08-28 08:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa!', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare!' },
      { type: 'link', content: 'jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2022-08-30 20:00:48'),
  },
];

// iteração = repetição
// iterar um array = percorrer o array e, pra cada posição do array, fazer alguma coisa

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}


