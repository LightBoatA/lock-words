import React, { useCallback, useMemo, useState } from 'react';
import './index.less';
import { Menu, MenuProps } from 'antd';
import { CustomerServiceOutlined, BookOutlined } from '@ant-design/icons';
import { EPage } from './common';
import Home from '../Home';
const items: MenuProps['items'] = [
  {
    label: '首页',
    key: EPage.home,
    icon: <CustomerServiceOutlined />,
  },
  {
    label: '其他',
    key: EPage.score,
    icon: <BookOutlined />,
  }
];
interface IProps {

}
export const Index: React.FC<IProps> = props => {

  return useMemo(() => {
    return (
      <Home />
    );
  }, []);

};

export default Index;