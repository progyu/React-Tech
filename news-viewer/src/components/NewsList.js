import React from 'react';
// import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error ] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=198704bb21044702b26ab96578b42619`,
    );
  }, [category]);


  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles &&
        articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};

export default NewsList;

// class NewsList extends Component {
//   state = {
//     articles: null,
//     loading: false,
//   };

//   fetchData = async () => {
//     const { category } = this.props;

//     this.setState({ loading: true });
//     try {
//       const query = category === 'all' ? '' : `&category=${category}`;
//       const response = await axios.get(
//         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=198704bb21044702b26ab96578b42619`,
//       );
//       this.setState({ articles: response.data.articles });
//     } catch (e) {
//       console.log(e);
//     }
//     this.setState({ loading: false });
//   };

//   componentDidMount() {
//     this.fetchData();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.category !== this.props.category) {
//       this.fetchData();
//     }
//   }

//   // 대기 중일 때
//   if(loading) {
//     return <NewsListBlock>대기중...</NewsListBlock>;
//   }

//   render() {
//     const { articles } = this.state;
//     return (
//       <NewsListBlock>
//         {articles &&
//           articles.map(article => (
//             <NewsItem key={article.url} article={article} />
//           ))}
//       </NewsListBlock>
//     );
//   }
// }

// export default NewsList;
