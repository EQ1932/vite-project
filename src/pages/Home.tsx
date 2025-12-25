import { List, Card, Button, Spin } from 'antd';
import { useBooks, useAddToCart } from '../hooks/useStoreApi';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { data: books, isLoading } = useBooks();
  const { mutate: addToCart } = useAddToCart();
  const navigate = useNavigate();

  if (isLoading) return <div className="flex justify-center p-20"><Spin size="large" /></div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">精选电子书</h1>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4 }}
        dataSource={books}
        renderItem={(book) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt={book.title} src={book.cover} className="h-64 object-cover" />}
              actions={[
                <Button onClick={() => navigate(`/book/${book.id}`)}>详情</Button>,
                <Button type="primary" onClick={() => addToCart(book)}>加入购物车</Button>
              ]}
            >
              <Card.Meta title={book.title} description={`￥${book.price}`} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
