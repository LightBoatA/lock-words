import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './index.less';
import TextArea from 'antd/es/input/TextArea';
import { encrypt } from '../../utils/encryption';
import { Button, Space, message } from 'antd';
import { KeyOutlined, LockOutlined } from '@ant-design/icons';

interface IProps {}
export const Home: React.FC<IProps> = props => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isShowInputText, setIsShowInputText] = useState<boolean>(false);
  const previousText = useRef<string>('');

  const encryptedText = useMemo(() => {
    return encrypt(inputValue);
  }, [inputValue]);

  const toggleShowInput = useCallback(() => {
    setIsShowInputText(prev => !prev);
  }, []);

  const copyText = useCallback(() => {
    navigator.clipboard.writeText(inputValue)
      .then(() => {
        message.success('内容复制成功！')
      })
      .catch(() => {
        message.error('复制失败！')
      })
  }, [inputValue]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.altKey && event.key === 'q') {
        toggleShowInput();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleShowInput]);

  return useMemo(() => {
    return (
      <div className="page-home">
        <div className="top-tools">
          {/* <Button>Try : Alt + Q</Button> */}
          <Space>
            <p>Type and try : </p>
            <p className="tip-key">Alt</p>
            <p>+</p>
            <p className="tip-key">Q</p>
            <Button onClick={toggleShowInput} className="ml10" shape="circle" type="primary" icon={isShowInputText ? <LockOutlined /> : <KeyOutlined />} />
          </Space>
          <Space>
            {/* <Button type="primary" onClick={copyText}>Copy</Button> */}
            <Button onClick={copyText}>Copy</Button>
            {/* <Button>Download</Button> */}
          </Space>
        </div>
        <div className="center-article">
          <p className={`show-article ${isShowInputText ? 'article-white' : 'article-black'}`}>{encryptedText}</p>
          <TextArea
            className={isShowInputText ? 'input article-black' : 'input article-white'}
            value={inputValue}
            onChange={e => {
              const val = e.target.value;
              previousText.current = val;
              setInputValue(val);
            }}
          />
        </div>
      </div>
    );
  }, [copyText, encryptedText, inputValue, isShowInputText, toggleShowInput]);
};

export default Home;
