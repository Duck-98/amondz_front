import React, { useCallback, useState, useEffect } from 'react';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import { IITEM } from '../../types/item';
import axios from 'axios';
import { getData } from '../../api/api';

function MainPage() {
  const [data, setData] = useState<IITEM[]>([]);

  const getDataList = useCallback(async () => {
    await getData().then((response: any) => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <div>
      <Button width={200}>dd</Button>
      {/* <Input
        name="todo"
        type="text"
        value={value}
        onChange={onChange}
        className="todo-input"
        placeholder="할일을 입력해주세요."
        width={300}
      /> */}
      <div>
        {data &&
          data.map(v => (
            <div>
              <span>{v.id}</span>
              <span>{v.brand}</span>
              <span>{v.category}</span>
              <span>{v.isToday}</span>
              <span>{v.price}</span>
              {/* <Image src={v.image} alt="img" autoSize={true} /> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default MainPage;
