import { Table, Button, Typography, message } from 'antd';
import { useCart, useDeleteFromCart } from '../hooks/useStoreApi';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { data: cartItems } = useCart();
  const { mutate: deleteItem } = useDeleteFromCart();
  const navigate = useNavigate();

  const total = cartItems?.reduce((sum, item) => sum + item.price, 0) || 0;

  const columns = [
    { title: '书名', dataIndex: 'title', key: 'title' },
    { title: '价格', dataIndex: 'price', key: 'price', render: (p: number) => `￥${p}` },
    { 
      title: '操作', 
      key: 'action', 
      render: (_: any, record: any) => (
        <Button danger onClick={() => deleteItem(record.id)}>删除</Button>
      ) 
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Typography.Title level={2}>我的购物车</Typography.Title>
      <Table dataSource={cartItems} columns={columns} rowKey="id" pagination={false} />
      <div className="mt-6 flex justify-between items-center bg-gray-50 p-4 rounded">
        <Typography.Text strong className="text-xl">总计: ￥{total}</Typography.Text>
        <Button 
          type="primary" 
          size="large" 
          disabled={!cartItems?.length}
          onClick={() => navigate('/checkout')}
        >
          去结算
        </Button>
      </div>
    </div>
  );
};
