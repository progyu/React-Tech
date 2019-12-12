import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

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
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수를 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=198704bb21044702b26ab96578b42619`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을 때
  // if (!articles) {
  //   return null;
  // }

  // articles 값이 유효할 때
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
