import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api';
import { Book, CartItem, Order } from '../types';

// 获取所有书籍
export const useBooks = () => useQuery<Book[]>({
  queryKey: ['books'],
  queryFn: () => api.get('/books').then(res => res.data)
});

// 获取书籍详情
export const useBookDetail = (id: string) => useQuery<Book>({
  queryKey: ['book', id],
  queryFn: () => api.get(`/books/${id}`).then(res => res.data),
  enabled: !!id
});

// 获取购物车
export const useCart = () => useQuery<CartItem[]>({
  queryKey: ['cart'],
  queryFn: () => api.get('/cart').then(res => res.data)
});

// 加入购物车 Mutation
export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (book: Book) => api.post('/cart', book),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
  });
};

// 删除购物车项目
export const useDeleteFromCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cartId: number) => api.delete(`/cart/${cartId}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
  });
};

// 提交订单
export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (order: Order) => api.post('/orders', order),
    onSuccess: () => {
      // 成功后清空购物车逻辑（模拟）
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    }
  });
};
